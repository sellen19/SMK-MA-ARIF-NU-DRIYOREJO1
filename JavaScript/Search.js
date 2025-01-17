// Search
document
  .querySelector(".search-container button")
  .addEventListener("click", function () {
    const searchBar = document.getElementById("searchBar");
    searchBar.classList.toggle("active");
    if (searchBar.classList.contains("active")) {
      searchBar.querySelector("input").focus();
    } else {
      searchBar.querySelector("input").blur();
    }
  });

document.getElementById("searchInput").addEventListener("input", function () {
  const notFound = document.getElementById("notFound");
  notFound.classList.remove("active");
});

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("searchInput").value.toLowerCase();
    const notFound = document.getElementById("notFound");
    const mainContent = document.getElementById("rightsection");
    notFound.classList.remove("active");
    if (query.length < 2) {
      alert("Please enter at least 2 characters");
      return;
    }
    const links = document.querySelectorAll(".nav > a, .dropdown-content > a");
    let found = false;

    links.forEach((link) => {
      const linkText = link.textContent.toLowerCase();
      if (linkText === query) {
        mainContent.innerHTML = `<h1>${link.textContent}</h1><p>Content for ${link.textContent}</p>`;
        link.scrollIntoView({ behavior: "smooth", block: "center" });
        link.style.backgroundColor = "#4CAF50";
        link.style.color = "#fff";
        setTimeout(() => {
          link.style.backgroundColor = "";
          link.style.color = "";
        }, 2000);
        found = true;
      }
    });

    if (!found) {
      notFound.classList.add("active");
    }
  });

// Mobile menu toggle
document.querySelector(".nav").addEventListener("click", function (event) {
  if (
    event.target.tagName === "A" &&
    event.target.nextElementSibling &&
    event.target.nextElementSibling.classList.contains("dropdown-content")
  ) {
    event.preventDefault();
    event.target.nextElementSibling.classList.toggle("active");
  }
});
