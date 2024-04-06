// Get references to the navigation links
var homeLink = document.getElementById("homeLink");
var registrationLink = document.getElementById("registrationLink");
var aboutUsLink = document.getElementById("aboutUsLink");

// Add click event listeners to the navigation links
homeLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of anchor links
    // Replace the content with home page content
    document.querySelector(".content").innerHTML = `
        <h1>Welcome to Room Booking</h1>
        <p>This is the home page content.</p>`;
});

registrationLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of anchor links
    // Replace the content with registration page content
    document.querySelector(".content").innerHTML = `
        <h1>Registration</h1>
        <p>This is the registration page content.</p>`;
});

aboutUsLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of anchor links
    // Replace the content with about us page content
    document.querySelector(".content").innerHTML = `
        <h1>About Us</h1>
        <p>This is the about us page content.</p>`;
});
