// ページ定義。追加は PAGES に足すだけ。未着手のページは ../PROGRESS.md を参照
const { searchFields, catOptions, i, CATS, ZERO_CAT, catIcon, header, footer, doc, ad, sideMember, thumb, noImg, rankNo } = require('./layout');

const PAY = ['クレカ一括', 'クレカ分割', 'リボ払い', '銀振一括', '銀振複数', 'コンビニ', '代引', 'BitCash'];
const RECENT = [['p57827.jpg', 'ぷーさん式FX トレンドフォロー手....', '11,000円'], ['', 'NAOYA MIYAKE Solution Club', '15,000円'], ['p66736.gif', 'マカド！ Amazonせどり管理ツール', '4,980円'], ['p57070.jpg', 'ＭＴ４裁量トレード練習君プレミ....', '29,800円'], ['p52761.png', 'インターネット総合集客ツール ....', '2,980円']];
const recentSec = cls => `<section class="${cls}" aria-label="最近チェックした商品"><h2 class="h-sec sec-head h-under-pc">最近チェックした商品</h2><div class="hscroll recent-row">${RECENT.map(([im, t, p]) => `<a class="mini" href="#">${thumb(im)}<span class="mini__t">${t}</span><span class="mini__p">${p}</span></a>`).join('')}</div></section>`;
const rankBox = (rows, scope) => `<section class="rank-box" aria-labelledby="h-rank"><div class="rank-box__head">${i('crown')}<h2 id="h-rank">売れ筋ランキング</h2><span class="rank-box__scope pc-only">${scope}</span></div>
  <div class="period" role="tablist" aria-label="期間"><button type="button" role="tab" aria-selected="true">24時間</button><button type="button" role="tab" aria-selected="false"><span class="pc-only">1週間</span><span class="sp-only">7日間</span></button><button type="button" role="tab" aria-selected="false">30日間</button></div>
  <ol class="rank-box__list">${rows.map(([n, im, t, p]) => `<li class="rank-item">${rankNo(n)}${thumb(im)}<span class="rank-item__body"><a href="#">${t}</a><span class="rank-item__price">${p}</span></span></li>`).join('')}</ol>
  <div class="rank-box__more"><a class="btn btn--outline btn--block" href="ranking.html"><span class="pc-only">もっと見る!!</span><span class="sp-only">売れ筋ランキングをもっと見る</span></a></div></section>`;
const PR_ROW = ['PR', 'rkpr.gif', '知ってて当然のルールを知ろう', ''];

// SP共通：オーバーレイバナー（画面に重ねて表示、×で閉じる。表示タイミングは広告配信側）
const overlayAd = () => `<div class="overlay-ad sp-only" role="dialog" aria-label="広告"><div class="overlay-ad__box"><span class="pr-label" style="color:#fff">PR</span>${ad('オーバーレイバナー（広告）', 300, 250)}<button class="close-x" type="button" data-close-overlay aria-label="広告を閉じる">×</button></div></div>`;

