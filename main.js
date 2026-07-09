/* KALIRA · interacciones */
(function () {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  /* sticky background on scroll */
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* mobile menu */
  if (toggle) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  /* active link based on filename */
  var page = (location.pathname.split('/').pop() || 'index.html');
  links && links.querySelectorAll('a:not(.btn)').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) a.classList.add('is-active');
  });

  /* reveal on scroll */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* contact form (front-end only) -> opens WhatsApp with prefilled message */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var n = (form.nombre.value || '').trim();
      var t = (form.telefono.value || '').trim();
      var m = (form.mensaje.value || '').trim();
      var msg = 'Hola Kalira, soy ' + n + '.' + (m ? ' ' + m : ' Me gustaría recibir información.') + (t ? ' Mi teléfono: ' + t : '');
      window.open('https://wa.me/528664060459?text=' + encodeURIComponent(msg), '_blank');
      var ok = document.getElementById('formOk');
      if (ok) ok.style.display = 'block';
      form.reset();
    });
  }
})();
