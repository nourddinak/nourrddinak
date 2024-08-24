document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const slides = slider.querySelectorAll("img");
  const slideTitles = document.querySelectorAll("[data-slide-title]");
  const slideStatuses = document.querySelectorAll("[data-slide-status]");
  const paginationButtons = document.querySelectorAll("[data-slide]");
  const navToggle = document.querySelector(".burger");
  const navMenu = document.querySelector("header nav");
  let currentSlide = 0;
  let autoSlideInterval;

  // Function to switch slides
  const switchSlide = (index) => {
    // Hide all slides, titles, and statuses
    slides.forEach((img) => {
      img.style.display = "none";
    });

    slideTitles.forEach((title) => {
      title.style.display = "none";
    });

    slideStatuses.forEach((status) => {
      status.style.display = "none";
    });

    // Show the current slide, title, and status
    slides[index].style.display = "block";
    slideTitles[index].style.display = "block";
    slideStatuses[index].style.display = "block";

    // Update pagination buttons
    paginationButtons.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });

    currentSlide = index;
  };

  // Event listeners for pagination buttons
  paginationButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      clearInterval(autoSlideInterval); // Stop auto-slide on manual click
      switchSlide(index);
      autoSlide();
    });
  });

  // Auto-slide every 5 seconds
  const autoSlide = () => {
    autoSlideInterval = setInterval(() => {
      let nextSlide = (currentSlide + 1) % slides.length;
      switchSlide(nextSlide);
    }, 5000);
  };

  // Functionality for mobile navigation toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navToggle.classList.toggle("open");
  });

  // Initialize first slide
  switchSlide(0);
  autoSlide();
});
// JavaScript for navigation
document.addEventListener('DOMContentLoaded', function() {
  // Cache DOM elements
  const navLinks = document.querySelectorAll('nav a');
  const pages = document.querySelectorAll('.page');

  // Function to handle page transitions
  function showPage(targetId) {
    // Hide all pages
    pages.forEach(page => page.style.display = 'none');
    // Show the target page
    document.querySelector(targetId).style.display = 'block';
  }

  // Add click event listeners to navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      showPage(targetId);

      // Update active link
      navLinks.forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Initialize the first page
  showPage('#species');
});
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
  
