// マイページ下層
const { i, header, footer, ad, sideMember, LOGO } = require('./layout');

const shell = (tab, spActive, main, o = {}) => header({ member: true, activeTab: tab, spActive, cats: o.cats !== false }) + `
<div class="pc-only" style="padding-top:16px"><span class="pr-label">--PR--</span>${ad('広告タグ', 576, 60)}</div>
<div class="page wrap">${sideMember(o)}<main class="page__main">${main}</main></div>` + footer({ pc: 'member', sp: 'member' });
const h1 = (t, tsp) => tsp ? `<h1 class="h1"><span class="pc-only">${t}</span><span class="sp-only">${tsp}</span></h1>` : `<h1 class="h1">${t}</h1>`;
const panel = (title, ic, inner, id) => `<section class="panel"${id ? ` id="sec-${id}"` : ''}><h2 class="panel__title"><span class="panel__icon">${i(ic)}</span>${title}</h2>${inner}</section>`;
const kv = (items, pc, sp) => `<dl class="kv" style="--pc:${pc};--sp:${sp}">${items.map(([k, v, em]) => `<div><dt>${k}</dt><dd${em ? ' class="is-em"' : ''}>${v}</dd></div>`).join('')}</dl>`;
const card = (inner, accent) => `<div class="o-card${accent ? ' o-card--accent' : ''}">${inner}</div>`;
const meta = (l, r) => `<div class="o-meta"><span>${l}</span><span>${r}</span></div>`;
const CARD_NAME = 'クレジットカードの請求名はご利用のカードにより異なります。請求名一覧は以下のURLよりご確認ください。<br><a href="https://faq.infotop.jp/customer/1441">▼クレジットカードの請求名は？</a><br>インフォトップのクレジットカード決済は一部海外決済を利用しております。日本国内の利用でも、店舗名に外国名が表記される場合がございます。';
const ACC = {
  'ダウンロード後の操作について': 'ファイル閲覧後の操作方法や内容に関する質問は、販売者へ「お問い合わせ」ボタンよりお問い合わせください。<br>zipファイルは解凍が必要です。（<a href="#">解凍ソフトのダウンロードはこちら</a>）',
  'ダウンロード後の操作・閲覧方法について': '※ダウンロードボタンを押した後の商品の操作方法は、販売者に直接お問い合わせください。<br><a href="#">スマートフォン・タブレットでの閲覧方法</a><br><a href="#">krpdfとbookendのご案内</a><br><a href="#">お支払いや請求に関する疑問点</a>',
  '適格請求書について（注意事項7項目）': '<ul class="acc-list"><li>インボイス登録のある販売者との取引のみ表示されます。</li><li>2023年9月30日以前の取引は表示されません。</li><li>適格請求書は注文ごとに発行されます。</li><li>CSVでのみ発行しています。</li><li>制度自体のお問い合わせは、税務署・税理士へお願いいたします。</li><li>取消時は適格返還請求書としてご利用ください。</li></ul>',
  '■クレジットカード請求名について': CARD_NAME,
  'クレジットカード請求名について': CARD_NAME,
  '【支払い状況が「請求中」の場合】': '支払い状況が請求中の場合、正常に決済が行われておりません。',
  '【支払い状況が「リトライ」の場合】': '正常に決済が行われておりません。現在登録されているクレジットカード情報に変更や誤りがないかご確認の上、修正が必要な場合は、「クレジットカード情報の変更はこちら」より変更してください。',
  '【支払い状況が「自動停止」の場合】': '正常に決済が行えなかったため、クレジットカード決済が停止しました。<br>指定銀行口座に、残金をご一括でお振込みください。',
  'お支払状況は、以下の表示となります。': '<ul class="acc-list"><li>請求前：次回お支払のご案内の送信前の状態です。ご案内をお待ちください。</li><li>請求中：次回お支払のご案内中となります。ご案内を確認の上、ご入金ください。</li><li>支払期限切れ：ご案内したお支払期限を過ぎても入金が確認できていない状態です。早急にお支払ください。</li><li>請求不可：お支払期限を過ぎても入金が確認できないため、購入に制限をかけている状態です。早急にお支払ください。</li><li>完了：お支払が完了しております。</li></ul>'
};
const acc = t => { if (!ACC[t]) throw new Error('本文なし: ' + t); return `<details class="acc"><summary>${t}</summary><div class="acc-body">${ACC[t]}</div></details>`; };
const pager = (count, n = 5, prev) => `<div class="pager-row">${count ? `<span class="note">${count}</span>` : ''}<nav class="pager" aria-label="ページ送り">${prev ? '<span class="pager__prev">前へ</span>' : ''}<a href="#" aria-current="page">1</a>${Array.from({ length: n - 1 }, (_, k) => `<a href="#">${k + 2}</a>`).join('')}<a class="pager__next" href="#">次へ ›</a></nav></div>`;
const seller = '<a href="#" class="o-seller">『販売者情報』</a>';
const noteBox = (t, b) => `<div class="warn warn--plain"><strong>${t}</strong><div class="note-body">${b}</div></div>`;
const grid2 = items => `<div class="grid-2">${items.join('')}</div>`;
const p = t => `<p class="lead">${t}</p>`;

