var currentSlide = 0;
var images = [
  {
    src: "../logo/gambar6.jpeg",
    alt: "SMK MA'ARIF NU DRIYOREJO",
    text: "SMK MA'ARIF NU DRIYOREJO",
  },
  {
    src: "../logo/gambar6.jpeg",
    alt: "SMK MA'ARIF NU DRIYOREJO",
    text: "SMK MA'ARIF NU DRIYOREJO",
  },
  {
    src: "../logo/gambar6.jpeg",
    alt: "SMK MA'ARIF NU DRIYOREJO",
    text: "SMK MA'ARIF NU DRIYOREJO",
  },
  {
    src: "../logo/gambar6.jpeg",
    alt: "SMK MA'ARIF NU DRIYOREJO",
    text: "SMK MA'ARIF NU DRIYOREJO",
  },
  {
    src: "../logo/gambar6.jpeg",
    alt: "SMK MA'ARIF NU DRIYOREJO",
    text: "SMK MA'ARIF NU DRIYOREJO",
  },
  {
    src: "../logo/gambar6.jpeg",
    alt: "SMK MA'ARIF NU DRIYOREJO",
    text: "SMK MA'ARIF NU DRIYOREJO",
  },
];

function openModal(index) {
  currentSlide = index;
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  var slideNumber = document.getElementById("slideNumber");
  var modalText = document.getElementById("modalText");
  var socialIcons = document.getElementById("socialIcons");
  modal.style.display = "flex";
  modalImg.innerHTML =
    "<img src='" +
    images[currentSlide].src +
    "' alt='" +
    images[currentSlide].alt +
    "'>";
  slideNumber.innerHTML = currentSlide + 1 + " of " + images.length;
  modalText.innerHTML = images[currentSlide].text;
  socialIcons.style.display = "flex";
  document.addEventListener("keydown", handleKeydown);
}

function closeModal(event) {
  if (
    event.target === event.currentTarget ||
    event.target.classList.contains("close")
  ) {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.removeEventListener("keydown", handleKeydown);
  }
}

function changeSlide(n) {
  var modalImg = document.getElementById("modalImage");
  var slideNumber = document.getElementById("slideNumber");
  var modalText = document.getElementById("modalText");
  modalImg.style.animation = "slideOut 0.5s ease-in-out";
  setTimeout(function () {
    currentSlide += n;
    if (currentSlide >= images.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = images.length - 1;
    }
    modalImg.innerHTML =
      "<img src='" +
      images[currentSlide].src +
      "' alt='" +
      images[currentSlide].alt +
      "'>";
    slideNumber.innerHTML = currentSlide + 1 + " of " + images.length;
    modalText.innerHTML = images[currentSlide].text;
    modalImg.style.animation = "slideIn 0.5s ease-in-out";
  }, 500);
}

function handleKeydown(event) {
  if (event.key === "ArrowLeft") {
    changeSlide(-1);
  } else if (event.key === "ArrowRight") {
    changeSlide(1);
  } else if (event.key === "Escape") {
    closeModal(event);
  }
}
