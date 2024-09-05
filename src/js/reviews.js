import axios from "axios";
const reviewList = document.querySelector(".reviews-list");

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study';

const fetchReviews = () => {
  return axios.get('/api/reviews').then(response => response.data);
};
let data = await fetchReviews();
console.log(data);



function createReviewLi(reviewData) {
    return `
     <li class="reviews-list-item">
            <img src="${reviewData.avatar_url}" alt="${reviewData.author}" class="reviews-list-item-img" />
            <h3 class="reviews-list-item-author">${reviewData.author}</h3>
            <p class="reviews-list-item-text">${reviewData.review}</p>
     </li>
   `
}
const renderCard = (reviews) => {
    const markup = data.map(createReviewLi).join("");
    reviewList.insertAdjacentHTML('beforeend', markup);
    // gallery.refresh();
};
renderCard(data);