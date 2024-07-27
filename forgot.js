document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('.home-button');
    const registerButton = document.querySelector('.register-button');
    const loginButton = document.querySelector('.login-button');
    const forgotPasswordButton = document.querySelector('.forgot-password');

    if (homeButton) {
        homeButton.addEventListener('click', () => {
            window.location.href = 'index.html'; // Replace 'index.html' with the actual home page URL
        });
    }
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            window.location.href = 'login.html'; // Replace 'register.html' with the actual register page URL
        });
    }


    if (registerButton) {
        registerButton.addEventListener('click', () => {
            window.location.href = 'register.html'; // Replace 'register.html' with the actual register page URL
        });
    }

    if (forgotPasswordButton) {
        forgotPasswordButton.addEventListener('click', () => {
            window.location.href = 'forgot.html'; // Replace 'forgot.html' with the actual forgot password page URL
        });
    }
});

function validateForgotForm() {
    const newPassword = document.getElementById('new-password').value;
    const confirmNewPassword = document.getElementById('confirm-new-password').value;

    if (newPassword !== confirmNewPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
        alert('Password must contain at least 8 characters including a capital letter, a small letter, a number, and a special character.');
        return false;
    }

    // Simulate an API call to update the password in the database
    updatePassword(newPassword);

    return true;
}

function updatePassword(newPassword) {
    // Simulate a backend request to update the password
    fetch('https://example.com/api/update-password', { // Replace with actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: newPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Password reset successful');
            window.location.href = 'index.html'; // Redirect to home page after successful reset
        } else {
            alert('Failed to reset password. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}