// ========== ドメインTOP ==========
function home() {
  const star = ['star1.png', 'star2.gif', 'star3.gif'];
  const pick = [['pick1.gif', '目指せ！完全放置', '【信頼の販売実績】人気急上昇のトレンドアフィリエイト PPCもSEOも不要 だから完全放置が目指せます。'], ['pick2.gif', '短期トレードで利益を！', '株式投資初心者でも、投資資金が少なくても株式投資がスタートできる かつトレードにこだわったスペシャルレッスンがゼロから学べます！'], ['pick3.gif', '歴史の勉強が苦手な人必見', 'たった3つのステップであなたの記憶力を維持させます。東大OBが教える、歴史を記憶に定着させるプログラム 歴史の記憶術！'], ['pick4.gif', 'ステップメールの全て', 'たった11通のメールをセットするだけでどんなジャンルでも自動で売れていく秘密のステップメールの全てを手に入れませんか？']];
  const slide = [['p49547.gif', '楽ぱそDVDお得セット', '12,800円'], ['p68608.png', '美文字の流儀', '9,800円'], ['p34583.gif', 'III..早川周作 夢を“絶対”夢で終わらせない ....', '15,000円'], ['p103016.jpg', '【動画版】女性が書いた男性のための離婚回避マ....', '39,800円'], ['p92597.jpg', '世の中ボロイぜ！毎日が給料日！？東大卒エンジ....', '80,000円'], ['p62540.jpg', '新SNSアクセス激増ソフト モンスターカウンターⅣ', '39,800円']];
  const feat = [['cat1.gif', 'スポーツ特集', '熱い感動を、燃え滾る情熱をこの季節に一層ふくらまそう！これから始める人も、テクニックを極めたい人も、お子様の上達のためにも、とっておきの商品をご紹介します！'], ['cat2.gif', '語学特集', '分かる、話せる、楽しい！そんな自分になれるチャンス。今よりもっと輝く自分になって、世界へ近づく道がここにあります。'], ['cat3.gif', 'お悩み特集', 'なかなか効果の出なかったダイエットや豊胸マッサージも、プロの助言通りに実行すると目に見えて変わってきます。それは糖尿病や高血圧などの健康問題もまた然り。']];
  const rank = [PR_ROW, [1, 'p57827.jpg', 'ぷーさん式FX トレンドフォロー手....', '11,000円'], [2, '', 'NAOYA MIYAKE Solution Club', '15,000円'], [3, 'p57070.jpg', 'ＭＴ４裁量トレード練習君プレミ....', '29,800円'], [4, 'p66736.gif', 'マカド！ Amazonせどり管理ツール', '4,980円'], [5, 'p52761.png', 'インターネット総合集客ツール ....', '2,980円']];
  const spCats = CATS.map((c, n) => `<button type="button" class="sp-cat" data-sp-cat="spc${n}" aria-expanded="false" aria-controls="spc${n}" style="--c-fg:${c[2]}">${catIcon(c)}<span>${c[1]}</span></button>`).join('') + `<a class="sp-cat" href="#">${catIcon(ZERO_CAT)}<span>0円広場</span></a>`;
  const spCatPanels = CATS.map((c, n) => `<div id="spc${n}" class="sp-cat-panel" style="--c-fg:${c[2]};--c-bg:${c[3]}" hidden><p class="sp-cat-panel__h"><a href="list.html">${c[0]}すべて ›</a></p><ul>${c[5].map(x => `<li><a href="list.html">${x}<span class="chev">›</span></a></li>`).join('')}</ul></div>`).join('');
  return header({ member: false, spSearch: true }) + `
<div class="sp-pr sp-only"><span class="pr-label">PR</span><img src="assets/img/adsp75.gif" alt="広告" width="300" height="75"></div>
<section class="hero" aria-label="メインスライダー" data-hero><div class="hero__view"><div class="hero__track" data-hero-track>${[['hero4.gif', ''], ['hero5.gif', ''], ['hero1.png', 'スマホで転売 1〜2分のスキマ時間でOK!'], ['hero2.gif', ''], ['hero3.png', '']].map(([im, alt], n) => `<a class="hero__slide${n === 2 ? ' is-cur' : ''}" href="#" data-i="${n}"><img src="assets/img/${im}" alt="${alt}"></a>`).join('')}</div><div class="hero__ctrl"><button class="round-btn" type="button" data-hero-dir="-1" aria-label="前のスライド">${i('left')}</button><button class="round-btn" type="button" data-hero-dir="1" aria-label="次のスライド">${i('right')}</button></div></div><div class="hero__dots">${[0, 1, 2, 3, 4].map(n => `<span${n === 2 ? ' aria-current="true"' : ''} data-dot="${n}"></span>`).join('')}</div></section>
<div class="home wrap-pc">
  <main class="home__main">
    <section class="band sp-only" aria-labelledby="h-cat"><div class="sec-head"><h2 id="h-cat" class="h-sec">カテゴリーから探す</h2><a class="sec-head__more" href="list.html">すべて見る ›</a></div><div class="sp-cats">${spCats}</div>${spCatPanels}</section>
    ${recentSec('band sp-only')}
    <section class="pc-only pc-flex"><h2 class="h-under">おすすめ特集・キャンペーン</h2><div class="feat3">${star.map(s => `<a href="#"><img src="assets/img/${s}" alt="" loading="lazy"></a>`).join('')}</div></section>
    <section class="band" aria-labelledby="h-pick"><div class="sec-head"><h2 id="h-pick" class="h-sec"><span class="pc-only">おすすめピックアップ</span><span class="sp-only">最新ピックアップ情報</span></h2><span class="pr">PR</span></div><ul class="pickup-list">${pick.map(([im, t, b]) => `<li><a class="pickup" href="#"><img src="assets/img/${im}" alt="" loading="lazy"><div><strong>${t}</strong><span>${b}</span></div></a></li>`).join('')}</ul></section>
    <section class="pc-only pc-flex"><div class="sec-head"><h2 class="h-under">ピックアップ教材</h2><div class="swipe__arrows"><button class="round-btn" type="button" data-swipe-dir="-1" aria-label="前へ">${i('left')}</button><button class="round-btn" type="button" data-swipe-dir="1" aria-label="次へ">${i('right')}</button></div></div><div class="swipe" data-swipe>${slide.map(([im, t, p]) => `<a href="#">${thumb(im)}<span class="t-link">${t}</span><span class="p-red">${p}</span></a>`).join('')}</div></section>
    <section class="pc-only pc-flex"><h2 class="h-under">いちおしカテゴリ特集</h2><div class="feat-cards">${feat.map(([im, a, d]) => `<a href="#"><img src="assets/img/${im}" alt="${a}" loading="lazy"><span>${d}</span></a>`).join('')}</div></section>
    ${recentSec('pc-only pc-flex')}
  </main>
  <aside class="home__side">
    <div class="pc-only">${ad('広告（AdSense）', 300, 250)}</div>
    ${rankBox(rank, '総合')}
    <div class="band sp-only">${ad('Google AdSense', 320, 100)}</div>
    <section class="sp-only" style="background:#fff"><button class="acc-btn" type="button" aria-expanded="false" aria-controls="genre"><span class="h-sec">ジャンル一覧</span><span class="chev">${i('down')}</span></button><ul id="genre" class="acc-panel" hidden>${CATS.map(c => `<li><a href="list.html">${c[0]}</a></li>`).join('')}</ul></section>
  </aside>
</div>
${overlayAd()}` + footer({ pc: 'portal', sp: 'guest' });
}

