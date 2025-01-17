const logoutButton = document.querySelector("#logoutButton");
const userTableBody = document.querySelector("#userTableBody");
const addUserButton = document.querySelector("#addUserButton");
const addUserModal = document.querySelector("#addUserModal");
const cancelAddUserButton = document.querySelector("#cancelAddUserButton");
const addUserForm = document.querySelector("#addUserForm");
const newUsername = document.querySelector("#newUsername");
const newEmail = document.querySelector("#newEmail");
const newPassword = document.querySelector("#newPassword");
const toggleNewPassword = document.querySelector("#toggleNewPassword");
const newPasswordError = document.querySelector("#newPasswordError");
const passwordCriteriaIcon = document.querySelector("#passwordCriteriaIcon");

const editUserModal = document.querySelector("#editUserModal");
const cancelEditUserButton = document.querySelector("#cancelEditUserButton");
const editUserForm = document.querySelector("#editUserForm");
const editUsername = document.querySelector("#editUsername");
const editEmail = document.querySelector("#editEmail");
const editPassword = document.querySelector("#editPassword");
const toggleEditPassword = document.querySelector("#toggleEditPassword");
const editPasswordError = document.querySelector("#editPasswordError");
const editPasswordCriteriaIcon = document.querySelector(
  "#editPasswordCriteriaIcon"
);

// Sample users data
const users = JSON.parse(localStorage.getItem("users")) || [];

function populateUserTable() {
  userTableBody.innerHTML = "";
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.classList.add("border-b");

    const usernameCell = document.createElement("td");
    usernameCell.classList.add("px-4", "py-2");
    usernameCell.textContent = user.username;

    const emailCell = document.createElement("td");
    emailCell.classList.add("px-4", "py-2");
    emailCell.textContent = user.email;

    const passwordCell = document.createElement("td");
    passwordCell.classList.add("px-4", "py-2", "relative");
    passwordCell.innerHTML = `
              <span>${user.password}</span>
              <i class="fa fa-eye absolute right-3 top-3 text-gray-400 cursor-pointer" onclick="togglePasswordVisibility(this)"></i>
          `;

    const actionsCell = document.createElement("td");
    actionsCell.classList.add("px-4", "py-2");
    actionsCell.innerHTML = `
              <button class="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 mr-2" onclick="openEditUserModal(${index})">
                  <i class="fa fa-edit mr-1"></i>Edit
              </button>
              <button class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300" onclick="deleteUser(${index})">
                  <i class="fa fa-trash mr-1"></i>Delete
              </button>
          `;

    row.appendChild(usernameCell);
    row.appendChild(emailCell);
    row.appendChild(passwordCell);
    row.appendChild(actionsCell);

    userTableBody.appendChild(row);
  });
}

function togglePasswordVisibility(icon) {
  const passwordSpan = icon.previousElementSibling;
  if (passwordSpan.style.webkitTextSecurity === "disc") {
    passwordSpan.style.webkitTextSecurity = "none";
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
  } else {
    passwordSpan.style.webkitTextSecurity = "disc";
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
  }
}

function openEditUserModal(index) {
  const user = users[index];
  editUsername.value = user.username;
  editEmail.value = user.email;
  editPassword.value = user.password;
  editUserModal.classList.remove("hidden");

  editUserForm.onsubmit = (e) => {
    e.preventDefault();
    const username = editUsername.value.trim();
    const email = editEmail.value.trim();
    const password = editPassword.value.trim();

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[<>.,?/:;'{}[\]|\\+=_\-*&^%$#@!`~]).{5,}$/;

    if (!passwordRegex.test(password)) {
      editPasswordError.classList.remove("hidden");
      return;
    } else {
      editPasswordError.classList.add("hidden");
    }

    if (username && email && password) {
      users[index] = { username, email, password };
      localStorage.setItem("users", JSON.stringify(users));
      populateUserTable();
      editUserModal.classList.add("hidden");
    } else {
      alert("Please fill out all fields.");
    }
  };
}

function deleteUser(index) {
  if (confirm("Are you sure you want to delete this user?")) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    populateUserTable();
  }
}

addUserButton.addEventListener("click", () => {
  addUserModal.classList.remove("hidden");
});

cancelAddUserButton.addEventListener("click", () => {
  addUserModal.classList.add("hidden");
});

cancelEditUserButton.addEventListener("click", () => {
  editUserModal.classList.add("hidden");
});

newPassword.addEventListener("input", function (e) {
  const passwordValue = newPassword.value.trim();
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

editPassword.addEventListener("input", function (e) {
  const passwordValue = editPassword.value.trim();
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[<>.,?/:;'{}[\]|\\+=_\-*&^%$#@!`~]).{5,}$/;

  if (passwordRegex.test(passwordValue)) {
    editPasswordCriteriaIcon.classList.remove("fa-minus");
    editPasswordCriteriaIcon.classList.add("fa-check");
    editPasswordCriteriaIcon.classList.add("text-green-500");
    editPasswordCriteriaIcon.classList.remove("text-gray-400");
  } else {
    editPasswordCriteriaIcon.classList.remove("fa-check");
    editPasswordCriteriaIcon.classList.add("fa-minus");
    editPasswordCriteriaIcon.classList.remove("text-green-500");
    editPasswordCriteriaIcon.classList.add("text-gray-400");
  }
});

addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = newUsername.value.trim();
  const email = newEmail.value.trim();
  const password = newPassword.value.trim();

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[<>.,?/:;'{}[\]|\\+=_\-*&^%$#@!`~]).{5,}$/;

  if (!passwordRegex.test(password)) {
    newPasswordError.classList.remove("hidden");
    return;
  } else {
    newPasswordError.classList.add("hidden");
  }

  if (username && email && password) {
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    populateUserTable();
    addUserModal.classList.add("hidden");
    newUsername.value = "";
    newEmail.value = "";
    newPassword.value = "";
  } else {
    alert("Please fill out all fields.");
  }
});

toggleNewPassword.addEventListener("click", function (e) {
  const type =
    newPassword.getAttribute("type") === "password" ? "text" : "password";
  newPassword.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

toggleEditPassword.addEventListener("click", function (e) {
  const type =
    editPassword.getAttribute("type") === "password" ? "text" : "password";
  editPassword.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

logoutButton.addEventListener("click", () => {
  // Simulate logout
  alert("Logged out successfully!");
  window.location.href = "../Login-Dahboard/login-dashboard1.html";
});

// Populate the user table on page load
populateUserTable();
