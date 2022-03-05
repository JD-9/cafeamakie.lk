const navBtn = document.querySelector('.nav-btn');
const burgerLine = document.querySelector('.burger-line');
const navList = document.getElementById('nav-list');
let menuOpen = false;

navBtn.addEventListener('click', () => {
    if (!menuOpen) {
        navBtn.classList.toggle('open');
        navList.style.opacity = '1';
        navList.style.transition = 'all .5s ease-in';
        navList.classList.toggle('opened');
        menuOpen = true;
    } else {
        navBtn.classList.toggle('open');
        navList.style.opacity = '0';
        navList.style.transition = 'all .5s ease-out';
        navList.classList.toggle('opened');
        menuOpen = false;
    }
});