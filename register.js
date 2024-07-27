document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('.home-button');
    const loginButton = document.querySelector('.login-button');

    homeButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Replace 'index.html' with the actual home page URL
    });

    loginButton.addEventListener('click', () => {
        window.location.href = 'login.html'; // Replace 'register.html' with the actual register page URL
    });
});


function validateForm() {
    var username = document.getElementById('username').value.trim();
    var idNumber = document.getElementById('id-number').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var showPassword = document.getElementById('show-password').checked;

    // Simple email validation using regex
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return false;
    }

    // Password validation
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least 8 characters including a capital letter, a small letter, a number, and a special character.');
        return false;
    }

    // Confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    // If all validations pass, form submission successful
    alert('Registration successful');
    return true;
}
