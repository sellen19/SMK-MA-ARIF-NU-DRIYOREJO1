// JavaScript Isi Jurusan

function showModal() {
    document.getElementById("welcomeModal").style.display = "block";
    document
      .getElementById("welcomeModal")
      .setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    document.getElementById("welcomeModal").style.display = "none";
    document
      .getElementById("welcomeModal")
      .setAttribute("aria-hidden", "true");
  }

  window.onclick = function (event) {
    if (event.target == document.getElementById("welcomeModal")) {
      closeModal();
    }
  };

  // Add event listener for mobile touch
  document
    .querySelector(".welcome-button")
    .addEventListener("touchstart", function () {
      showModal();
    });