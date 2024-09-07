import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const acc = new Accordion('.accordion-container', {
  duration: 400, // Длительность анимации (в миллисекундах)
  showMultiple: true, // Разрешить открывать несколько панелей одновременно
  onOpen: function (currentElement) {
    console.log(currentElement); // Логирование текущего открытого элемента
  },
});

acc.open(0);

// Import Swiper and modules

// Now you can use Swiper
const swiper = new Swiper('.swiper', {
  // Install modules
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // ...
});
