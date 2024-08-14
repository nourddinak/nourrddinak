document.addEventListener('DOMContentLoaded', () => {
    // Loader functionality
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 2000); // Loader will hide after 2 seconds

    // Particles.js initialization (add your particles.js config here if needed)
    particlesJS.load('particles-js', 'path-to-particles-config.json', function() {
        console.log('Particles.js loaded');
    });

    // Scroll to Top Button functionality
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile Menu Toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});