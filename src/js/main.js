// ドロワー・ログインボックス・アコーディオン・スワイプ・ランキング期間切替・広告を閉じる
(function () {
  var mqPc = window.matchMedia('(min-width: 768px)');

  function openLayer(el, opener) {
    el.classList.add('is-open');
    el.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    el._opener = opener;
    var f = el.querySelector('button, a, input');
    if (f) f.focus();
  }
  function closeLayer(el) {
    el.classList.remove('is-open');
    document.body.style.overflow = '';
    if (el._opener) el._opener.focus();
  }

  var drawer = document.getElementById('drawer');
  document.querySelectorAll('[data-open-drawer]').forEach(function (b) {
    b.addEventListener('click', function () { if (drawer) openLayer(drawer, b); });
  });

  // ヘッダーの「購入者ログイン」：PCはログインボックス、SPはログインページ
  var box = document.getElementById('loginbox');
  document.querySelectorAll('[data-loginbox]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (box && mqPc.matches) { e.preventDefault(); openLayer(box, a); }
    });
  });

  [drawer, box].forEach(function (layer) {
    if (!layer) return;
    layer.addEventListener('click', function (e) {
      if (e.target === layer || e.target.closest('[data-close]')) closeLayer(layer);
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    [drawer, box].forEach(function (l) { if (l && l.classList.contains('is-open')) closeLayer(l); });
  });

  // アコーディオン
  document.querySelectorAll('.acc-btn').forEach(function (b) {
    var panel = document.getElementById(b.getAttribute('aria-controls'));
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!open));
      if (panel) panel.hidden = open;
    });
  });

  // PCのスワイプ（ドラッグ）と送りボタン
  document.querySelectorAll('[data-swipe]').forEach(function (el) {
    var down = false, sx = 0, sl = 0, moved = false;
    el.addEventListener('mousedown', function (e) { down = true; moved = false; sx = e.pageX; sl = el.scrollLeft; el.style.scrollSnapType = 'none'; e.preventDefault(); });
    window.addEventListener('mousemove', function (e) { if (!down) return; var d = e.pageX - sx; if (Math.abs(d) > 4) moved = true; el.scrollLeft = sl - d; });
    window.addEventListener('mouseup', function () { if (down) { down = false; el.style.scrollSnapType = ''; } });
    el.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
    var sec = el.closest('section');
    if (!sec) return;
    sec.querySelectorAll('[data-swipe-dir]').forEach(function (b) {
      b.addEventListener('click', function () { el.scrollBy({ left: Number(b.dataset.swipeDir) * 348, behavior: 'smooth' }); });
    });
  });

  // 売れ筋ランキングの期間（現状は選択状態のみ。データ差し替えは開発側）
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = list.querySelectorAll('[role="tab"]');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.setAttribute('aria-selected', String(x === t)); });
      });
    });
  });

  // オーバーレイ広告を閉じる（表示タイミングは広告配信側で制御）
  document.querySelectorAll('[data-close-overlay]').forEach(function (b) {
    b.addEventListener('click', function () { var o = b.closest('.overlay-ad'); if (o) o.remove(); });
  });

  // 詳細検索の開閉
  document.querySelectorAll('[data-detail-toggle]').forEach(function (b) {
    var panel = document.getElementById(b.getAttribute('aria-controls'));
    function set(open) { b.setAttribute('aria-expanded', String(open)); panel.hidden = !open; }
    b.addEventListener('click', function (e) { e.stopPropagation(); set(panel.hidden); });
    document.addEventListener('click', function (e) { if (!panel.hidden && !e.target.closest('.search-wrap')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { set(false); b.focus(); } });
  });

  // 続きを見る／閉じる
  document.querySelectorAll('[data-more]').forEach(function (b) {
    var body = b.parentElement.querySelector('.item__desc, .rank-row__desc');
    if (!body) return;
    b.addEventListener('click', function () {
      var open = body.classList.toggle('is-open');
      b.setAttribute('aria-expanded', String(open));
      b.textContent = open ? '閉じる ▲' : '続きを見る ▼';
    });
  });

  // ログイン：未入力・不一致の注意書き（実際の照合はサーバー側。デモでは未入力で表示）
  document.querySelectorAll('[data-login]').forEach(function (f) {
    var err = f.querySelector('.form-error');
    f.addEventListener('submit', function (e) {
      var ng = false;
      f.querySelectorAll('input[type="email"], input[type="password"]').forEach(function (x) {
        var bad = !x.value.trim();
        x.classList.toggle('is-error', bad);
        if (bad) ng = true;
      });
      if (ng) { e.preventDefault(); err.hidden = false; err.scrollIntoView({ block: 'nearest' }); }
    });
  });

  // トップのスライダー（自動送り・前後ボタン・ドット）
  document.querySelectorAll('[data-hero]').forEach(function (hero) {
    var track = hero.querySelector('[data-hero-track]');
    var dots = hero.querySelectorAll('[data-dot]');
    var busy = false, timer = 0;
    var GAP = 16, MS = 450;
    function mark() {
      var cur = track.children[2];
      Array.prototype.forEach.call(track.children, function (el) { el.classList.toggle('is-cur', el === cur); });
      dots.forEach(function (d) { d.dataset.dot === cur.dataset.i ? d.setAttribute('aria-current', 'true') : d.removeAttribute('aria-current'); });
    }
    function go(dir) {
      if (busy) return;
      busy = true;
      var d = track.children[0].offsetWidth + GAP;
      if (dir < 0) { track.insertBefore(track.lastElementChild, track.firstElementChild); track.style.transition = 'none'; track.style.transform = 'translateX(' + -d + 'px)'; track.offsetWidth; }
      else { track.style.transition = 'none'; track.style.transform = 'none'; track.offsetWidth; }
      track.style.transition = 'transform ' + MS + 'ms ease';
      track.style.transform = dir > 0 ? 'translateX(' + -d + 'px)' : 'none';
      var next = track.children[dir > 0 ? 3 : 2];
      Array.prototype.forEach.call(track.children, function (el) { el.classList.toggle('is-cur', el === next); });
      dots.forEach(function (x) { x.dataset.dot === next.dataset.i ? x.setAttribute('aria-current', 'true') : x.removeAttribute('aria-current'); });
      setTimeout(function () {
        track.style.transition = 'none';
        if (dir > 0) track.appendChild(track.firstElementChild);
        track.style.transform = 'none';
        mark();
        busy = false;
      }, MS + 20);
    }
    function start() { stop(); if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(function () { if (mqPc.matches && !document.hidden) go(1); }, 5000); }
    function stop() { clearInterval(timer); }
    hero.querySelectorAll('[data-hero-dir]').forEach(function (b) { b.addEventListener('click', function () { go(Number(b.dataset.heroDir)); }); });
    dots.forEach(function (d) {
      d.addEventListener('click', function () {
        var cur = Number(track.children[2].dataset.i), to = Number(d.dataset.dot);
        var n = (to - cur + 5) % 5, dir = n <= 2 ? 1 : -1, c = dir > 0 ? n : 5 - n;
        (function step() { if (c-- <= 0) return; go(dir); setTimeout(step, MS + 40); })();
      });
    });
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
    start();
  });

  // SPトップ：カテゴリアイコンで小カテゴリを開閉（同時に開くのは1つ）
  var catBtns = document.querySelectorAll('[data-sp-cat]');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function slideOpen(p) {
    p.hidden = false;
    if (reduce) return;
    var h = p.scrollHeight;
    p.style.height = '0px'; p.style.opacity = '0';
    p.offsetHeight;
    p.style.height = h + 'px'; p.style.opacity = '1';
    setTimeout(function () { p.style.height = ''; }, 300);
  }
  function slideClose(p) {
    if (p.hidden) return;
    if (reduce) { p.hidden = true; return; }
    p.style.height = p.scrollHeight + 'px';
    p.offsetHeight;
    p.style.height = '0px'; p.style.opacity = '0';
    setTimeout(function () { p.hidden = true; p.style.height = ''; p.style.opacity = ''; }, 300);
  }
  catBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') !== 'true';
      catBtns.forEach(function (x) { if (x === b && open) return; if (x.getAttribute('aria-expanded') === 'true') { x.setAttribute('aria-expanded', 'false'); slideClose(document.getElementById(x.dataset.spCat)); } });
      b.setAttribute('aria-expanded', String(open));
      var p = document.getElementById(b.dataset.spCat);
      open ? slideOpen(p) : slideClose(p);
    });
  });

  // ダイアログ（WEBメール受信設定の変更など）
  document.querySelectorAll('[data-open-dialog]').forEach(function (b) {
    b.addEventListener('click', function () {
      var d = document.getElementById(b.dataset.openDialog);
      if (!d) return;
      var row = b.closest('tr, .o-card');
      var nm = d.querySelector('[data-dialog-name]');
      if (row && nm) { var cell = row.querySelector('td:nth-child(2), dd'); var names = row.querySelectorAll('dd'); nm.textContent = (row.tagName === 'TR' ? cell : names[1] || cell).textContent.trim(); }
      if (d.showModal) d.showModal(); else d.setAttribute('open', '');
    });
  });

  // 下部固定広告を閉じる
  document.querySelectorAll('[data-close-ad]').forEach(function (b) {
    b.addEventListener('click', function () {
      var ad = b.closest('.sticky-ad');
      if (ad) ad.remove();
      document.body.classList.remove('has-sticky');
    });
  });
})();
