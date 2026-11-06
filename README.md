# Infotop 購入者ページ リニューアル（コーディング）

デザインカンプから作成した静的HTML/CSS/JSです。SPファーストのレスポンシブで、全31ページあります。

> デザイン確認用のモックです。インフォトップの公式ページではありません。商品名や口座情報などはダミーを含みます。

閲覧用：https://komatsunorio-png.github.io/infotop-buyer-renewal/

## 確認方法

`dist/` をローカルサーバーで開きます（`dist/index.html` がドメインTOP、`dist/mypage.html` がマイページTOP）。

```bash
cd dist
python -m http.server 8801
```

## ビルド

依存パッケージはありません。`src/` を編集して次を実行すると `dist/` が作り直されます。

```bash
node build.js
```

## 構成

- `src/layout.js`：ヘッダー、ナビ、フッター、ドロワー、ログインボックス
- `src/pages.js`：ログイン前の画面、マイページTOP、お知らせ、ログアウト、会員退会
- `src/pages-my.js`：注文履歴、分割決済、月額課金、メッセージ、会員情報、カード情報変更
- `src/css/style.css`：スタイル（PCは `min-width: 768px`）
- `src/js/main.js`：スライダー、詳細検索、ドロワーなどの動き
- `src/img/`：画像

進捗と残りの作業は [PROGRESS.md](PROGRESS.md) を参照してください。

## 閲覧用ページの更新

GitHub Pages は `gh-pages` ブランチを配信しています。`dist/` を更新してコミットしたあと、次を実行します。

```bash
git push origin $(git subtree split --prefix dist):refs/heads/gh-pages --force
```
