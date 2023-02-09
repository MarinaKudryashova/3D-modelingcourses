// открыть\закрыть бургер-меню
let burger = document.querySelector('.btn-burger');
let menu = document.querySelector('.header__nav');
let menuLink = document.querySelectorAll('.nav__link');
let body = document.body;

burger.addEventListener('click', function() {
  burger.classList.toggle('btn-burger-active');
  menu.classList.toggle('header__nav-active');
  body.classList.toggle('stop-scroll');
  if (burger.getAttribute('aria-label') === 'Открыть меню') {
    burger.setAttribute("aria-label", 'Закрыть меню');
    burger.setAttribute("aria-expanded", true);
  } else {
    burger.setAttribute("aria-label", 'Открыть меню');
    burger.setAttribute("aria-expanded", false);
  }
});
menuLink.forEach(function(e) {
  e.addEventListener('click', function() {
    burger.classList.remove('btn-burger-active');
    burger.setAttribute("aria-label", 'Открыть меню');
    menu.classList.remove('header__nav-active');
    body.classList.remove('stop-scroll');
  });
});
document.addEventListener('click',
function(el) {
  let target = el.target;
  if(!target.closest('.header__burger')) {
    burger.classList.remove('btn-burger-active');
    burger.setAttribute("aria-label", 'Открыть меню');
    burger.setAttribute("aria-expanded", false);
    menu.classList.remove('header__nav-active');
    body.classList.remove('stop-scroll');
  }

});
