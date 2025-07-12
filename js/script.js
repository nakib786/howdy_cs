document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year
    updateCopyrightYear();
    
    // Load project name from local storage or use default
    loadProjectName();
    
    // Initialize newsletter form
    initNewsletterForm();
    
    // Add scroll animations
    initScrollAnimations();
    
    // Add modern tech effects
    initModernEffects();
    
    // Initialize moving borders
    initMovingBorders();
});

/**
 * Update copyright year to current year
 */
function updateCopyrightYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Load project name from local storage
 */
function loadProjectName() {
    const projectNameElement = document.getElementById('projectName');
    if (projectNameElement) {
        // Try to get project name from local storage
        const storedProjectName = localStorage.getItem('projectName');
        
        // If found in local storage, use it
        if (storedProjectName) {
            projectNameElement.textContent = storedProjectName;
        }
        
        // Otherwise, the default "Howdy Cafe" will remain
    }
}

/**
 * Initialize newsletter subscription form
 */
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const statusElement = document.getElementById('subscriptionStatus');
    
    if (!form || !emailInput || !subscribeBtn || !statusElement) return;
    
    // Add focus effect to input
    emailInput.addEventListener('focus', () => {
        emailInput.parentElement.classList.add('focused');
    });
    
    emailInput.addEventListener('blur', () => {
        emailInput.parentElement.classList.remove('focused');
    });
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Validate email
        if (!email || !isValidEmail(email)) {
            showStatus('Please enter a valid email address', 'error');
            emailInput.focus();
            return;
        }
        
        // Show loading state
        subscribeBtn.classList.add('loading');
        showStatus('', '');
        
        try {
            // Use the same Google Apps Script URL from the original project
            // This is the URL we found in the Footer.tsx component
            const webAppUrl = 'https://script.google.com/macros/s/AKfycbwKd60rA8qJrWm2VLZ1tCzjK6rp3Piia63GPac5wGd3DVdFbO6ERKjiBqGZVc8wzf25/exec';
            
            // Use GET request with email as parameter (works better with Google Apps Script)
            const response = await fetch(`${webAppUrl}?email=${encodeURIComponent(email)}`, {
                method: 'GET',
                mode: 'cors'
            });
            
            try {
                const result = await response.json();
                
                if (result.success) {
                    showStatus('Thank you for subscribing! 🎉', 'success');
                    emailInput.value = '';
                    
                    // Clear success message after 3 seconds
                    setTimeout(() => {
                        showStatus('', '');
                    }, 3000);
                } else {
                    showStatus(result.message || 'Something went wrong. Please try again.', 'error');
                }
            } catch (jsonError) {
                // Fallback for CORS issues: assume success if response was received
                showStatus('Thank you for subscribing! 🎉', 'success');
                emailInput.value = '';
                
                setTimeout(() => {
                    showStatus('', '');
                }, 3000);
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            
            // Fallback: Try with no-cors mode
            try {
                const webAppUrl = 'https://script.google.com/macros/s/AKfycbwKd60rA8qJrWm2VLZ1tCzjK6rp3Piia63GPac5wGd3DVdFbO6ERKjiBqGZVc8wzf25/exec';
                
                await fetch(`${webAppUrl}?email=${encodeURIComponent(email)}`, {
                    method: 'GET',
                    mode: 'no-cors'
                });
                
                // Since no-cors mode doesn't allow reading the response,
                // we'll assume success if no error was thrown
                showStatus('Thank you for subscribing! 🎉', 'success');
                emailInput.value = '';
                
                setTimeout(() => {
                    showStatus('', '');
                }, 3000);
            } catch (fallbackError) {
                console.error('Fallback subscription error:', fallbackError);
                showStatus('Something went wrong. Please try again.', 'error');
            }
        } finally {
            // Hide loading state
            subscribeBtn.classList.remove('loading');
        }
    });
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to show status message
    function showStatus(message, type) {
        statusElement.textContent = message;
        statusElement.className = 'subscription-status';
        
        if (type) {
            statusElement.classList.add(type);
        }
    }
}

/**
 * Initialize scroll animations for elements
 */
function initScrollAnimations() {
    // Get all elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.content > *:not(.coming-soon):not(.tagline):not(.description):not(.newsletter):not(.social-links)');
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Apply initial styles and observe elements
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });
    
    // Add hover animations for interactive elements
    addHoverEffects();
}

/**
 * Add hover effects to interactive elements
 */
function addHoverEffects() {
    // Social links hover effect
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px) rotate(10deg)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) rotate(0)';
        });
    });
}

/**
 * Initialize modern tech-inspired effects
 */
function initModernEffects() {
    // Add subtle parallax effect to maple leaves
    addParallaxEffect();
    
    // Add gradient text animation to headings
    animateGradientText();
    
    // Add subtle hover effect to the newsletter card
    addCardHoverEffect();
}

/**
 * Add parallax effect to background elements
 */
function addParallaxEffect() {
    const leaves = document.querySelectorAll('.maple-leaf');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        leaves.forEach((leaf, index) => {
            const speed = 1 - (index * 0.1);
            const offsetX = (x - 0.5) * 20 * speed;
            const offsetY = (y - 0.5) * 20 * speed;
            
            leaf.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${offsetX * 0.5}deg)`;
        });
    });
}

/**
 * Animate gradient text for headings
 */
function animateGradientText() {
    const headings = document.querySelectorAll('h2');
    
    headings.forEach(heading => {
        heading.classList.add('gradient-text');
    });
}

/**
 * Add subtle hover effect to the newsletter card
 */
function addCardHoverEffect() {
    const newsletterCard = document.querySelector('.newsletter');
    const aboutCard = document.querySelector('.about-section');
    
    if (newsletterCard) {
        newsletterCard.addEventListener('mouseenter', () => {
            newsletterCard.classList.add('card-hover');
        });
        
        newsletterCard.addEventListener('mouseleave', () => {
            newsletterCard.classList.remove('card-hover');
        });
    }
    
    if (aboutCard) {
        aboutCard.addEventListener('mouseenter', () => {
            aboutCard.classList.add('card-hover');
        });
        
        aboutCard.addEventListener('mouseleave', () => {
            aboutCard.classList.remove('card-hover');
        });
    }
}

/**
 * Initialize moving border effect
 */
function initMovingBorders() {
    const movingBorderElements = document.querySelectorAll('.moving-border-container');
    
    movingBorderElements.forEach(container => {
        const borderElement = container.querySelector('.moving-border');
        
        if (!borderElement) return;
        
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
            const yPercent = Math.max(0, Math.min(100, (y / rect.height) * 100));
            
            borderElement.style.setProperty('--x', `${xPercent}%`);
            borderElement.style.setProperty('--y', `${yPercent}%`);
        });
        
        container.addEventListener('mouseleave', () => {
            borderElement.style.setProperty('--x', '50%');
            borderElement.style.setProperty('--y', '50%');
        });
    });
} 