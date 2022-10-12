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

// CHALLENGE-6
const btnAdd = document.querySelectorAll('.btn_add');
const overlay = document.querySelector('.overlay');

btnAdd.forEach((btn) =>
    btn.addEventListener('click', function (e) {
        const photoUrl = e.target.parentElement.nextSibling.nextElementSibling.currentSrc;
        overlay.classList.toggle('hidden');
    })
);
