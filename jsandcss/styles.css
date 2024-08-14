/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #fff;
    background-color: #000;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header styles */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    z-index: 1000;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav a {
    color: #fff;
    text-decoration: none;
    margin-left: 20px;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #00ff00;
}

.menu-toggle {
    display: none;
    font-size: 24px;
    cursor: pointer;
}

/* Hero section styles */
.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    background: linear-gradient(45deg, #000, #333);
}

.hero-text {
    margin-bottom: 30px;
}

.glitch {
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    margin-bottom: 10px;
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
    text-shadow: -2px 0 #ff00ff;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch::after {
    left: -2px;
    text-shadow: -2px 0 #00ff00, 2px 2px #ff00ff;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
    0% {
        clip: rect(31px, 9999px, 94px, 0);
    }
    4.16666667% {
        clip: rect(91px, 9999px, 43px, 0);
    }
    8.33333333% {
        clip: rect(15px, 9999px, 13px, 0);
    }
    12.5% {
        clip: rect(75px, 9999px, 57px, 0);
    }
    16.66666667% {
        clip: rect(8px, 9999px, 4px, 0);
    }
    20.83333333% {
        clip: rect(50px, 9999px, 31px, 0);
    }
    25% {
        clip: rect(10px, 9999px, 92px, 0);
    }
    29.16666667% {
        clip: rect(85px, 9999px, 98px, 0);
    }
    33.33333333% {
        clip: rect(71px, 9999px, 64px, 0);
    }
    37.5% {
        clip: rect(4px, 9999px, 57px, 0);
    }
    41.66666667% {
        clip: rect(65px, 9999px, 33px, 0);
    }
    45.83333333% {
        clip: rect(85px, 9999px, 61px, 0);
    }
    50% {
        clip: rect(40px, 9999px, 27px, 0);
    }
    54.16666667% {
        clip: rect(23px, 9999px, 86px, 0);
    }
    58.33333333% {
        clip: rect(45px, 9999px, 96px, 0);
    }
    62.5% {
        clip: rect(66px, 9999px, 3px, 0);
    }
    66.66666667% {
        clip: rect(69px, 9999px, 74px, 0);
    }
    70.83333333% {
        clip: rect(85px, 9999px, 47px, 0);
    }
    75% {
        clip: rect(40px, 9999px, 31px, 0);
    }
    79.16666667% {
        clip: rect(51px, 9999px, 58px, 0);
    }
    83.33333333% {
        clip: rect(88px, 9999px, 70px, 0);
    }
    87.5% {
        clip: rect(42px, 9999px, 68px, 0);
    }
    91.66666667% {
        clip: rect(12px, 9999px, 14px, 0);
    }
    95.83333333% {
        clip: rect(70px, 9999px, 36px, 0);
    }
    100% {
        clip: rect(67px, 9999px, 97px, 0);
    }
}

.cta-button {
    display: inline-block;
    padding: 12px 24px;
    margin: 10px;
    background-color: #00ff00;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background-color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 255, 0, 0.3);
}

/* Live demo section styles */
.live-demo,
.projects {
    padding: 80px 0;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.project {
    background-color: #111;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.project:hover {
    transform: translateY(-5px);
}

.project img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project h3 {
    padding: 20px;
    font-size: 1.2rem;
}

.project p {
    padding: 0 20px 20px;
    font-size: 0.9rem;
    color: #ccc;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #00ff00;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    margin: 20px;
}

.btn:hover {
    background-color: #fff;
}

/* Skills section styles */
.skills {
    padding: 80px 0;
    background-color: #111;
}

.skill-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.skill-bar {
    width: 100%;
    margin-bottom: 20px;
}

.skill-name {
    margin-bottom: 10px;
}

.skill-progress {
    height: 10px;
    background-color: #333;
    border-radius: 5px;
    overflow: hidden;
}

.skill-progress-fill {
    height: 100%;
    background-color: #00ff00;
    transition: width 1s ease-in-out;
}

/* Timeline section styles */
.timeline {
    padding: 80px 0;
}

.timeline-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline-container::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: #00ff00;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
}

.timeline-item {
    padding: 10px 40px;
    position: relative;
    width: 50%;
}

.timeline-item::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background-color: #00ff00;
    border: 4px solid #000;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}

.timeline-item:nth-child(even) {
    left: 50%;
}

.timeline-item:nth-child(odd) {
    left: 0;
}

.timeline-content {
    padding: 20px;
    background-color: #111;
    border-radius: 10px;
}

/* Testimonials section styles */
.testimonials {
    padding: 80px 0;
    background-color: #111;
}

.testimonial {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.testimonial p {
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 20px;
}

.testimonial-author {
    font-weight: bold;
}

/* Contact section styles */
#contact {
    padding: 80px 0;
    text-align: center;
}

/* Footer styles */
footer {
    background-color: #111;
    padding: 40px 0;
    text-align: center;
}

.social-links a {
    font-size: 24px;
    margin: 0 10px;
    color: #fff;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: #00ff00;
}

/* Scroll to top button styles */
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #00ff00;
    color: #000;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
}

.scroll-to-top.show {
    opacity: 1;
    visibility: visible;
}

.scroll-to-top:hover {
    background-color: #fff;
    transform: translateY(-3px);
}

/* Loader styles */
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    transition: opacity 0.75s, visibility 0.75s;
}

.loader-hidden {
    opacity: 0;
    visibility: hidden;
}

.loader::after {
    content: "";
    width: 75px;
    height: 75px;
    border: 15px solid #333;
    border-top-color: #00ff00;
    border-radius: 50%;
    animation: loading 0.75s ease infinite;
}

@keyframes loading {
    from {
        transform: rotate(0turn);
    }
    to {
        transform: rotate(1turn);
    }
}

/* Responsive styles */
@media screen and (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    nav {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100% - 70px);
        background-color: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        transition: left 0.3s ease;
    }

    nav.active {
        left: 0;
    }

    nav a {
        margin: 20px 0;
    }

    .hero-text {
        font-size: 2rem;
    }

    .timeline-container::after {
        left: 31px;
    }

    .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
    }

    .timeline-item::after {
        left: 21px;
    }

    .timeline-item:nth-child(even) {
        left: 0%;
    }
}

@media screen and (max-width: 480px) {
    .hero-text {
        font-size: 1.5rem;
    }

    .cta-button {
        padding: 10px 20px;
        font-size: 0.9rem;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }
}