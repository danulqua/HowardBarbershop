// Burger menu
const header = document.querySelector('.header');
const menuButton = header.querySelector('.menu-button');
const navList = header.querySelector('.nav-list');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navList.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
    }
});