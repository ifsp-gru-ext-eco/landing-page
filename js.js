window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const content = document.querySelector('.content');
    const contentRect = content.getBoundingClientRect();
    const navbarHeight = navbar.offsetHeight;

    if (contentRect.bottom < navbarHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelectorAll('.animated-text');

    const observerOptions = {
        root: null, // Observe intersections relative to the viewport
        rootMargin: '0px', // Margin around the root
        threshold: 1.0 // Trigger when 100% of the target is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Example: Add a class when the element is in view
                observer.unobserve(entry.target);
                // Optionally, you can unobserve the element if you only want to trigger the event once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    target.forEach((el) => {
        observer.observe(el);
    })
});
