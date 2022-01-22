'use strict';

{
  const headspa = document.querySelector('.section-headspa__container');
  const headspaWrapper = document.querySelectorAll('.section-headspa__contents-wrapper')
  const imgLenght = document.querySelectorAll('.section-headspa__contents-wrapper img').length;
  const images = document.querySelectorAll('.section-headspa__contents-wrapper img');

  // const marginContainer = document.getElementById('margin');
  // const margin = window.getComputedStyle(marginContainer);

  let startX;
  let moveX;
  let distance = 40;
  let current = 1;
  let slides = [];

  let mousestartX;
  let mouseslideX



  headspa.addEventListener('touchstart', (event) => {
    event.preventDefault(); // preventDefault()は処理を行わない　タッチした値をすぐに返してしまう
    startX = event.touches[0].pageX;
    // console.log(startX);
  });

  headspa.addEventListener('touchmove', (event) => {
    event.preventDefault();
    moveX = event.changedTouches[0].pageX;
    // console.log(moveX);
  });

  headspa.addEventListener('touchend', () => {
    //タッチスタート時より左側　かつ　動かした地点より30px以上の時　かつ　イメージ要素より数が少ない時(3以上の時はtrue処理されない)
    if (startX > moveX && startX > moveX + distance && current < imgLenght -1) {
      moveSlidesLeft();
      current++;
      // console.log(current);
    } 
    //タッチスタート時より右側　かつ　動かした地点より30px以上の時　かつ　イメージ要素より数が少ない時（0の時true処理されない）
    if (startX < moveX && startX + distance < moveX && current >= 1) {
      moveSlidesRight();
      current--;
      // console.log(current);
    } 
  });

  slides = images;
  const slideWidth = slides[1].getBoundingClientRect().width;

  // // margin取得
  // const leftMargin =  margin.getPropertyValue('margin-left');
  // const rightMargin = margin.getPropertyValue('margin-right');
  // ここまでは値を取得できる

  // console.log(leftMargin, rightMargin);

  // const totalMargin = leftMargin + rightMargin;
   
  // console.log(totalMargin);



  // 右から左にフリックしたら
  function moveSlidesLeft() {
    headspaWrapper.forEach(wrapper => {
      wrapper.style.transform = `translateX(${-1 * (slideWidth + 26) * current}px)`; 
      // wrapper.style.transform = `translateX(${-1 * (slideWidth + totalMargin) * current}px)`; 
    });
  }

  // ここが難しかった
  // 左から右にフリックしたら
  function moveSlidesRight() {
    headspaWrapper.forEach(wrapper => {
      if ( current === 2) {
        wrapper.style.transform = 'translateX(0px)';//一番右の写真に来たら　トランスレイトを０にする
      } else {
        wrapper.style.transform = `translateX(${1 * (slideWidth +26)}px)`;
      }//そうじゃない場合一つ分戻す
    });
  }

  // マウスイベント
  headspa.addEventListener('mousedown', (event) => {
    event.preventDefault();
    mousestartX = event.clientX;
    console.log(mousestartX);
  });
  headspa.addEventListener('mousemove', (event) => {
    event.preventDefault();
    mouseslideX= event.clientX;
    console.log(mouseslideX);
  });

  headspa.addEventListener('mouseup', () => {
    if (mousestartX > mouseslideX && mousestartX > mouseslideX + distance && current < imgLenght -1) {
      mouseSlidesLeft();
      current++;
    } 
    if (mousestartX < mouseslideX && mousestartX + distance < mouseslideX && current >= 1) {
      mouseSlidesRight();
      current--;
    } 
  });
  function mouseSlidesLeft() {
    headspaWrapper.forEach(wrapper => {
      wrapper.style.transform = `translateX(${-1 * (slideWidth + 104) * current}px)`;  
    });
  }
  function mouseSlidesRight() {
    headspaWrapper.forEach(wrapper => {
      if ( current === 2) {
        wrapper.style.transform = 'translateX(0px)';
      } else {
        wrapper.style.transform = `translateX(${1 * (slideWidth +104)}px)`;
      }
    });
  }







}