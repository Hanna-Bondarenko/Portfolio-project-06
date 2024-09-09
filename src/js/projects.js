import Swiper from 'swiper/bundle';

const swiperProjects = new Swiper('.projects-swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  autoHeight: true,
  speed: 1000,
  keyboard: { enabled: true, onlyInViewport: false },
  mousewheel: true,
  allowTouchMove: true,
  simulateTouch: true,
  navigation: {
    nextEl: '.custom-projects-prev',
    prevEl: '.custom-projects-next',
    disabledClass: 'swiper-button-disabled',
  },
  // effect: 'creative',
  // creativeEffect: {
  //   prev: {
  //     // will set `translateZ(-400px)` on previous slides
  //     translate: [0, 0, -400],
  //   },
  //   next: {
  //     // will set `translateX(100%)` on next slides
  //     translate: ['100%', 0, 0],
  //   },
  // },
  grabCursor: true,
});
