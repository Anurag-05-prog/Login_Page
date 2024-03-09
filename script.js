"use strict";

const darkModeSwitch = document.querySelector('.dark-mode');
const lightModeSwitch = document.querySelector('.light-mode');
const currTheme = localStorage.getItem('theme');

function moveElements() {
    anime({
        targets: '.square, .circle, .triangle',
        translateX: function() {
            return anime.random(-800, 800);
        },
        translateY: function() {
            return anime.random(-500, 500);
        },
        translateZ: function() {
            return anime.random(-100, 100);
        },
        rotate: function() {
            return anime.random(0, 360);
        },
        scale: function() {
            return anime.random(.2, 2);
        },
        duration: 1000,
        easing: 'easeInOutQuad',
        complete: moveElements,
    });
}
moveElements();

darkModeSwitch.addEventListener('click', function() {
    lightModeSwitch.style.display = 'block';
    darkModeSwitch.style.display = 'none';
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
});

lightModeSwitch.addEventListener('click', function() {
    lightModeSwitch.style.display = 'none';
    darkModeSwitch.style.display = 'block';
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
});

if(currTheme) {
    if(currTheme === 'light') {
        lightModeSwitch.style.display = 'block';
        darkModeSwitch.style.display = 'none';
    } else {
        lightModeSwitch.style.display = 'none';
        darkModeSwitch.style.display = 'block';
    }
    document.documentElement.setAttribute('data-theme', currTheme);
}