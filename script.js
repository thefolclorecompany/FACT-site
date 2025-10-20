// Language detection and management
let currentLanguage = 'en';

// Detect language based on IP geolocation
async function detectLanguageByIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // Map country codes to languages
        const countryLanguageMap = {
            'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt', 'CV': 'pt', 'GW': 'pt', 'ST': 'pt', 'TL': 'pt',
            'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'LU': 'fr', 'MC': 'fr', 'CA': 'fr', 'SN': 'fr', 'CI': 'fr', 'ML': 'fr', 'BF': 'fr', 'NE': 'fr', 'TD': 'fr', 'MG': 'fr', 'CM': 'fr', 'CF': 'fr', 'CD': 'fr', 'CG': 'fr', 'GA': 'fr', 'GQ': 'fr', 'DJ': 'fr', 'KM': 'fr', 'RE': 'fr', 'YT': 'fr', 'NC': 'fr', 'PF': 'fr', 'WF': 'fr', 'VU': 'fr', 'BI': 'fr', 'RW': 'fr', 'SC': 'fr', 'MU': 'fr', 'HT': 'fr', 'GP': 'fr', 'MQ': 'fr', 'GF': 'fr', 'PM': 'fr', 'BL': 'fr', 'MF': 'fr',
            'TH': 'th'
        };
        
        const detectedLang = countryLanguageMap[data.country_code] || 'en';
        return detectedLang;
    } catch (error) {
        console.log('IP detection failed, using default language');
        return 'en';
    }
}

// Load language preference from localStorage
function loadLanguagePreference() {
    const savedLanguage = localStorage.getItem('fact-language');
    if (savedLanguage && translations[savedLanguage]) {
        return savedLanguage;
    }
    return null;
}

// Save language preference to localStorage
function saveLanguagePreference(language) {
    localStorage.setItem('fact-language', language);
}

// Translate page content
function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[language], key);
        if (translation) {
            if (element.tagName === 'TITLE') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
    // Update language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = language;
    }
    
    // Dispatch language change event for dynamic components
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language } }));
}

// Get nested translation value
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Initialize language
async function initializeLanguage() {
    // Check for saved preference first
    const savedLanguage = loadLanguagePreference();
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    } else {
        // Detect language by IP
        currentLanguage = await detectLanguageByIP();
        saveLanguagePreference(currentLanguage);
    }
    
    translatePage(currentLanguage);
}

// Language selector event listener
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            translatePage(currentLanguage);
            saveLanguagePreference(currentLanguage);
        });
    }
    
    // Initialize language
    initializeLanguage();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.98)';
            nav.style.boxShadow = '0 5px 20px rgba(255,255,255,0.1)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.95)';
            nav.style.boxShadow = 'none';
        }
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease both';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .benefit-card, .step, .faq-item').forEach(el => {
    observer.observe(el);
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
}

// Demo tab switching within standalone page
document.querySelectorAll('.demo-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const view = this.getAttribute('data-view');
        if (window.nfcDemo) {
            window.nfcDemo.currentView = view;
            window.nfcDemo.render();
        }
    });
});

// FAQ Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        const content = item.querySelector('.faq-content');
        const toggle = item.querySelector('.faq-toggle');
        
        if (header && content && toggle) {
            header.addEventListener('click', function() {
                const isOpen = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherToggle = otherItem.querySelector('.faq-toggle');
                        if (otherToggle) otherToggle.textContent = '+';
                    }
                });
                
                // Toggle current item
                if (isOpen) {
                    item.classList.remove('active');
                    toggle.textContent = '+';
                } else {
                    item.classList.add('active');
                    toggle.textContent = '−';
                }
            });
        }
    });
    
    // FAQ Search functionality
    const searchInput = document.getElementById('faq-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterFAQs(searchTerm);
        });
    }
    
    // FAQ Category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter by category
            const category = this.getAttribute('data-category');
            filterFAQsByCategory(category);
        });
    });
});

// Filter FAQs by search term
function filterFAQs(searchTerm) {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqGrid = document.getElementById('faq-grid');
    
    let visibleCount = 0;
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3').textContent.toLowerCase();
        const answer = item.querySelector('.faq-content').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    let noResultsMsg = document.getElementById('no-results');
    if (visibleCount === 0 && searchTerm.length > 0) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.id = 'no-results';
            noResultsMsg.className = 'no-results';
            noResultsMsg.innerHTML = '<p>No questions found matching your search.</p>';
            faqGrid.appendChild(noResultsMsg);
        }
        noResultsMsg.style.display = 'block';
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
}

// Filter FAQs by category
function filterFAQsByCategory(category) {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Clear search when filtering by category
    const searchInput = document.getElementById('faq-search');
    if (searchInput) {
        searchInput.value = '';
    }
}