// ========== 注文履歴 ==========
// 公開リポジトリのため口座情報はダミー
const BANKS = [['○○銀行', '記号00000　番号00000000', 'カ）サンプル'], ['△△銀行', '○○支店（000）　普通口座0000000', 'カ）サンプル']];
const SEC = [['unpaid', '未入金注文情報'], ['banksplit', '銀行振込・郵便振替分割払い一覧'], ['creditsplit', 'クレジット複数回払い一覧'], ['history', '購入履歴一覧'], ['tokuten', 'アフィリエイター特典一覧'], ['subs', '月額課金サービス 受信中一覧'], ['invoice', '適格請求書ダウンロード']];
const CREDIT_NOTE = 'クレジット複数回払いは、毎月の「初回の支払いを行った日付」に自動で決済が行われます。<br>（例：初回が1/10の場合は2/10、1/31の場合は2/28になります。）<br>支払いが行われるカードは、初回購入時に入力されたカードとなります。';
const GUIDE = [['【銀行振込･郵便振替】', '入金確認は土日祝祭日を除く平日営業日の10：00～、13：00～、15：00～、17：00～より順次行っております。<br>繁忙期を除き、原則お振込みから翌営業日以内に確認が行われます。<br>詳しくは <a href="#">インフォトップガイドライン</a> をお読み下さい。'], ['【コンビニ決済】', '「決済選択ページ」のリンク先で受付番号をご確認して、お支払いください。<br>※注文日より14日が過ぎますとお支払いが出来なくなりますのでご注意ください']];
const ORDERS = [
  { d: '2026/10/29', id: '10064359', n: 'ロト7アタッカー', p: '¥19,800', f: 'zip（保護）', pr: '－', dl: '[2026/11/12]までダウンロードできます' },
  { d: '2026/10/02', id: '12340456', n: '動画教材の例', p: '¥19,800', f: 'zip', pr: '不可', dl: '[2026/10/16]までダウンロードできます', pc: 1 },
  { d: '2026/10/30', id: '10064458', n: 'Web Contents', p: '¥107,800', f: '－', pr: '－', msg: '商品は販売者よりメールで送信されます。' },
  { d: '2022/04/26', id: '19486', n: '我慢しないで痩せる方法', p: '¥19,800', f: 'jpg', pr: '－', msg: '期限切れ[2022/05/10]', red: 1 }
];
const orderCard = o => `<div class="o-card${o.pc ? ' pc-only pc-flex' : ''}">${meta('入金日 ' + o.d, '注文ID ' + o.id)}<div><a class="o-title" href="#">${o.n}</a><br>${seller}</div><div class="o-price-row"><span class="o-price">${o.p}</span><span class="chip">形式：${o.f}</span><span class="chip">印刷：${o.pr}</span></div>${o.dl ? `<div class="stack" style="gap:6px"><a class="btn btn--primary btn--block" href="#">${i('dl')}ダウンロード</a><span class="note" style="text-align:center">${o.dl}</span></div>` : `<div class="o-msg${o.red ? ' o-msg--red' : ''}">${o.msg}</div>`}<div class="o-actions"><a class="btn btn--sm pc-only" href="#" style="display:inline-flex">評価</a><a class="btn btn--sm" href="#">${i('chat')}お問い合わせ</a><a class="sp-only" href="#" style="font-size:13px">インフォプレナー：販売者名</a></div></div>`;
const TOKUTEN_NOTE = '※購入後14日以内が商品、およびアフィリエイター特典のダウンロード期間になります。<br>　商品ファイルをダウンロードし、必ず保存してください。<br>　尚、ダウンロード期間の過ぎた商品は、弊社からの受渡しは行えません。各販売者様にお問合わせください。<br>※配送版で購入した商品は「配送」と表示されます。<br>※無料期間中は特典のダウンロードはできません。<br>　商品配送のルールや期日等は、販売者様に直接お問い合わせください。<br><a href="#">▼ダウンロードに関するお問い合わせはこちら</a>';
function order() {
  const banks = `<section class="fixed-box"><h2>${i('doc')}振込口座一覧</h2><div class="grid-2">${BANKS.map(([b, n, a]) => `<div class="bank"><strong>${b}</strong><b>${n}</b><span>${a}</span></div>`).join('')}</div><p class="note" style="margin-top:12px">※○○銀行以外から、弊社○○銀行口座へお振込みの場合、下記情報にてお振込み下さい。<br>○○銀行　○○店　普通口座：0000000　カ)サンプル</p></section>`;
  const tabs = `<nav class="anchor-tabs" aria-label="ページ内リンク">${SEC.map(([id, t]) => `<a href="#sec-${id}"${id === 'invoice' ? ' class="pc-only pc-flex"' : ''}>${t}<span aria-hidden="true">▼</span></a>`).join('')}</nav>`;
  const guide = `<div class="guide">${GUIDE.map(([t, b]) => `<div><strong>${t}</strong><p>${b}</p></div>`).join('')}<div class="pc-only"><strong>【分割決済・月額課金サービス】</strong><p>以下のクレジットカード変更フォームより、有効なクレジットカード情報へ変更をお願いいたします。<br>※カード情報変更は次回決済日の3営業日前までにお願いいたします。</p><a class="btn btn--outline" href="card-form.html" style="margin-top:8px">${i('card')}クレジットカード情報の変更はこちら</a></div></div>`;
  const unpaid = [['2026/09/09', '30199', '文章自動作成ツール“PSW_ver.2”『2014年インフォトップ殿堂入り商品』', '￥950', '￥0', '￥950'], ['2025/12/02', '29522', '物販', '￥10,000', '￥500', '￥10,500']].map(([d, id, n, a, s, t]) => card(meta('注文日 ' + d, '注文ID ' + id) + `<a class="o-title" href="#" data-lp>${n}</a>` + kv([['金額', a], ['送料', s], ['合計金額', t, 1], ['支払い方法', '銀行振込・郵便振替']], 4, 2), 1));
  const bs = [['29686', '2回払い 継続中(1/2)', '分割テスト２', '￥5,000'], ['29522', '6回払い 継続中(1/6)', '物販', '￥10,000']].map(([id, st, n, a]) => card(`<div class="o-meta"><span>注文ID ${id}</span><span class="badge badge--blue">${st}</span></div><a class="o-title" href="#" data-lp>${n}</a>` + kv([['過去の入金確定日', '--'], ['金額', a, 1]], 2, 2)));
  const ctlPc = `<div class="ctl pc-only pc-flex"><label class="check"><input type="checkbox">過去に注文した情報を表示させる</label><button class="btn btn--dark btn--sm" type="button">表示</button></div>`;
  const ctlSp = `<div class="ctl ctl--nowrap sp-only"><label class="check"><input type="checkbox">4ヶ月以上前のデータを表示する</label><button class="btn btn--dark btn--sm" type="button" style="margin-left:auto">更新</button></div>`;
  return shell('注文履歴', '注文履歴', `${h1('注文履歴一覧')}<div class="pc-only">${ad('【仮】自社バナー', 600, 120, 1)}</div>${banks}${tabs}
  ${panel('未入金注文情報', 'alert', `<div class="stack">${guide}${grid2(unpaid)}${pager('24件中1～10件')}</div>`, 'unpaid')}
  ${panel('銀行振込・郵便振替分割払い一覧', 'doc', `<div class="stack">${p('銀行振込・郵便振替の分割払いのご案内は、初回入金確定日を基準として毎月ご案内致します。')}${grid2(bs)}${pager('12件中1～10件')}</div>`, 'banksplit')}
  ${panel('クレジット複数回払い一覧', 'card', `<div class="stack">${p(CREDIT_NOTE)}${grid2([card(`<div class="o-meta"><span>注文ID 8798216</span><span class="badge badge--amber">10回払い（4/10）自動停止</span></div><a class="o-title" href="#" data-lp>【分割】アフィLab</a>` + kv([['最近の支払日', '2020/06/21'], ['金額', '¥25,420', 1]], 2, 2))])}${pager('11件中1～10件', 2)}</div>`, 'creditsplit')}
  ${panel('購入履歴一覧', 'dl', `<div class="stack">${ctlSp}<div class="pc-only" style="text-align:right"><a class="btn btn--sm" href="#" style="border-radius:16px">入金日▼</a></div>${grid2(ORDERS.map(orderCard))}${ctlPc}<div class="pc-only">${acc('ダウンロード後の操作について')}</div><div class="sp-only">${acc('ダウンロード後の操作・閲覧方法について')}</div></div>`, 'history')}
  ${panel('アフィリエイター特典一覧', 'star', `<div class="stack">${card(meta('注文日 2026/10/20', '注文ID 12345678') + `<div class="o-price-row"><div><a class="o-title" href="#" data-lp>商品名が入ります</a><br><span class="note">特典名：特典名が入ります</span></div><a class="btn btn--outline btn--sm" href="#" style="margin-left:auto">特典をダウンロード</a></div>`)}<p class="note">ゲスト購入指定商品（アフィリエイター特典は注文確定メールに記載のURLからのダウンロードとなります）</p>${noteBox('■注意事項', TOKUTEN_NOTE)}</div>`, 'tokuten')}
  ${panel('月額課金サービス 受信中一覧', 'cal', `<div class="stack">${card(`<div class="o-price-row"><div><a class="o-title" href="#" data-lp>【テスト】月額課金商品01（バックエンド付き）</a><br><span class="note">インフォプレナー名：販売者名</span></div><span class="o-price" style="margin-left:auto">月額 ¥2,000</span><a class="btn btn--sm" href="#">${i('chat')}お問い合わせ</a></div>`)}${pager('16件中1～10件', 2)}<p class="note">※上記、「月額サービス料」は「継続サービス金額（2回目以降）」の金額となります。</p><div><a class="btn btn--outline" href="monthly.html">月額課金サービス一覧はこちら</a></div></div>`, 'subs')}
  <div class="pc-only">${panel('適格請求書ダウンロード', 'doc', `<div class="stack"><div style="display:flex;gap:8px"><select class="select"><option>2026年</option></select><select class="select"><option>10月</option></select><button class="btn btn--dark" type="button" style="min-height:40px">検索</button></div><div class="table-wrap"><table class="table"><thead><tr>${['取引日', '取消日(※)', '販売者', '注文ID', '商品名', '支払金額', '適格請求書（CSV）'].map(t => `<th>${t}</th>`).join('')}</tr></thead><tbody><tr>${['2026/10/20', '－', '販売者名', '12345678', '商品名が入ります', '¥4,980'].map(t => `<td>${t}</td>`).join('')}<td><a class="btn btn--sm" href="#">ダウンロード</a></td></tr></tbody></table></div>${acc('適格請求書について（注意事項7項目）')}</div>`, 'invoice')}</div>`);
}

