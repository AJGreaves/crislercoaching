/* Add current year to footer copyright notice */
function main() {
    let date = new Date().getFullYear();

    document.getElementById("date").innerText = date;
}

main();

if (document.querySelector('#homeCarousel')) {
    let homeCarousel = document.querySelector('#homeCarousel');
    let carousel = new bootstrap.Carousel(homeCarousel, {
        interval: 15000,
        wrap: false
    })
}

if (document.querySelector('#teamsTestimonialsCarousel')) {
    let teamsTestimonialsCarousel = document.querySelector('#teamsTestimonialsCarousel');
    let carousel = new bootstrap.Carousel(teamsTestimonialsCarousel, {
        interval: 15000,
        wrap: false
    })
}
