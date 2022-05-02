/* Add current year to footer copyright notice */
function main() {
    let date = new Date().getFullYear();

    document.getElementById("date").innerText = date;
}

main();

let homeCarousel = document.querySelector('#homeCarousel')
let carousel = new bootstrap.Carousel(homeCarousel, {
    interval: 15000,
    wrap: false
})

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}