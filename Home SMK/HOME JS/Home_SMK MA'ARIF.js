const images = ["../logo/LOGO2.png", "../logo/LOGO2.png", "../logo/LOGO2.png"];

const buttonTexts = [
  "Baca Lebih Lanjut",
  "Pelajari Lebih Lanjut",
  "Temukan Lebih Banyak",
];

let currentIndex = 0;

function changeContent() {
  const textContent = document.querySelector(".text-content");
  const imageContent = document.querySelector(".image-content img");
  const button = document.querySelector(".text-content .button");
  const indicators = document.querySelectorAll(".carousel-indicators span");

  textContent.style.animation = "fadeOutLeft 1s forwards";
  imageContent.style.animation = "fadeOutRight 1s forwards";

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imageContent.src = images[currentIndex];
    button.textContent = buttonTexts[currentIndex];

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });

    textContent.style.animation = "fadeInRight 1s forwards";
    imageContent.style.animation = "fadeInLeft 1s forwards";
  }, 1000);
}

function setCurrentSlide(index) {
  currentIndex = index - 1;
  changeContent();
}

setInterval(changeContent, 5000);
