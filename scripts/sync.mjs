// 教材を learning リポジトリから dist/ へ同期する。
//
// 方針は allowlist。「何をコピーするか」だけを列挙し、書いていないものは絶対に持ち込まない。
// learning 本体には security/test6 の攻撃環境や vulnerable-commerce-lab の脆弱コードが
// 同居しているため、denylist（危険なものを除く方式）だと列挙漏れがそのまま公開事故になる。
//
// このスクリプトは唯一の防波堤ではない。CI の guard ジョブが dist/ を再検査する。
// 二重化しているのは、ここを通り抜けた混入を最後に止めるため。
//
// 使い方:
//   node scripts/sync.mjs            # dist/ へ同期
//   node scripts/sync.mjs --check    # コピーせず、コピー元の健全性だけ検査

import { cp, mkdir, rm, readdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, resolve, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = fileURLToPath(new URL('.', import.meta.url))
const REPO = resolve(HERE, '..')
// learning リポジトリは learning-docs の親。learning-docs は learning の .gitignore で
// 除外されており、二重管理しない関係にある。
const LEARNING = resolve(REPO, '..')
const DIST = join(REPO, 'dist')

// 配信物ではないので dist/ から消してはいけないもの。
// index.html は教材への索引で、教材と違ってこのリポジトリが手で持っている。
// （_probe/ は配信経路の確認用だった。URL が確定したので Phase 1 で削除済み）
const DIST_KEEP = new Set(['.nojekyll', 'index.html'])

// ---------------------------------------------------------------------------
// 群B: 完成済みの自前HTMLサイト。ビルド不要・base 調整不要。
// CSS/リンクが全件相対パスであることを実測済みなので、コピーするだけで
// サブパス配下（/learning-docs/<slug>/）で動く。
// ---------------------------------------------------------------------------
const GROUP_B = [
  { slug: 'rdb', from: 'docs/RDB/docs' },
  { slug: 'redis', from: 'docs/Redis/docs' },
  { slug: 'leetcode', from: 'docs/leetcode/docs' },
  { slug: 'twitter', from: 'docs/twitter/docs' },
  { slug: 'vscode', from: 'docs/vscode/docs' },
  { slug: 'stock-dashboard', from: 'docs/stock-dashboard/docs' },
  // youtube は submodule。実体が無いと空ディレクトリを配信してしまうので下で検査する。
  { slug: 'youtube', from: 'youtube/docs', submodule: true },
]

// ---------------------------------------------------------------------------
// 群A: VitePress 教材。ビルド成果物（.vitepress/dist）をそのままコピーする。
//
// ビルドは母艦側で済ませておく前提（このスクリプトはビルドしない）。
// CI もビルドしないので、dist が古いまま同期すると古い内容が公開される。
// それを検出するため、下の inspectVitePress で「ソースの最終更新 > ビルドの最終更新」を検査する。
//
// base: '/learning-docs/<slug>/' が config.mts に設定されていることが前提。
// 未設定だとアセットのパスが / 起点になり、サブパス配信で全滅する。
// これも実測で検査する（index.html に base が焼き込まれているか）。
// ---------------------------------------------------------------------------
const GROUP_A = [
  {
    slug: 'jakarta-migration',
    from: 'docs/jakarta-migration/docs/.vitepress/dist',
    src: 'docs/jakarta-migration/docs',
  },
  // jakarta-migration の「手前の一段」。読む順は java-web-primer → jakarta-migration。
  {
    slug: 'java-web-primer',
    from: 'docs/java-web-primer/docs/.vitepress/dist',
    src: 'docs/java-web-primer/docs',
  },
]

// 教材ディレクトリに同居している作業用ファイル。読者向けの成果物ではないので配信しない。
// 「_」始まりの Markdown（引き継ぎ指示・進捗メモ）が実際に5件ある。
//
// 注意: この除外は群B（自前HTML）専用。群A の VitePress 成果物には .md を含めない
// （ビルド済みなので中身は .html）が、ローカル検索インデックス等で「_」始まりの
// アセットが出るため、群A では除外をかけずに丸ごとコピーする。
const isPublishable = (src) => {
  const name = src.split(sep).pop()
  if (name.startsWith('_')) return false
  if (name.endsWith('.md')) return false
  return true
}

const log = (...a) => console.log(...a)
const fail = (msg) => {
  console.error(`ERROR: ${msg}`)
  process.exitCode = 1
}

// コピー元が「本当に配信できる中身か」を確認する。
// submodule が未初期化だと空ディレクトリになり、気づかないまま空サイトを配信してしまう。
async function inspect(entry) {
  const abs = join(LEARNING, entry.from)
  if (!existsSync(abs)) {
    fail(`${entry.slug}: コピー元が存在しない (${entry.from})`)
    return null
  }
  const files = await readdir(abs)
  const html = files.filter((f) => f.endsWith('.html'))
  const css = files.filter((f) => f.endsWith('.css'))

  if (html.length === 0) {
    const hint = entry.submodule
      ? ' — submodule が未初期化の可能性がある。git submodule update --init --recursive を実行する'
      : ''
    fail(`${entry.slug}: HTML が1本もない (${entry.from})${hint}`)
    return null
  }
  if (!files.includes('index.html')) {
    fail(`${entry.slug}: index.html が無い。トップを開けないサイトになる`)
    return null
  }
  return { html: html.length, css: css.length, skipped: files.filter((f) => !isPublishable(f)) }
}

// VitePress 教材の成果物が「配信できる状態か」を確認する。
//
// 群B と違い、ここでの失敗は目で見て気づけない種類のものが多い:
//   - ビルドし忘れ → 古い内容が公開される（HTML はあるので存在検査は通ってしまう）
//   - base 未設定 → アセットが 404。トップは白紙になるが dist の中身は正常に見える
// どちらもビルドは緑のまま通るので、ここで実測して弾く。
async function inspectVitePress(entry) {
  const abs = join(LEARNING, entry.from)
  if (!existsSync(abs)) {
    fail(`${entry.slug}: ビルド成果物が無い (${entry.from}) — npm run docs:build を実行する`)
    return null
  }

  const html = []
  const walk = async (dir) => {
    for (const name of await readdir(dir, { withFileTypes: true })) {
      const p = join(dir, name.name)
      if (name.isDirectory()) await walk(p)
      else if (name.name.endsWith('.html')) html.push(p)
    }
  }
  await walk(abs)

  if (html.length === 0) {
    fail(`${entry.slug}: HTML が1本もない (${entry.from})`)
    return null
  }
  if (!existsSync(join(abs, 'index.html'))) {
    fail(`${entry.slug}: index.html が無い。トップを開けないサイトになる`)
    return null
  }

  // base が焼き込まれているか。サブパス配信ではこれが無いとアセットが全滅する。
  const expected = `/learning-docs/${entry.slug}/`
  const { readFile } = await import('node:fs/promises')
  const top = await readFile(join(abs, 'index.html'), 'utf8')
  if (!top.includes(`"${expected}assets/`)) {
    fail(
      `${entry.slug}: index.html に base (${expected}) が焼き込まれていない。` +
        ` config.mts の base を確認し、再ビルドする`
    )
    return null
  }

  // ビルドがソースより古くないか。古いまま同期すると、直したはずの内容が公開されない。
  const newest = async (dir, ignore) => {
    let t = 0
    for (const name of await readdir(dir, { withFileTypes: true })) {
      if (ignore.includes(name.name)) continue
      const p = join(dir, name.name)
      t = Math.max(t, name.isDirectory() ? await newest(p, ignore) : (await stat(p)).mtimeMs)
    }
    return t
  }
  const srcTime = await newest(join(LEARNING, entry.src), ['.vitepress', 'node_modules'])
  const distTime = (await stat(join(abs, 'index.html'))).mtimeMs
  const stale = srcTime > distTime

  return { html: html.length, stale, srcTime, distTime }
}

async function main() {
  const checkOnly = process.argv.includes('--check')

  log(`learning: ${LEARNING}`)
  log(`dist:     ${DIST}\n`)

  const plan = []
  for (const entry of GROUP_B) {
    const info = await inspect(entry)
    if (info) plan.push({ entry, info, group: 'B' })
  }
  for (const entry of GROUP_A) {
    const info = await inspectVitePress(entry)
    if (info) plan.push({ entry, info, group: 'A' })
  }

  if (process.exitCode === 1) {
    log('\nコピー元に問題があるため中断した。dist/ は変更していない。')
    return
  }

  for (const { entry, info, group } of plan) {
    if (group === 'B') {
      const skipNote = info.skipped.length ? `  除外:${info.skipped.join(',')}` : ''
      log(
        `  ${entry.slug.padEnd(18)} html=${String(info.html).padStart(2)} css=${info.css}${skipNote}`
      )
    } else {
      const staleNote = info.stale
        ? '  ⚠ ソースがビルドより新しい（再ビルドが要る）'
        : '  base OK'
      log(`  ${entry.slug.padEnd(18)} html=${String(info.html).padStart(2)}${staleNote}`)
    }
  }

  // 古いビルドの公開は「直したのに直っていない」という最も気づきにくい事故になる。
  // --check では警告に留め、実際の同期は止める。
  const staleOnes = plan.filter((p) => p.group === 'A' && p.info.stale)
  if (staleOnes.length && !checkOnly) {
    for (const { entry } of staleOnes) {
      fail(`${entry.slug}: ビルドがソースより古い。npm run docs:build を実行してから同期する`)
    }
    log('\n古いビルドを公開しかけたため中断した。dist/ は変更していない。')
    return
  }

  if (checkOnly) {
    log('\n--check のためコピーはしていない。')
    return
  }

  // 各教材のディレクトリは毎回作り直す。前回の同期で消えた教材のファイルが
  // 残り続けると、実物と配信物がずれていく。
  await mkdir(DIST, { recursive: true })
  for (const name of await readdir(DIST)) {
    if (!DIST_KEEP.has(name)) await rm(join(DIST, name), { recursive: true, force: true })
  }

  log('')
  for (const { entry, group } of plan) {
    const dest = join(DIST, entry.slug)
    const from = join(LEARNING, entry.from)

    // 群A はビルド成果物なので中身を選別しない。作業用ファイルが混ざる余地がなく、
    // ローカル検索インデックス等の必要なアセットを取りこぼす方が危険。
    const opts =
      group === 'A'
        ? { recursive: true }
        : {
            recursive: true,
            filter: (src) => {
              const rel = relative(from, src)
              return rel === '' ? true : isPublishable(src)
            },
          }

    await cp(from, dest, opts)
    const copied = (await readdir(dest)).length
    log(`  ${entry.slug.padEnd(18)} → dist/${entry.slug}/ (${copied} entries)`)
  }

  log(`\n${plan.length} 教材を同期した。`)
}

await main()
