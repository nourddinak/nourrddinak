document.addEventListener('DOMContentLoaded', (event) => {
    // Fade out loader
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);

    // Particle effect
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });

    // Projects animation
    const projects = document.querySelectorAll('.project');
    const observerOptions = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    projects.forEach(project => {
        project.style.opacity = 0;
        project.style.transform = 'translateY(50px)';
        project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(project);
    });

    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress-fill');
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('style').split(':')[1];
            }
        });
    }, observerOptions);
    skillBars.forEach(bar => {
        bar.style.width = '0';
        skillObserver.observe(bar);
    });

    // Scroll to top button
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
