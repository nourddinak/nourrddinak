// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Particle.js Configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00ffff" },
            shape: { type: "triangle" },
            opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: "#ff00ff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
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

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to top button functionality
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

    // Glitch effect for hero text
    const glitchElements = document.querySelectorAll('.glitch');

    function glitchEffect() {
        glitchElements.forEach(element => {
            const originalText = element.getAttribute('data-text');
            const glitchText = originalText.split('').map(char => {
                if (Math.random() < 0.1) {
                    return String.fromCharCode(char.charCodeAt(0) + Math.floor(Math.random() * 5) - 2);
                }
                return char;
            }).join('');
            element.textContent = glitchText;
        });
    }

    setInterval(glitchEffect, 50);

    // Lightning effect for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .btn');

    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.boxShadow = `0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff`;
        });

        button.addEventListener('mouseout', () => {
            button.style.boxShadow = '';
        });
    });

    // Typing effect for skill names
    const skillNames = document.querySelectorAll('.skill-name');

    function typeSkillNames() {
        skillNames.forEach(skillName => {
            const text = skillName.textContent;
            skillName.textContent = '';
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    skillName.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 100);
        });
    }

    // Animate skill bars
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = percentage;
        });
    }

    // Trigger typing effect and skill bar animation when skills section is in view
    const skillsSection = document.querySelector('#skills');
    let skillsAnimationTriggered = false;

    window.addEventListener('scroll', () => {
        if (!skillsAnimationTriggered && isElementInViewport(skillsSection)) {
            typeSkillNames();
            animateSkillBars();
            skillsAnimationTriggered = true;
        }
    });

    // Check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');

    function animateTimeline() {
        timelineItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', animateTimeline);

    // Project hover effect
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mousemove', (e) => {
            const { left, top } = project.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            project.style.setProperty('--x', `${x}px`);
            project.style.setProperty('--y', `${y}px`);
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cyberpunk cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('cyberpunk-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Neon text effect for headings
    const headings = document.querySelectorAll('h2');

    headings.forEach(heading => {
        heading.innerHTML = `<span>${heading.textContent}</span>`;
        heading.classList.add('neon-text');
    });

    // Loading animation
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        loader.classList.add('hidden');
    });

    // Initialize AOS (Animate on Scroll) library
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Cyberpunk-style console log
    console.log('%c> WELCOME TO THE CYBERNET_', 'color: #ff00ff; font-family: monospace; font-size: 18px; text-shadow: 0 0 5px #ff00ff;');
    console.log('%c> INITIALIZING NEURAL INTERFACE...', 'color: #00ffff; font-family: monospace; font-size: 14px;');

    // Testimonial slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }

    function previousTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }

    // Initialize testimonial slider
    showTestimonial(currentTestimonial);

    // Add event listeners for testimonial navigation if you have navigation buttons
    // document.querySelector('.next-testimonial').addEventListener('click', nextTestimonial);
    // document.querySelector('.prev-testimonial').addEventListener('click', previousTestimonial);

    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Form submission handling (if you have a contact form)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
            // You can add AJAX request to send form data to server
        });
    }

    // Cyberpunk-style typing effect for a specific element (e.g., a subtitle)
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        typeWriter(subtitle, "Welcome to the future of web development");
    }
});
