// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    handleNavbarScroll();
    
    // Initialize Ramadan countdown
    initRamadanCountdown();
    
    // Initialize form handlers
    initDonationForm();
    initContactForm();
    
    // Initialize custom amount field toggle
    initCustomAmountToggle();
    
    // Initialize smooth scrolling for navigation links
    initSmoothScrolling();
});

// Handle navbar appearance on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Initialize Ramadan countdown timer
function initRamadanCountdown() {
    // Set the date for next Ramadan (example: March 30, 2025)
    // You would update this date accordingly each year
    const ramadanDate = new Date('March 30, 2025 00:00:00').getTime();
    
    // Update the countdown every second
    const countdownTimer = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Calculate the time remaining
        const timeRemaining = ramadanDate - now;
        
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        // Display the countdown
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
        
        // If countdown is finished
        if (timeRemaining < 0) {
            clearInterval(countdownTimer);
            document.getElementById('ramadan-countdown').innerHTML = '<h4>Ramadan Mubarak!</h4>';
        }
    }, 1000);
}

// Handle donation form submission
function initDonationForm() {
    const donationForm = document.getElementById('donationForm');
    
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const selectedAmount = document.querySelector('input[name="amount"]:checked');
            let amount = selectedAmount ? selectedAmount.value : '';
            
            if (amount === 'custom') {
                amount = document.getElementById('customAmount').value;
            }
            
            const campaign = document.getElementById('campaignSelect').value;
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            const isRecurring = document.getElementById('recurringSadaqah').checked;
            
            // Validate form
            if (!amount || !fullName || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show a success message (in a real implementation, you would process the donation)
            alert(`Thank you for your donation of $${amount} to our ${campaign} campaign. Your generosity is greatly appreciated.`);
            
            // Reset form
            donationForm.reset();
        });
    }
}

// Handle contact form submission
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values (you would typically send these to a server)
            const formData = new FormData(contactForm);
            
            // Show a success message
            alert('Thank you for your message. We will get back to you soon!');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Toggle custom amount field based on radio button selection
function initCustomAmountToggle() {
    const amountRadios = document.querySelectorAll('input[name="amount"]');
    const customAmountField = document.getElementById('customAmountField');
    
    if (amountRadios.length && customAmountField) {
        amountRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'custom') {
                    customAmountField.classList.remove('d-none');
                    document.getElementById('customAmount').focus();
                } else {
                    customAmountField.classList.add('d-none');
                }
            });
        });
    }
}

// Implement smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link has a hash
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Get the height of the navbar
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    
                    // Calculate the position to scroll to
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    // Smooth scroll to the target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close the mobile navbar if it's open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                }
            }
        });
    });
}

// Handle newsletter subscription
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            // Show a success message (in a real implementation, you would send this to a server)
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            newsletterForm.reset();
        });
    }
});

// Active link highlighting based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        if (window.scrollY >= (sectionTop - navbarHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});