// ========== 商品一覧 ==========
const ITEMS = [
  { pick: 1, tags: ['オススメ', '配送版'], im: 'p41435.png', t: '行政書士開業セット', s: '有限会社ほなみ', d: '「行政書士開業セット」は、発売以来数年間にわたって、全国の行政書士事務所開業者より収集した、実務知識ゼロからスムーズに開業するノウハウ、行政書士として生き残るためのノウハウ、誰も教えてくれないが行政書士として知っていなければならないこと等、新規開業者の役に立つ情報を惜しみなく収録', p: '55,000' },
  { tags: ['月額課金サービス'], im: 'p66736.gif', t: 'マカド！ Amazonせどり管理ツール', s: '合同会社 チルダワーク', d: 'マカド！はAmazon出品者の為の価格改定・かんたん出品・売上管理に特化したWEBツールです。 出品商品の高速全自動価格改定や、売上実績レポート、Amazonへの商品の出品機能など便利な機能をご利用頂けます。', p: '4,980' },
  { tags: ['月額課金サービス'], im: 'p62766.gif', t: '転売ツール工房デイせど～Amazon出品者分析ツール・ヤフオクリサーチ効率化ツール・中古せどり特化型検索ツールのオールインワンパッケージ～', s: '乙坂努', d: 'Amazon出品者分析ツール・ヤフオクリサーチ効率化ツール・中古せどり特化型検索ツールのオールインワンパッケージ 【出品者分析ツール】 Amazonで商品を販売して稼いでいる出品者が、誰にも知られずにこっそり仕入れている商品や、繰り返し販売している商品の一覧を覗き見することができ', p: '5,980' },
  { tags: ['ダウンロード版'], im: 'p49115.png', t: '【下克上∞（MUGEN)】～トレンドアフィリエイト教材～', s: '株式会社move', d: '販売本数15,000本突破！ アフィリエイト教材NO1の信頼と実績！ ～ 脱ノウハウコレクター教材 ～ 【下克上∞(MUGEN)】 PPCもSEOもまったく必要なく ブログに記事を投稿するだけで莫大な報酬を得るだけでなく... 完全放置の自動化でも長期的にお金を生み出す資産を構築', p: '16,800' },
  { tags: ['ダウンロード版'], im: 'p37524.gif', t: '●１商品で942万円稼ぎ出す仕組み「Unlimited Affiliate 3.0（アンリミテッドアフィリエイト3.0）」', s: '株式会社ミスリル', d: '受講者数20,000名を超える「業界最高峰」と言われる情報発信アフィリエイト教材。「Twitter」「ブログ」「メルマガ」を連動した情報発信アフィリエイト教材の完全版。', p: '49,800' },
  { ad: 1 },
  { tags: ['ダウンロード版'], im: 'p58160.jpg', t: 'PRIDE（プライド）', s: '浜野茂樹', d: 'インフォトップで７冠に輝いたPRIDE（プライド）が大幅バージョンアップして復活！！！ インフォトップで異例の5年以上に渡る超ロングセラーを続け 誰もが認める資産ブログ構築のための王道教材 PRIDE。', p: '18,800' }
];
const MORE_TEXT = ' （ここから続きの本文）商品説明の続きが入ります。商品説明の続きが入ります。商品説明の続きが入ります。商品説明の続きが入ります。商品説明の続きが入ります。商品説明の続きが入ります。商品説明の続きが入ります。商品説明の続きが入ります。商品説明の続きが入ります。商品説明の続きが入ります。';
function list() {
  const card = it => it.ad
    ? `<li class="band"><div class="pc-only">${ad('広告（AdSense）', 880, 135)}</div><div class="sp-only">${ad('Google AdSense', 320, 100)}</div></li>`
    : `<li class="item${it.pick ? ' item--pick' : ''}"><div class="item__tags">${it.pick ? '<span class="tag tag--pick">ピックアップ教材</span>' : ''}${it.tags.map(t => `<span class="tag${t === 'オススメ' ? ' tag--rec' : ''}">${t}</span>`).join('')}</div>${thumb(it.im)}<div class="item__body"><a class="item__title" href="#">${it.t}</a><p class="item__desc">${it.d}${MORE_TEXT}</p><button class="item__more" type="button" data-more aria-expanded="false">続きを見る ▼</button><div class="item__pay"><b>支払い方法</b>${PAY.map(p => `<span>${p}</span>`).join('')}</div><span class="item__price">¥${it.p}</span><span class="item__seller">販売者：${it.s}</span></div><div class="item__actions"><p class="item__price-pc">${it.p}<small>円</small></p><a class="btn btn--outline" href="#">商品詳細へ</a><a class="btn btn--primary" href="#">今すぐ購入!</a></div></li>`;
  const pages = `<nav class="pager" aria-label="ページ送り"><a href="#" aria-current="page">1</a>${[2, 3, 4, 5].map(n => `<a href="#">${n}</a>`).join('')}<a class="pager__next" href="#">次へ ›</a></nav>`;
  const rank = [PR_ROW, [1, 'p66736.gif', 'マカド！ Amazonせどり管理ツール', '4,980円'], [2, 'p105960.jpg', 'プロダクトスカウター スタンダード', '14,600円'], [3, 'p105386.jpg', '【せど楽AI】スタンダード_269', '9,800円'], [4, 'p62766.gif', '転売ツール工房デイせど～Amazon....', '5,980円'], [5, '', 'INFOTOP NEXT', '3,480円']];
  const hp = [['hp_96091.gif', 'アメブロジック(アメブロ集....'], ['hp_48021.gif', '情報起業支援プログラム--知....'], ['hp_86980.png', 'コンテンツビジネス大百科2.0'], ['hp_96559.png', '【業界不問】トップセールス....']];
  return header({ member: false, spSearch: true }) + `
${recentSec('band sp-only')}
<div class="wrap pc-only"><nav class="crumb" aria-label="パンくず"><a href="index.html">ポータルTOP</a><span>›</span><span>ビジネス・稼ぐ</span></nav></div>
<div class="list-layout wrap-pc">
  <main class="list-layout__main">
    <form class="filter pc-only pc-flex" action="list.html"><h2 class="h-under" style="font-size:18px">絞り込み検索</h2><div style="display:flex;gap:12px;align-items:flex-end"><label class="field" style="width:240px">カテゴリー<select class="input">${catOptions()}</select></label><label class="field" style="flex:1">キーワード<input class="input" type="text" placeholder="キーワードを入力"></label><button class="btn btn--primary" type="submit" style="padding-inline:32px">検索</button></div><button class="acc-btn" type="button" aria-expanded="false" aria-controls="detail-filter" style="background:var(--bg);border-radius:8px;font-size:13px;color:var(--ink-2)">詳しい条件で絞り込む（販売者名・価格帯・商品区分・支払い方法）<span class="pm" aria-hidden="true"></span></button><div id="detail-filter" class="filter-more" hidden>${searchFields('lf')}<div class="search-panel__foot"><button class="btn btn--primary" type="submit">この条件で検索</button></div></div><button class="search-clear" type="reset" style="align-self:flex-end">条件のクリア</button></form>
    <section class="result-head"><div class="result-head__row"><h1 class="h1 sp-only" style="font-size:18px">検索結果</h1><p><strong style="font-size:20px">559</strong>件中 1-20件</p><label class="sr-only" for="sort">並べ替え</label><select id="sort" class="select" style="margin-left:auto"><option>人気順</option><option>価格が高い順</option><option>価格が安い順</option><option>新着順</option></select></div><div class="sp-only">${pages}</div></section>
    <ul class="items">${ITEMS.map(card).join('')}</ul>
    <p class="note" style="text-align:center">（以下20件まで同じ形式で続く）</p>
    ${pages}
    ${recentSec('band pc-only')}
    <section class="pick-sec sp-only" aria-labelledby="h-pk"><h2 id="h-pk" class="h-sec" style="margin-bottom:12px;font-size:16px">［ビジネス・稼ぐ］のピックアップ教材</h2><ul class="pick-grid">${hp.map(([im, t]) => `<li><a href="#">${thumb(im)}<span class="mini__t">${t}</span></a></li>`).join('')}</ul></section>
  </main>
  <aside class="list-layout__side">
    <div class="pc-only">${ad('広告（AdSense）', 300, 250)}</div>
    <div class="pc-only">${rankBox(rank, 'ビジネス・稼ぐ')}</div>
    <div class="band sp-only">${ad('Google AdSense', 300, 250)}</div>
  </aside>
</div>` + footer({ pc: 'portal', sp: 'guest' });
}

