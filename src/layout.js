// 共通パーツ（ヘッダー・ナビ・フッター・ドロワー・ログインボックス）
const IC = {
  home: 'M3 11l9-7 9 7 M5.5 9.5V20h13V9.5 M10 20v-6h4v6', bell: 'M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8 M10 20a2 2 0 0 0 4 0',
  doc: 'M6 3h12v18H6z M9 8h6 M9 12h6 M9 16h4', card: 'M3 6h18v12H3z M3 10h18 M7 15h4', cal: 'M4 5h16v15H4z M4 9h16 M8 3v4 M16 3v4',
  mail: 'M3 6h18v12H3z M3 7l9 6 9-6', user: 'M12 4a4 4 0 1 0 0 8a4 4 0 1 0 0-8 M4 21c1-4 4-6 8-6s7 2 8 6',
  help: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18 M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7 M12 17h.01', out: 'M10 4H5v16h5 M15 8l4 4-4 4 M9 12h10',
  tag: 'M3 12V4h8l10 10-8 8z M7.5 7.5h.01 M11 13l2-2 M13 15l2-2', search: 'M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14 M20 20l-4-4', crown: 'M3 18L5 7l4.5 4L12 4l2.5 7L19 7l2 11z',
  chat: 'M4 5h16v12H8l-4 3z M8 10h8 M8 13h5', alert: 'M12 3l10 18H2z M12 10v5 M12 18h.01', dl: 'M12 3v12 M7 10l5 5 5-5 M4 19h16', star: 'M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.5 6.7 19.4l1.2-6L3.4 9.3l6-.7z',
  book: 'M3 5h6a3 3 0 0 1 3 3v12a2.5 2.5 0 0 0-2.5-2.5H3z M21 5h-6a3 3 0 0 0-3 3v12a2.5 2.5 0 0 1 2.5-2.5H21z', school: 'M2 9l10-5 10 5-10 5z M6 11v5c2 2 10 2 12 0v-5', lp: 'M4 4h16v16H4z M4 9h16 M8 13h8 M8 16h5', ad: 'M3 10v4h4l6 4V6L7 10z M17 9a4 4 0 0 1 0 6',
  menu: 'M4 6h16 M4 12h16 M4 18h16', close: 'M6 6l12 12 M18 6L6 18', check: 'M5 12l5 5 9-10', up: 'M6 15l6-6 6 6', down: 'M6 9l6 6 6-6', left: 'M15 6l-6 6 6 6', right: 'M9 6l6 6-6 6'
};
const i = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${IC[name]}"/></svg>`;
const LOGO = 'assets/img/logo.png';

