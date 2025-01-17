let currentSlideIndex = 0;
const slides = document.querySelectorAll(".hero .slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;
const heroText = document.getElementById("hero-text");
const announcementText = document.getElementById("announcement-text");
const texts = ["Welcome to Our Website", "Hello", "Hallo", "Hi there"];
const announcements = [
  "Welcome to our new website!",
  "Check out our latest updates!",
  "Don't miss our special offers!",
  "Stay tuned for more news!",
];

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  heroText.style.opacity = "0";
  announcementText.style.opacity = "0";
  setTimeout(() => {
    heroText.textContent = texts[index];
    announcementText.textContent = `Announcement: ${announcements[index]}`;
    heroText.style.opacity = "1";
    announcementText.style.opacity = "1";
  }, 500);
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index;
  showSlide(currentSlideIndex);
}