// ========== 売上ランキング（ログイン前後で本文共通・ヘッダーのみ違う） ==========
const RANK = [
  { n: 'INFOTOP NEXT（年払い）', c: 'ビジネス・稼ぐ ＞ 情報起業', s: '株式会社ファーストペンギン', p: '34,800' },
  { n: 'ぷーさん式FX トレンドフォロー手法トレードマニュアル輝', c: '投資・仮想通貨 ＞ FX', s: '熊木章人', p: '11,000', im: 'p57827.jpg' },
  { n: 'NAOYA MIYAKE Solution Club', c: 'ビジネス・稼ぐ ＞ アフィリエイト', s: '販売者名', p: '15,000' },
  { n: '独り不労所得者専用マニュアル', c: 'ビジネス・稼ぐ ＞ ネットビジネス', s: '販売者名', p: '50,000' },
  { n: '商品名が入ります', c: 'ビジネス・稼ぐ ＞ 情報起業', s: '販売者名', p: '9,800' }
];
function ranking(member) {
  const opts = '<option>選択してください</option>' + CATS.map(c => `<option>${c[0]}</option>`).join('');
  const rows = RANK.map((r, x) => `<li class="rank-row rank-row--${x + 1}"><div class="rank-row__head">${rankNo(x + 1)}<strong class="rank-row__pos">${x + 1}位</strong><span class="rank-row__cat">${r.c}</span><span class="badge rank-row__type">ダウンロード版</span></div>${thumb(r.im)}<div class="rank-row__main"><a class="rank-row__name" href="#">${r.n}</a><span class="rank-row__seller">販売者：${r.s}</span><p class="rank-row__desc">商品説明の冒頭が入ります。3行まで表示し、続きは「続きを見る」で開きます。商品説明の本文が入ります。商品説明の本文が入ります。商品説明の本文が入ります。商品説明の本文が入ります。商品説明の本文が入ります。商品説明の本文が入ります。商品説明の本文が入ります。商品説明の本文が入ります。商品説明の本文が入ります。</p><button class="rank-row__more" type="button" data-more aria-expanded="false">続きを見る ▼</button><div class="rank-row__pay"><b>支払い方法</b>${PAY.map(p => `<span>${p}</span>`).join('')}</div><span class="rank-row__price">価格：<strong>¥${r.p}</strong></span></div><span class="chev sp-only" style="font-size:18px">›</span><div class="rank-row__actions"><p class="rank-row__price-pc">${r.p}<small>円</small></p><a class="btn" href="#">商品詳細へ</a><a class="btn btn--primary" href="#">今すぐ購入!</a></div></li>`).join('');
  return header({ member, tabs: false, spActive: '売れ筋' }) + `
<div class="wrap pc-only"><nav class="crumb" aria-label="パンくず"><a href="index.html">ポータルTOP</a><span>›</span><span>売上ランキング</span></nav></div>
<div class="page wrap">
  <main class="page__main">
    <h1 class="h1"><span class="pc-only">売上ランキング</span><span class="sp-only">ランキング</span></h1>
    <form class="panel rank-filter" action="${member ? 'ranking-member.html' : 'ranking.html'}">
      <span class="pc-only" style="font-size:13px;color:var(--ink-2)">表示中ランキングカテゴリー：<strong style="font-size:15px;color:var(--ink)">総合</strong></span>
      <label class="field"><span><span class="pc-only">カテゴリー選択：</span><span class="sp-only">ジャンル</span></span><select class="input">${opts}</select></label>
      <div class="radio-row pc-only pc-flex"><span>期間：</span><label><input type="radio" name="period" checked>24時間</label><label><input type="radio" name="period">7日</label><label><input type="radio" name="period">30日</label></div>
      <label class="field sp-only">期間<select class="input"><option>24時間</option><option>7日</option><option>30日</option></select></label>
      <div class="rank-filter__go"><button class="btn btn--primary pc-only" type="submit" style="padding-inline:48px">この条件で検索</button><button class="btn btn--dark btn--block sp-only" type="submit">検索</button></div>
    </form>
    <ol class="rank-list">${rows}</ol>
    <p class="note" style="text-align:center">（以下<span class="pc-only">10</span><span class="sp-only">19</span>位まで同じ形式で続く）</p>
  </main>
  <aside class="page__side page__side--right pc-only pc-flex">${ad('Google AdSense', 300, 250)}<section class="panel" style="padding:16px"><h2 style="font-size:15px;font-weight:900;margin-bottom:12px">最近チェックした商品</h2><div class="hscroll">${[['商品名が入ります', '9,800円'], ['商品名が入ります', '4,980円']].map(([t, p]) => `<a href="#" style="width:120px">${noImg(120)}<span style="display:block;margin-top:6px;font-size:12px">${t}</span><strong style="font-size:13px;color:var(--red)">${p}</strong></a>`).join('')}</div></section></aside>
</div>` + footer({ pc: 'portal', sp: member ? 'member' : 'guest' });
}

