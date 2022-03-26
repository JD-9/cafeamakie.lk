// JavaScript for about us page

// Image slider
let slides = document.querySelectorAll('.slide');
let ctrlBtns = document.querySelectorAll('.control');
let currentSlide = 1;

// Image slider controls
let manualCtrl = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        ctrlBtns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    ctrlBtns[manual].classList.add('active');
};

ctrlBtns.forEach((ctrlBtn, i) => {
    ctrlBtn.addEventListener('click', () => {
        manualCtrl(i);
        currentSlide = i;
    });
});

// Image slider - automation
let repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let x = 1;

    let repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });
            slides[x].classList.add('active');
            ctrlBtns[x].classList.add('active');
            x++;

            if (slides.length == x) {
                x = 0;
            } else if (x >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();