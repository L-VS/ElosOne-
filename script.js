document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Merci de vous être inscrit avec l'email: ${email}`);
    this.reset();
});
