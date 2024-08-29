function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.getElementById('navLinks');

    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
    } else {
        sidebar.classList.add('show');
    }
}
