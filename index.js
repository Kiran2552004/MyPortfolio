document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            if (mobileMenu.classList.contains('block')) {
                mobileMenu.classList.remove('block');
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('block');
    });

    // Optional: Add a subtle fade-in animation for sections as they scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up-active');
            } else {
                // Optional: remove class if you want animation to replay on scroll back up
                // entry.target.classList.remove('animate-fade-in-up-active');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});