// ========== 分割決済 ==========
function split() {
  const creditPc = [{ id: '7097347', st: ['完了', 'green'], n: 'SNS広告アフィリエイト塾左脳系', it: [['毎月支払金額', '¥48,195', 1], ['支払残額', '¥0'], ['決済日', '毎月24日'], ['支払回数', '全5回（5/5）'], ['支払完了予定日', '2017/01/24 完了']] }, { id: '21530', st: ['手動停止', ''], n: '[test]迂回テーブルレコードなし', it: [['毎月支払金額', '¥5,025', 1], ['支払残額', '¥10,050'], ['決済日', '毎月01日'], ['支払回数', '全2回（1/2）'], ['支払完了予定日', '銀行複数回払いに変更済']] }];
  const creditSp = [{ id: '24225', st: ['手動停止', ''], n: '児島_物販', it: [['毎月支払金額', '¥5,152', 1], ['決済日', '毎月06日'], ['支払回数', '全12回（2/12）'], ['支払完了予定日', '2024/11/06 完了']], c: 1 }, { id: '23977', st: ['手動停止', ''], n: '物販商品', it: [['毎月支払金額', '¥20,152', 1], ['決済日', '毎月04日'], ['支払回数', '全3回（1/3）'], ['支払完了予定日', '2023/11/04 完了']] }];
  const cc = (r, cols) => card(`<div class="o-meta"><span>注文ID ${r.id}</span><span class="badge${r.st[1] ? ' badge--' + r.st[1] : ''}">${r.st[0]}</span></div><div><a class="o-title" href="#">${r.n}</a><br>${seller}</div>` + kv(r.it, cols, 2) + (cols === 2 ? (r.c ? `<a class="btn btn--block" href="card-form.html">${i('card')}カード情報 変更</a>` : '<span class="note">カード情報：－</span>') : ''));
  const credit = `<div class="stack">${p(CREDIT_NOTE)}<div class="stack pc-only pc-flex">${creditPc.map(r => cc(r, 5)).join('')}<div style="display:flex;align-items:center;gap:12px"><a class="btn btn--outline" href="card-form.html">${i('card')}クレジットカード情報の変更はこちら</a><div style="flex:1">${pager('21件中1～20件')}</div></div>${acc('【支払い状況が「リトライ」の場合】')}${acc('【支払い状況が「自動停止」の場合】')}${acc('クレジットカード請求名について')}</div><div class="stack sp-only">${creditSp.map(r => cc(r, 2)).join('')}${pager('21件中1～20件')}<p class="note">※毎月の支払金額は決済代行会社毎に異なるため概算で表示しています。詳細は各決済代行会社にお問い合わせください。</p><p class="note">※クレジットカード情報変更をご希望の場合は、「変更」ボタンをクリックし、クレジットカード情報申請をお願いいたします。</p>${acc('【支払い状況が「請求中」の場合】')}${acc('クレジットカード請求名について')}</div></div>`;
  const bankRows = [{ id: '23980', st: ['支払期限切れ', 'red'], tag: 'クレジットカード複数回払いから移行', n: '物販商品', v: ['－', '¥20,000', '¥20,000', '¥60,752', '－', '－', '3回中3回'] }, { id: '23631', st: ['完了', 'green'], n: 'セミナー／イベント商品', v: ['¥8,335', '¥8,333', '¥8,333', '¥0', '2023/06/23', '2023/07/13', '6回中6回'] }];
  const bank = `<div class="stack"><p class="lead"><span class="pc-only">銀行振込・郵便振替の分割払いのご注文は、初回入金確定日を基準として毎月ご案内致します。<br>（例：初回入金確定日が1/10の場合、次回請求日（2/10）の1週間前（2/3）からご案内致します。）</span><span class="sp-only">銀行振込・郵便振替の分割払いのご案内は、初回入金確定日を基準として毎月ご案内致します。<br>（例：初回入金確定日が1/10の場合、次回課金日（2/10）の1週間前(2/3)からご案内致します。）</span></p>${bankRows.map(r => card(`<div class="o-meta"><span>注文ID ${r.id}${r.tag ? ` <span class="chip">${r.tag}</span>` : ''}</span><span class="badge badge--${r.st[1]}">${r.st[0]}</span></div><div><a class="o-title" href="#">${r.n}</a><br>${seller}</div>` + kv([['初回支払金額', r.v[0]], ['<span class="pc-only">2回目支払金額</span><span class="sp-only">2回目支払額</span>', r.v[1]], ['<span class="pc-only">3回目以降支払金額</span><span class="sp-only">3回目以降支払額</span>', r.v[2]], ['支払残額', r.v[3], 1], ['初回入金確定日', r.v[4]], ['前回入金確定日', r.v[5]], ['<span class="pc-only">支払回数</span><span class="sp-only">お支払回数</span>', r.v[6]]], 4, 2))).join('')}<p class="note" style="text-align:right">5件中1～5件</p><p class="note">※初回支払金額には配送版の場合、別途送料が加算されます。<br>※発生した端数は2回目の支払金額に加算されます。</p>${acc('お支払状況は、以下の表示となります。')}</div>`;
  const b = panel('銀行振込・郵便振替分割払いお支払い状況', 'doc', bank), c = panel('クレジット複数回払いお支払い状況', 'card', credit);
  return shell('分割決済', '分割決済', `${h1('分割決済支払い状況')}<div class="order-swap">${b}${c}</div>`);
}

