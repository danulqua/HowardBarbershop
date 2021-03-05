// Burger menu
const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navList.classList.toggle('active');
});