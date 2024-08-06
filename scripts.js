const form = document.getElementById('email-form');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    // Don't prevent default - let the form submit
    message.textContent = 'Thank you for subscribing!';
    // Optional: Clear the form after a delay
    setTimeout(() => {
        form.reset();
        message.textContent = '';
    }, 3000);
});
