const button = document.querySelector('.btn');

const password = document.querySelector('#password');
const span = document.querySelector('.validation');
const confirmPassword = document.querySelector('#confirm-password');

button.addEventListener('click', function(e) {
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        span.classList.add('check');
    }
});