# learning-docs

個人学習教材（`03_personal_products/workspace/projects/learning/`）を **教材ごとに独立した1サイト**として GitHub Pages で公開するためのリポジトリ。

母艦リポジトリは 311MB あり収益プロダクトも同居しているため公開しない。ここへは**必要なファイルだけをコピーして持ち込む**（allowlist 方式）。

## 現在の状態

**8教材を配信中。** 自前HTML 7件（群B）＋ VitePress 1件（群A: jakarta-migration）。

計画の正本は母艦の `workspace/projects/learning/DEPLOY_PLAN.md`、
配信方針は `DESKTOP_MATERIALS.md`。

## 教材の追加手順

**このリポジトリは CI でビルドしない。** ビルド済みの成果物を `dist/` にコミットして配信する。

### 群B（自前HTML・ビルド不要）

`scripts/sync.mjs` の `GROUP_B` に `{ slug, from }` を足して `node scripts/sync.mjs`。

### 群A（VitePress）

1. 母艦の教材側で `base: '/learning-docs/<slug>/'` を `config.mts` に設定する
   （**未設定だとサブパス配信でアセットが全滅する**）
2. 教材ディレクトリで `npm run docs:build`
3. `scripts/sync.mjs` の `GROUP_A` に `{ slug, from, src }` を足す
   - `from` … ビルド成果物（`.vitepress/dist`）
   - `src` … ソース（ビルドが古くないかの検査に使う）
4. `node scripts/sync.mjs --check` で検査 → 問題なければ `node scripts/sync.mjs`
5. `dist/index.html` にリンクを足す（章数は実測して書く）

`sync.mjs` は群A に対して次を実測で検査し、引っかかると**同期せず exit 1** で止まる。

- ビルド成果物が存在するか / `index.html` があるか
- `index.html` に `base` が焼き込まれているか（**これが無いと白紙のページが配信される**）
- **ビルドがソースより古くないか**（古いまま同期すると「直したのに直っていない」が起きる）

## 構成

```
learning-docs/
├── .github/workflows/deploy.yml   guard + Pages へのデプロイ（ビルドはしない）
├── scripts/sync.mjs               母艦から dist/ へ教材を同期する（allowlist）
└── dist/                          Pages が配信するルート
    ├── .nojekyll                  Jekyll を通さない（_ 始まりのパスを消させない）
    ├── index.html                 索引（手で管理する。教材を足したらリンクも足す）
    └── <教材名>/                  教材ごとに1サイト
```

## 配信

Pages のソースは **GitHub Actions**（branch 配信ではない）。`main` への push で `deploy.yml` が走る。

workflow には `guard` ジョブがあり、`dist/` に以下が混入していたらデプロイ前に落ちる。

- `Dockerfile` / `docker-compose.yml` / `*.py` / `*.sh`
- `vulnerable-commerce-lab` の `src/` `test/` `scripts/` `public/` `runtime/`
- `security/test6` の `labs/`（実物の攻撃環境）
- ゲーム系6件（`debugger-dive` / `merge-quest` / `packet-metro` / `riscv-puzzle` / `sql-dungeon` / `hack-dungeon`）

同期スクリプト側の allowlist を**唯一の防波堤にしない**ための二重化。

## ローカルでの確認

静的ファイルなのでビルド不要。ただし **`npx serve dist` では VitePress 教材の検証にならない。**
`base` が `/learning-docs/<slug>/` 前提で焼き込まれているため、`dist` を直接ルートに配信すると
アセットが 404 になる（本番と逆の結果が出る）。

配信構造ごと再現して確認する。

```bash
mkdir -p /tmp/probe/learning-docs && cp -r dist/* /tmp/probe/learning-docs/
npx serve -l 4173 /tmp/probe
# → http://localhost:4173/learning-docs/
```

**トップだけでなく最深の1ページまで開く**（過去に「ビルド緑・dist 正常なのに 404」を踏んでいる）。
