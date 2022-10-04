'use strict';

// CHALLENGE-2
const menuBtn = document.querySelector('.menu__button');

menuBtn.addEventListener('click', function () {
    console.log('clicked');
    menuBtn.classList.toggle('clicked');
});
