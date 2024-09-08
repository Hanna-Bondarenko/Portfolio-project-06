import Swiper from 'swiper/bundle';

const swiperProjects = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  autoHeight: true,
  speed: 1000,
  keyboard: { enabled: true, onlyInViewport: false },
  mousewheel: true,
  allowTouchMove: true,
  simulateTouch: true,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
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
