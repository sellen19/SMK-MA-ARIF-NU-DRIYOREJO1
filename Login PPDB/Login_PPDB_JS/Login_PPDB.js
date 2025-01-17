const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const loginForm = document.querySelector("#loginForm");
const usernameError = document.querySelector("#username-error");
const usernameNotFound = document.querySelector("#username-not-found");
const passwordError = document.querySelector("#password-error");
const passwordIncorrect = document.querySelector("#password-incorrect");
const loginButton = document.querySelector("#loginButton");
const buttonText = document.querySelector("#buttonText");
const loadingIcon = document.querySelector("#loadingIcon");

const signUpLink = document.querySelector("#signUpLink");
const signUpContainer = document.querySelector("#signUpContainer");
const signUpForm = document.querySelector("#signUpForm");
const signUpUsernameError = document.querySelector("#signUpUsernameError");
const signUpEmailError = document.querySelector("#signUpEmailError");
const signUpEmailInvalidError = document.querySelector(
  "#signUpEmailInvalidError"
);
const signUpEmailExistsError = document.querySelector(
  "#signUpEmailExistsError"
);
const signUpPasswordError = document.querySelector("#signUpPasswordError");
const signUpPasswordInvalidError = document.querySelector(
  "#signUpPasswordInvalidError"
);
const confirmPasswordError = document.querySelector("#confirmPasswordError");
const signUpButton = document.querySelector("#signUpButton");
const signUpButtonText = document.querySelector("#signUpButtonText");
const signUpLoadingIcon = document.querySelector("#signUpLoadingIcon");
const loginLink = document.querySelector("#loginLink");
const toggleSignUpPassword = document.querySelector("#toggleSignUpPassword");
const signUpPassword = document.querySelector("#signUpPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword");
const passwordCriteriaIcon = document.querySelector("#passwordCriteriaIcon");
const confirmPasswordCriteriaIcon = document.querySelector(
  "#confirmPasswordCriteriaIcon"
);
const loginContainer = document.querySelector("#loginContainer");
const successMessage = document.querySelector("#successMessage");

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