// ========== マイページTOP ==========
function mypage() {
  const news = [['2026年10月23日', 'infotopメンテナンス終了のお知らせ', 1], ['2026年10月21日', '（例）お知らせの件名が入ります'], ['2026年10月01日', '（例）お知らせの件名が入ります']];
  const steps = [['STEP 1', '注文履歴・ダウンロードのタブまたは<a href="#">こちら</a>をクリック', 'step1.svg'], ['STEP 2', '購入履歴一覧より該当商品の「お問い合わせ」をクリック', 'step2.svg'], ['STEP 3', 'メール作成画面で問い合わせ内容を入力して送信！', 'step3.svg']];
  return header({ member: true, activeTab: 'TOP', spActive: 'トップ' }) + `
<div class="pc-only" style="padding-top:16px"><span class="pr-label">--PR--</span>${ad('広告タグ', 576, 60)}</div>
<div class="sp-pr sp-only"><span class="pr-label">--PR--</span><img src="assets/img/adsp75.gif" alt="広告" width="300" height="75"></div>
<div class="page wrap">
  ${sideMember({})}
  <main class="page__main">
    <h1 class="h1 pc-only pc-flex">マイページ</h1>
    <section class="panel sp-only" aria-label="新着お知らせ" style="padding:12px 16px 4px"><h2 class="h-sec" style="font-size:15px">新着お知らせ</h2><ul class="news-top">${news.map(([d, t, imp]) => `<li class="${imp ? 'is-imp' : ''}"><a href="news-detail.html"><time>${imp ? '<span class="imp">重要</span>' : ''}${d}</time>${t}</a></li>`).join('')}</ul></section>
    <section class="forced pc-only pc-flex" aria-label="強制お知らせ"><div><strong>${i('alert')}テスト</strong><p>テスト</p></div><div><strong>${i('alert')}テスト：強制お知らせ</strong><p>テスト：強制お知らせ test test</p></div></section>
    <section class="panel pc-only"><h2 class="panel__title">このページをご利用のお客様からよく閲覧されているページ</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px"><a class="btn btn--primary" href="#" style="min-height:92px;font-size:19px">${i('dl')}商品を見る、受け取る</a><a class="btn" href="#" style="min-height:92px;font-size:19px">${i('help')}よくある質問</a></div><div style="margin-top:20px"><span class="pr-label">--PR--</span>${ad('【仮】自社バナー', 600, 120, 1)}</div></section>
    <section class="panel pc-only"><h2 class="panel__title">販売者への問い合わせ方法</h2><ol class="step-grid">${steps.map(([n, t, ic]) => `<li class="step"><span class="step__no">${n}</span><img class="step__img" src="assets/img/${ic}" alt="" width="240" height="130" loading="lazy"><span>${t}</span></li>`).join('')}</ol></section>
    <section class="panel pc-only"><h2 class="panel__title">インフォトップへの問い合わせ方法</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px"><div class="step"><strong style="font-size:16px">お電話でのお問い合わせ</strong><span>お電話での受付時間は<br>平日10時から17時です。</span><strong style="font-size:26px;color:var(--red)">050-3786-0541</strong><span class="note">商品の内容については、直接販売者様にお問合せ下さい。</span></div><div class="step"><strong style="font-size:16px">メールでのお問い合わせ</strong><span>メールでのお問い合わせは<br>365日24時間受付中です。</span><a class="btn btn--primary" href="#" style="margin-top:auto;align-self:flex-start">お問い合わせフォームへ</a></div></div><p class="note" style="margin-top:16px">商品のご利用方法や内容について、ご不明点やお困りの点がございましたら、販売者様まで直接お問い合わせください。<br>万が一、土日祝日を除いた3日間以上経過しても、販売者様と連絡が取れない場合は、<br>お問い合わせされた日時と内容を詳しく記載の上、インフォトップサポートセンターまでお問い合わせください。</p></section>
    <a class="manual sp-only" href="#" style="display:flex">${i('book')}infotopご利用マニュアル<small>はこちら</small></a>
    <section class="panel sp-only" style="padding:14px 16px"><h2 class="h-sec" style="font-size:15px">よくある問合せ</h2><ul class="link-list"><li><a href="#">スマートフォン・タブレット端末でPDFファイルを閲覧する方法</a></li><li><a href="#">スマートフォン・タブレット端末で圧縮ファイル（zip,lzh）を解凍する方法</a></li></ul></section>
  </main>
</div>
<div class="sticky-ad sp-only">${ad('広告タグ', 320, 50)}<button class="close-x" type="button" data-close-ad aria-label="広告を閉じる">×</button></div>
${overlayAd()}` + footer({ pc: 'member', sp: 'member' });
}

