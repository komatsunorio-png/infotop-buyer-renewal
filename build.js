// usage: node build.js  → dist/ に出力（依存パッケージなし）
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const { PAGES, doc } = require('./src/pages');
// dist 自体は残して中身だけ消す（ローカルサーバーが dist を開いていても失敗しないように）
fs.mkdirSync(DIST, { recursive: true });
for (const f of fs.readdirSync(DIST)) fs.rmSync(path.join(DIST, f), { recursive: true, force: true });
for (const d of ['assets/css', 'assets/js', 'assets/img']) fs.mkdirSync(path.join(DIST, d), { recursive: true });
fs.copyFileSync(path.join(ROOT, 'src/css/style.css'), path.join(DIST, 'assets/css/style.css'));
fs.copyFileSync(path.join(ROOT, 'src/js/main.js'), path.join(DIST, 'assets/js/main.js'));
for (const f of fs.readdirSync(path.join(ROOT, 'src/img'))) fs.copyFileSync(path.join(ROOT, 'src/img', f), path.join(DIST, 'assets/img', f));
for (const [file, title, body, member, sticky] of PAGES) fs.writeFileSync(path.join(DIST, file), doc({ title, body, member, sticky }));
fs.writeFileSync(path.join(DIST, '.nojekyll'), '');
console.log('built', PAGES.length, 'pages');
