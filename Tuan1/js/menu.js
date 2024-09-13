const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        alert(`Bạn đã nhấn vào ${this.textContent}`);
    });
});