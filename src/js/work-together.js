import axios from 'axios';
import iziToast from 'izitoast';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#workForm');
    const emailInput = document.querySelector('#email');
    const commentInput = document.querySelector('#comments');
    const emailError = document.querySelector('#emailError');
    const modal = document.querySelector('.backdrop-wt');
    const closeModalButton = document.querySelector('.modal-close-btn-wt');
    const body = document.body;

    const openModal = () => {
        modal.classList.add('is-open');
        body.classList.add('no-scroll');
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        body.classList.remove('no-scroll');
    };

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = emailInput.value;
        const comment = commentInput.value;

        // Скидання помилок перед новим запитом
        emailInput.classList.remove('input-error');
        emailError.style.display = 'none';

        try {
            const response = await axios.post('https://portfolio-js.b.goit.study/api-docs', { email, comment });
            if (response.status === 200) {
                openModal();
                form.reset();
            }
        } catch (error) {
            // Перевірка на помилку email
            if (error.response && error.response.data.message === 'Invalid email') {
                emailInput.classList.add('input-error');
                emailError.style.display = 'block';
            } else {
                iziToast.error({
                    title: 'Error',
                    message: `Failed to submit: ${error.response ? error.response.data.message : 'Server error'}`,
                    position: 'topCenter',
                });
            }
        }
    });

    closeModalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeModal();
    });
});







