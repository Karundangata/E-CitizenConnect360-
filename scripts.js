document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('.home');
    const loginButton = document.querySelector('.login');
    const registerButton = document.querySelector('.register');

    homeButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Replace with the actual home page URL if different
    });

    loginButton.addEventListener('click', () => {
        window.location.href = 'login.html'; // Replace 'login.html' with the actual login page URL
    });

    registerButton.addEventListener('click', () => {
        window.location.href = 'register.html'; // Replace 'register.html' with the actual register page URL
    });
});
