// 未設定（href="#"）のリンクに現行サイトのリンク先を入れる。build.js から呼ぶ。
// 対応表は 2026/11/09 時点の現行サイト（www.infotop.jp と、ログイン後はテスト環境のマイページ）から取得。
// 広告・ページ送り・ボタン動作（ダウンロード、評価など）は注文ごと・配信ごとに変わるため対象外。
const W = 'https://www.infotop.jp';
const CAT_IDS = [['情報起業', 102], ['アフィリエイト', 103], ['せどり・転売', 104], ['ネットビジネス', 105], ['独立・起業・SOHO', 106], ['その他ビジネス', 107], ['FX', 109], ['仮想通貨', 157], ['バイナリーオプション', 110], ['株式(IPO・現物・信用)', 111], ['先物取引その他', 112], ['ファンド・不動産・その他', 113], ['SEM(SEO・リスティング)', 115], ['メール', 116], ['ホームページ・ブログ・ライティング', 117], ['SNS', 118], ['ツール・その他', 119], ['生活の悩み', 121], ['ペット', 122], ['こども', 123], ['その他(生活)', 124], ['ダイエット', 126], ['美容法', 127], ['医療', 128], ['体の悩み・健康', 129], ['その他(美容・健康)', 130], ['語学・留学', 132], ['資格・技術', 133], ['自己啓発', 134], ['その他(学習・自己啓発)', 135], ['スポーツ', 137], ['趣味・音楽', 138], ['占い', 139], ['その他(エンターテイメント)', 140], ['コミュニケーション・会話術', 142], ['恋愛', 143], ['結婚', 144], ['その他(コミュニケーション・恋愛)', 145]];

const HELP = 'https://help-infotop.jp/';
const CONTACT_FORM = `${W}/html/contact/customer/general/form.php`;
const SUPPORT = 'https://support.infotop.jp/customer.php';
const GUIDELINE = 'https://help-infotop.jp/html/info/guidline.php';
// リンク文字列（タグを除いた文字）→ リンク先
const TEXT = {
  // ヘッダー・ドロワー
  'アフィリエイターはこちら': `${W}/afi/`,
  '販売者はこちら': `${W}/seller/`,
  '特集': `${W}/search?CATEGORY_ID_I=10001&pid=2&com=search`,
  '0円広場': `${W}/html/0yenhiroba/`,
  'ヘルプ': HELP,
  'ガイド': HELP,
  'ガイド（ご利用マニュアル・FAQ）': HELP,
  // フッター
  'LP制作': `${W}/html/lp_mitsumori/page_production_estimate.html?utm_source=lp_mitsumori&utm_medium=footer_icon&utm_campaign=lp_mitsumori`,
  '広告掲載お問い合わせ': `${W}/html/advertishing/form/ad_application/`,
  '広告掲載': `${W}/html/advertishing/form/ad_application/`,
  'インフォトップカレッジ': 'http://infotop-content.chips.jp/college/?utm_source=college&utm_medium=all&utm_campaign=footer&utm_term=icon&utm_content=top',
  'カレッジ': 'http://infotop-content.chips.jp/college/?utm_source=college&utm_medium=all&utm_campaign=footer&utm_term=icon&utm_content=top',
  'インフォトップコラム': `${W}/column/`,
  'インフォトップのオススメ': `${W}/html/recommendation/`,
  'アフィリエイターログイン': `${W}/afi/auth/login`,
  '販売者ログイン': `${W}/seller/auth/login`,
  'プライバシーポリシー': 'https://first-penguin.co.jp/company/privacy',
  'ご利用規約': 'https://info.infotop.jp/regulation.php',
  'ガイドライン': GUIDELINE,
  '会社概要': 'https://first-penguin.co.jp/company',
  '特定商取引法に関する表記': 'https://info.infotop.jp/law.php',
  '購入後のお問い合わせはこちら': 'https://help-infotop.jp/html/support/',
  'ご利用マニュアル': 'https://help-infotop.jp/manual/mc/mc-member/',
  'FAQ': 'https://help-infotop.jp/faq/fc/fc-member/',
  'お問い合わせ先': SUPPORT,
  'お問い合わせ先はこちら': SUPPORT,
  // マイページTOP
  '商品を見る、受け取る': 'order.html',
  'こちら': 'order.html',
  'よくある質問': 'http://faq.infotop.jp/',
  'お問い合わせフォームへ': CONTACT_FORM,
  'infotopご利用マニュアルはこちら': 'https://manual.infotop.jp/',
  'スマートフォン・タブレット端末でPDFファイルを閲覧する方法': 'https://faq.infotop.jp/customer/2013?css=style',
  // 注文履歴・月額課金・分割決済
  'インフォトップガイドライン': GUIDELINE,
  'スマートフォン・タブレットでの閲覧方法': 'https://faq.infotop.jp/customer/2013?css=style',
  'お支払いや請求に関する疑問点': 'https://faq.infotop.jp/category/customer/payment?css=style',
  '▼ダウンロードに関するお問い合わせはこちら': CONTACT_FORM,
  '▼インフォトップご利用マニュアル 月額会員サービスの入会方法': 'https://help-infotop.jp/manual/mc/548/',
  '▼FAQ 月額課金サービスについての項目': 'https://help-infotop.jp/tag/all__/?s=%E6%9C%88%E9%A1%8D',
  // パスワード再発行
  '問い合わせフォームはこちらをクリック': CONTACT_FORM
};
for (const [t, id] of CAT_IDS) TEXT[t] = `${W}/search?CATEGORY_ID_I=${id}&pid=1&com=search`;
TEXT['fフェイスブック'] = 'https://www.facebook.com/infotop.jp';
TEXT['XX'] = 'https://x.com/infotop';
const ARIA = { Facebook: 'https://www.facebook.com/infotop.jp', X: 'https://x.com/infotop' };
// 画像を持たない商品（現行サイトで検索して確認）
const NAME_IID = { 'NAOYA MIYAKE Solution Club': 103202 };
// 画像リンク（バナー）：画像ファイル名 → リンク先
const IMG = {
  'star1.png': `${W}/html/20aniv/`, 'star2.gif': `${W}/html/cmp/category_feature/sports/`, 'star3.gif': `${W}/html/cmp/category_feature/language/`,
  'cat1.gif': `${W}/html/cmp/category_feature/sports/`, 'cat2.gif': `${W}/html/cmp/category_feature/language/`, 'cat3.gif': `${W}/html/cmp/category_feature/health_problems/`
};

