'use strict';
{
  // ハンバーガーメニュー
  const humberger = document.getElementById('humberger');
  const orverray = document.querySelector('.humberger-menu__orverray')
  const a = document.querySelectorAll('.humberger-menu__navi a')
  const headerLogo = document.querySelector('.header-logo');
  
  humberger.addEventListener('click', () => {
    humberger.classList.toggle('active');
    orverray.classList.toggle('show')
  });

  a.forEach(b => {
    b.addEventListener('click', () => {
      removeClass()
    });
  });

  headerLogo.addEventListener('click', () => {
    removeClass()
  });

function removeClass() {
  orverray.classList.remove('show');
  if (humberger.classList.contains('active') ){
    humberger.classList.remove('active');
  }
}

}