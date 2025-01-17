let selectedSeat = null;

const seatsData = {
  ti: {
    classA: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
    classB: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
    classC: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
  },
  si: {
    classA: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
    classB: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
    classC: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
  },
  te: {
    classA: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
    classB: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
    classC: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
  },
  tm: {
    classA: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
    classB: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
    classC: [
      { id: "seat1", label: "Seat 1" },
      { id: "seat2", label: "Seat 2" },
      { id: "seat3", label: "Seat 3" },
      { id: "seat4", label: "Seat 4" },
      { id: "seat5", label: "Seat 5" },
      { id: "seat6", label: "Seat 6" },
      { id: "seat7", label: "Seat 7" },
      { id: "seat8", label: "Seat 8" },
    ],
  },
};

function changeDepartment() {
  changeClass();
}

function changeClass() {
  const department = document.getElementById("departmentSelect").value;
  const classSelected = document.getElementById("classSelect").value;
  const seatsContainer = document.getElementById("seatsContainer");
  seatsContainer.innerHTML = "";

  seatsData[department][classSelected].forEach((seat) => {
    const seatElement = document.createElement("div");
    seatElement.className =
      "seat text-gray-500 cursor-pointer flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-200 transition";
    seatElement.dataset.seat = seat.id;
    seatElement.onclick = () => openUsernameModal(seatElement);
    seatElement.innerHTML = `<i class="fas fa-chair text-2xl"></i><span class="ml-2">${seat.label}</span>`;
    seatsContainer.appendChild(seatElement);
  });

  loadSeatsFromLocalStorage(department, classSelected);
}

function openUsernameModal(element) {
  if (element.classList.contains("text-green-500")) {
    document.getElementById("alertModal").style.display = "block";
    return;
  }
  selectedSeat = element;
  document.getElementById("usernameModal").style.display = "block";
}

function closeUsernameModal() {
  document.getElementById("usernameModal").style.display = "none";
  selectedSeat = null;
}

function setUsername() {
  const username = document.getElementById("usernameInput").value;
  if (username) {
    const existingSeat = document.querySelector(
      `.seat[data-username="${username}"]`
    );
    if (existingSeat) {
      alert("This username has already selected a seat.");
      return;
    }
    selectedSeat.classList.remove("text-gray-500");
    selectedSeat.classList.add("text-green-500");
    selectedSeat.querySelector("span").textContent = username;
    selectedSeat.dataset.username = username;
    const department = document.getElementById("departmentSelect").value;
    const classSelected = document.getElementById("classSelect").value;
    localStorage.setItem(
      `${department}-${classSelected}-${selectedSeat.dataset.seat}`,
      username
    );
    closeUsernameModal();
    showNotification("Seat selected successfully!");
  }
}

function openEditModal() {
  if (!selectedSeat) {
    alert("No seat selected to edit.");
    return;
  }
  document.getElementById("editModal").style.display = "block";
}

function closeEditModal() {
  document.getElementById("editModal").style.display = "none";
}

function updateUsername() {
  const newUsername = document.getElementById("newUsername").value;
  if (newUsername) {
    const existingSeat = document.querySelector(
      `.seat[data-username="${newUsername}"]`
    );
    if (existingSeat) {
      alert("This username has already selected a seat.");
      return;
    }
    const department = document.getElementById("departmentSelect").value;
    const classSelected = document.getElementById("classSelect").value;
    localStorage.removeItem(
      `${department}-${classSelected}-${selectedSeat.dataset.seat}`
    );
    selectedSeat.querySelector("span").textContent = newUsername;
    selectedSeat.dataset.username = newUsername;
    localStorage.setItem(
      `${department}-${classSelected}-${selectedSeat.dataset.seat}`,
      newUsername
    );
    closeEditModal();
    showNotification("Username updated successfully!");
  }
}

function closeAlertModal() {
  document.getElementById("alertModal").style.display = "none";
}

function showNotification(message) {
  const notificationToast = document.getElementById("notificationToast");
  const notificationMessage = document.getElementById("notificationMessage");
  notificationMessage.textContent = message;
  notificationToast.style.display = "flex";
  setTimeout(() => {
    notificationToast.style.display = "none";
  }, 3000);
}

function loadSeatsFromLocalStorage(department, classSelected) {
  const seats = document.querySelectorAll(".seat");
  seats.forEach((seat) => {
    const username = localStorage.getItem(
      `${department}-${classSelected}-${seat.dataset.seat}`
    );
    if (username) {
      seat.classList.remove("text-gray-500");
      seat.classList.add("text-green-500");
      seat.querySelector("span").textContent = username;
      seat.dataset.username = username;
    }
  });
}

window.onload = function () {
  changeDepartment();
};
