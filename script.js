// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smooth scroll to the target section
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Form Validation (optional)
function validateContactForm() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message.trim() === "") {
        alert("Message cannot be empty.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Add the validate function to your contact button if using a form
const contactButton = document.querySelector('.btn.contact');
if (contactButton) {
    contactButton.addEventListener('click', function() {
        const isValid = validateContactForm();
        if (isValid) {
            // Proceed with form submission or other logic
        }
    });
}
