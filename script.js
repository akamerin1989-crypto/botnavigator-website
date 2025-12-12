// Simple form handler to prevent actual submission in demo environment
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Show a simple thank you message to the user
            alert('Спасибо! Мы скоро свяжемся с вами для демонстрации.');
            form.reset();
        });
    }
});
