function updateDateTime() {
    const now = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('date').textContent = now.toLocaleDateString('id-ID', dateOptions);
    document.getElementById('time').textContent = now.toLocaleTimeString('id-ID', timeOptions);
}

function pauseMarquee() {
    document.querySelector('.text').classList.add('paused');
}

function resumeMarquee() {
    document.querySelector('.text').classList.remove('paused');
}

setInterval(updateDateTime, 1000);
window.onload = updateDateTime;