const strip = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').replace(/›|＞＞|>>/g, '').trim();
const item = (iid, buy) => `${W}/click_new.php?pid=${buy ? 1005 : 10}&iid=${iid}`;
const A = /<a\b([^>]*?)href="#"([^>]*)>([\s\S]*?)<\/a>/g;
const iidOf = s => { const m = s.match(/assets\/img\/(?:hp_|p)(\d+)\.\w+/); return m ? m[1] : null; };
const name = inner => strip(inner.replace(/<span class="(?:mini__p|p-red|rank-item__price)">[\s\S]*?<\/span>/g, ''));

// 全ページから「商品名 → 商品ID」を集める（画像ファイル名に商品IDが入っている）
function collectNames(htmls) {
  const map = { ...NAME_IID };
  for (const h of htmls) {
    for (const li of h.match(/<li\b[^>]*>[\s\S]*?<\/li>/g) || []) {
      const id = iidOf(li); if (!id) continue;
      for (const m of li.matchAll(A)) { const n = name(m[3]); if (n && !/^(商品詳細へ|今すぐ購入!)$/.test(n)) map[n] = id; }
    }
    for (const m of h.matchAll(A)) { const id = iidOf(m[3]); if (id) { const n = name(m[3]); if (n) map[n] = id; } }
  }
  return map;
}
const lookup = (map, n) => {
  if (!n) return null;
  if (map[n]) return map[n];
  const head = n.replace(/\.{2,}$/, '');
  if (head !== n && head.length >= 6) { for (const k of Object.keys(map)) if (k.startsWith(head)) return map[k]; }
  for (const k of Object.keys(map)) { const kh = k.replace(/\.{2,}$/, ''); if (kh !== k && kh.length >= 6 && n.startsWith(kh)) return map[k]; }
  return null;
};
const setHref = (pre, post, inner, url) => `<a${pre}href="${url}"${post}>${inner}</a>`;

function applyLinks(html, map) {
  // 1) 商品カード（li 単位）：タイトル・商品詳細へ → 詳細、今すぐ購入! → 購入
  html = html.replace(/<li\b[^>]*>[\s\S]*?<\/li>/g, li => {
    let id = iidOf(li);
    if (!id) { const t = li.match(/<a\b[^>]*class="(?:rank-row__name|item__title)"[^>]*>([\s\S]*?)<\/a>/); if (t) id = lookup(map, name(t[1])); }
    if (!id) { const anchors = [...li.matchAll(A)]; if (anchors.length === 1) id = lookup(map, name(anchors[0][3])); }
    if (!id) return li;
    return li.replace(A, (all, pre, post, inner) => {
      const n = strip(inner);
      if (n === '今すぐ購入!') return setHref(pre, post, inner, item(id, true));
      if (n === '商品詳細へ' || lookup(map, name(inner)) === id || iidOf(inner)) return setHref(pre, post, inner, item(id));
      return all;
    });
  });
  // 2) 画像入りの商品リンク・名前だけの商品リンク・バナー・文字リンク・SNS
  return html.replace(A, (all, pre, post, inner) => {
    const id = iidOf(inner) || lookup(map, name(inner));
    if (id) return setHref(pre, post, inner, item(id));
    const img = (inner.match(/assets\/img\/([\w.-]+)"/) || [])[1];
    if (img && IMG[img]) return setHref(pre, post, inner, IMG[img]);
    const aria = ((pre + post).match(/aria-label="([^"]+)"/) || [])[1];
    if (aria && ARIA[aria]) return setHref(pre, post, inner, ARIA[aria]);
    const t = strip(inner);
    if (TEXT[t]) return setHref(pre, post, inner, TEXT[t]);
    return all;
  });
}
// 別ウィンドウで開くリンク先（ご指示分）
const NEW_WIN = ['https://help-infotop.jp/html/support/', 'https://help-infotop.jp/html/info/guidline.php', 'https://www.infotop.jp/html/contact/customer/general/form.php', 'https://help-infotop.jp/manual/mc/548/'];
const newWindow = html => html.replace(/<a\b([^>]*?)href="([^"]+)"([^>]*)>/g, (all, pre, url, post) => /^https?:\/\//.test(url) && !/target=/.test(pre + post) ? `<a${pre}href="${url}" target="_blank" rel="noopener"${post}>` : all);
const applyAll = (html, map) => newWindow(applyLinks(html, map));
module.exports = { applyLinks: applyAll, collectNames };
