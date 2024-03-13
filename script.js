document.getElementById('toggleContactButton').addEventListener('click', function() {
    var contactSection = document.getElementById('contact');
    if (contactSection.style.display === 'none') {
        contactSection.style.display = 'block';
        this.textContent = 'Masquer mes coordonnées';
    } else {
        contactSection.style.display = 'none';
        this.textContent = 'Afficher mes coordonnées';
    }
});
