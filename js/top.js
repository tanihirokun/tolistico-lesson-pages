'use strict';

{
// arrowの監視

// optionsで監視位置を設定
// optionsを先頭で宣言しないとエラーになる
const options = {
  rootMargin: '0px 0px -60px'
}
const observer = new IntersectionObserver(callBack, options);

const targets = document.querySelectorAll('.move');

targets.forEach((target) => {
  observer.observe(target);
});
// オブザーバーに渡す引数
function callBack(entries, obs){
  entries.forEach((entry) => {
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.add('up');
  obs.unobserve(entry.target);
  });
}

// arrowの文字の監視
const distance = {
  rootMargin: '0px 0px -40px'
}
const arrowObserver = new IntersectionObserver(arrowCallBack, distance);

const arrows = document.querySelectorAll('.arrow-name');

arrows.forEach((arrow) => {
  arrowObserver.observe(arrow);
});
// オブザーバーに渡す引数
function arrowCallBack(entries, obs){
  entries.forEach((entry) => {
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.add('on');
  obs.unobserve(entry.target);
  });
}

const pClick = {
  rootMargin: '0px 0px -50px'
}
const pObserver = new IntersectionObserver(arrowP, pClick);

const arrowClick = document.querySelector('.arrow-p');
pObserver.observe(arrowClick);
// オブザーバーに渡す引数
function arrowP(entry, obs){
  if (!entry[0].isIntersecting) {
    return;
  }
  entry[0].target.classList.add('go');
  obs.unobserve(entry[0].target);
  }
  
}