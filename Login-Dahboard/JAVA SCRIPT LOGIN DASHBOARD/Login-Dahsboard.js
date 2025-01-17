// Java Script Login Page

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var alertBox = document.getElementById("alert");
    var alertUsernameBox = document.getElementById("alert-username");
    var alertCredentialsBox = document.getElementById("alert-credentials");
    var spinner = document.getElementById("spinner");
    var loginButton = document.querySelector(".btn");

    if (!username || !password) {
      alertBox.style.display = "block";
      alertUsernameBox.style.display = "none";
      alertCredentialsBox.style.display = "none";
    } else {
      alertBox.style.display = "none";
      // Simulate checking if the username is registered
      var registeredUsernames = ["user1", "user2", "user3", "Bintan"]; // Example registered usernames
      if (!registeredUsernames.includes(username)) {
        alertUsernameBox.style.display = "block";
        alertCredentialsBox.style.display = "none";
      } else {
        alertUsernameBox.style.display = "none";
        // Show loading spinner
        spinner.style.display = "inline-block";
        loginButton.disabled = true;

        // Simulate a delay for loading
        setTimeout(function () {
          spinner.style.display = "none";
          loginButton.disabled = false;
          // Check credentials
          if (username === "Bintan" && password === "BintanCantik09") {
            alertCredentialsBox.style.display = "none";
            // Redirect to dashboard
            window.location.href = "../dashboard/Dashboard.html";
          } else {
            alertCredentialsBox.style.display = "block";
          }
        }, 2000); // Simulate a 2-second delay
      }
    }
  });

document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    var passwordField = document.getElementById("password");
    var type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.classList.toggle("fa-eye-slash");
  });
