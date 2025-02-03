document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const scrollToTop = document.getElementById('scroll-to-top');
    const loader = document.querySelector('.loader');
    const aboutSection = document.querySelector('#about');
    const imageFrame = document.querySelector('.image-frame');
    const contactForm = document.getElementById('contactForm');
    const responseDiv = document.getElementById('response');
    const musicPlayer = document.getElementById('music-player');
    const audio = document.getElementById('background-music');
    let currentTrack = 0;
    const tracks = audio.getElementsByTagName('source');
    const themeSwitcher = document.getElementById('theme-switcher');
    const themes = [
        'default',
        'cyberpunk',
        'sunset',
        'forest',
        'neon',
        'ocean',
        'volcano',
        'galaxy',
        'mint',
        'cherry'
    ];
    let currentTheme = 0;
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;
    const progressBar = document.querySelector('.progress-bar');
    const themeOptions = document.querySelectorAll('.theme-option');
    const root = document.documentElement;
    const heroVideo = document.getElementById('hero-video');

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

    // Function to play next track
    const playNextTrack = () => {
        currentTrack = (currentTrack + 1) % tracks.length;
        audio.src = tracks[currentTrack].src;
        audio.play();
    };

    // Add event listener for when a track ends
    audio.addEventListener('ended', playNextTrack);

    // Toggle music play/pause
    musicPlayer.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicPlayer.classList.add('playing');
        } else {
            audio.pause();
            musicPlayer.classList.remove('playing');
        }
    });

    // Add volume control with keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' && audio.volume < 1) {
            audio.volume = Math.min(1, audio.volume + 0.1);
        } else if (e.key === 'ArrowDown' && audio.volume > 0) {
            audio.volume = Math.max(0, audio.volume - 0.1);
        }
    });

    // Function to set theme
    const setTheme = (theme) => {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update active state
        themeOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.theme === theme);
        });
    };

    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'default';
    setTheme(savedTheme);

    // Add click handlers to theme options
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            setTheme(option.dataset.theme);
        });
        
        // Set initial active state
        if (option.dataset.theme === savedTheme) {
            option.classList.add('active');
        }
    });

    const animateStats = () => {
        if (animated) return;
        
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50; // Adjust speed here
            
            const updateCount = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.floor(current);
                    setTimeout(updateCount, 40);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCount();
        });
        animated = true;
    };

    // Trigger animation when stats section is in view
    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });

    // Add header hide/show on scroll
    let lastScroll = 0;
    const header = document.querySelector('.cool-header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0)';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 80) {
            // Scrolling down & past header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // Fix mobile header visibility
    const fixMobileHeader = () => {
        const header = document.querySelector('.cool-header');
        if (window.innerWidth <= 768) {
            header.style.position = 'fixed';
            header.style.transform = 'translateY(0)';
        }
    };

    // Call on load and resize
    window.addEventListener('load', fixMobileHeader);
    window.addEventListener('resize', fixMobileHeader);

    // Improve mobile menu behavior
    const mobileMenu = document.querySelector('nav');
    const menuLinks = document.querySelectorAll('.nav-link');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mobileMenu.classList.remove('show');
                hamburger.classList.remove('active');
            }
        });
    });

    // Add touch events for mobile
    let touchStart = null;
    document.addEventListener('touchstart', (e) => {
        touchStart = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', (e) => {
        if (!touchStart) return;
        
        const touchEnd = e.touches[0].clientY;
        const diff = touchStart - touchEnd;
        
        const header = document.querySelector('.cool-header');
        if (diff > 0) {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        } else {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        }
        
        touchStart = null;
    });

    // Update the theme switcher functionality
    themeSwitcher.addEventListener('click', (e) => {
        e.stopPropagation();
        themeSwitcher.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!themeSwitcher.contains(e.target)) {
            themeSwitcher.classList.remove('active');
        }
    });

    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            setTheme(option.dataset.theme);
            themeSwitcher.classList.remove('active');
        });
    });

    // Mobile header navigation
    const mobileHeaderLinks = document.querySelectorAll('.mobile-header .label input[type="radio"]');

    mobileHeaderLinks.forEach(link => {
        link.addEventListener('change', (e) => {
            const target = e.target.dataset.target;
            if (target.startsWith('#')) {
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.location.href = target;
            }
        });
    });

    // Hide/show site logo on scroll
    let lastScrollPosition = 0;
    const siteLogo = document.querySelector('.site-logo');

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
            // Scrolling down and past 100px
            siteLogo.classList.add('hide');
        } else {
            // Scrolling up or at the top
            siteLogo.classList.remove('hide');
        }

        lastScrollPosition = currentScrollPosition;
    });

    // Add mouse movement event listener
    document.addEventListener('mousemove', (e) => {
        const splineModel = document.getElementById('spline-model');
        const iframe = splineModel.querySelector('iframe');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        iframe.contentWindow.postMessage({
            type: 'mousemove',
            x: x,
            y: y
        }, '*');
    });

    // Start playing the video when it's loaded
    heroVideo.addEventListener('loadedmetadata', () => {
        // Reset video to start
        heroVideo.currentTime = 0;
        heroVideo.play();
        // Hide content initially
        document.querySelector('.hero-content').classList.remove('show');
    });

    // When video ends, fade it out slightly and show the content with animations
    heroVideo.addEventListener('ended', () => {
        heroVideo.style.transition = 'opacity 0.5s ease';
        heroVideo.style.opacity = '0.95';
        
        // Add show class to trigger animations
        const heroContent = document.querySelector('.hero-content');
        heroContent.classList.add('show');
        
        // Add floating animation to tech tags after they appear
        setTimeout(() => {
            document.querySelectorAll('.tech-tags .tag').forEach((tag, index) => {
                tag.style.animation = `float 3s ease-in-out infinite`;
                tag.style.animationDelay = `${index * 0.2}s`;
            });
        }, 2500); // Wait for initial animations to complete
    });

    // Add reload event listener
    window.addEventListener('beforeunload', () => {
        // Reset video state
        localStorage.setItem('videoReset', 'true');
    });

    // Check if page was reloaded
    if (localStorage.getItem('videoReset') === 'true') {
        heroVideo.currentTime = 0;
        heroVideo.play();
        // Hide content initially
        document.querySelector('.hero-content').classList.remove('show');
        localStorage.removeItem('videoReset');
    }
});
