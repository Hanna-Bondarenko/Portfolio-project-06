import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

const acc = new Accordion('.accordion-container', {
  duration: 400, // Длительность анимации (в миллисекундах)
  showMultiple: false, // Разрешить открывать несколько панелей одновременно
  onOpen: function (currentElement) {
    console.log(currentElement); // Логирование текущего открытого элемента
  },
});

acc.open(0);

var swiper = new Swiper('.mySwiperAbout', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 6,
    },
  },
});

const nextButton = document.getElementById('custom-next-btn');
nextButton.addEventListener('click', () => {
  swiper.slidePrev(); // Переход на следующий слайд
  svgIcon.style.setProperty('--color1', '#3b3b3b');
});
