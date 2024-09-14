const elements = document.querySelectorAll('.animations');
const covers = document.querySelector('.content');

function checkIfCoversInView() {
  if (!covers) return;
  const windowHeight = window.innerHeight;
  const { top: elementTop, bottom: elementBottom } =
    covers.getBoundingClientRect();
  elements.forEach(element => {
    // const elementTop = covers.getBoundingClientRect().top;
    // const elementBottom = covers.getBoundingClientRect().bottom;

    if (
      (elementTop >= 0 && elementTop <= windowHeight) ||
      (elementBottom >= 0 && elementBottom <= windowHeight)
    ) {
      if (window.innerWidth < 1440) {
        element.classList.add('animations-mobile-tablet');
      }
    } else {
      element.classList.remove('animations-mobile-tablet');
    }
  });
}

window.addEventListener('scroll', checkIfCoversInView);
window.addEventListener('resize', checkIfCoversInView);
