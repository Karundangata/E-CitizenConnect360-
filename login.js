document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('.home-button');
    const registerButton = document.querySelector('.register-button');

    homeButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Replace 'index.html' with the actual home page URL
    });

    registerButton.addEventListener('click', () => {
        window.location.href = 'register.html'; // Replace 'register.html' with the actual register page URL
    });
});

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Replace 'index.html' with the actual home page URL
        window.location.href = 'index.html';
    } else {
        alert('Please fill the fields correctly.');
    }
}

document.querySelector('.forgot-password').addEventListener('click', () => {
    window.location.href = 'forgot.html'; // Replace 'forgot.html' with the actual forgot password page URL
});
