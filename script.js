// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Get the elements
    const navLinks = document.querySelectorAll("nav ul li a");
    const welcomeText = document.querySelector(".welcome-text");

    // Fade-in effect for the welcome text
    setTimeout(function () {
        welcomeText.style.opacity = 1;
        welcomeText.style.transition = "opacity 1s ease-in";
    }, 500); // Delay the fade-in effect slightly

    // Mobile Navigation Toggle (Hamburger Menu)
    const navMenu = document.querySelector("nav ul");
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = '&#9776;'; // Hamburger Icon
    document.querySelector("header .header-content").appendChild(menuToggle);

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Add smooth scroll behavior to anchor links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for header height
                behavior: "smooth"
            });
        });
    });
});
