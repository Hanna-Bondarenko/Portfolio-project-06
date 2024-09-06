import axios from "axios";
// import Swiper from "swiper";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';


const reviewList = document.querySelector(".reviews-list");

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

    // Initialize Swiper after rendering
    const swiper = new Swiper('.swiper', {
      slidesPerView: 4,       // Set number of slides to show
      spaceBetween: 10,       // Space between slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

// Call the function to initialize the reviews and swiper
initializeReviews();

function initSwiper() {
  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 16, 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
  });
}