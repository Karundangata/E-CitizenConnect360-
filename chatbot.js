document.addEventListener('DOMContentLoaded', () => {
    // Redirect to index.html when clicking on the home button in the top container
    const homeButton = document.querySelector('.home-button');
    homeButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Replace with actual home page URL
    });

    // Redirect to login.html when clicking on the login button in the top container
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', () => {
        window.location.href = 'login.html'; // Replace with actual login page URL
    });

    const logoutButton = document.querySelector('.logout-button');
    logoutButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Replace with actual login page URL
    });

    // Redirect to profile.html when clicking on the profile button in the top container
    const profileButton = document.querySelector('.profile-button');
    profileButton.addEventListener('click', () => {
        window.location.href = 'profile.html'; // Replace with actual profile page URL
    });

    // Redirect to dashboard.html when clicking on the dashboard button in the top container
    const dashboardButton = document.querySelector('.dashboard-button');
    dashboardButton.addEventListener('click', () => {
        window.location.href = 'dashboard.html'; // Replace with actual dashboard page URL
    });


    // Add additional functionalities or event listeners as needed
});

const sendButton = document.querySelector('.bx-send');
sendButton.addEventListener('click', () => {
    const messageField = document.querySelector('input[type="text"]');
    const message = messageField.value.trim(); // Trim any leading or trailing whitespace

    if (message !== '') {
        // Here you can implement sending the message to your chatbot or processing it
        alert(`Sending message: "${message}"`); // Replace with your logic
        messageField.value = ''; // Clear the input field after sending
    } else {
        alert('Please type a message before sending.'); // Alert if message field is empty
    }
});

