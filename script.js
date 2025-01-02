const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        navLinks.style.maxHeight = `${navLinks.scrollHeight}px`;
    } else {
        navLinks.style.maxHeight = '0';
    }
});

document.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navLinks.style.maxHeight = '0';
    }
});

function togglePanel() {
    const panel = document.getElementById("bookPanel");
    panel.classList.toggle("open"); // Toggles the 'open' class
}
function togglePanel() {
    const panel = document.getElementById("bookPanel");
    const overlay = document.getElementById("panelOverlay");

    // Toggle panel and overlay visibility
    const isOpen = panel.classList.toggle("open");
    overlay.style.display = isOpen ? "block" : "none";
}

function closePanel() {
    const panel = document.getElementById("bookPanel");
    const overlay = document.getElementById("panelOverlay");

    panel.classList.remove("open"); // Close the panel
    overlay.style.display = "none"; // Hide the overlay
}
