document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleAbout');
    const aboutText = document.getElementById('aboutText');
    const themeToggleButton = document.getElementById('themeToggle');
    const body = document.body;
    const links = document.querySelectorAll('nav ul li a');

    toggleButton.addEventListener('click', () => {
        if (aboutText.style.display === 'none' || !aboutText.style.display) {
            aboutText.style.display = 'block';
        } else {
            aboutText.style.display = 'none';
        }
    });

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});