// ========== 月額課金 ==========
const SUBS = [
  { n: 'インターネット総合集客ツール アメプレスPro', s: '株式会社アイピリカ', fee: '¥2,980', day: '毎月28日', st: ['請求中', 'amber'], pay: 'クレジット', auto: '無', id: '10002724', dl: 'pdf' },
  { n: 'MS：無料あり送料ありアフィあり', s: '販売者名', fee: '¥1,000', day: '毎月26日', st: ['支払済', 'green'], pay: 'PayPal', auto: '無', id: '30185' },
  { n: '月額課金システム　無料あり', s: '株式会社販売商事', fee: '¥2,980', day: '毎月25日', st: ['停止', ''], pay: 'クレジット', auto: '*有(0/10回)<br><small>2019/10/25 に自動退会</small>', id: '－', q: '退会申請する' }
];
const MN_PC = '※決済日の前日23時59分59秒（日本時間）までに退会をしなかった場合、翌月のサービス継続が確定し決済されます。<br>　次回課金前に退会希望の際は、決済日の前日までに退会をお願いいたします。<br>※時間は弊社サーバーの時間が基準になりますので、余裕を持ってお手続きをお願いいたします。<br>※決済日当日の「午前0時～17時まで」の間は決済処理中のため退会処理の部分が「決済中」となり、<br>　その間はマイページからの退会のお手続きはできません。決済日当日に退会のお手続きをされる場合は、<br>　17時以降にマイページにログインし、退会手続きをお願いいたします。<br>※自動退会*無の場合、「退会する」をクリックすると退会ができます。<br>※自動退会*有の場合、記載回数の決済終了後、決済が終了いたします。<br>　また、「退会する」をクリックすると販売者へ退会申請が送信されます。（退会申請中は「申請取下」が可能です）';
const MN_SP = '<strong>各サービスの決済日・退会日にご注意ください</strong><br>※自動退会*無の場合、「退会する」をクリックすると退会ができます。<br>自動退会*有の場合、記載回数の決済終了後、決済が終了いたします。<br>販売者が定めた回数決済が完了しないと退会できません。予めご了承ください。';
function monthly() {
  const sub = s => {
    const pcKv = kv([['月額サービス料', s.fee, 1], ['自動退会', s.auto], ['決済日', s.day], ['支払状況', s.st[0]], ['支払方法', s.pay], ['初回注文ID', s.id]], 3, 2);
    const spKv = kv([['月額サービス料', s.fee, 1], ['決済日', s.day], ['支払方法', s.pay], ['自動退会', s.auto], ['支払状況', s.st[0]], ['初回注文ID', s.id]], 3, 2);
    return card(`<div class="o-head"><div><a class="o-title" href="#" data-lp>${s.n}</a><br><span class="note">${s.s}</span></div><span class="badge${s.st[1] ? ' badge--' + s.st[1] : ''}">${s.st[0]}</span></div><div class="pc-only">${pcKv}</div><div class="sp-only">${spKv}</div>${s.dl ? `<div class="ctl"><span class="note">拡張子：${s.dl}</span><a class="btn btn--primary btn--sm" href="#" style="margin-left:auto">${i('dl')}ダウンロード</a></div>` : ''}<div class="o-btns"><a class="btn sp-only" href="card-form.html">${i('card')}カード情報 変更</a><a class="btn btn--danger" href="monthly-quit.html">${s.q || '退会する'}</a></div>`);
  };
  const hist = card(`<a class="o-title" href="#" data-lp>【テスト】月額課金商品01（バックエンド付き）</a><span class="note">インフォプレナー名：販売者名</span>` + kv([['入会日時', '2019/05/14 13:31'], ['退会日時', '－'], ['初回注文ID', '8361719']], 3, 2));
  const row = t => `<a class="link-row" href="#">${t}<span>›</span></a>`;
  return shell('月額課金サービス', '月額課金', `${h1('月額課金サービス登録一覧')}
  ${panel('受信履歴確認', 'cal', `<div class="stack">${SUBS.map(sub).join('')}${pager('16件中1～10件', 2)}<div class="pc-only"><a class="btn btn--outline" href="card-form.html">${i('card')}クレジットカード情報の変更はこちら</a></div><p class="note">※上記、「月額サービス料」は「継続サービス金額 (2回目以降)」の金額となります。</p><div class="stack pc-only pc-flex">${noteBox('【月額課金サービス注意事項】', MN_PC)}${acc('クレジットカード請求名について')}</div><div class="stack sp-only"><p class="note">※クレジットカード情報変更をご希望の場合は、「変更」ボタンをクリックし、クレジットカード情報申請をお願いいたします。</p>${acc('■クレジットカード請求名について')}${acc('ダウンロード後の操作・閲覧方法について')}${noteBox('■注意事項', MN_SP)}</div></div>`)}
  <section class="panel stack"><p class="lead sp-only">月額課金サービスの課金スケジュールは、以下のURLよりご確認下さい。</p>${row('<span class="pc-only">▼</span>インフォトップご利用マニュアル　<small>月額会員サービスの入会方法</small>')}<p class="lead">月額会員サービスのよくあるお問合せは、以下のURLよりご確認下さい。</p>${row('<span class="pc-only">▼</span>FAQ　<small>月額課金サービスについての項目</small>')}</section>
  ${panel('過去の入退会履歴', 'doc', `<div class="stack">${hist}${pager('29件中1～10件')}</div>`)}`);
}
function monthlyQuit() {
  const svc = [['サービス名', '【テスト】月額課金商品01（バックエンド付き）'], ['インフォプレナー名', '販売者名'], ['月額サービス料', '2,000'], ['決済日', '毎月14日']];
  return header({ member: true, activeTab: '月額課金サービス', spActive: '月額課金', cats: false }) + `
<div class="pc-only" style="padding-top:16px"><span class="pr-label">--PR--</span>${ad('広告タグ', 576, 60)}</div>
<div class="page wrap">${sideMember({ recent: true })}<main class="page__main">${h1('マイページ')}${panel('月額課金サービス', 'cal', `<div class="stack"><strong style="font-size:15px">退会確認</strong>${kv(svc, 4, 1)}<div class="warn warn--red"><p class="warn__t">${i('alert')}退会にご注意ください</p><p class="note-body">本サービスはクレジットカードの自動引き落としで決済されています。<br>一度退会すると、再度入会している状態に戻すことが出来ません。</p></div><div class="btn-row"><a class="btn btn--primary" href="monthly.html">退会する</a><a class="btn" href="monthly.html">戻る</a></div></div>`)}</main></div>` + footer({ pc: 'member', sp: 'member' });
}

