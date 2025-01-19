// javascript galeri home

let currentIndexp = 0;
const cards = document.querySelectorAll(".card");
const cardWrapper = document.querySelector(".card-wrapper");
const totalCards = cards.length;

function showNextCard() {
  currentIndexp = (currentIndexp + 1) % totalCards;
  const offset = -currentIndexp * (cards[0].offsetWidth + 20); // 20 is the margin between cards
  cardWrapper.style.transform = `translateX(${offset}px)`;
}

function showPrevCard() {
  currentIndexp = (currentIndexp - 1 + totalCards) % totalCards;
  const offset = -currentIndexp * (cards[0].offsetWidth + 20); // 20 is the margin between cards
  cardWrapper.style.transform = `translateX(${offset}px)`;
}

document.getElementById("next").addEventListener("click", () => {
  clearInterval(autoSlide);
  showNextCard();
  autoSlide = setInterval(showNextCard, 3000);
});

document.getElementById("prev").addEventListener("click", () => {
  clearInterval(autoSlide);
  showPrevCard();
  autoSlide = setInterval(showNextCard, 3000);
});

let autoSlide = setInterval(showNextCard, 3000);