toggleSignUpPassword.addEventListener("click", function (e) {
  const type =
    signUpPassword.getAttribute("type") === "password" ? "text" : "password";
  signUpPassword.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

toggleConfirmPassword.addEventListener("click", function (e) {
  const type =
    confirmPassword.getAttribute("type") === "password" ? "text" : "password";
  confirmPassword.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.querySelector("#username").value.trim();
  const passwordValue = password.value.trim();

  let hasError = false;

  if (!username) {
    usernameError.classList.remove("hidden");
    hasError = true;
  } else {
    usernameError.classList.add("hidden");
  }

  if (!passwordValue) {
    passwordError.classList.remove("hidden");
    hasError = true;
  } else {
    passwordError.classList.add("hidden");
  }

  if (!hasError) {
    buttonText.classList.add("hidden");
    loadingIcon.classList.remove("hidden");
    loginButton.disabled = true;

    // Simulate a network request
    setTimeout(() => {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = storedUsers.find((user) => user.username === username);

      if (!user) {
        usernameNotFound.classList.remove("hidden");
        buttonText.classList.remove("hidden");
        loadingIcon.classList.add("hidden");
        loginButton.disabled = false;
      } else if (user.password !== passwordValue) {
        passwordIncorrect.classList.remove("hidden");
        buttonText.classList.remove("hidden");
        loadingIcon.classList.add("hidden");
        loginButton.disabled = false;
      } else {
        usernameNotFound.classList.add("hidden");
        passwordIncorrect.classList.add("hidden");
        // Redirect to PPDB page
        window.location.href = "../PPDB/ppdb.html";
      }
    }, 2000);
  }
});

signUpPassword.addEventListener("input", function (e) {
  const passwordValue = signUpPassword.value.trim();
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[<>.,?/:;'{}[\]|\\+=_\-*&^%$#@!`~]).{5,}$/;

  if (passwordRegex.test(passwordValue)) {
    passwordCriteriaIcon.classList.remove("fa-minus");
    passwordCriteriaIcon.classList.add("fa-check");
    passwordCriteriaIcon.classList.add("text-green-500");
    passwordCriteriaIcon.classList.remove("text-gray-400");
  } else {
    passwordCriteriaIcon.classList.remove("fa-check");
    passwordCriteriaIcon.classList.add("fa-minus");
    passwordCriteriaIcon.classList.remove("text-green-500");
    passwordCriteriaIcon.classList.add("text-gray-400");
  }
});

confirmPassword.addEventListener("input", function (e) {
  const confirmPasswordValue = confirmPassword.value.trim();
  const signUpPasswordValue = signUpPassword.value.trim();

  if (confirmPasswordValue === signUpPasswordValue) {
    confirmPasswordCriteriaIcon.classList.remove("fa-minus");
    confirmPasswordCriteriaIcon.classList.add("fa-check");
    confirmPasswordCriteriaIcon.classList.add("text-green-500");
    confirmPasswordCriteriaIcon.classList.remove("text-gray-400");
  } else {
    confirmPasswordCriteriaIcon.classList.remove("fa-check");
    confirmPasswordCriteriaIcon.classList.add("fa-minus");
    confirmPasswordCriteriaIcon.classList.remove("text-green-500");
    confirmPasswordCriteriaIcon.classList.add("text-gray-400");
  }
});

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const signUpUsername = document.querySelector("#signUpUsername").value.trim();
  const signUpEmail = document.querySelector("#signUpEmail").value.trim();
  const signUpPasswordValue = document
    .querySelector("#signUpPassword")
    .value.trim();
  const confirmPasswordValue = document
    .querySelector("#confirmPassword")
    .value.trim();

  let hasError = false;

  if (!signUpUsername) {
    signUpUsernameError.classList.remove("hidden");
    hasError = true;
  } else {
    signUpUsernameError.classList.add("hidden");
  }

  if (!signUpEmail) {
    signUpEmailError.classList.remove("hidden");
    hasError = true;
  } else {
    signUpEmailError.classList.add("hidden");
  }

  if (signUpEmail && !signUpEmail.includes("@")) {
    signUpEmailInvalidError.classList.remove("hidden");
    hasError = true;
  } else {
    signUpEmailInvalidError.classList.add("hidden");
  }

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const emailExists = storedUsers.some((user) => user.email === signUpEmail);
  if (emailExists) {
    signUpEmailExistsError.classList.remove("hidden");
    hasError = true;
  } else {
    signUpEmailExistsError.classList.add("hidden");
  }

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[<>.,?/:;'{}[\]|\\+=_\-*&^%$#@!`~]).{5,}$/;
  if (!signUpPasswordValue) {
    signUpPasswordError.classList.remove("hidden");
    hasError = true;
  } else if (!passwordRegex.test(signUpPasswordValue)) {
    signUpPasswordInvalidError.classList.remove("hidden");
    hasError = true;
  } else {
    signUpPasswordError.classList.add("hidden");
    signUpPasswordInvalidError.classList.add("hidden");
  }

  if (signUpPasswordValue !== confirmPasswordValue) {
    confirmPasswordError.classList.remove("hidden");
    hasError = true;
  } else {
    confirmPasswordError.classList.add("hidden");
  }

  if (!hasError) {
    signUpButtonText.classList.add("hidden");
    signUpLoadingIcon.classList.remove("hidden");
    signUpButton.disabled = true;

    // Simulate a network request
    setTimeout(() => {
      storedUsers.push({
        username: signUpUsername,
        email: signUpEmail,
        password: signUpPasswordValue,
      });
      localStorage.setItem("users", JSON.stringify(storedUsers));

      signUpButtonText.classList.remove("hidden");
      signUpLoadingIcon.classList.add("hidden");
      signUpButton.disabled = false;

      // Show success message
      successMessage.classList.remove("hidden");
      successMessage.classList.add("slide-down");
      setTimeout(() => {
        successMessage.classList.add("slide-up");
        setTimeout(() => {
          successMessage.classList.add("hidden");
          successMessage.classList.remove("slide-down");
          successMessage.classList.remove("slide-up");
          signUpContainer.classList.add("hidden");
          loginContainer.classList.remove("hidden");
        }, 500);
      }, 3000);
    }, 2000);
  }
});

signUpLink.addEventListener("click", function (e) {
  e.preventDefault();
  loginContainer.classList.add("hidden");
  signUpContainer.classList.remove("hidden");
});

loginLink.addEventListener("click", function (e) {
  e.preventDefault();
  signUpContainer.classList.add("hidden");
  loginContainer.classList.remove("hidden");
});
