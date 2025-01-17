function searchNews() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const newsItems = document.getElementsByClassName('news-item');
    
    for (let i = 0; i < newsItems.length; i++) {
        const title = newsItems[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        const description = newsItems[i].getElementsByTagName('p')[1].innerText.toLowerCase();
        
        if (title.includes(input) || description.includes(input)) {
            newsItems[i].style.display = '';
        } else {
            newsItems[i].style.display = 'none';
        }
    }
}

function toggleSubmenu(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const submenu = link.nextElementSibling;
    link.classList.toggle('active');
    submenu.classList.toggle('active');
}

function navigateToPage(url) {
    const container = document.querySelector('.container');
    container.style.animation = 'fadeOut 1s ease-in-out';
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}

function showPage(pageNumber) {
    const newsItems = document.getElementsByClassName('news-item');
    const itemsPerPage = 2;
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    for (let i = 0; i < newsItems.length; i++) {
        if (i >= start && i < end) {
            newsItems[i].style.display = 'flex';
        } else {
            newsItems[i].style.display = 'none';
        }
    }

    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
        link.classList.remove('active');
    });
    paginationLinks[pageNumber].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.sidebar ul li a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('href');
            navigateToPage(url);
        });
    });

    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            navigateToPage(url);
        });
    });

    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const currentPage = document.querySelector('.pagination a.active').innerText;
            let newPage = parseInt(currentPage);
            if (index === 0) {
                newPage = Math.max(1, newPage - 1);
            } else if (index === paginationLinks.length - 1) {
                newPage = Math.min(paginationLinks.length - 2, newPage + 1);
            } else {
                newPage = index;
            }
            showPage(newPage);
        });
    });

    showPage(1);
});