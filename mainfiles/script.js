document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.classList.remove("hidden");
        document.body.style.overflow = "auto"; // Allow scrolling
    }, 2500); // Matches the animation duration
});




const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let isHovered = false;

// Pause animation on hover
slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        sliderContainer.style.animationPlayState = 'paused';
        isHovered = true;
    });

    slide.addEventListener('mouseout', () => {
        sliderContainer.style.animationPlayState = 'running';
        isHovered = false;
    });

    
});

const testimonials = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function showNextTestimonial() {
    testimonials.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentIndex) {
            card.classList.add('active');
        }
    });
    currentIndex = (currentIndex + 1) % testimonials.length;
}

// Change testimonial every 4 seconds
setInterval(showNextTestimonial, 4000);

//contact form 

function showCustomAlert(message) {
    const alertBox = document.getElementById("customAlert");
    alertBox.innerText = message;
    alertBox.style.display = "block";

    // Hide the alert after 3 seconds
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}

// Add event listener to the form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Validate Full Name
    if (!name) {
        showCustomAlert("Full Name is required!");
        event.preventDefault();
        return;
    }

    // Validate Email
    if (!email) {
        showCustomAlert("Email is required!");
        event.preventDefault();
        return;
    }

    // Validate Phone Number
    if (!phone) {
        showCustomAlert("Phone Number is required!");
        event.preventDefault();
        return;
    } else if (!/^\d{10}$/.test(phone)) {
        showCustomAlert("Phone Number must be exactly 10 digits!");
        event.preventDefault();
        return;
    }

    showCustomAlert("Form submitted successfully!");
    // Form submission will continue after validation
});

