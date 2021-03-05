// Burger menu
const header = document.querySelector('.header');
      menuButton = header.querySelector('.menu-button');
      navList = header.querySelector('.nav-list');
      darkenBG = document.querySelector('.darken-bg-menu');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navList.classList.toggle('active');
    document.body.classList.toggle('disable-scroll');
    darkenBG.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
    }
});