// ========== お知らせ ==========
const memberPage = (active, spActive, main, o = {}) => header({ member: true, activeTab: active, spActive }) + `
<div class="pc-only" style="padding-top:16px"><span class="pr-label">--PR--</span>${ad('広告タグ', 576, 60)}</div>
<div class="page wrap">${sideMember(o)}<main class="page__main">${main}</main></div>` + footer({ pc: 'member', sp: 'member' });
const NEWS = [['2026年10月23日', '【重要】infotopメンテナンス終了のお知らせ', 1], ['2026年10月21日', '（例）お知らせの件名が入ります'], ['2026年10月01日', '（例）お知らせの件名が入ります']];
const newsList = () => memberPage('お知らせ', '', `<h1 class="h1"><span class="pc-only">インフォトップからのお知らせ</span><span class="sp-only">お知らせ</span></h1><section class="panel" style="padding-block:4px"><ul class="news-list">${NEWS.map(([d, t, imp]) => `<li><a href="news-detail.html"><time>${d}</time><span class="${imp ? 'is-imp' : ''}">${t}</span><span class="chev">›</span></a></li>`).join('')}</ul></section>`);
const newsDetail = () => memberPage('お知らせ', '', `<article class="panel stack"><h1 style="font-size:clamp(19px,2.5vw,24px);font-weight:900;line-height:1.5">【重要】infotopメンテナンス終了のお知らせ</h1><time style="font-size:13px;color:var(--ink-3);padding-bottom:14px;border-bottom:2px solid var(--red)">2026年10月23日 金曜日</time><div style="line-height:2">平素は格別のご高配を賜り厚く御礼申し上げます。<br>掲題の件につきまして、緊急メンテナンスを実施しておりましたが<br>以下の通りメンテナンスが完了しました事をお知らせいたします。<br><br>━━━ 記 ━━━━━━━━━<br>【内容】<br>WEBシステムのセキュリティアップデートのためのメンテナンス<br>【期間】<br>2026年10月21日（水）23:00 ～ 2026年10月23日（金）17:23<br>【結果】<br>メンテナンスは完了し、すべてのサービスを通常どおりご利用いただけます。</div></article><div style="text-align:center"><a class="btn" href="news.html" style="border-radius:22px">‹ お知らせ一覧に戻る</a></div>`);

