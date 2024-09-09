
// Плавний скрол до секцій
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Отримати елементи
const burgerMenu = document.querySelector('.burger-menu');
const mobMenu = document.querySelector('.mob-menu');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const menuTitle = document.querySelector('.menu-title');
const navList = document.querySelector('.nav-list');

// Відкриття мобільного меню
function openMenu() {
  mobMenu.classList.add('is-open');
  mobMenu.classList.remove('hidden');
}

// Закриття мобільного меню
function closeMenu() {
  mobMenu.classList.remove('is-open');
  mobMenu.classList.add('hidden');
}

// Обробники подій для кнопок
burgerMenu.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

// Закрити мобільне меню
document.addEventListener('click', (event) => {
  if (!mobMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
    closeMenu();
  }
});

// Перемикає видимість меню при кліку на заголовок
menuTitle.addEventListener('click', () => {
  navList.classList.toggle('is-open');
});


