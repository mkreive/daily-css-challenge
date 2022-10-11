'use strict';

// CHALLENGE-4
const menuBurger = document.querySelector('.menu-burger__2');
const hiddenNav = document.querySelector('.card_blue');
const movingCard = document.getElementById('moving-card');

menuBurger.addEventListener('click', function () {
    console.log('clicked');
    hiddenNav.classList.toggle('hidden');
    movingCard.classList.toggle('shift');
});
