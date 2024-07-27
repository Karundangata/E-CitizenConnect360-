document.addEventListener('DOMContentLoaded', () => {
    // Redirect to different pages when buttons are clicked
    const homeButton = document.querySelector('.home-button');
    const loginButton = document.querySelector('.login-button');
    const profileButton = document.querySelector('.profile-button');
    const dashboardButton = document.querySelector('.dashboard-button');
    const settingsButton = document.querySelector('.settings-button');
    const educationResourcesButton = document.querySelector('educationResources-button');
    const addIncidentButton = document.querySelector('.addIncident-button');
    const addViewsButton = document.querySelector('.addViews-button');
    const chatBotButton = document.querySelector('.chatBot-button');
    const addPollsButton = document.querySelector('.addPolls-button');

    const logoutButton = document.querySelector('.logout-button');
    logoutButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Replace with actual login page URL
    });

    homeButton?.addEventListener('click', () => {
        window.location.href = 'index.html'; // Replace with actual home page URL
    });
    
    loginButton?.addEventListener('click', () => {
        window.location.href = 'login.html'; // Replace with actual login page URL
    });

    profileButton?.addEventListener('click', () => {
        window.location.href = 'profile.html'; // Replace with actual profile page URL
    });

    dashboardButton?.addEventListener('click', () => {
        window.location.href = 'dashboard.html'; // Replace with actual dashboard page URL
    });

    homeButton?.addEventListener('click', () => {
        window.location.href = 'index.html'; // Replace with actual home page URL
    });

    dashboardButton?.addEventListener('click', () => {
        window.location.href = 'dashboard.html'; // Replace with actual dashboard page URL
    });

    

    addPollsButton?.addEventListener('click', () => {
        window.location.href = 'pollsuser.html'; // Replace with actual add polls page URL
    });

    educationResourcesButton?.addEventListener('click', () => {
        window.location.href = 'document.html'; // Replace with actual add education resources page URL
    });

    addIncidentButton?.addEventListener('click', () => {
        window.location.href = 'incident.html'; // Replace with actual incident page URL
    });

    addViewsButton?.addEventListener('click', () => {
        window.location.href = 'views.html'; // Replace with actual views page URL
    });

    chatBotButton?.addEventListener('click', () => {
        window.location.href = 'chatbot.html'; // Replace with actual chatbot page URL
    });
});
    // Handle send icon functionality
    const sendIcon = document.querySelector('.bx-send');
    sendIcon?.addEventListener('click', () => {
        const inputField = document.querySelector('.summary-box input');
        const inputText = inputField.value.trim();

        if (inputText) {
            generateSummary(inputText);
        } else {
            alert('Please enter a command to generate summary.');
        }
    });

    // Function to generate summary based on user input
    function generateSummary(inputText) {
        const viewItems = document.querySelectorAll('.view-item');
        const summaryContainer = document.querySelector('.summary-container');

        let summaryText = '';

        // Extract the number of views specified by the user
        const numberMatch = inputText.match(/\d+/);
        const numberOfViews = numberMatch ? parseInt(numberMatch[0]) : 0;

        if (numberOfViews > 0) {
            // Determine which views to summarize based on the input command
            let viewsToSummarize = [];

            if (inputText.toLowerCase().includes('last')) {
                viewsToSummarize = Array.from(viewItems).slice(-numberOfViews);
            } else if (inputText.toLowerCase().includes('first')) {
                viewsToSummarize = Array.from(viewItems).slice(0, numberOfViews);
            } else {
                summaryText = 'Invalid command. Please specify "first N views" or "last N views".';
            }

            // Summarize the selected views
            if (viewsToSummarize.length > 0) {
                summaryText = summarizeViews(viewsToSummarize);
            }
        } else {
            summaryText = 'Please specify a valid number of views to summarize.';
        }

        // Create a new summary item and add it to the summary container
        const summaryItem = document.createElement('div');
        summaryItem.classList.add('summary-item');
        summaryItem.innerHTML = `<h3>Summary</h3><p>${summaryText}</p>`;
        summaryContainer.appendChild(summaryItem);

        // Clear the input field
        inputField.value = '';
    }

    // Function to summarize given views
    function summarizeViews(views) {
        let summary = '';
        views.forEach(view => {
            const viewTitle = view.querySelector('h3').textContent;
            const viewText = view.querySelector('p').textContent;
            summary += `${viewTitle}: ${viewText} `;
        });
        return summary;
    }

