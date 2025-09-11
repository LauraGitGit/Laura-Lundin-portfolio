// Intersection Observer for scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element comes into view
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
    });
    
    // Elements to observe for animations
    const animatedElements = document.querySelectorAll(
        '.top-text, .star-decoration, .first-name, .last-name, .side-text, .why-front-end-section'
    );
    
    // Start observing each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
