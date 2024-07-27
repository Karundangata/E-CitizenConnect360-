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

   
    // Handle post button functionality
    const postButton = document.querySelector('.post-button');
    postButton.addEventListener('click', () => {
        // Replace with actual logic to handle posting
        alert('Post button clicked!'); // Example: Show alert
        // Example: Redirect to a new page after posting
        window.location.href = 'new-post.html'; // Replace with actual post handling or redirection
    });

    // Add additional functionalities or event listeners as needed
});

const postButton = document.querySelector('.post-button');
postButton.addEventListener('click', () => {
    console.log('Post button clicked.'); // Check if this log appears in the console
    const selectedTitle = document.querySelector('.title .search-dropdown').value;
    const selectedCategory = document.querySelector('.category .search-dropdown').value;

    if (selectedTitle && selectedCategory) {
        console.log(`Selected Title: ${selectedTitle}, Selected Category: ${selectedCategory}`);
    } else {
        alert('Please select both Title and Category before posting.');
    }
});

const uploadButton = document.querySelector('.upload-button');
if (uploadButton) {
    uploadButton.addEventListener('click', () => {
        // Assuming downloadUrl is the URL to download the file
        const downloadUrl = 'index.html';
        window.location.href = downloadUrl;
    });
}
