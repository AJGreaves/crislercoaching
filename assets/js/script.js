/* Add current year to footer copyright notice */
function main() {
    let date = new Date().getFullYear();

    document.getElementById("date").innerText = date;
}

main();