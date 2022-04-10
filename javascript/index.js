// Video slider
const videoSlide1 = document.getElementById('video-slide-1');
const videoSlide2 = document.getElementById('video-slide-2');
const videoSlide3 = document.getElementById('video-slide-3');
const videoSlide4 = document.getElementById('video-slide-4');
const slideBtns = document.getElementById('slide-btns');
let slideBtn = document.getElementById('slide-btn');
let slideBtn2 = document.getElementById('slide-btn-2');
let slideBtn3 = document.getElementById('slide-btn-3');

videoSlide1.onended = function () {
    videoSlide2.play();
    videoSlide1.style.opacity = 0;
    videoSlide2.style.opacity = 1;
    slideBtn.style.opacity = 0;
    slideBtn.style.visibility = 'hidden';
    slideBtn2.style.opacity = 1;
    slideBtn2.style.visibility = 'visible';
}

videoSlide2.onended = function () {
    videoSlide3.play();
    videoSlide2.style.opacity = 0;
    videoSlide3.style.opacity = 1;
    slideBtn2.style.opacity = 0;
    slideBtn2.style.visibility = 'hidden';
    slideBtn3.style.opacity = 1;
    slideBtn3.style.visibility = 'visible';
    slideBtn3.style.marginTop = '0';
}

videoSlide3.onended = function () {
    videoSlide1.play();
    videoSlide3.style.opacity = 0;
    videoSlide1.style.opacity = 1;
    slideBtn3.style.opacity = 0;
    slideBtn3.style.visibility = 'hidden';
    slideBtn.style.opacity = 1;
    slideBtn.style.visibility = 'visible';
}

// Our menu button scroll animation
let cafeMenu = document.getElementById('menu');
slideBtn.addEventListener('click', navigateToTheMenu, false);

function navigateToTheMenu(event) {
    cafeMenu.scrollIntoView({ behavior: 'smooth' });
}

// Accordian at the bottom
class Accordian {
    constructor(detailsElement) {
        this.detailsElement = detailsElement;
        this.summary = detailsElement.querySelector('summary');
        this.accordianText = detailsElement.querySelector('.accordian-text');
        this.animation = null;
        this.isClosing = false;
        this.isExpandeding = false;
        this.summary.addEventListener('click', (event) => this.onClick(event));
        this.chevron = detailsElement.querySelector('.fa-chevron-right');
    }

    onClick(event) {
        event.preventDefault();
        this.detailsElement.style.overflow = 'hidden';

        if (this.isClosing || !this.detailsElement.open) {
            this.open();
        } else if (this.isExpandeding || this.detailsElement.open) {
            this.shrink();
        }
    }

    shrink() {
        this.isClosing = true;
        const startHeight = `${this.detailsElement.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }

        this.animation = this.detailsElement.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-in-out'
        })

        this.chevron.style.transition = 'transform 0.4s ease-in-out';
        this.chevron.style.transform = 'rotate(0deg)';

        this.animation.onfinish = () => this.onAnimationFinish(false);
        this.animation.oncancel = () => this.isClosing = false;
    }

    open() {
        this.detailsElement.style.height = `${this.detailsElement.offsetHeight}px`;
        this.detailsElement.open = true;
        window.requestAnimationFrame(() => this.expand());
    }

    expand() {
        this.isExpandeding = true;
        const startHeight = `${this.detailsElement.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight + this.accordianText.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }

        this.animation = this.detailsElement.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-in-out'
        });

        this.chevron.style.transition = 'transform 0.4s ease-in-out';
        this.chevron.style.transform = 'rotate(90deg)';

        this.animation.onfinish = () => this.onAnimationFinish(true);
        this.animation.oncancel = () => this.isExpandeding = false;
    }

    onAnimationFinish(open) {
        this.detailsElement.open = open;
        this.animation = null;
        this.isClosing = false;
        this.isExpandeding = false;
        this.detailsElement.style.height = this.detailsElement.style.overflow = ``;
    }

}

document.querySelectorAll('details').forEach((detailsElement) => {
    new Accordian(detailsElement);
});