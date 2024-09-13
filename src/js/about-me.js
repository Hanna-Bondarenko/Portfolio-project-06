import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// import Swiper bundle with all modules installed

import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const acc = new Accordion('.accordion-container', {
  duration: 400, // Длительность анимации (в миллисекундах)
  showMultiple: false, // Разрешить открывать несколько панелей одновременно
  onOpen: function (currentElement) {},
});

acc.open(0);

var swiper = new Swiper('.mySwiperAbout', {
  loop: true,
  slidesPerGroup: 1,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'about_active',

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

const nextButton = document.getElementById('custom-next-btn');
nextButton.addEventListener('click', () => {
  swiper.slidePrev(); // Переход на следующий слайд
});
