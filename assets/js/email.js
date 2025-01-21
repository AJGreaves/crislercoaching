// Initialize EmailJS with your user ID
emailjs.init("fkI1_b2FQxpB5Iase");

// Attach an event listener to the form
window.onload = function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Send the form data via EmailJS
        emailjs.sendForm("service_l83xmtn", "template_z3z73q8", this).then(
            function () {
                alert("Your message was sent successfully!");
                location.reload(); // Reload the page after success
            },
            function (error) {
                alert("Ooops, something went wrong...", error);
            }
        );
    });
};