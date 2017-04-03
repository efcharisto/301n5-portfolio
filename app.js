'use strict';

function randomNum(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

document.querySelector('.randomNum').innerHTML = randomNum(1, 100);
