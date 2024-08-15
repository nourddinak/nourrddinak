// Cyberpunk Web3 JavaScript

// Particle.js Configuration
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#00ff00' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#00ff00',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Scroll to Top Button
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Glitch Text Effect
const glitchTexts = document.querySelectorAll('.glitch');

function applyGlitchEffect(element) {
  let originalText = element.textContent;
  let glitchInterval;

  element.addEventListener('mouseover', () => {
    glitchInterval = setInterval(() => {
      element.textContent = originalText
        .split('')
        .map((char, index) => {
          if (index < Math.random() * originalText.length) {
            return String.fromCharCode(33 + Math.floor(Math.random() * 94));
          }
          return char;
        })
        .join('');
    }, 50);
  });

  element.addEventListener('mouseout', () => {
    clearInterval(glitchInterval);
    element.textContent = originalText;
  });
}

glitchTexts.forEach(applyGlitchEffect);

// Neon Flicker Effect
function applyNeonFlicker() {
  const neonElements = document.querySelectorAll('.logo, .cta-button, .skill-progress');
  
  neonElements.forEach(element => {
    setInterval(() => {
      element.style.opacity = Math.random() * 0.3 + 0.7;
    }, 100);
  });
}

applyNeonFlicker();

// Skill Bar Animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress-fill');
  
  skillBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-percentage');
    bar.style.width = '0%';
    
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 500);
  });
}

// Intersection Observer for Skill Bars
const skillSection = document.querySelector('.skills');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(skillSection);

// Loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 2000);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Lightning Effect on Hover
function createLightning(element) {
  const lightning = document.createElement('div');
  lightning.classList.add('lightning');
  element.appendChild(lightning);

  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    lightning.style.left = `${x}px`;
    lightning.style.top = `${y}px`;

    lightning.style.opacity = '1';
    setTimeout(() => {
      lightning.style.opacity = '0';
    }, 100);
  });

  element.addEventListener('mouseleave', () => {
    lightning.style.opacity = '0';
  });
}

const projectItems = document.querySelectorAll('.project');
projectItems.forEach(createLightning);

// Typewriter effect for hero text
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

const heroText = document.querySelector('.hero-text');
typeWriter(heroText, 'Welcome to the Future', 100);

// 3D Tilt effect for project cards
VanillaTilt.init(document.querySelectorAll('.project'), {
  max: 25,
  speed: 400,
  glare: true,
  'max-glare': 0.5,
});

// Cyberpunk-style cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Glitch effect on images
function glitchImage(img) {
  let glitchInterval;
  img.addEventListener('mouseover', () => {
    glitchInterval = setInterval(() => {
      img.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
      img.style.filter = `hue-rotate(${Math.random() * 360}deg) saturate(${Math.random() * 10})`;
    }, 50);
  });

  img.addEventListener('mouseout', () => {
    clearInterval(glitchInterval);
    img.style.transform = 'none';
    img.style.filter = 'none';
  });
}

const projectImages = document.querySelectorAll('.project img');
projectImages.forEach(glitchImage);

// Matrix rain effect in the background
function matrixRain() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
  const matrixArray = matrix.split("");

  const fontSize = 10;
  const columns = canvas.width / fontSize;

  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 35);
}

matrixRain();

// Holographic effect for section titles
const sectionTitles = document.querySelectorAll('h2');
sectionTitles.forEach(title => {
  title.innerHTML = `
    <span class="holographic-text">${title.textContent}</span>
    <span class="holographic-text" aria-hidden="true">${title.textContent}</span>
    <span class="holographic-text" aria-hidden="true">${title.textContent}</span>
  `;
});

// Pulse effect for CTA buttons
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.classList.add('pulse');
  });
  button.addEventListener('mouseout', () => {
    button.classList.remove('pulse');
  });
});

// Initialize AOS (Animate on Scroll) library
AOS.init({
  duration: 1000,
  once: true,
  mirror: false
});

// Easter egg: Konami code to trigger a special effect
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateSpecialMode();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateSpecialMode() {
  document.body.classList.add('special-mode');
  alert('You've unlocked the secret cyberpunk mode!');
  // Add more special effects or Easter egg content here
}
