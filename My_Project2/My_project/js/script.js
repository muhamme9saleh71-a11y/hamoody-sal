// General JavaScript interactions

document.addEventListener('DOMContentLoaded', () => {
    // Simple scroll effect: change header background on scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = '#555'; // Darker header on scroll
            } else {
                header.style.backgroundColor = '#333'; // Original header color
            }
        });
    }

    // Toggle navigation for smaller screens
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;'; // Hamburger icon
    header.prepend(navToggle); // Add toggle button to header

    const navMenu = document.querySelector('nav ul');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Example: Change content/color/image on button click (placeholder)
    const exampleButton = document.getElementById('exampleButton'); // Assume a button with this ID exists
    if (exampleButton) {
        exampleButton.addEventListener('click', () => {
            const targetElement = document.getElementById('targetElement'); // Assume a target element exists
            if (targetElement) {
                targetElement.style.color = 'red';
                targetElement.textContent = 'تم تغيير المحتوى واللون!';
            }
        });
    }
});

