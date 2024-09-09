import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Знаходимо контейнер для акордеону
const container = document.querySelector('.accordion-wrapper');

// Ініціалізуємо акордеон
const accordion = new Accordion('.accordion-list', {
  openOnInit: [],
  showMultiple: false,
  duration: 1000,
  easing: 'ease-in-out',
  triggerClass: 'accordion-toggle-btn', // Клас для тригера (кнопки)
  panelClass: 'accordion-item-content', // Клас для контенту акордеону
  elementClass: 'accordion-list-item', // Клас для кожного елемента акордеону
});

// Знаходимо всі кнопки акордеону
const accordionButtons = document.querySelectorAll('.accordion-toggle-btn');

// Додаємо обробник подій для кнопок акордеону
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('Button clicked');
    accordionButtons.forEach(btn => {
      if (btn !== button) {
        btn.classList.remove('rotate'); // Забираємо клас rotate у всіх інших кнопок
      }
    });

    button.classList.toggle('rotate'); // Додаємо/забираємо клас rotate при кліку
  });
});
