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