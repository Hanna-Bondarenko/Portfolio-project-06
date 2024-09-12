import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';


const form = document.querySelector(".wt-form");
const formEmail = document.querySelector(".wt-email-input");
const formComment = document.querySelector(".wt-comment-input");
const successMessage = document.querySelector('.wt-success-message');
const errorMessage = document.querySelector('.wt-error-message');
const backdrop = document.querySelector(".backdrop-wt");
const modalWindow = document.querySelector(".modal-wt");
const modalCloseBtn = document.querySelector(".modal-close-btn-wt");

formEmail.addEventListener('input', function () {
  const email = formEmail.value.trim();
  if (emailPattern.test(email)) {
    formEmail.classList.add('success');
    formEmail.classList.remove('error');
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
  } else {
    formEmail.classList.add('error');
    formEmail.classList.remove('success');
    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';
  }
});

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

formComment.addEventListener('blur', function () {
  const maxLength = 30;
  if (formComment.value.length > maxLength) {
    formComment.value = formComment.value.substring(0, maxLength) + '...';
  }
});
//  =================== LocalStorage ==============
formComment.addEventListener('input', function () {
  localStorage.setItem('comments', formComment.value);
});
formEmail.addEventListener('input', function () {
  localStorage.setItem('email', formEmail.value);
});

document.addEventListener('DOMContentLoaded', function () {
  const savedComments = localStorage.getItem('comments');
  const savedEmail = localStorage.getItem('email');
  if (savedComments) {
    formComment.value = savedComments;
  }
  if (savedEmail) {
    formEmail.value = savedEmail;
  }
});


function openModal() {
    document.body.classList.add('no-scroll');
    backdrop.classList.add("is-open");
    modalWindow.classList.add("is-visible");
  modalCloseBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', function (event) {
      if (event.target === backdrop) {
        closeModal();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  form.reset();
}

function closeModal() {
    document.body.classList.remove('no-scroll');
    backdrop.classList.remove("is-open");
    modalWindow.classList.remove("is-visible");
    modalCloseBtn.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  }
form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const emailValue = formEmail.value.trim();
  const textComment = formComment.value;
  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests/',
      {
        email: emailValue,
        comment: textComment,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    formEmail.classList.remove('success');
    successMessage.style.display = 'none';
      openModal();
    localStorage.removeItem('email');
    localStorage.removeItem('comments');
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      theme: 'dark',
      messageColor: 'white',
      backgroundColor: '#ef4040',
      message: 'Error: ' + (error.response?.data?.message || 'Something went wrong'),
    });
  }
});