// ========== メッセージ ==========
const MENU = ['送信履歴', '受信履歴', '受信設定', 'ゴミ箱'];
const HREF = { 送信履歴: 'message-sent.html', 受信履歴: 'message.html', 受信設定: 'message-setting.html', ゴミ箱: 'message-trash.html' };
const msgTabs = cur => `<nav class="msg-tabs sp-only" aria-label="WEBメール">${MENU.map(t => `<a href="${HREF[t]}"${t === cur ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav>`;
const msgShell = (cur, main) => shell('WEBメール', 'WEBメール', `${h1('WEBメール')}${msgTabs(cur)}${main}`, { msgMenu: MENU.map(t => [t, HREF[t], t === cur]) });
const autoDel = `<span class="auto-del">自動削除：削除<button class="btn btn--sm" type="button" style="min-height:28px;padding:0 10px;font-size:12px">変更</button></span>`;
const bulk = `<div class="ctl sp-only"><button class="btn btn--danger btn--sm" type="button">一括削除</button><span class="note">※全てのメールが削除されます。</span></div>`;
const row = ({ s, href, m, un, read, right, spBtns, select }) => `<li class="msg-row${un ? ' is-unread' : ''}"><div class="msg-row__main">${select ? `<label class="msg-sel sp-only"><input type="checkbox"><span>選択</span></label>` : ''}<div class="msg-row__body">${read !== undefined ? `<span class="msg-state">${un ? `<span class="pc-only">${i('mail')}</span><span class="badge badge--red">未読</span>` : '<span class="badge">既読</span>'}</span>` : ''}<a class="msg-row__s" href="${href}">${s}</a><div class="msg-row__meta">${m.map(x => `<span>${x}</span>`).join('')}</div></div></div><div class="msg-row__right pc-only pc-flex">${right}</div><div class="msg-row__sp sp-only">${spBtns}</div></li>`;
function message() {
  const MS = [['販売者からの返信メールだよ21', '2019/10/01 15:50', true], ['販売者からの返信メールだよ20', '2019/10/01 15:49', false]];
  return msgShell('受信履歴', panel('受信履歴', 'mail', `<div class="stack">${pager('', 5, true)}${bulk}<ul class="msg-list">${MS.map(([s, d, un]) => row({ s, href: 'message-detail.html', un, read: 1, select: 1, m: ['受信日 ' + d, '送信者ID sellerid01', '送信者名 販売者名'], right: autoDel + '<button class="btn btn--danger btn--sm" type="button">削除</button>', spBtns: '<a class="btn" href="message-detail.html">内容確認</a><button class="btn btn--danger" type="button">削除</button>' })).join('')}</ul>${pager('', 5, true)}</div>`));
}
const body = t => `<div class="msg-body">${t}</div>`;
const backBtn = h => `<div class="btn-row"><a class="btn" href="${h}">戻る</a></div>`;
const messageDetail = () => msgShell('受信履歴', panel('受信履歴　詳細', 'mail', `<div class="stack"><div class="msg-head"><strong>販売者からの返信メールだよ21</strong><div class="msg-row__meta"><span>受信日 2019/10/01 15:50</span><span>送信者ID sellerid01</span><span>送信者名 販売者名</span></div></div>${body('（メッセージ本文が入ります）<br><span class="note">&gt; 引用部分などもそのまま表示</span>')}<div class="msg-acts">${autoDel}<span class="btn-row" style="margin-left:auto"><a class="btn" href="message.html">戻る</a><button class="btn btn--danger" type="button">削除</button></span></div></div>`));
const SENT = [['test', '2019/10/01 14:51', 'sellerid01'], ['（例）商品についての質問', '2019/09/30 10:12', 'sellerid02']];
const messageSent = () => msgShell('送信履歴', panel('送信履歴', 'mail', `<ul class="msg-list">${SENT.map(([s, d, to]) => row({ s, href: 'message-sent-detail.html', m: ['送信日 ' + d, '宛先 ' + to], right: autoDel + '<button class="btn btn--danger btn--sm" type="button">削除</button>', spBtns: '<a class="btn" href="message-sent-detail.html">内容確認</a><button class="btn btn--danger" type="button">削除</button>' })).join('')}</ul>`));
const messageSentDetail = () => msgShell('送信履歴', panel('送信履歴　詳細', 'mail', `<div class="stack">${kv([['送信日', '2019/06/10 14:44'], ['宛先ID', 'sellerid01'], ['宛先', '販売者名']], 3, 1)}<div><span class="note">件名</span><br><strong style="font-size:18px">（例）商品についての質問</strong></div><div><span class="note">内容</span>${body('（メッセージ本文が入ります）')}</div>${backBtn('message-sent.html')}</div>`));
const recvDialog = `<dialog id="recv-dialog" class="dlg" aria-labelledby="recv-dialog-t"><form method="dialog" class="dlg__body"><h2 id="recv-dialog-t" class="dlg__t">受信設定の変更</h2><p class="note">インフォプレナー：<strong data-dialog-name>（例）販売者名</strong></p><div class="radio-row" style="flex-direction:column;align-items:flex-start;gap:10px"><label><input type="radio" name="recv" checked>受信する</label><label><input type="radio" name="recv">受信しない</label></div><p class="note">「受信しない」にすると、このインフォプレナーからのメールはWEBメールに届かなくなります。</p><div class="btn-row"><button class="btn" value="cancel" type="submit">キャンセル</button><button class="btn btn--primary" value="ok" type="submit">変更する</button></div></form></dialog>`;
function messageSetting() {
  const R = [['sellerid01', '（例）販売者名', '0'], ['sellerid02', '（例）販売者名', '12']];
  const ctl = '<span class="badge badge--green">受信</span><button class="btn btn--sm" type="button" data-open-dialog="recv-dialog">変更</button>';
  return msgShell('受信設定', recvDialog + panel('受信設定', 'mail', `<div class="table-wrap pc-only"><table class="table"><thead><tr><th>インフォプレナーID</th><th>インフォプレナー名</th><th style="text-align:right">受信回数</th><th>設定</th></tr></thead><tbody>${R.map(([a, b, c]) => `<tr><td>${a}</td><td>${b}</td><td style="text-align:right;font-weight:700">${c}</td><td><span style="display:inline-flex;gap:8px;align-items:center">${ctl}</span></td></tr>`).join('')}</tbody></table></div><div class="stack sp-only">${R.map(([a, b, c]) => card(kv([['インフォプレナーID', a], ['インフォプレナー名', b]], 2, 2) + `<div class="ctl"><span class="note">受信回数</span><strong style="font-size:16px">${c}</strong><span style="margin-left:auto;display:inline-flex;gap:8px;align-items:center">${ctl}</span></div>`)).join('')}</div>`));
}
function messageTrash() {
  const T = [['（例）削除したメッセージの件名', '受信履歴', 'blue', ['受信日 2019/10/01 15:30', '送信者ID sellerid01', '送信者名 販売者名']], ['（例）削除した送信メッセージの件名', '送信履歴', 'amber', ['送信日 2019/09/30 10:12', '宛先 sellerid02']]];
  return msgShell('ゴミ箱', panel('ゴミ箱', 'mail', `<div class="stack">${bulk}<ul class="msg-list">${T.map(([s, b, tone, m]) => row({ s: `<span class="badge badge--${tone} sp-only" style="display:inline-flex;margin-bottom:4px">${b}</span><br class="sp-only">${s}`, href: 'message-trash-detail.html', m, right: `<span class="badge badge--${tone}">${b}</span><button class="btn btn--outline btn--sm" type="button">元に戻す</button>`, spBtns: '<button class="btn btn--outline" type="button">送受信履歴に戻す</button><button class="btn btn--danger" type="button">削除</button>' })).join('')}</ul></div>`));
}
const messageTrashDetail = () => msgShell('ゴミ箱', panel('ゴミ箱　詳細', 'mail', `<div class="stack">${kv([['受信日', '2019/10/01 15:30'], ['送信者ID', 'sellerid01'], ['送信者名', '販売者名']], 3, 1)}<div class="ctl"><span class="note">操作</span><button class="btn btn--outline btn--sm" type="button"><span class="pc-only">元に戻す</span><span class="sp-only">送受信履歴に戻す</span></button></div><div><span class="note">件名</span><br><strong style="font-size:18px">（例）削除したメッセージの件名</strong></div><div><span class="note">内容</span>${body('（メッセージ本文が入ります）')}</div>${backBtn('message-trash.html')}</div>`));

// ========== 会員情報 ==========
const inp = (ph = '', w) => `<input class="input" type="text" placeholder="${ph}"${w ? ` style="width:${w}"` : ''}>`;
const sel = (t, w) => `<select class="input"${w ? ` style="width:${w}"` : ''}><option>${t}</option></select>`;
const radios = (name, a, b) => `<div class="radio-row"><label><input type="radio" name="${name}" checked>${a}</label><label><input type="radio" name="${name}">${b}</label></div>`;
function member() {
  const MAIL = '※携帯メールアドレスでご登録の皆様へ<br>キャリアドメイン（@docomo, @ezweb, @softbank,@icloud )は受信しづらい状態となります。 GmailやYahooメール等、 キャリアドメイン以外のアドレスのご登録を推奨しております。<br>ドメイン指定受信またはアドレス指定受信の設定をされているお客様は、『@infotop.jp』の追加設定をお願いいたします。';
  const NEWS = '※「受け取らない」を選択するとご注文いただいた商品に関するお知らせは届きますが、それ以外の運営に関わるインフォトップからのご案内は配信されません。<br>※「受け取らない」を選択された場合でも、販売者様からのメールは配信される場合がございます。インフォトップからのお知らせメールと販売者様から配信されるご案内メールは別となりますので、あらかじめご了承ください。<br>（販売者様からのご案内メールを配信停止希望の場合は、販売者様宛に別途直接ご連絡していただく必要がございます）';
  const name = (a, b) => `<div class="inline">姓 ${inp().replace('placeholder=""', `value="${a}"`)} 名 ${inp().replace('placeholder=""', `value="${b}"`)}</div>`;
  const rows = [
    ['氏名', 1, name('山田', '太郎')], ['ふりがな', 1, name('やまだ', 'たろう')], ['性別', 0, radios('sex', '男性', '女性')],
    ['郵便番号', 1, `<div class="inline">${inp()}－${inp()}</div><span class="note">（半角数字　例：162-0846）</span>`], ['都道府県', 1, sel('選択して下さい', 'min(240px,100%)')],
    ['市区町村', 1, inp('例：新宿区市谷左内町')], ['それ以降の住所（建物名）', 1, inp('例：21番地 市谷左内坂ビル1階')],
    ['生年月日', 0, `<div class="inline">${sel('--')}年${sel('--')}月${sel('--')}日</div>`],
    ['電話番号', 1, `<div class="inline">${inp()}－${inp()}－${inp()}</div><span class="note pc-only">（半角数字　例：03-1234-5678）</span>`],
    ['メールアドレス', 1, `<input class="input" type="email" value="name@example.com"><span class="note">${MAIL}</span><a href="#" style="font-size:13px">キャリアドメインとは？</a>`],
    ['<span class="pc-only">メールアドレス（確認用）</span><span class="sp-only">メールアドレス（確認）</span>', 1, '<input class="input" type="email" value="name@example.com">'],
    ['パスワード', 0, `<input class="input" type="password" autocomplete="new-password"><label class="check"><input type="checkbox">パスワードを表示する</label><span class="note"><span class="pc-only">パスワードの変更を希望される場合のみご記入ください。</span><span class="sp-only">変更を希望される場合のみ記入してください。</span><br>パスワードは「半角英字、半角数字」をそれぞれ1文字以上必ず使用し、8文字以上20文字以下で設定してください。<br>（例）1nf0t0pjp</span>`],
    ['パスワード（確認用）', 0, '<input class="input" type="password" autocomplete="new-password">'],
    ['インフォトップからのお知らせ', 1, radios('news', '受け取る', '受け取らない') + `<span class="note">${NEWS}</span>`], ['郵送DM受取', 1, radios('dm', '受け取る', '受け取らない')]
  ];
  return shell('会員情報', '会員情報', `${h1('会員登録情報変更')}<p class="lead"><span class="sp-only">下記入力フォームにご記入ください。<br></span><span class="req">*</span>　印は必須項目となります。</p><form class="stack" action="member-confirm.html"><section class="panel form-rows">${rows.map(([l, r, c]) => `<div class="form-row form-row--inline"><span class="form-label">${l}${r ? '<span class="req">*</span>' : ''}</span><div class="stack" style="gap:6px">${c}</div></div>`).join('')}</section><div class="btn-row"><button class="btn btn--primary btn--lg" type="submit">確認</button></div></form><section class="withdraw-link"><h2>会員退会</h2><a class="btn btn--danger" href="withdraw.html">退会</a></section>`);
}
const CONF = [['氏名', '山田 太郎'], ['ふりがな', 'やまだ たろう'], ['性別', '男性'], ['郵便番号', '162-0846'], ['都道府県', '東京都'], ['市区町村', '新宿区市谷左内町'], ['それ以降の住所（建物名）', '21番地 市谷左内坂ビル1階'], ['生年月日', '1980年1月1日'], ['電話番号', '03-1234-5678'], ['メールアドレス', 'name@example.com'], ['パスワード', '（変更あり）'], ['インフォトップからのお知らせ', '受け取る'], ['郵送DM受取', '受け取る']];
const memberConfirm = () => shell('会員情報', '会員情報', `${h1('会員登録情報変更　確認')}<section class="panel"><dl class="confirm">${CONF.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl></section><div class="btn-row btn-row--rev-sp"><a class="btn btn--primary btn--lg" href="member-done.html">登録</a><a class="btn btn--lg" href="member.html">戻る</a></div>`);
const memberDone = () => shell('会員情報', '会員情報', `${h1('会員登録情報変更　完了')}<section class="panel"><div class="center-box"><span class="ok-mark">${i('check')}</span><p style="font-size:16px"><span class="pc-only">登録情報を変更しました。</span><span class="sp-only">登録情報を変更しました</span></p><a class="btn btn--primary btn--lg" href="mypage.html"><span class="pc-only">購入者マイページへ</span><span class="sp-only">購入者マイページ</span></a></div></section>`);

// ========== カード情報変更 ==========
const CARDS = [[['[test]決済ライン迂回設定商品', '¥10,050', '13日', '2023/12/13'], ['[test]迂回テーブルレコードなし', '¥5,025', '28日', '2023/05/28']], [['テスト', '¥13,433', '14日', '2023/08/14']], [['POSEIDON', '¥338', '01日', '2024/08/01'], ['POSEIDON', '¥1,005', '09日', '2024/03/09'], ['POSEIDON', '¥1,005', '13日', '2023/12/13']]];
const cardForm = () => header({ member: true, spActive: '', cats: false }) + `
<div class="pc-only" style="padding-top:16px"><span class="pr-label">--PR--</span>${ad('広告タグ', 576, 60)}</div>
<div class="page wrap">${sideMember({})}<main class="page__main">${h1('クレジットカード情報変更フォーム')}<p class="lead">クレジットカードの変更を行いたいサービスをご選択の上、変更ボタンを押してください。</p><form class="stack" action="card-input.html">${CARDS.map((g, x) => `<label class="card-group"><span class="card-group__head"><span class="check"><input type="radio" name="card"${x === 0 ? ' checked' : ''}><strong>このカードを変更する</strong></span><span class="card-group__no">${i('card')}カード番号（下4桁）<strong>1111</strong></span></span>${g.map(([n, a, d, e]) => `<span class="card-group__row"><span class="o-price-row"><span class="badge badge--blue">分割払い</span><strong>${n}</strong></span>${kv([['毎月支払額', a], ['毎月決済日', d], ['完了予定日', e]], 3, 3)}</span>`).join('')}</label>`).join('')}<div class="btn-row"><button class="btn btn--primary btn--lg" type="submit">変更</button></div></form><section class="panel stack"><div class="warn" style="padding:12px 14px"><strong>【分割決済中の注文情報が無い場合】</strong><p class="note-body">当フォームにて変更することができません。</p></div><p class="lead">カード情報を変更する際、各カード決済代行会社にお問い合わせ頂く必要がございます。<br><a href="#">カード決済代行会社はこちら</a>にてご確認ください。</p><div class="inline-links"><a href="split.html">＞＞分割決済ページへ戻る</a><a href="monthly.html">＞＞月額課金サービスページへ戻る</a></div></section></main></div>` + footer({ pc: 'member', sp: 'member' });
const cardInput = () => `<header class="site-header"><div class="header-main"><span class="logo"><img src="${LOGO}" alt="infotop" width="154" height="48"></span></div></header><main class="wrap stack" style="max-width:832px;padding-block:32px 64px">${h1('カード情報 入力')}<form class="stack" action="card-form.html"><section class="panel form-rows">
<div class="form-row form-row--inline"><span class="form-label">カード番号</span><div class="stack" style="gap:6px"><div class="inline">${[1, 2, 3, 4].map(() => '<input class="input" inputmode="numeric" autocomplete="off" maxlength="4" aria-label="カード番号">').join('-')}</div><span class="note">※ハイフンを抜いて4桁ずつ（16桁未満の場合、最後は2〜3桁）ご入力ください。<br>例) 3761-123456-7890 の場合 → 3761 1234 5678 90</span></div></div>
<div class="form-row form-row--inline"><span class="form-label">有効期限</span><div class="stack" style="gap:6px"><div class="inline">${sel('--')}月 /${sel('--')}年</div><span class="note">例) 有効期限が2026年11月の場合は月に11年に26と入力</span></div></div>
<div class="form-row form-row--inline"><span class="form-label">カード名義人</span><div class="stack" style="gap:6px"><div class="inline">名 : ${inp()} 姓 : ${inp()}</div><span class="note">例)（名）TARO （姓）INFO</span></div></div>
<div class="form-row form-row--inline"><span class="form-label">セキュリティーコード</span><div class="stack" style="gap:6px"><input class="input" inputmode="numeric" autocomplete="off" maxlength="4" style="width:120px"><span class="note">※セキュリティコードとは？<br>カード裏面の署名欄に記載された3桁の数字です。</span></div></div>
</section><div class="btn-row btn-row--rev-pc"><button class="btn btn--primary btn--lg" type="submit">情報変更</button><a class="btn btn--lg" href="card-form.html">戻る</a></div></form></main>`;

module.exports = [
  ['order.html', '注文履歴', order(), true], ['split.html', '分割決済', split(), true], ['monthly.html', '月額課金サービス', monthly(), true], ['monthly-quit.html', '月額課金 退会確認', monthlyQuit(), true],
  ['message.html', 'WEBメール 受信履歴', message(), true], ['message-detail.html', 'WEBメール 受信履歴詳細', messageDetail(), true], ['message-sent.html', 'WEBメール 送信履歴', messageSent(), true], ['message-sent-detail.html', 'WEBメール 送信履歴詳細', messageSentDetail(), true], ['message-setting.html', 'WEBメール 受信設定', messageSetting(), true], ['message-trash.html', 'WEBメール ゴミ箱', messageTrash(), true], ['message-trash-detail.html', 'WEBメール ゴミ箱詳細', messageTrashDetail(), true],
  ['member.html', '会員情報', member(), true], ['member-confirm.html', '会員情報 確認', memberConfirm(), true], ['member-done.html', '会員情報 完了', memberDone(), true],
  ['card-form.html', 'クレジットカード情報変更フォーム', cardForm(), true], ['card-input.html', 'カード情報 入力', cardInput(), true]
];
