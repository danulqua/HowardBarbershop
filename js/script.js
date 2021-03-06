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

// Slider
const sliderBlock = document.querySelector('.slider');
      slidesArray = sliderBlock.querySelectorAll('.slider-item');
      btnSlideLeft = sliderBlock.querySelector('#slide-left');
      btnSlideRight = sliderBlock.querySelector('#slide-right');

let currentItem = 0;

const showSlide = (array, index) => {
    array.forEach((slide, i) => {
        slide.classList.remove('show');
        slide.classList.add('hide');
        
        if (i == index) {
            slide.classList.add('show');
            slide.classList.remove('hide');
        }
    });
}

btnSlideRight.addEventListener('click', () => {
    currentItem = (currentItem + 1) < slidesArray.length ? ++currentItem : 0;
    showSlide(slidesArray, currentItem);
});

btnSlideLeft.addEventListener('click', () => {
    currentItem = (currentItem - 1) > 0 ? --currentItem : slidesArray.length - 1;
    showSlide(slidesArray, currentItem);
});