const CATS = [
  ['ビジネス・稼ぐ', 'ビジネス<br>稼ぐ', '#C2410C', '#FFEDE3', 'M3 8h18v12H3z M8 8V5h8v3 M3 13h18 M12 13v2', ['情報起業', 'アフィリエイト', 'せどり・転売', 'ネットビジネス', '独立・起業・SOHO', 'その他ビジネス']],
  ['投資・仮想通貨', '投資<br>仮想通貨', '#1D5FB4', '#E5EEFA', 'M4 4v16h16 M7 15l4-4 3 3 6-7 M16 7h4v4', ['FX', '仮想通貨', 'バイナリーオプション', '株式(IPO・現物・信用)', '先物取引その他', 'ファンド・不動産・その他']],
  ['インターネット・アクセスアップ', 'インターネット<br>アクセスアップ', '#0B7A8C', '#E1F4F6', 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18 M3 12h18 M12 3c3 3.5 3 14.5 0 18 M12 3c-3 3.5-3 14.5 0 18', ['SEM(SEO・リスティング)', 'メール', 'ホームページ・ブログ・ライティング', 'SNS', 'ツール・その他']],
  ['生活', '生活', '#2B8A3E', '#E5F4E7', 'M3 11l9-7 9 7 M5.5 9.5V20h13V9.5 M10 20v-6h4v6', ['生活の悩み', 'ペット', 'こども', 'その他(生活)']],
  ['美容・健康', '美容・健康', '#C2255C', '#FCE7EF', 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z M9 11h6 M12 8v6', ['ダイエット', '美容法', '医療', '体の悩み・健康', 'その他(美容・健康)']],
  ['学習・自己啓発', '学習<br>自己啓発', '#5B3FC4', '#EEE9FB', IC.book, ['語学・留学', '資格・技術', '自己啓発', 'その他(学習・自己啓発)']],
  ['エンターテイメント', 'エンター<br>テイメント', '#B86200', '#FFF1DC', 'M9 18V6l11-2v12 M9 18a3 3 0 1 1-6 0a3 3 0 1 1 6 0 M20 16a3 3 0 1 1-6 0a3 3 0 1 1 6 0', ['スポーツ', '趣味・音楽', '占い', 'その他(エンターテイメント)']],
  ['コミュニケーション・恋愛', 'コミュニ<br>ケーション<br>恋愛', '#B5235A', '#FBE6EE', 'M4 5h16v11H10l-5 4v-4H4z M12 13.5s-3-1.8-3-3.7a1.6 1.6 0 0 1 3-.8a1.6 1.6 0 0 1 3 .8c0 1.9-3 3.7-3 3.7z', ['コミュニケーション・会話術', '恋愛', '結婚', 'その他(コミュニケーション・恋愛)']]
];
const RANK_CAT = ['売上ランキング', '', '#8A6A00', '#FFF3CC', IC.crown, []];
// 0円広場は外す可能性があるため、ここから1行消すだけでナビから外せる（残りは均等に詰まる）
const ZERO_CAT = ['0円広場', '0円広場', '#CE1C00', '#FDE8E4', IC.tag, []];
const catIcon = c => `<span class="cat-icon" style="--c-fg:${c[2]};--c-bg:${c[3]}"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${c[4]}"/></svg></span>`;
const KW = ['FX', 'アフィリエイト', 'WordPressテーマ', 'リライト', 'Amazon', 'せどり', '競馬'];

// 検索条件（ヘッダーの詳細検索と、商品一覧の絞り込みで共通。項目は現行どおり）
const PAY_FULL = ['クレカ一括', 'クレカ分割', 'リボ払い', '銀行振込一括', '銀行振込分割', 'コンビニ決済', '代引き', 'BitCash'];
const catOptions = () => '<option>選択してください</option><option>【ダウンロード】</option><option>【セミナー】</option>' + CATS.map(c => `<option>【${c[0]}】</option>${c[5].map((x, n) => `<option>${n === c[5].length - 1 ? '└' : '├'} ${x}</option>`).join('')}`).join('');
function searchFields(pfx, withBasic) {
  const basic = withBasic ? `<label class="sf-row"><span>カテゴリー：</span><select class="input">${catOptions()}</select></label><label class="sf-row"><span>キーワード：</span><input class="input" type="text"></label>` : '';
  return `<div class="sf">${basic}<label class="sf-row"><span>販売者名：</span><input class="input" type="text"></label><div class="sf-row"><span>価格帯：</span><div class="sf-range"><input class="input" type="text" inputmode="numeric" aria-label="価格の下限">～<input class="input" type="text" inputmode="numeric" aria-label="価格の上限">円</div></div><label class="sf-row"><span>商品区分：</span><select class="input"><option>全て</option><option>DL：ダウンロード版</option><option>MS：月額課金サービス</option><option>ES：セミナー/イベント</option><option>EC：物販</option></select></label><div class="sf-row sf-row--pay"><span>支払い方法：</span><div class="sf-pay">${PAY_FULL.map(p => `<label class="check"><input type="checkbox">${p}</label>`).join('')}</div></div></div>`;
}
function catNav(member) {
  const href = c => c[0] === '売上ランキング' ? 'ranking-member.html' : c[0] === '0円広場' ? '#' : 'list.html';
  const list = member ? [...CATS, RANK_CAT, ZERO_CAT] : [...CATS, ZERO_CAT];
  return `<nav class="cat-nav pc-only" aria-label="カテゴリ"><ul class="cat-nav__list wrap">${list.map(c => `<li class="cat-nav__item" style="--c-fg:${c[2]};--c-bg:${c[3]}"><a class="cat-nav__link" href="${href(c)}">${catIcon(c)}<span>${c[0]}</span></a>${c[5].length ? `<ul class="cat-nav__sub">${c[5].map(s => `<li><a href="list.html">${s}<span class="chev">›</span></a></li>`).join('')}</ul>` : ''}</li>`).join('')}</ul></nav>`;
}
const TABS = [['TOP', 'home', 'mypage.html'], ['お知らせ', 'bell', 'news.html'], ['注文履歴', 'doc', 'order.html'], ['分割決済', 'card', 'split.html'], ['月額課金サービス', 'cal', 'monthly.html'], ['メッセージ', 'mail', 'message.html'], ['会員情報', 'user', 'member.html'], ['ヘルプ', 'help', '#'], ['ログアウト', 'out', 'logout.html']];
const myTabs = active => `<nav class="my-tabs pc-only" aria-label="マイページ"><ul class="wrap">${TABS.map(([t, ic, h]) => `<li><a href="${h}" ${t === active ? 'aria-current="page"' : ''}>${i(ic)}${t}</a></li>`).join('')}</ul></nav>`;
const SP_MENU = [['トップ', 'home', 'mypage.html'], ['注文履歴', 'doc', 'order.html'], ['月額課金', 'cal', 'monthly.html'], ['分割決済', 'card', 'split.html'], ['メッセージ', 'mail', 'message.html'], ['会員情報', 'user', 'member.html'], ['商品検索', 'search', 'list.html'], ['売れ筋', 'crown', 'ranking-member.html'], ['0円広場', 'tag', '#'], ['ガイド', 'help', '#']];
const spMenu = active => `<nav class="sp-menu sp-only" aria-label="マイページメニュー"><div class="sp-menu__grid">${SP_MENU.map(([t, ic, h]) => `<a href="${h}" ${t === active ? 'aria-current="page"' : ''}>${i(ic)}${t}</a>`).join('')}</div><div class="sp-menu__links"><a href="news.html">${i('bell')}お知らせ一覧</a><a href="#">${i('chat')}お問い合わせ先</a></div></nav>`;

function header({ member, activeTab, spActive, tabs = member, cats = true, spSearch = false, spGuest = false }) {
  const pcTools = member ? '' : `<div class="header-tools pc-only pc-flex"><a class="btn btn--primary header-tools__login" href="login.html" data-loginbox>${i('user')}購入者ログイン</a><div class="header-tools__biz"><a class="btn btn--afi" href="#">アフィリエイターはこちら</a><a class="btn btn--seller" href="#">販売者はこちら</a></div></div>`;
  const spAct = member && !spGuest
    ? `<a class="pill pill--logout" href="logout.html">ログアウト</a>`
    : `<a class="pill pill--login" href="login.html">${i('user')}ログイン</a>`;
  return `<header class="site-header">
  <div class="header-main">
    <a class="logo" href="${member ? 'mypage.html' : 'index.html'}"><img src="${LOGO}" alt="infotop" width="154" height="48"></a>
    <div class="header-search pc-only pc-flex">
      <form class="search-wrap" action="list.html"><div class="search"><label class="sr-only" for="q">キーワード</label><input id="q" name="q" type="text" placeholder="キーワードから探す"><button class="search__detail" type="button" data-detail-toggle aria-expanded="false" aria-controls="search-detail">詳細検索<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${IC.down}"/></svg></button><button class="search__go" type="submit" aria-label="検索">${i('search')}</button></div><div id="search-detail" class="search-panel" hidden>${searchFields('hd', true)}<div class="search-panel__foot"><button class="btn btn--primary" type="submit">この条件で検索</button><button class="search-clear" type="reset">条件のクリア</button></div></div></form>
      <div class="keywords"><span>注目キーワード</span>${KW.map(k => `<a href="list.html">${k}</a>`).join('')}</div>
    </div>
    ${pcTools}
    <div class="header-actions sp-only">${spAct}<button class="burger" type="button" data-open-drawer aria-haspopup="dialog">${i('menu')}メニュー</button></div>
  </div>
  ${spSearch ? `<div class="sp-search sp-only"><form class="search" action="list.html"><label class="sr-only" for="spq">キーワード</label><input id="spq" name="q" type="search" placeholder="キーワードから探す"><button class="search__go" type="submit" aria-label="検索">${i('search')}</button></form></div>` : ''}
  ${cats ? catNav(member) : ''}
  ${tabs ? myTabs(activeTab) : ''}
</header>
${member && !spGuest ? spMenu(spActive) : ''}`;
}

const FB = '<span class="foot-ic foot-ic--fb">f</span>', XI = '<span class="foot-ic foot-ic--x">X</span>';
const groups = `<div class="foot-groups">${[['SNS', [['フェイスブック', FB], ['X', XI]]], ['情報', [['カレッジ', `<span class="foot-ic">${i('school')}</span>`]]], ['各種サービス', [['LP制作', `<span class="foot-ic">${i('lp')}</span>`]]], ['広告', [['広告掲載', `<span class="foot-ic">${i('ad')}</span>`]]]].map(([h, ls]) => `<div class="foot-group"><span class="foot-group__h">${h}</span><div class="foot-group__links">${ls.map(([t, ic]) => `<a href="#">${ic}${t}</a>`).join('')}</div></div>`).join('')}</div>`;
const LINKS = ['プライバシーポリシー', 'ご利用規約', 'ガイドライン', '会社概要', 'ヘルプ', '特定商取引法に関する表記'];
const SP_G_LINKS = ['プライバシーポリシー', 'ご利用規約', 'ガイドライン', '会社概要', '特定商取引法に関する表記'];
const FCOLS = [...CATS.map(c => [c[0], c[5]]), ['0円広場', []], ['各種サービス', ['LP制作', '広告掲載お問い合わせ']], ['コンテンツ', ['インフォトップカレッジ', 'インフォトップコラム', 'インフォトップのオススメ']], ['ログインページ', ['アフィリエイターログイン', '販売者ログイン']]];

// footer: 'portal'（PC大フッター）/ 'member'（PC簡易）。SPは member ならPC同等の情報、guest は規約リンクのみ
function footer({ pc = 'member', sp = 'member' }) {
  const toTop = `<a class="to-top sp-only" href="#top">${i('up')}ページトップへ</a>`;
  const spPart = sp === 'member'
    ? `<div class="sp-only"><div class="foot-guide"><a href="#">ご利用マニュアル</a><a href="#">FAQ</a></div>${groups}<nav class="foot-links foot-links--2col" aria-label="規約">${LINKS.map(t => `<a href="#">${t}<span class="chev">›</span></a>`).join('')}</nav></div>`
    : `<nav class="foot-links sp-only" aria-label="規約">${SP_G_LINKS.map(t => `<a href="#">${t}<span class="chev">›</span></a>`).join('')}</nav>`;
  const pcPart = pc === 'portal'
    ? `<div class="pc-only"><div class="portal-foot wrap">${FCOLS.map(([h, a]) => `<div><strong>${h}</strong>${a.map(t => `<a href="#">${t}</a>`).join('')}</div>`).join('')}</div>
      <div class="portal-bottom"><nav aria-label="規約">${[...LINKS, '購入後のお問い合わせはこちら'].map(t => `<a href="#">${t}</a>`).join('')}</nav><div class="portal-bottom__logos"><img src="${LOGO}" alt="infotop" height="40" style="height:40px;width:auto"><img src="assets/img/pmark.png" alt="プライバシーマーク認定企業" style="height:72px;width:auto"><img src="assets/img/pcidss.png" alt="PCI DSS認定企業" style="height:72px;width:auto"><a href="#" aria-label="Facebook">${FB}</a><a href="#" aria-label="X">${XI}</a><span class="gmo">GMOグローバルサイン<br>シール 130×66</span></div><small class="copyright" style="padding:0">© 2006 infotop</small></div></div>`
    : `<div class="pc-only"><div class="foot-pc wrap"><nav class="foot-pc__links" aria-label="規約">${LINKS.map(t => `<a href="#">${t}</a>`).join('')}</nav>${groups}</div></div>`;
  const copy = pc === 'portal' ? `<small class="copyright sp-only">© 2006 infotop</small>` : `<small class="copyright">© 2006 infotop</small>`;
  return `<footer class="site-footer">${toTop}${spPart}${pcPart}${copy}</footer>`;
}

function drawer(member) {
  const head = `<div class="drawer__head">メニュー<button class="icon-btn" type="button" data-close aria-label="閉じる">${i('close')}</button></div>`;
  if (member) {
    const nav = [['商品検索', 'search', 'list.html'], ['注文履歴', 'doc', 'order.html'], ['売れ筋', 'crown', 'ranking-member.html'], ['0円広場', 'tag', '#'], ['ガイド（ご利用マニュアル・FAQ）', 'book', '#']];
    return `<div id="drawer" class="drawer" role="dialog" aria-label="メニュー" aria-modal="true"><div class="drawer__panel">${head}<div style="padding:16px"><a class="btn btn--block" href="logout.html">${i('out')}ログアウト</a></div><div class="drawer__label">ナビゲーション</div><ul class="drawer__rows">${nav.map(([t, ic, h]) => `<li><a class="row" href="${h}"><span class="cat-icon" style="--c-fg:#CE1C00;--c-bg:#FDE8E4">${i(ic)}</span>${t}<span class="chev">›</span></a></li>`).join('')}</ul></div></div>`;
  }
  const nav = [['特集', 'star', '#'], ['ランキング', 'crown', 'ranking.html'], ['0円広場', 'tag', '#'], ['ガイド', 'help', '#']];
  const cats = CATS.map((c, n) => `<li><button class="acc-btn" type="button" aria-expanded="false" aria-controls="dc${n}">${catIcon(c)}${c[0]}<span class="chev">${i('down')}</span></button><ul id="dc${n}" class="acc-panel" hidden>${c[5].map(s => `<li><a href="list.html">${s}<span class="chev">›</span></a></li>`).join('')}</ul></li>`).join('');
  return `<div id="drawer" class="drawer" role="dialog" aria-label="メニュー" aria-modal="true"><div class="drawer__panel">${head}<div style="padding:16px"><a class="btn btn--primary btn--block" href="login.html" style="min-height:50px">${i('user')}購入者ログイン</a></div><div class="drawer__label">ナビゲーション</div><ul class="drawer__nav">${nav.map(([t, ic, h]) => `<li><a href="${h}">${i(ic)}${t}</a></li>`).join('')}</ul><div class="drawer__label" style="padding-top:20px">カテゴリー</div><ul class="drawer__rows">${cats}<li><a class="row" href="#">${catIcon(ZERO_CAT)}0円広場<span class="chev">›</span></a></li></ul><div class="drawer__biz"><a class="btn btn--afi" href="#">アフィリエイターはこちら</a><a class="btn btn--seller" href="#">販売者はこちら</a></div><div class="drawer__sns"><a href="#" aria-label="Facebook"><span class="foot-ic foot-ic--fb">f</span></a><a href="#" aria-label="X"><span class="foot-ic foot-ic--x">X</span></a></div></div></div>`;
}
const loginbox = `<div id="loginbox" class="loginbox" role="dialog" aria-label="購入者ログイン" aria-modal="true"><div class="loginbox__panel"><button class="icon-btn" type="button" data-close aria-label="閉じる" style="position:absolute;top:6px;right:6px">${i('close')}</button><form action="mypage.html" data-login novalidate><p class="form-error" role="alert" hidden>メールアドレスまたはパスワードが正しくありません。<br>入力内容をご確認のうえ、もう一度お試しください。</p><p style="font-size:13px;color:var(--ink-2)">会員様はメールアドレス・パスワードを入力しログインしてください。</p><label class="field">メールアドレス<input class="input" type="email" autocomplete="username"></label><label class="check"><input type="checkbox">メールアドレスを保存する</label><label class="field">パスワード<input class="input" type="password" autocomplete="current-password"></label><label class="check"><input type="checkbox">パスワードを表示する</label><a href="pw-reset.html" style="align-self:flex-end;font-size:13px">パスワードを忘れた方はこちら ＞＞</a><button class="btn btn--primary btn--lg" type="submit">${i('user')}購入者ログイン</button><a href="#" style="text-align:center;font-size:13px;border-top:1px solid var(--line);padding-top:12px">購入後のお問い合わせはこちら ＞＞</a></form><div style="width:360px;flex:none;padding-top:12px"><span class="pr-label">--PR--</span>${ad('広告タグ', 360, 280)}</div></div></div>`;
function ad(label, w, h, own) { return `<div class="ad${own ? ' ad--own' : ''}" style="width:${w}px;height:${h}px"><strong>${label}</strong>${w}×${h}</div>`; }

function sideMember({ recent, msgMenu }) {
  const NEWS = [['2026年10月23日', '【重要】infotopメンテナンス終了のお知らせ'], ['2026年10月21日', '（例）お知らせの件名が入ります'], ['2026年10月01日', '（例）お知らせの件名が入ります'], ['2026年09月20日', '（例）お知らせの件名が入ります']];
  return `<aside class="page__side page__side--left pc-only pc-flex">
    ${msgMenu ? `<section class="side-card"><h2>${i('mail')}メニュー</h2><ul class="side-menu">${msgMenu.map(([t, h, c]) => `<li><a href="${h}"${c ? ' aria-current="page"' : ''}>${t}<span class="chev">›</span></a></li>`).join('')}</ul></section>` : `<section class="side-card"><h2>${i('bell')}新着お知らせ</h2><ul class="side-news">${NEWS.map(([d, t]) => `<li><time>${d}</time><a href="news-detail.html">${t}</a></li>`).join('')}</ul><div style="padding:10px 16px 14px;text-align:right"><a href="news.html" style="font-size:12px;font-weight:700;color:var(--red)">お知らせ一覧 ›</a></div></section>`}
    <section class="side-card"><h2>${i('chat')}お問い合わせ先</h2><div style="padding:12px 16px 14px"><a href="#" style="font-size:13px">お問い合わせ先はこちら ›</a></div></section>
    ${ad('【仮】自社バナー', 240, 300, 1)}${ad('【仮】自社バナー', 240, 132, 1)}<div><span class="pr-label" style="text-align:left">PR</span>${ad('【仮】PR（静的）', 240, 240, 1)}</div>${ad('広告タグ', 240, 300)}
    ${recent ? `<section class="side-card"><h2>最近チェックした商品</h2><ul class="side-recent">${[1, 2, 3].map(() => `<li>${noImg(44)}<a href="#">商品名が入ります</a></li>`).join('')}</ul></section>` : ''}
  </aside>`;
}
const noImg = s => `<span class="thumb thumb--none"${s ? ` style="--s:${s}px"` : ''}><img src="${LOGO}" alt="" loading="lazy"></span>`;
const thumb = (src, s) => src ? `<span class="thumb"${s ? ` style="--s:${s}px"` : ''}><img src="assets/img/${src}" alt="" loading="lazy"></span>` : noImg(s);
const crown = `<svg viewBox="2 3 20 16" aria-hidden="true"><path d="${IC.crown}"/></svg>`;
const rankNo = n => n === 'PR' ? `<span class="rank-no rank-no--pr"><span class="rank-no__n">PR</span></span>` : `<span class="rank-no rank-no--${n}">${crown}<span class="rank-no__n">${n}</span></span>`;

function doc({ title, body, member = false, sticky = false }) {
  return `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} | インフォトップ</title>
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body id="top"${sticky ? ' class="has-sticky"' : ''}>
<div class="mock-notice" role="note">デザイン確認用のモックです。インフォトップの公式ページではありません。実際のメールアドレスやパスワード、カード情報は入力しないでください。</div>
${body}
${drawer(member)}
${member ? '' : loginbox}
<script src="assets/js/main.js" defer></script>
</body>
</html>
`;
}
module.exports = { searchFields, catOptions, i, IC, CATS, ZERO_CAT, catIcon, header, footer, doc, ad, sideMember, thumb, noImg, rankNo, LOGO };
