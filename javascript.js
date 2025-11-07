document.addEventListener('DOMContentLoaded', function() {

    // Typed.js Initialization for the hero text animation
    const options = {
        strings: [
            'Interactive 3D interiors that sell.',
            'Immersive 3D interiors, not just show.',
            'Experience the space in 3D.'
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
    };

    const typed = new Typed('#typed-text', options);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
