document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            console.log('Contact Form Submission:')
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            contactForm.requestFullscreen();
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
});