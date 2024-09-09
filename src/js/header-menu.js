// // Функція для плавного скролу до секції
// function scrollToSection(sectionId) {
//   document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
// }

// document.querySelector('.burger-menu').addEventListener('click', function() {
//     document.querySelector('.mob-menu').classList.add('is-open');
// }); 

// document.querySelector('.menu-close-btn').addEventListener('click', function() {
//   document.querySelector('.mob-menu').classList.remove('is-open');
// });

// document.querySelectorAll('.nav-list-item-mobile a').forEach(anchor => {
//   anchor.addEventListener('click', function() {
//     document.querySelector('.mob-menu').classList.remove('is-open');
//   });
// });

// function scrollToSection(sectionId) {
//   const section = document.getElementById(sectionId);
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// }

// Відкриття мобільного меню
document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('.mob-menu').classList.add('is-open');
}); 

// Закриття мобільного меню
document.querySelector('.menu-close-btn').addEventListener('click', function() {
  document.querySelector('.mob-menu').classList.remove('is-open');
});

// Обробка кліків на мобільні навігаційні посилання
// document.querySelectorAll('.nav-list-item-mobile a').forEach(anchor => {
//   anchor.addEventListener('click', function(event) {
//     event.preventDefault(); // Зупинити перезавантаження сторінки

//     const sectionId = this.getAttribute('href').substring(1); // Отримати ID секції з href (виключити #)
//     scrollToSection(sectionId); // Плавний скрол

//     document.querySelector('.mob-menu').classList.remove('is-open'); // Закрити меню
//   });
// });

// document.querySelector('.menu-title').addEventListener('click', function() {
//   document.querySelector('.nav-menu').classList.toggle('show');
// });