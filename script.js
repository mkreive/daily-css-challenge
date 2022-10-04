'use strict';

// CHALLENGE-2

const menuBtn = document.querySelectorAll('line');

menuBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
        console.log('click');
    });
});
