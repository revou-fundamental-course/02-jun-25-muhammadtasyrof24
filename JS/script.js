// Auto Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
        
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
        
setInterval(nextSlide, 4000);

// Welcome Message with Name
function askForName() {
    const name = prompt("Welcome! Please enter your name:");
    if (name && name.trim() !== "") {
                document.getElementById('welcome-message').textContent = `Hi ${name}, Welcome to Our School!`;
    }
}
        
// Ask for name when page loads
window.addEventListener('load', function() {
    setTimeout(askForName, 1000);
});

// Navigation Toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
}

// Page Navigation
function showSection(section) {
    const homePage = document.getElementById('home-page');
    const profilePage = document.getElementById('profile-page');
    const navMenu = document.querySelector('.nav-menu');
            
    if (section === 'home') {
        homePage.style.display = 'block';
        profilePage.classList.remove('active');
        window.scrollTo(0, 0);
    } else if (section === 'profile') {
        homePage.style.display = 'none';
        profilePage.classList.add('active');
        window.scrollTo(0, 0);
    }
            
    // Close mobile menu
    navMenu.classList.remove('active');
}

// Form Validation
function validateForm() {
    let isValid = true;
            
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
            
    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => {
        error.style.display = 'none';
    });
            
    // Validate name
    if (!name.value.trim()) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
            
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
            
    // Validate phone
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!phone.value.trim() || !phoneRegex.test(phone.value.replace(/\s/g, ''))) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
            
    // Validate message
    if (!message.value.trim()) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
            
    return isValid;
}

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
            
    if (validateForm()) {
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
                
        // Display submitted data
        const resultsDiv = document.getElementById('formResults');
        const dataDiv = document.getElementById('submittedData');
                
        dataDiv.innerHTML = `
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
            <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        `;
                
        resultsDiv.style.display = 'block';

        // Reset form
        this.reset();
                
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
            
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});