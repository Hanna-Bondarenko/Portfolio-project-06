import axios from "axios";
import iziToast from "izitoast";
import Swiper from 'swiper/bundle';

const reviewList = document.querySelector(".reviews-list");
const swiperControllButton = document.querySelector(".swiper-controll-buttons");

// Set axios base URL
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study';

// Function to fetch reviews
const fetchReviews = () => {
  return axios.get('/api/reviews').then(response => response.data);
};

// Function to create a review HTML element
function createReviewLi(reviewData) {
  return `
     <li class="reviews-list-item swiper-slide">
            <img src="${reviewData.avatar_url}" alt="${reviewData.author}" class="reviews-list-item-img" />
            <h3 class="reviews-list-item-author">${reviewData.author}</h3>
            <p class="reviews-list-item-text">${reviewData.review}</p>
     </li>
   `;
}

// Function to render review cards
const renderCard = (reviews) => {
  const markup = reviews.map(createReviewLi).join("");
  reviewList.insertAdjacentHTML('beforeend', markup);
};

// Async function to handle fetching and rendering reviews
const initializeReviews = async () => {
  try {
    // Fetch data
    let data = await fetchReviews();
    
    // Render reviews
    renderCard(data);
    
  }
  catch (error) {
    iziToast.error({
      title: 'Error',
      position: 'topCenter',
      message: `Error fetching reviews: ${error}`,
    });
    
    reviewList.insertAdjacentHTML('beforeend', `<p class="reviews-error-text">Not found</p>`);
    swiperControllButton.classList.add('is-hidden');
  }
};
// Initialize Swiper
const swiperReviews = new Swiper('.reviews-swiper.swiper', {   
  spaceBetween: 16,   
  speed: 700,

  // Медіаправила
  breakpoints: {
    0: {  // Мобільні пристрої
      slidesPerView: 1, 
    },
    768: {  // Планшети
      slidesPerView: 2, 
    },
    1440: {  // Великі екрани (настільні)
      slidesPerView: 4,
    },
  },

  // Налаштування навігації
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Клавіатурна навігація
  keyboard: {
    enabled: true,       
    onlyInViewport: true,
  },

  // Навігація за допомогою миші
  grabCursor: true,       
  mousewheel: {
    invert: false,       
  },
});

  initializeReviews();