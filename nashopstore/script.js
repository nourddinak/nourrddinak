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