// ========== ログイン・パスワード再発行 ==========
const guestShell = (main, o = {}) => header({ member: false }) + `<main class="wrap" style="padding-block:20px 40px;display:flex;flex-direction:column;gap:16px">${main}</main>` + footer({ pc: o.pc || 'portal', sp: o.sp || 'guest' });
const login = () => guestShell(`<div class="narrow stack"><h1 class="h1">購入者マイページログイン</h1><div class="sp-only"><span class="pr-label">--PR--</span><img src="assets/img/adsp75.gif" alt="広告" width="300" height="75" style="margin-inline:auto"></div><form class="panel stack" action="mypage.html" data-login novalidate><p class="form-error" role="alert" hidden>メールアドレスまたはパスワードが正しくありません。<br>入力内容をご確認のうえ、もう一度お試しください。</p><p>会員様は メールアドレス・パスワードを入力しログインしてください。</p><label class="field">メールアドレス<input class="input" type="email" autocomplete="username"></label><label class="field">パスワード<input class="input" type="password" autocomplete="current-password"></label><label class="check"><input type="checkbox">パスワードを表示する</label><button class="btn btn--primary btn--lg btn--block" type="submit">ログイン</button><a href="pw-reset.html" style="text-align:center">パスワードを忘れた方はこちら</a></form><div class="sp-only">${ad('Google AdSense', 300, 250)}</div></div>`);
const pwReset = () => guestShell(`<div class="narrow stack"><h1 class="h1">パスワードの再設定</h1><form class="panel stack" action="pw-sent.html"><p>登録されているメールアドレスを入力してください。<br>入力されたメールアドレス宛に会員情報が送信されます。</p><div class="warn" style="padding:12px 14px;font-size:13px">※「@infotop.jp」からのメール受信許可設定をお願いします。<br>メール受信許可設定方法がご不明な場合は、ご利用のメールサービスまでお問い合わせください。</div><label class="field">メールアドレス<input class="input" type="email" autocomplete="email"></label><div class="btn-row"><a class="btn" href="login.html">戻る</a><button class="btn btn--primary" type="submit">送信</button></div></form></div>`);
const pwSent = () => guestShell(`<section class="panel stack" style="line-height:1.8"><p><strong>弊社ご登録のアドレスにパスワード再設定URLをお送りしましたので<br>ご確認ください。</strong></p><p>※パスワード変更案内メール到着後、24時間以内にメール記載のURLよりパスワードの変更をお願いいたします。<br>変更されない場合は、再度パスワードの設定が必要となりますので、ご注意下さい。</p><div class="step"><p><strong>万が一メールが届かない等ございましたら下記の内容をご確認ください。</strong></p><p>・迷惑メールフォルダーのご確認<br>・フィルター設定のご確認（PCメールの受信設定等）</p><p>上記ご確認後もメールの受信が行えない場合ございましたら<br>下記サポートセンターまでご連絡ください。</p></div><p><strong>infotopサポートセンター</strong><br>電話番号: <strong style="color:var(--red)">050-3786-0541</strong><br>対応時間: 平日10時～17時<br>※お電話口で「パスワード再設定URLが届かない」とお申し出ください。</p><p style="color:var(--danger);font-weight:700">電話対応時間以外のお問い合わせにつきましては、問い合わせフォームからご連絡ください。<br>※順次のご対応となります事を予めご了承ください。</p><a href="#" style="font-weight:700">問い合わせフォームはこちらをクリック</a></section>`);

