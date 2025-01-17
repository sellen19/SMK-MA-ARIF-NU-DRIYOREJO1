let currentIndex = 0;
const slides = document.querySelectorAll("#slider img");
const totalSlides = slides.length;

setInterval(() => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
  currentIndex = (currentIndex + 1) % totalSlides;
}, 5000);

// Add fade-in animation to elements
const fadeInElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

fadeInElements.forEach((element) => {
  observer.observe(element);
});

// Sidebar toggle
const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const closeSidebar = document.getElementById("close-sidebar");

menuButton.addEventListener("click", () => {
  sidebar.classList.add("open");
  sidebarOverlay.classList.remove("hidden");
  menuButton.classList.add("open");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.add("hidden");
  menuButton.classList.remove("open");
});

sidebarOverlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.add("hidden");
  menuButton.classList.remove("open");
});

// Set current date and time
function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  document.getElementById("announcement-date").textContent = date;
  document.getElementById("announcement-time").textContent = time;
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second

// Display welcome message with username
const users = localStorage.getItem("users");
if (users) {
  const storedUsers = JSON.parse(users);
  if (storedUsers.length > 0) {
    const lastUser = storedUsers[storedUsers.length - 1];
    if (lastUser.username) {
      document.getElementById(
        "user-name"
      ).textContent = `Welcome, ${lastUser.username}`;
    }
  }
}

// Logout function
function logout() {
  alert("Logged out successfully!");
  window.location.href = "../Login PPDB/loginsekarang.html";
}

document
  .getElementById("logout-button")
  .addEventListener("click", logout);
document
  .getElementById("mobile-logout-button")
  .addEventListener("click", logout);