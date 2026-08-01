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

// 教材ディレクトリに同居している作業用ファイル。読者向けの成果物ではないので配信しない。
// 「_」始まりの Markdown（引き継ぎ指示・進捗メモ）が実際に5件ある。
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

async function main() {
  const checkOnly = process.argv.includes('--check')

  log(`learning: ${LEARNING}`)
  log(`dist:     ${DIST}\n`)

  const plan = []
  for (const entry of GROUP_B) {
    const info = await inspect(entry)
    if (info) plan.push({ entry, info })
  }

  if (process.exitCode === 1) {
    log('\nコピー元に問題があるため中断した。dist/ は変更していない。')
    return
  }

  for (const { entry, info } of plan) {
    const skipNote = info.skipped.length ? `  除外:${info.skipped.join(',')}` : ''
    log(`  ${entry.slug.padEnd(16)} html=${String(info.html).padStart(2)} css=${info.css}${skipNote}`)
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
  for (const { entry, info } of plan) {
    const dest = join(DIST, entry.slug)
    await cp(join(LEARNING, entry.from), dest, {
      recursive: true,
      filter: (src) => {
        const rel = relative(join(LEARNING, entry.from), src)
        return rel === '' ? true : isPublishable(src)
      },
    })
    const copied = (await readdir(dest)).length
    log(`  ${entry.slug.padEnd(16)} → dist/${entry.slug}/ (${copied} files)`)
  }

  log(`\n${plan.length} 教材を同期した。`)
}

await main()
