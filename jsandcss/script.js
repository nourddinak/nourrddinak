document.addEventListener('DOMContentLoaded', function() {
    // Particles.js configuration
    particlesJS.load('particles-js', './path/to/particles.json', function() {
        console.log('particles.js loaded');
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Scroll-to-Top Button
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Glitch Animation for Hero Text
    const glitchTexts = document.querySelectorAll('.glitch');

    glitchTexts.forEach(text => {
        text.style.setProperty('--glitch-text', `"${text.dataset.text}"`);
    });

    // Tooltip Hover Effect
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', function() {
            const tooltipText = this.querySelector('.tooltiptext');
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = '1';
        });

        tooltip.addEventListener('mouseout', function() {
            const tooltipText = this.querySelector('.tooltiptext');
            tooltipText.style.visibility = 'hidden';
            tooltipText.style.opacity = '0';
        });
    });

    // Smooth Scroll for Anchor Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Skill Bars Animation
    const skillBars = document.querySelectorAll('.skill-progress-fill');

    window.addEventListener('scroll', () => {
        skillBars.forEach(bar => {
            const barWidth = bar.getAttribute('data-percentage');
            const sectionTop = bar.closest('.skills').offsetTop - window.innerHeight;

            if (window.scrollY > sectionTop) {
                bar.style.width = barWidth;
            }
        });
    });

    // Timeline Animation
    const timelineItems = document.querySelectorAll('.timeline-item');

    window.addEventListener('scroll', () => {
        timelineItems.forEach(item => {
            const itemTop = item.offsetTop - window.innerHeight * 0.8;
            if (window.scrollY > itemTop) {
                item.classList.add('visible');
            }
        });
    });
});
