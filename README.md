# learning-docs

個人学習教材（`03_personal_products/workspace/projects/learning/`）を **教材ごとに独立した1サイト**として GitHub Pages で公開するためのリポジトリ。

母艦リポジトリは 311MB あり収益プロダクトも同居しているため公開しない。ここへは**必要なファイルだけをコピーして持ち込む**（allowlist 方式）。

## 現在の状態

**Phase 0（土台とURL確定）進行中。** まだ教材は1件も入っていない。`dist/` にあるのは配信経路確認用のプレースホルダのみ。

計画の正本は母艦の `workspace/projects/learning/DEPLOY_PLAN.md`。

## 構成

```
learning-docs/
├── .github/workflows/deploy.yml   ビルド + Pages へのデプロイ
└── dist/                          Pages が配信するルート
    ├── .nojekyll                  Jekyll を通さない（_ 始まりのパスを消させない）
    ├── index.html                 索引（現在はプレースホルダ）
    └── _probe/                    サブパス配下の相対パス解決の確認用
```

教材が入ると `dist/<教材名>/` が並ぶ。

## 配信

Pages のソースは **GitHub Actions**（branch 配信ではない）。`main` への push で `deploy.yml` が走る。

workflow には `guard` ジョブがあり、`dist/` に以下が混入していたらデプロイ前に落ちる。

- `Dockerfile` / `docker-compose.yml` / `*.py` / `*.sh`
- `vulnerable-commerce-lab` の `src/` `test/` `scripts/` `public/` `runtime/`
- `security/test6` の `labs/`（実物の攻撃環境）
- ゲーム系6件（`debugger-dive` / `merge-quest` / `packet-metro` / `riscv-puzzle` / `sql-dungeon` / `hack-dungeon`）

同期スクリプト側の allowlist を**唯一の防波堤にしない**ための二重化。

## ローカルでの確認

静的ファイルなのでビルド不要。

```bash
npx serve dist
```
