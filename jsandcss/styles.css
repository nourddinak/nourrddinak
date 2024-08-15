/* General Styles */
:root {
    --primary-color: #ff00ff;
    --secondary-color: #00ffff;
    --background-color: #0a0a2a;
    --text-color: #ffffff;
    --accent-color: #ff00aa;
}

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Orbitron', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Styles */
header {
    background-color: rgba(10, 10, 42, 0.8);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    z-index: 1000;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-color);
    text-shadow: 0 0 10px var(--primary-color);
}

nav {
    display: flex;
}

nav a {
    color: var(--text-color);
    text-decoration: none;
    margin-left: 20px;
    transition: color 0.3s ease;
}

nav a:hover {
    color: var(--accent-color);
    text-shadow: 0 0 10px var(--accent-color);
}

.menu-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(45deg, var(--background-color), #1a1a4a);
    padding: 20px;
}

.hero-text {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

.glitch {
    position: relative;
    color: var(--text-color);
    letter-spacing: 5px;
    animation: glitch-skew 1s infinite linear alternate-reverse;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch::before {
    left: 2px;
    text-shadow: -2px 0 var(--primary-color);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch::after {
    left: -2px;
    text-shadow: -2px 0 var(--secondary-color);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
    0% {
        clip: rect(31px, 9999px, 94px, 0);
        transform: skew(0.85deg);
    }
    5% {
        clip: rect(70px, 9999px, 78px, 0);
        transform: skew(0.85deg);
    }
    /* ... (continue with more keyframes) ... */
}

@keyframes glitch-anim2 {
    0% {
        clip: rect(65px, 9999px, 119px, 0);
        transform: skew(0.85deg);
    }
    5% {
        clip: rect(34px, 9999px, 94px, 0);
        transform: skew(0.85deg);
    }
    /* ... (continue with more keyframes) ... */
}

@keyframes glitch-skew {
    0% {
        transform: skew(-2deg);
    }
    20% {
        transform: skew(3.5deg);
    }
    /* ... (continue with more keyframes) ... */
}

/* Button Styles */
.cta-button, .btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: var(--accent-color);
    color: var(--text-color);
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    margin: 10px;
    position: relative;
    overflow: hidden;
    border: none;
    cursor: pointer;
}

.cta-button::before, .btn::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        to bottom right,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0.1) 100%
    );
    transform: rotate(45deg);
    transition: all 0.3s ease;
}

.cta-button:hover::before, .btn:hover::before {
    transform: rotate(45deg) translate(50%, 50%);
}

.cta-button:hover, .btn:hover {
    background-color: var(--primary-color);
    box-shadow: 0 0 20px var(--primary-color);
}

/* Section Styles */
section {
    padding: 80px 0;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--secondary-color);
    text-shadow: 0 0 10px var(--secondary-color);
}

/* Live Demo Section */
.live-demo .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

/* Projects Section */
.projects .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.project:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;
}

.project h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.project p {
    margin-bottom: 1rem;
}

/* Skills Section */
.skill-container {
    max-width: 600px;
    margin: 0 auto;
}

.skill-bar {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-bottom: 1rem;
    overflow: hidden;
}

.skill-name {
    padding: 5px 10px;
    color: var(--text-color);
}

.skill-progress {
    height: 20px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    width: 0;
    transition: width 1s ease-out;
}

/* Timeline Section */
.timeline-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline-container::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: var(--accent-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
}

.timeline-item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
}

.timeline-item::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: var(--background-color);
    border: 4px solid var(--accent-color);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}

.timeline-item:nth-child(odd) {
    left: 0;
}

.timeline-item:nth-child(even) {
    left: 50%;
}

.timeline-content {
    padding: 20px 30px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
}

.timeline-icon {
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-bottom: 10px;
}

/* Testimonials Section */
.testimonial-slider {
    max-width: 800px;
    margin: 0 auto;
}

.testimonial {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
}

.testimonial::before {
    content: '\201C';
    font-size: 4rem;
    position: absolute;
    top: -10px;
    left: 10px;
    color: var(--accent-color);
    opacity: 0.5;
}

.testimonial-author {
    text-align: right;
    font-style: italic;
    color: var(--secondary-color);
}

/* Contact Section */
#contact {
    text-align: center;
}

/* Footer */
footer {
    background-color: rgba(10, 10, 42, 0.8);
    padding: 2rem 0;
    text-align: center;
}

.social-links a {
    color: var(--text-color);
    font-size: 1.5rem;
    margin: 0 10px;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: var(--accent-color);
}

/* Scroll to Top Button */
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--accent-color);
    color: var(--text-color);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
}

.scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.scroll-to-top:hover {
    background-color: var(--primary-color);
    box-shadow: 0 0 20px var(--primary-color);
}

/* Loader */
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
}

.loader-inner {
    width: 50px;
    height: 50px;
    border: 3px solid var(--secondary-color);
    border-top: 3px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loader.hidden {
    opacity: 0;
    visibility: hidden;
}

/* Tooltip */
.tooltip {
    position: relative;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: var(--accent-color);
    color: var(--text-color);
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

/* Cyberpunk Cursor */
.cyberpunk-cursor {
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent-color);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    transform: translate(-50%, -50%);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-text {
        font-size: 2.5rem;
    }

    .menu-toggle {
        display: block;
    }

    nav {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: rgba(10, 10, 42, 0.9);
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        display: none;
    }

    nav.active {
        display: flex;
    }

    nav a {
        margin: 10px 0;
    }

    .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
    }

    .timeline-item::before {
        left: 60px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }

    .timeline-item::after {
        left: 15px;
    }

    .timeline-item:nth-child(even) {
        left: 0%;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }
}

/* Particles.js Container */
#particles-js {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* Neon Text Effect */
.neon-text {
    color: #fff;
    text-shadow:
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px #fff,
        0 0 40px var(--primary-color),
        0 0 80px var(--primary-color),
        0 0 90px var(--primary-color),
        0 0 100px var(--primary-color),
        0 0 150px var(--primary-color);
}

/* AOS (Animate On Scroll) custom animations */
[data-aos] {
    opacity: 0;
    transition-property: opacity, transform;
}

[data-aos="fade-up"] {
    transform: translateY(100px);
}

[data-aos="fade-down"] {
    transform: translateY(-100px);
}

[data-aos="fade-right"] {
    transform: translateX(-100px);
}

[data-aos="fade-left"] {
    transform: translateX(100px);
}

[data-aos].aos-animate {
    opacity: 1;
    transform: translate(0);
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--background-color);
}

::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
}

/* Additional responsive adjustments */
@media (max-width: 480px) {
    .hero-text {
        font-size: 2rem;
    }

    h2 {
        font-size: 2rem;
    }

    .cta-button, .btn {
        padding: 10px 20px;
        font-size: 0.9rem;
    }

    .project {
        padding: 1rem;
    }

    .timeline-content {
        padding: 15px;
    }

    .testimonial {
        padding: 1.5rem;
    }
}

/* Accessibility improvements */
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* Focus styles for better keyboard navigation */
a:focus, button:focus, input:focus, textarea:focus {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
}

/* Print styles */
@media print {
    body {
        background-color: #fff;
        color: #000;
    }

    .hero, .live-demo, #particles-js, .scroll-to-top, .cyberpunk-cursor {
        display: none;
    }

    .container {
        width: 100%;
        max-width: none;
    }

    a {
        text-decoration: underline;
        color: #000;
    }

    h2 {
        color: #000;
        text-shadow: none;
    }

    .project, .timeline-item, .testimonial {
        break-inside: avoid;
        page-break-inside: avoid;
    }
}
