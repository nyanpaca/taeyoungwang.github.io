// Small helpers shared by every page. The site still reads fine without this file.

(function () {
  // Header: show a hairline once the page scrolls.
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu.
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Photos and figures: an image only shows up once its file exists.
  // Upload e.g. assets/figures/project-1-a.jpg (or .png) and it appears on its own.
  function reveal(img, target, onShow) {
    function show() {
      target.classList.add('loaded');
      if (onShow) onShow();
    }
    function fail() {
      // Try the .png version of the same name once.
      var src = img.getAttribute('src') || '';
      if (!img.dataset.triedPng && /\.jpe?g$/i.test(src)) {
        img.dataset.triedPng = '1';
        img.src = src.replace(/\.jpe?g$/i, '.png');
      }
    }
    img.addEventListener('load', show);
    img.addEventListener('error', fail);
    if (img.complete) {
      if (img.naturalWidth > 0) show();
      else if (img.getAttribute('src')) fail();
    }
  }

  document.querySelectorAll('.fig img').forEach(function (img) {
    var fig = img.closest('.fig');
    var sheet = img.closest('.sheet');
    reveal(img, fig, function () {
      if (sheet) sheet.classList.add('has-figs');
    });
  });

  document.querySelectorAll('.recipe-hero img').forEach(function (img) {
    reveal(img, img.closest('.recipe-hero'));
  });

  document.querySelectorAll('.thumb img, .hero-photo img').forEach(function (img) {
    reveal(img, img);
  });
})();
