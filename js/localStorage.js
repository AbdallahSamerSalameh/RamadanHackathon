// /**
//  * localStorage.js
//  * Handles all local storage operations for the Ramadan Charity Foundation website.
//  * Manages user preferences, donation history, and session data.
//  */

// // Local Storage Key Prefixes
// const STORAGE_KEYS = {
//   USER_PREFERENCES: 'rcf_user_prefs',
//   DONATION_HISTORY: 'rcf_donations',
//   RECENT_CAMPAIGNS: 'rcf_recent_campaigns',
//   FORM_DATA: 'rcf_form_data',
//   LAST_VISIT: 'rcf_last_visit'
// };

// /**
//  * LocalStorageManager Class
//  * Provides methods to interact with browser's localStorage
//  */
// class LocalStorageManager {
//   /**
//    * Check if localStorage is available in the browser
//    * @returns {boolean} true if localStorage is available, false otherwise
//    */
//   static isAvailable() {
//     try {
//       const testKey = '__test_key__';
//       localStorage.setItem(testKey, testKey);
//       localStorage.removeItem(testKey);
//       return true;
//     } catch (e) {
//       console.warn('localStorage is not available:', e);
//       return false;
//     }
//   }

//   /**
//    * Save data to localStorage
//    * @param {string} key - The key to store the data under
//    * @param {any} data - The data to store (will be JSON stringified)
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static save(key, data) {
//     if (!this.isAvailable()) return false;
    
//     try {
//       const serializedData = JSON.stringify(data);
//       localStorage.setItem(key, serializedData);
//       return true;
//     } catch (e) {
//       console.error('Error saving to localStorage:', e);
//       return false;
//     }
//   }

//   /**
//    * Retrieve data from localStorage
//    * @param {string} key - The key to retrieve data from
//    * @param {any} defaultValue - Default value to return if key doesn't exist
//    * @returns {any} The stored data or defaultValue if not found
//    */
//   static get(key, defaultValue = null) {
//     if (!this.isAvailable()) return defaultValue;
    
//     try {
//       const serializedData = localStorage.getItem(key);
//       if (serializedData === null) return defaultValue;
//       return JSON.parse(serializedData);
//     } catch (e) {
//       console.error('Error retrieving from localStorage:', e);
//       return defaultValue;
//     }
//   }

//   /**
//    * Remove a specific item from localStorage
//    * @param {string} key - The key to remove
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static remove(key) {
//     if (!this.isAvailable()) return false;
    
//     try {
//       localStorage.removeItem(key);
//       return true;
//     } catch (e) {
//       console.error('Error removing from localStorage:', e);
//       return false;
//     }
//   }

//   /**
//    * Clear all items stored by this application
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static clearAll() {
//     if (!this.isAvailable()) return false;
    
//     try {
//       Object.values(STORAGE_KEYS).forEach(keyPrefix => {
//         const keysToRemove = [];
//         for (let i = 0; i < localStorage.length; i++) {
//           const key = localStorage.key(i);
//           if (key.startsWith(keyPrefix)) {
//             keysToRemove.push(key);
//           }
//         }
//         keysToRemove.forEach(key => localStorage.removeItem(key));
//       });
//       return true;
//     } catch (e) {
//       console.error('Error clearing localStorage:', e);
//       return false;
//     }
//   }
// }

// /**
//  * UserPreferences Class
//  * Manages user-specific preferences
//  */
// class UserPreferences {
//   /**
//    * Save user preferences
//    * @param {Object} preferences - User preferences object
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static savePreferences(preferences) {
//     return LocalStorageManager.save(STORAGE_KEYS.USER_PREFERENCES, preferences);
//   }

//   /**
//    * Get user preferences
//    * @returns {Object} User preferences or empty object if not found
//    */
//   static getPreferences() {
//     return LocalStorageManager.get(STORAGE_KEYS.USER_PREFERENCES, {});
//   }

//   /**
//    * Update a specific preference
//    * @param {string} key - Preference key
//    * @param {any} value - Preference value
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static updatePreference(key, value) {
//     const preferences = this.getPreferences();
//     preferences[key] = value;
//     return this.savePreferences(preferences);
//   }

//   /**
//    * Get a specific preference
//    * @param {string} key - Preference key
//    * @param {any} defaultValue - Default value if preference not found
//    * @returns {any} Preference value or defaultValue
//    */
//   static getPreference(key, defaultValue = null) {
//     const preferences = this.getPreferences();
//     return preferences[key] !== undefined ? preferences[key] : defaultValue;
//   }

//   /**
//    * Remove a specific preference
//    * @param {string} key - Preference key
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static removePreference(key) {
//     const preferences = this.getPreferences();
//     if (preferences[key] !== undefined) {
//       delete preferences[key];
//       return this.savePreferences(preferences);
//     }
//     return true;
//   }
// }

// /**
//  * DonationHistory Class
//  * Manages donation history records
//  */
// class DonationHistory {
//   /**
//    * Save a donation record
//    * @param {Object} donation - Donation data
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static saveDonation(donation) {
//     // Add timestamp to the donation record
//     donation.timestamp = new Date().toISOString();
//     donation.id = Date.now().toString();
    
//     const history = this.getDonationHistory();
//     history.push(donation);
    
//     return LocalStorageManager.save(STORAGE_KEYS.DONATION_HISTORY, history);
//   }

//   /**
//    * Get all donation history
//    * @returns {Array} Array of donation records
//    */
//   static getDonationHistory() {
//     return LocalStorageManager.get(STORAGE_KEYS.DONATION_HISTORY, []);
//   }

//   /**
//    * Get total amount donated
//    * @returns {number} Total donation amount
//    */
//   static getTotalDonated() {
//     const history = this.getDonationHistory();
//     return history.reduce((total, donation) => total + parseFloat(donation.amount || 0), 0);
//   }

//   /**
//    * Clear donation history
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static clearHistory() {
//     return LocalStorageManager.remove(STORAGE_KEYS.DONATION_HISTORY);
//   }
// }

// /**
//  * FormManager Class
//  * Manages form data for auto-fill and persistence
//  */
// class FormManager {
//   /**
//    * Save form data
//    * @param {string} formId - Form identifier
//    * @param {Object} formData - Form data to save
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static saveFormData(formId, formData) {
//     const allFormData = this.getAllFormData();
//     allFormData[formId] = formData;
//     return LocalStorageManager.save(STORAGE_KEYS.FORM_DATA, allFormData);
//   }

//   /**
//    * Get all saved form data
//    * @returns {Object} Object containing all form data
//    */
//   static getAllFormData() {
//     return LocalStorageManager.get(STORAGE_KEYS.FORM_DATA, {});
//   }

//   /**
//    * Get data for a specific form
//    * @param {string} formId - Form identifier
//    * @returns {Object|null} Form data or null if not found
//    */
//   static getFormData(formId) {
//     const allFormData = this.getAllFormData();
//     return allFormData[formId] || null;
//   }

//   /**
//    * Clear saved data for a specific form
//    * @param {string} formId - Form identifier
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static clearFormData(formId) {
//     const allFormData = this.getAllFormData();
//     if (allFormData[formId]) {
//       delete allFormData[formId];
//       return LocalStorageManager.save(STORAGE_KEYS.FORM_DATA, allFormData);
//     }
//     return true;
//   }
// }

// /**
//  * SessionManager Class
//  * Manages session-related data
//  */
// class SessionManager {
//   /**
//    * Record a user visit
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static recordVisit() {
//     const lastVisit = {
//       timestamp: new Date().toISOString(),
//       page: window.location.pathname
//     };
//     return LocalStorageManager.save(STORAGE_KEYS.LAST_VISIT, lastVisit);
//   }

//   /**
//    * Get information about the last visit
//    * @returns {Object|null} Last visit data or null if not found
//    */
//   static getLastVisit() {
//     return LocalStorageManager.get(STORAGE_KEYS.LAST_VISIT, null);
//   }

//   /**
//    * Check if this is the user's first visit
//    * @returns {boolean} true if first visit, false otherwise
//    */
//   static isFirstVisit() {
//     return this.getLastVisit() === null;
//   }

//   /**
//    * Save recently viewed campaigns
//    * @param {Object} campaign - Campaign data
//    * @returns {boolean} true if successful, false otherwise
//    */
//   static addRecentCampaign(campaign) {
//     const recentCampaigns = this.getRecentCampaigns();
    
//     // Check if campaign already exists
//     const existingIndex = recentCampaigns.findIndex(c => c.id === campaign.id);
//     if (existingIndex !== -1) {
//       // Move to the front of the array
//       recentCampaigns.splice(existingIndex, 1);
//     }
    
//     // Add to the front of the array
//     recentCampaigns.unshift(campaign);
    
//     // Limit to last 5 campaigns
//     const limitedCampaigns = recentCampaigns.slice(0, 5);
    
//     return LocalStorageManager.save(STORAGE_KEYS.RECENT_CAMPAIGNS, limitedCampaigns);
//   }

//   /**
//    * Get recently viewed campaigns
//    * @returns {Array} Array of recent campaign data
//    */
//   static getRecentCampaigns() {
//     return LocalStorageManager.get(STORAGE_KEYS.RECENT_CAMPAIGNS, []);
//   }
// }

// /**
//  * Initialize the application-wide storage tracking
//  */
// function initStorageTracking() {
//   // Record the visit
//   SessionManager.recordVisit();
  
//   // Check if it's the first visit
//   if (SessionManager.isFirstVisit()) {
//     // Set default preferences
//     UserPreferences.savePreferences({
//       theme: 'light',
//       notificationsEnabled: true,
//       language: 'en'
//     });
//   }
  
//   // Add event listeners for form tracking
//   document.addEventListener('DOMContentLoaded', () => {
//     // Handle donation form
//     const donationForm = document.getElementById('donationForm');
//     if (donationForm) {
//       // Auto-fill form with saved data
//       const savedData = FormManager.getFormData('donationForm');
//       if (savedData) {
//         if (savedData.fullName) document.getElementById('fullName').value = savedData.fullName;
//         if (savedData.email) document.getElementById('email').value = savedData.email;
//         // Don't auto-fill sensitive payment information
//       }
      
//       // Save form data when submitted
//       donationForm.addEventListener('submit', (e) => {
//         const formData = {
//           fullName: document.getElementById('fullName').value,
//           email: document.getElementById('email').value,
//           campaign: document.getElementById('campaignSelect').value
//         };
        
//         FormManager.saveFormData('donationForm', formData);
        
//         // If form is submitted successfully, save to donation history
//         const selectedAmount = document.querySelector('input[name="amount"]:checked');
//         let amount = selectedAmount ? selectedAmount.value : '';
        
//         if (amount === 'custom') {
//           amount = document.getElementById('customAmount').value;
//         }
        
//         if (amount) {
//           DonationHistory.saveDonation({
//             amount: parseFloat(amount),
//             campaign: document.getElementById('campaignSelect').value,
//             recurring: document.getElementById('recurringSadaqah').checked
//           });
//         }
//       });
//     }
    
//     // Handle contact form
//     const contactForm = document.getElementById('contactForm');
//     if (contactForm) {
//       // Auto-fill form with saved data
//       const savedData = FormManager.getFormData('contactForm');
//       if (savedData) {
//         const nameInput = contactForm.querySelector('input[placeholder="Your Name"]');
//         const emailInput = contactForm.querySelector('input[placeholder="Your Email"]');
        
//         if (nameInput && savedData.name) nameInput.value = savedData.name;
//         if (emailInput && savedData.email) emailInput.value = savedData.email;
//       }
      
//       // Save form data when submitted
//       contactForm.addEventListener('submit', (e) => {
//         const nameInput = contactForm.querySelector('input[placeholder="Your Name"]');
//         const emailInput = contactForm.querySelector('input[placeholder="Your Email"]');
        
//         const formData = {
//           name: nameInput ? nameInput.value : '',
//           email: emailInput ? emailInput.value : ''
//         };
        
//         FormManager.saveFormData('contactForm', formData);
//       });
//     }
//   });
// }

// // Track campaign views
// function trackCampaignView(campaignId, campaignName) {
//   SessionManager.addRecentCampaign({
//     id: campaignId,
//     name: campaignName,
//     viewedAt: new Date().toISOString()
//   });
// }

// // Export all classes and functions
// window.RCF = {
//   LocalStorageManager,
//   UserPreferences,
//   DonationHistory,
//   FormManager,
//   SessionManager,
//   initStorageTracking,
//   trackCampaignView
// };

// // Initialize storage tracking
// initStorageTracking();

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// localStorage.js

// Initial campaign data
const initialCampaigns = [
  {
      id: "iftar",
      name: "Iftar Meals",
      goal: 50000,
      raised: 37500,
  },
  {
      id: "water",
      name: "Water Relief",
      goal: 75000,
      raised: 33750,
  },
  {
      id: "education",
      name: "Education Fund",
      goal: 40000,
      raised: 24000,
  }
];

// Initialize or load campaigns from local storage
function initializeCampaignData() {
  const storedCampaigns = localStorage.getItem('ramadanCampaigns');
  
  if (!storedCampaigns) {
      // If no data exists, initialize with default values
      localStorage.setItem('ramadanCampaigns', JSON.stringify(initialCampaigns));
      return initialCampaigns;
  } else {
      // If data exists, parse and return it
      return JSON.parse(storedCampaigns);
  }
}

// Update campaign progress in the UI
function updateCampaignUI(campaigns) {
  const campaignCards = document.querySelectorAll('.campaign-card');
  
  campaignCards.forEach((card, index) => {
      const campaign = campaigns[index];
      if (!campaign) return;
      
      // Update progress bar
      const progressBar = card.querySelector('.progress-bar');
      const progressPercentage = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100);
      progressBar.style.width = `${progressPercentage}%`;
      progressBar.textContent = `${progressPercentage}%`;
      
      // Update raised amount
      const raisedElement = card.querySelector('.raised');
      if (raisedElement) {
          raisedElement.textContent = `Raised: $${campaign.raised.toLocaleString()}`;
      }
  });
}

// Process donation
function processDonation(campaignId, amount) {
  // Get current campaign data
  const campaigns = initializeCampaignData();
  
  // Find the campaign by ID
  const campaign = campaigns.find(c => c.id === campaignId);
  
  if (campaign) {
      // Update raised amount
      campaign.raised += Number(amount);
      
      // Save updated data to local storage
      localStorage.setItem('ramadanCampaigns', JSON.stringify(campaigns));
      
      // Update UI
      updateCampaignUI(campaigns);
      
      return {
          success: true,
          campaign: campaign.name,
          amount: amount,
          newTotal: campaign.raised
      };
  }
  
  return { success: false, message: "Campaign not found" };
}

// Save donation to history
function saveToHistory(name, email, campaignId, amount, isRecurring) {
  // Get current history or initialize new array
  const history = JSON.parse(localStorage.getItem('donationHistory') || '[]');
  
  // Add new donation to history
  history.push({
      date: new Date().toISOString(),
      name: name,
      email: email,
      campaignId: campaignId,
      amount: amount,
      isRecurring: isRecurring
  });
  
  // Save updated history
  localStorage.setItem('donationHistory', JSON.stringify(history));
}

// Get donation history
function getDonationHistory() {
  return JSON.parse(localStorage.getItem('donationHistory') || '[]');
}

// Calculate total raised across all campaigns
function calculateTotalRaised() {
  const campaigns = initializeCampaignData();
  return campaigns.reduce((total, campaign) => total + campaign.raised, 0);
}

// Initialize the donation system
document.addEventListener('DOMContentLoaded', function() {
  // Initialize campaign data
  const campaigns = initializeCampaignData();
  
  // Update UI with current values
  updateCampaignUI(campaigns);
  
  // Setup enhanced donation form
  enhanceDonationForm();
  
  // Display total raised amount if there's an element for it
  const totalRaisedElement = document.getElementById('totalRaised');
  if (totalRaisedElement) {
      totalRaisedElement.textContent = `$${calculateTotalRaised().toLocaleString()}`;
  }
});

// Enhanced donation form handling
function enhanceDonationForm() {
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
          
          const campaignId = document.getElementById('campaignSelect').value;
          const fullName = document.getElementById('fullName').value;
          const email = document.getElementById('email').value;
          const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
          const isRecurring = document.getElementById('recurringSadaqah').checked;
          
          // Validate form
          if (!amount || !fullName || !email) {
              alert('Please fill in all required fields.');
              return;
          }
          
          // Process the donation
          const result = processDonation(campaignId, Number(amount));
          
          if (result.success) {
              // Show success message
              alert(`Thank you for your donation of $${amount} to our ${result.campaign} campaign. Your generosity is greatly appreciated.`);
              
              // Save donation to donation history
              saveToHistory(fullName, email, campaignId, Number(amount), isRecurring);
              
              // Reset form
              donationForm.reset();
          } else {
              alert('There was an issue processing your donation. Please try again.');
          }
      });
  }
}