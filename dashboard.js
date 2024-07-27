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

