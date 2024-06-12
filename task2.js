
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("user-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const formData = new FormData(form);
        const userData = {};

        formData.forEach(function(value, key) {
            userData[key] = value;
        });

        const messageDisplay = document.getElementById("message-display");
        messageDisplay.innerHTML = `
            <h2>User Information:</h2>
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Message:</strong> ${userData.message}</p>
        `;
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (form.checkValidity()) {
        const formData = new FormData(form);
        const userData = {};

        formData.forEach(function(value, key) {
            userData[key] = value;
        });

        const messageDisplay = document.getElementById("message-display");
        messageDisplay.innerHTML = `
            <h2>User Information:</h2>
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Message:</strong> ${userData.message}</p>
        `;
    } else {
        alert("Please fill out all required fields.");
    }
});

