////////////////////////////////////////////////////////////////////////////////////////////////

// // Wait for the DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Navbar scroll effect
//     handleNavbarScroll();
    
//     // Initialize Ramadan countdown
//     initRamadanCountdown();
    
//     // Initialize form handlers
//     initDonationForm();
//     initContactForm();
    
//     // Initialize custom amount field toggle
//     initCustomAmountToggle();
    
//     // Initialize smooth scrolling for navigation links
//     initSmoothScrolling();
// });

// // Handle navbar appearance on scroll
// function handleNavbarScroll() {
//     const navbar = document.querySelector('.navbar');
    
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) {
//             navbar.style.padding = '10px 0';
//             navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
//         } else {
//             navbar.style.padding = '15px 0';
//             navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
//         }
//     });
// }

// // Initialize Ramadan countdown timer
// function initRamadanCountdown() {
//     // Set the date for next Ramadan (example: March 30, 2025)
//     // You would update this date accordingly each year
//     const ramadanDate = new Date('March 30, 2025 00:00:00').getTime();
    
//     // Update the countdown every second
//     const countdownTimer = setInterval(function() {
//         // Get current date and time
//         const now = new Date().getTime();
        
//         // Calculate the time remaining
//         const timeRemaining = ramadanDate - now;
        
//         // Calculate days, hours, minutes, and seconds
//         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
//         // Display the countdown
//         document.getElementById('days').innerText = days.toString().padStart(2, '0');
//         document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
//         document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
//         document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
        
//         // If countdown is finished
//         if (timeRemaining < 0) {
//             clearInterval(countdownTimer);
//             document.getElementById('ramadan-countdown').innerHTML = '<h4>Ramadan Mubarak!</h4>';
//         }
//     }, 1000);
// }

// // Handle donation form submission
// function initDonationForm() {
//     const donationForm = document.getElementById('donationForm');
    
//     if (donationForm) {
//         donationForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Get form values
//             const selectedAmount = document.querySelector('input[name="amount"]:checked');
//             let amount = selectedAmount ? selectedAmount.value : '';
            
//             if (amount === 'custom') {
//                 amount = document.getElementById('customAmount').value;
//             }
            
//             const campaign = document.getElementById('campaignSelect').value;
//             const fullName = document.getElementById('fullName').value;
//             const email = document.getElementById('email').value;
//             const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
//             const isRecurring = document.getElementById('recurringSadaqah').checked;
            
//             // Validate form
//             if (!amount || !fullName || !email) {
//                 alert('Please fill in all required fields.');
//                 return;
//             }
            
//             // Show a success message (in a real implementation, you would process the donation)
//             alert(`Thank you for your donation of $${amount} to our ${campaign} campaign. Your generosity is greatly appreciated.`);
            
//             // Reset form
//             donationForm.reset();
//         });
//     }
// }

// // Handle contact form submission
// function initContactForm() {
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Get form values (you would typically send these to a server)
//             const formData = new FormData(contactForm);
            
//             // Show a success message
//             alert('Thank you for your message. We will get back to you soon!');
            
//             // Reset form
//             contactForm.reset();
//         });
//     }
// }

// // Toggle custom amount field based on radio button selection
// function initCustomAmountToggle() {
//     const amountRadios = document.querySelectorAll('input[name="amount"]');
//     const customAmountField = document.getElementById('customAmountField');
    
//     if (amountRadios.length && customAmountField) {
//         amountRadios.forEach(radio => {
//             radio.addEventListener('change', function() {
//                 if (this.value === 'custom') {
//                     customAmountField.classList.remove('d-none');
//                     document.getElementById('customAmount').focus();
//                 } else {
//                     customAmountField.classList.add('d-none');
//                 }
//             });
//         });
//     }
// }

// // Implement smooth scrolling for navigation links
// function initSmoothScrolling() {
//     const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             // Check if the link has a hash
//             const targetId = this.getAttribute('href');
//             if (targetId.startsWith('#')) {
//                 e.preventDefault();
                
//                 const targetElement = document.querySelector(targetId);
//                 if (targetElement) {
//                     // Get the height of the navbar
//                     const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    
//                     // Calculate the position to scroll to
//                     const targetPosition = targetElement.offsetTop - navbarHeight;
                    
//                     // Smooth scroll to the target
//                     window.scrollTo({
//                         top: targetPosition,
//                         behavior: 'smooth'
//                     });
                    
//                     // Close the mobile navbar if it's open
//                     const navbarCollapse = document.querySelector('.navbar-collapse');
//                     if (navbarCollapse.classList.contains('show')) {
//                         navbarCollapse.classList.remove('show');
//                     }
//                 }
//             }
//         });
//     });
// }

// // Handle newsletter subscription
// document.addEventListener('DOMContentLoaded', function() {
//     const newsletterForm = document.querySelector('.newsletter-form');
    
//     if (newsletterForm) {
//         newsletterForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const emailInput = newsletterForm.querySelector('input[type="email"]');
//             const email = emailInput.value;
            
//             if (!email) {
//                 alert('Please enter your email address.');
//                 return;
//             }
            
//             // Show a success message (in a real implementation, you would send this to a server)
//             alert('Thank you for subscribing to our newsletter!');
            
//             // Reset form
//             newsletterForm.reset();
//         });
//     }
// });

// // Active link highlighting based on scroll position
// window.addEventListener('scroll', function() {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
//     let current = '';
    
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
//         if (window.scrollY >= (sectionTop - navbarHeight - 100)) {
//             current = section.getAttribute('id');
//         }
//     });
    
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${current}`) {
//             link.classList.add('active');
//         }
//     });
// });

////////////////////////////////////////////////////////////////////////////////////

// script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    handleNavbarScroll();
    
    // Initialize Ramadan countdown
    initRamadanCountdown();
    
    // Initialize form handlers
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





// ///////////////////////////////////////////////////////////////////////////////


// // Donation tracking functionality

// // Initial campaign data
// const initialCampaigns = [
//     {
//       id: "iftar",
//       name: "Iftar Meals",
//       goal: 50000,
//       raised: 37500,
//     },
//     {
//       id: "water",
//       name: "Water Relief",
//       goal: 75000,
//       raised: 33750,
//     },
//     {
//       id: "education",
//       name: "Education Fund",
//       goal: 40000,
//       raised: 24000,
//     }
//   ];
  
//   // Initialize or load campaigns from local storage
//   function initializeCampaignData() {
//     // Check if campaign data exists in local storage
//     const storedCampaigns = localStorage.getItem('ramadanCampaigns');
    
//     if (!storedCampaigns) {
//       // If no data exists, initialize with default values
//       localStorage.setItem('ramadanCampaigns', JSON.stringify(initialCampaigns));
//       return initialCampaigns;
//     } else {
//       // If data exists, parse and return it
//       return JSON.parse(storedCampaigns);
//     }
//   }
  
//   // Update campaign progress in the UI
//   function updateCampaignUI(campaigns) {
//     const campaignCards = document.querySelectorAll('.campaign-card');
    
//     campaignCards.forEach((card, index) => {
//       const campaign = campaigns[index];
//       if (!campaign) return;
      
//       // Update progress bar
//       const progressBar = card.querySelector('.progress-bar');
//       const progressPercentage = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100);
//       progressBar.style.width = `${progressPercentage}%`;
//       progressBar.textContent = `${progressPercentage}%`;
      
//       // Update raised amount
//       const raisedElement = card.querySelector('.raised');
//       if (raisedElement) {
//         raisedElement.textContent = `Raised: $${campaign.raised.toLocaleString()}`;
//       }
//     });
//   }
  
//   // Process donation
//   function processDonation(campaignId, amount) {
//     // Get current campaign data
//     const campaigns = initializeCampaignData();
    
//     // Find the campaign by ID
//     const campaign = campaigns.find(c => c.id === campaignId);
    
//     if (campaign) {
//       // Update raised amount
//       campaign.raised += Number(amount);
      
//       // Save updated data to local storage
//       localStorage.setItem('ramadanCampaigns', JSON.stringify(campaigns));
      
//       // Update UI
//       updateCampaignUI(campaigns);
      
//       return {
//         success: true,
//         campaign: campaign.name,
//         amount: amount,
//         newTotal: campaign.raised
//       };
//     }
    
//     return { success: false, message: "Campaign not found" };
//   }
  
//   // Enhanced donation form handling
//   function enhanceDonationForm() {
//     const donationForm = document.getElementById('donationForm');
    
//     if (donationForm) {
//       donationForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form values
//         const selectedAmount = document.querySelector('input[name="amount"]:checked');
//         let amount = selectedAmount ? selectedAmount.value : '';
        
//         if (amount === 'custom') {
//           amount = document.getElementById('customAmount').value;
//         }
        
//         const campaignId = document.getElementById('campaignSelect').value;
//         const fullName = document.getElementById('fullName').value;
//         const email = document.getElementById('email').value;
//         const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
//         const isRecurring = document.getElementById('recurringSadaqah').checked;
        
//         // Validate form
//         if (!amount || !fullName || !email) {
//           alert('Please fill in all required fields.');
//           return;
//         }
        
//         // Process the donation
//         const result = processDonation(campaignId, Number(amount));
        
//         if (result.success) {
//           // Show success message
//           alert(`Thank you for your donation of $${amount} to our ${result.campaign} campaign. Your generosity is greatly appreciated.`);
          
//           // Save donation to donation history
//           saveToHistory(fullName, email, campaignId, Number(amount), isRecurring);
          
//           // Reset form
//           donationForm.reset();
//         } else {
//           alert('There was an issue processing your donation. Please try again.');
//         }
//       });
//     }
//   }
  
//   // Save donation to history
//   function saveToHistory(name, email, campaignId, amount, isRecurring) {
//     // Get current history or initialize new array
//     const history = JSON.parse(localStorage.getItem('donationHistory') || '[]');
    
//     // Add new donation to history
//     history.push({
//       date: new Date().toISOString(),
//       name: name,
//       email: email,
//       campaignId: campaignId,
//       amount: amount,
//       isRecurring: isRecurring
//     });
    
//     // Save updated history
//     localStorage.setItem('donationHistory', JSON.stringify(history));
//   }
  
//   // Get donation history
//   function getDonationHistory() {
//     return JSON.parse(localStorage.getItem('donationHistory') || '[]');
//   }
  
//   // Calculate total raised across all campaigns
//   function calculateTotalRaised() {
//     const campaigns = initializeCampaignData();
//     return campaigns.reduce((total, campaign) => total + campaign.raised, 0);
//   }
  
//   // Initialize the donation system
//   document.addEventListener('DOMContentLoaded', function() {
//     // Initialize campaign data
//     const campaigns = initializeCampaignData();
    
//     // Update UI with current values
//     updateCampaignUI(campaigns);
    
//     // Setup enhanced donation form
//     enhanceDonationForm();
    
//     // Display total raised amount if there's an element for it
//     const totalRaisedElement = document.getElementById('totalRaised');
//     if (totalRaisedElement) {
//       totalRaisedElement.textContent = `$${calculateTotalRaised().toLocaleString()}`;
//     }
//   });