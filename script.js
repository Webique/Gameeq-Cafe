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
    const overlay = document.getElementById("panelOverlay");
    const toggleButton = document.querySelector(".open-panel");

    // Toggle panel visibility
    const isOpen = panel.classList.toggle("open");
    overlay.style.display = isOpen ? "block" : "none";

    // Move the toggle button with the panel
    const panelWidth = panel.offsetWidth; // Get the panel width dynamically
    toggleButton.style.right = isOpen ? `${panelWidth}px` : "0";
}

function closePanel() {
    const panel = document.getElementById("bookPanel");
    const overlay = document.getElementById("panelOverlay");
    const toggleButton = document.querySelector(".open-panel");

    // Close the panel and reset button position
    panel.classList.remove("open");
    overlay.style.display = "none";
    toggleButton.style.right = "0";
}

// Close the panel when clicking outside
document.getElementById("panelOverlay").addEventListener("click", closePanel);


