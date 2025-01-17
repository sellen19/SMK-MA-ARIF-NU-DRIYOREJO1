// Java Script List Alumni

let currentPage = 1;
const rowsPerPage = 15;
const totalRows = 180; // Updated total rows

function searchTable() {
  var input, filter, table, tr, td, i, j, txtValue;
  input = document.getElementById("search");
  filter = input.value.toLowerCase();
  table = document.getElementById("alumniTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = "none";
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j]) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        }
      }
    }
  }
}

function changeEntries() {
  var select, value, table, tr, i;
  select = document.getElementById("entries");
  value = parseInt(select.value);
  table = document.getElementById("alumniTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    if (i <= value) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }

  document.getElementById(
    "entriesInfo"
  ).innerText = `Menampilkan 1 sampai ${value} dari ${totalRows} entri`;
}

function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("alumniTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
  updateSortIcons(n, dir);
}

function updateSortIcons(columnIndex, direction) {
  var headers = document.querySelectorAll("th.sortable");
  headers.forEach(function (header, index) {
    var icon = header.querySelector("i");
    if (index === columnIndex) {
      if (direction === "asc") {
        icon.classList.remove("fa-sort", "fa-sort-down");
        icon.classList.add("fa-sort-up");
        header.classList.add("asc");
        header.classList.remove("desc");
      } else {
        icon.classList.remove("fa-sort", "fa-sort-up");
        icon.classList.add("fa-sort-down");
        header.classList.add("desc");
        header.classList.remove("asc");
      }
    } else {
      icon.classList.remove("fa-sort-up", "fa-sort-down");
      icon.classList.add("fa-sort");
      header.classList.remove("asc", "desc");
    }
  });
}

function updatePagination() {
  const start = (currentPage - 1) * rowsPerPage + 1;
  const end = Math.min(currentPage * rowsPerPage, totalRows);
  document.getElementById(
    "entriesInfo"
  ).innerText = `Menampilkan ${start} sampai ${end} dari ${totalRows} entri`;
}

function nextPage() {
  if (currentPage * rowsPerPage < totalRows) {
    currentPage++;
    updatePagination();
    showPage();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
    showPage();
  }
}

function showPage() {
  const table = document.getElementById("alumniTable");
  const tr = table.getElementsByTagName("tr");
  const start = (currentPage - 1) * rowsPerPage + 1;
  const end = currentPage * rowsPerPage;

  for (let i = 1; i < tr.length; i++) {
    if (i >= start && i <= end) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

// Initialize the table with the default number of entries
changeEntries();
updatePagination();
showPage();