// ========== ログアウト ==========
const logout = () => memberPage('ログアウト', '', `<section class="panel narrow"><div class="center-box"><span class="ok-mark ok-mark--out">${i('out')}</span><h1 style="font-size:22px;font-weight:900"><span class="pc-only">ログアウト</span><span class="sp-only">ログアウト確認</span></h1><p>ログアウトします。よろしいですか？</p><a class="btn btn--primary btn--lg" href="logout-done.html">ログアウト</a></div></section>`);
const logoutDone = () => guestShell(`<section class="panel narrow"><div class="center-box"><span class="ok-mark">${i('check')}</span><h1 style="font-size:22px;font-weight:900">ログアウト</h1><p>ログアウトしました。</p><a class="btn btn--primary btn--lg sp-only" href="login.html">ログインページ</a><a class="btn btn--primary btn--lg pc-only" href="index.html" style="display:inline-flex">infotop Topへ</a><a class="btn sp-only" href="index.html">infotop Topへ</a></div></section>`, { pc: 'member', sp: 'member' });

// ========== 会員退会 ==========
const NOTES = ['お客さまに関わる全ての情報の復元はできません。', 'ダウンロード版の商品をご購入され、かつダウンロード回数が残っていた場合でも、ダウンロードする権利を放棄したものとみなします。', '支払中の複数回払い、入会中の月額課金サービスがある場合は退会できません。複数回払いのお支払いが完了してから退会いただくか、月額課金サービスを退会してから手続きをお願いいたします。'];
const withdraw = () => memberPage('会員情報', '会員情報', `<h1 class="h1">会員退会</h1><p><span class="sp-only">下記入力フォームにご記入ください。<br></span><span class="req">*</span>印は必須項目となります。</p><form class="stack" action="withdraw-confirm.html"><section class="panel stack"><div class="form-row form-row--inline"><label class="form-label" for="reason">退会される理由（詳細）<span class="req sp-only">＊</span></label><textarea id="reason" class="input" rows="4"></textarea></div><div class="warn"><p class="warn__t">${i('alert')}【重要】退会前に必ずお読みください。</p><ul>${NOTES.map(n => `<li>${n}</li>`).join('')}</ul></div><div class="form-row form-row--inline"><span class="form-label">同意<span class="req">*</span></span><label class="check"><input type="checkbox" required><strong>私は、上記の事項に全て同意した上で退会を希望します。</strong></label></div></section><div class="btn-row"><button class="btn btn--primary btn--lg" type="submit">確認</button></div></form>`, { recent: true });
const withdrawConfirm = () => memberPage('会員情報', '会員情報', `<h1 class="h1">会員退会</h1><p style="font-size:15px">退会します。よろしいですか？</p><section class="panel"><div class="form-row form-row--inline"><span class="form-label">退会される理由（詳細）</span><p>（入力した退会理由が入ります）</p></div></section><div class="btn-row"><a class="btn btn--primary btn--lg" href="withdraw-done.html">確認</a><a class="btn btn--lg" href="withdraw.html">戻る</a></div>`, { recent: true });
const withdrawDone = () => header({ member: true, activeTab: '会員情報', spGuest: true }) + `
<div class="page wrap">${sideMember({ recent: true })}<main class="page__main"><h1 class="h1">会員退会</h1><section class="panel stack" style="font-size:15px"><p>退会処理が完了しました。</p><p>今までご利用ありがとうございました。</p></section></main></div>` + footer({ pc: 'member', sp: 'member' });

// [出力ファイル, タイトル, 本文, ログイン中か, 下部固定広告]
const PAGES = [
  ['index.html', 'ドメインTOP', home(), false],
  ['list.html', '商品一覧', list(), false],
  ['ranking.html', '売上ランキング', ranking(false), false],
  ['ranking-member.html', '売上ランキング', ranking(true), true],
  ['login.html', 'ログイン', login(), false],
  ['pw-reset.html', 'パスワード再発行', pwReset(), false],
  ['pw-sent.html', 'パスワード再発行 送信完了', pwSent(), false],
  ['mypage.html', 'マイページ', mypage(), true, true],
  ['news.html', 'お知らせ一覧', newsList(), true],
  ['news-detail.html', 'お知らせ詳細', newsDetail(), true],
  ['logout.html', 'ログアウト確認', logout(), true],
  ['logout-done.html', 'ログアウト完了', logoutDone(), false],
  ['withdraw.html', '会員退会', withdraw(), true],
  ['withdraw-confirm.html', '会員退会 確認', withdrawConfirm(), true],
  ['withdraw-done.html', '会員退会 完了', withdrawDone(), false],
  ...require('./pages-my')
];
module.exports = { PAGES, doc };
