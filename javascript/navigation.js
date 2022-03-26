// Navigation links
let navLinks = document.querySelectorAll('.nav-links');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        navLinks.forEach(function (navLink) {
            navLink.classList.remove('nav-active');
        });
        this.classList.add('nav-active');
    });
});

// Navigation hamburger animations
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

// Navigate to locations
let locationsBtn = document.getElementById('locations-btn');
let footer = document.getElementById('footer');

locationsBtn.addEventListener('click', navigateToBottom, false);

function navigateToBottom(event) {
    footer.scrollIntoView({ behavior: 'smooth' });
}