"use strict";

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
