function activeNav(element) {
    // 1. Ambil semua link di dalam navbar
    const navLinks = document.querySelectorAll('#navbar a');

    // 2. Hapus class 'active' dari semua link
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Tambahkan class 'active' ke elemen yang sedang diklik
    element.classList.add('active');
}

// Ketika scroll active class berubah
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('#navbar a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});