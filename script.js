// Simple form submission handler (you can modify it as per your needs)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple console log for now (You can add an email API integration or backend for actual submission)
    console.log("Form Submitted: ", { name, email, message });

    // Clear the form
    document.getElementById("contact-form").reset();
    alert("Your message has been sent!");
});
