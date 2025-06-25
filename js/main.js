function setYear() {
    let currentYear = new Date().getFullYear();
    let footerYear = document.querySelector('footer span');
    footerYear.innerText = currentYear;
}

setYear();