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
const exitBtn = document.querySelector('.btn__exit');

btnAdd.forEach((btn) =>
    btn.addEventListener('click', function () {
        overlay.classList.toggle('overlay_hidden');
    })
);
exitBtn.addEventListener('click', function () {
    overlay.classList.toggle('overlay_hidden');
});

// CHALLENGE-9
const okBtn = document.querySelector('.btn_blue');
const quoteNum = document.getElementById('quote__num');
const quoteHeader = document.getElementById('quote__header');
const quoteText = document.getElementById('quote__text');

const getQuotes = async function () {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const randNum = Math.floor(Math.random() * 1000);
    if (!response.ok) {
        throw new Error('Failed to fetch quotes');
    }
    const randQuote = data[randNum];
    quoteHeader.innerText = randQuote.author;
    quoteText.innerHTML = randQuote.text;
};

let count = 1;

okBtn.addEventListener('click', function (e) {
    count++;
    quoteNum.innerText = count;
    quoteText.innerHTML = getQuotes();
});
