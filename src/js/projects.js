import Swiper from 'swiper/bundle';

// Initialize Swiper
const swiperProjects = new Swiper('.projects-swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  autoHeight: true,
  speed: 1000,
  spaceBetween: 48,
  keyboard: { enabled: true, onlyInViewport: false },
  mousewheel: true,
  allowTouchMove: true,
  simulateTouch: true,
  navigation: {
    nextEl: '.custom-projects-next',
    prevEl: '.custom-projects-prev',
    disabledClass: 'swiper-button-disabled',
  },
  grabCursor: true,
});

// Scroll Up button
let scrollToHeader = document.getElementById('scrollToHeader');
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    scrollToHeader.style.display = 'block';
  } else {
    scrollToHeader.style.display = 'none';
  }
}
scrollToHeader.addEventListener('click', function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
