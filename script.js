document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const scrollToTop = document.getElementById('scroll-to-top');
    const loader = document.querySelector('.loader');
    const aboutSection = document.querySelector('#about');
    const imageFrame = document.querySelector('.image-frame');
    const contactForm = document.getElementById('contactForm');
    const responseDiv = document.getElementById('response');

    // Hide loader when page is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }, 1000); // Show loader for at least 1 second
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        nav.classList.toggle('show');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('show');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('show') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('show');
        }
    });

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    scrollToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Add hover effect to hero text
    const heroText = document.querySelector('.header-text');
    const textAnimates = heroText.querySelectorAll('.text-animate');
    const pythonText = document.querySelector('.python-text');
    const pythonLetters = pythonText.querySelectorAll('.letter');

    heroText.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = heroText.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        textAnimates.forEach((span, index) => {
            const offsetX = (span.offsetLeft + span.offsetWidth / 2 - e.clientX) / 25;
            const offsetY = (span.offsetTop + span.offsetHeight / 2 - e.clientY) / 25;

            span.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            span.style.textShadow = `
                ${x * 5}px ${y * 5}px 0 rgba(255, 0, 255, 0.2),
                ${x * -5}px ${y * 5}px 0 rgba(0, 255, 255, 0.2),
                ${x * -5}px ${y * -5}px 0 rgba(255, 255, 0, 0.2),
                ${x * 5}px ${y * -5}px 0 rgba(255, 0, 0, 0.2)
            `;
        });
    });

    heroText.addEventListener('mouseleave', () => {
        textAnimates.forEach((span) => {
            span.style.transform = '';
            span.style.textShadow = '';
        });
    });

    // Add wave animation to Python text
    pythonText.addEventListener('mouseenter', () => {
        pythonLetters.forEach((letter, index) => {
            letter.style.animationDelay = `${index * 0.05}s`;
        });
    });

    pythonText.addEventListener('mouseleave', () => {
        pythonLetters.forEach((letter) => {
            letter.style.animationDelay = '';
        });
    });

    const animateImageFrame = () => {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionTop < screenPosition) {
            imageFrame.style.transform = 'translate(0, 0)';
            imageFrame.style.opacity = '1';
        }
    };

    window.addEventListener('scroll', animateImageFrame);

    // Initial check in case the section is already in view when the page loads
    animateImageFrame();

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            responseDiv.innerText = 'Sending...';
            const fileInput = document.getElementById('image');
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onloadend = function() {
                const data = {
                    name: contactForm.name.value,
                    email: contactForm.email.value,
                    message: contactForm.message.value,
                    image: file ? reader.result : null
                };
                fetch('https://script.google.com/macros/s/AKfycbyfKypqw3ZPUlQWSEHAEz9oGtdB9f27OXSyn36DMaJbTC3PVk-ISss7OUBFwBVgEuMn/exec', {
                    method: 'POST',
                    body: JSON.stringify(data)
                }).then(response => response.json()).then(result => {
                    if (result.status === 'success') {
                        responseDiv.innerText = 'Thank you for the contact!';
                        contactForm.reset();
                    } else {
                        responseDiv.innerText = 'Failed to send message.';
                    }
                }).catch(error => {
                    responseDiv.innerText = 'Error: ' + error.message;
                });
            };
            if (file) {
                reader.readAsDataURL(file);
            } else {
                reader.onloadend();
            }
        });
    }
});
