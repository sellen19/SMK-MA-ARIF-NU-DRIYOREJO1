let selectedSeat = null;

const studentsData = {
    ti: {
        classA: [
            "Student 1", "Student 2", "Student 3", "Student 4", "Student 5",
            "Student 6", "Student 7", "Student 8", "Student 9", "Student 10"
        ],
        classB: [
            "Student 11", "Student 12", "Student 13", "Student 14", "Student 15",
            "Student 16", "Student 17", "Student 18", "Student 19", "Student 20"
        ],
        classC: [
            "Student 21", "Student 22", "Student 23", "Student 24", "Student 25",
            "Student 26", "Student 27", "Student 28", "Student 29", "Student 30"
        ],
    },
    si: {
        classA: [
            "Student 31", "Student 32", "Student 33", "Student 34", "Student 35",
            "Student 36", "Student 37", "Student 38", "Student 39", "Student 40"
        ],
        classB: [
            "Student 41", "Student 42", "Student 43", "Student 44", "Student 45",
            "Student 46", "Student 47", "Student 48", "Student 49", "Student 50"
        ],
        classC: [
            "Student 51", "Student 52", "Student 53", "Student 54", "Student 55",
            "Student 56", "Student 57", "Student 58", "Student 59", "Student 60"
        ],
    },
    te: {
        classA: [
            "Student 61", "Student 62", "Student 63", "Student 64", "Student 65",
            "Student 66", "Student 67", "Student 68", "Student 69", "Student 70"
        ],
        classB: [
            "Student 71", "Student 72", "Student 73", "Student 74", "Student 75",
            "Student 76", "Student 77", "Student 78", "Student 79", "Student 80"
        ],
        classC: [
            "Student 81", "Student 82", "Student 83", "Student 84", "Student 85",
            "Student 86", "Student 87", "Student 88", "Student 89", "Student 90"
        ],
    },
    tm: {
        classA: [
            "Student 91", "Student 92", "Student 93", "Student 94", "Student 95",
            "Student 96", "Student 97", "Student 98", "Student 99", "Student 100"
        ],
        classB: [
            "Student 101", "Student 102", "Student 103", "Student 104", "Student 105",
            "Student 106", "Student 107", "Student 108", "Student 109", "Student 110"
        ],
        classC: [
            "Student 111", "Student 112", "Student 113", "Student 114", "Student 115",
            "Student 116", "Student 117", "Student 118", "Student 119", "Student 120"
        ],
    },
};

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
            { id: "seat9", label: "Seat 9" },
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
    const studentSelect = document.getElementById("studentSelect");
    seatsContainer.innerHTML = "";
    studentSelect.innerHTML = "";

    // Populate student select options
    const selectedStudents = new Set();
    document.querySelectorAll(".seat[data-username]").forEach(seat => {
        selectedStudents.add(seat.dataset.username);
    });

    studentsData[department][classSelected].forEach((student) => {
        if (!selectedStudents.has(student)) {
            const option = document.createElement("option");
            option.value = student;
            option.textContent = student;
            studentSelect.appendChild(option);
        }
    });

    // Populate seats
    seatsData[department][classSelected].forEach((seat) => {
        const seatElement = document.createElement("div");
        seatElement.className =
            "seat text-gray-500 cursor-pointer flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-200 transition";
        seatElement.dataset.seat = seat.id;
        seatElement.onclick = () => selectSeat(seatElement);
        seatElement.innerHTML = `<i class="fas fa-chair text-2xl"></i><span class="ml-2">${seat.label}</span>`;
        seatsContainer.appendChild(seatElement);
    });

    loadSeatsFromLocalStorage(department, classSelected);
}

function selectSeat(element) {
    if (element.classList.contains("text-green-500")) {
        document.getElementById("alertModal").style.display = "block";
        return;
    }
    const selectedStudent = document.getElementById("studentSelect").value;
    if (!selectedStudent) {
        alert("Please select a student.");
        return;
    }
    const existingSeat = document.querySelector(
        `.seat[data-username="${selectedStudent}"]`
    );
    if (existingSeat) {
        alert("This student has already selected a seat.");
        return;
    }
    element.classList.remove("text-gray-500");
    element.classList.add("text-green-500");
    element.querySelector("span").textContent = selectedStudent;
    element.dataset.username = selectedStudent;
    const department = document.getElementById("departmentSelect").value;
    const classSelected = document.getElementById("classSelect").value;
    localStorage.setItem(
        `${department}-${classSelected}-${element.dataset.seat}`,
        selectedStudent
    );
    showNotification("Seat selected successfully!");
    changeClass(); // Refresh the student select options
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