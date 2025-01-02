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
