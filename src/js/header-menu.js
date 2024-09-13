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
const navMobLinks = mobMenu.querySelectorAll('a');

// Відкриття мобільного меню
function openMenu() {
  mobMenu.classList.add('is-open');
  mobMenu.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

// Закриття мобільного меню
function closeMenu() {
  mobMenu.classList.remove('is-open');
  mobMenu.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

// Обробники подій для кнопок
burgerMenu.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

// Закрити мобільне меню, перенаправлення на секцію
navMobLinks.forEach(link => {
  link.addEventListener('click', function () {
    closeMenu();
  });
});

// Перемикає видимість меню при кліку на заголовок
menuTitle.addEventListener('click', () => {
  navList.classList.toggle('is-open');
});
