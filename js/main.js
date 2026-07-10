// main.js
// Handles common UI interactions like Navbar toggle

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Toggle Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarLinks = document.querySelector('.navbar-links');
    
    if (mobileMenuBtn && navbarLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navbarLinks.classList.toggle('open');
            // Toggle icon between Menu and X (simplified using text for plain HTML, or assuming SVG is inline)
            // In the plain HTML we'll just have the SVG icon toggle classes or innerHTML
            const isOpen = navbarLinks.classList.contains('open');
            if (isOpen) {
                mobileMenuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            } else {
                mobileMenuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            }
        });
    }

    // 2. Set active link based on current URL
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.navbar-links a');
    
    links.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        // Simple match, handling index.html mapping to /
        if (currentPath === linkPath || (currentPath.endsWith('/') && linkPath.endsWith('index.html'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
