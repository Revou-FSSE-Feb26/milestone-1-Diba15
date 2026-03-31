// Navbar Logic
function activeNav(element) {
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
    }

    const allLinks = document.querySelectorAll('#navbar a, #mobile-menu a');
    allLinks.forEach(link => link.classList.remove('active'));

    element.classList.add('active');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');

    if (!mobileMenu.classList.contains('hidden')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Ketika scroll active class berubah
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (scrollPos >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    const updateLinks = (selector) => {
        document.querySelectorAll(selector).forEach(a => {
            a.classList.remove('active');
            const href = a.getAttribute('href');
            if (href === `#${current}`) {
                a.classList.add('active');
            }
        });
    };

    updateLinks('#navbar a');
    updateLinks('#mobile-menu a');
});

// Change Theme Logic
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}

(function initTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        html.classList.add('dark');
        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        html.classList.remove('dark');
        if (icon) icon.classList.replace('fa-sun', 'fa-moon');
    }
})();