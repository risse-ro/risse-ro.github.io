function setYear() {
    let currentYear = new Date().getFullYear();
    let footerYear = document.querySelector('footer span');
    footerYear.innerText = currentYear;
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu-container');

hamburgerMenu.addEventListener("click", () => {
    menu.classList.toggle('expanded');
});

minWidth576 = window.matchMedia("(min-width: 576px)");

function autoExpandNav() {
    minWidth576.matches ? menu.classList.add('expanded') : menu.classList.remove('expanded');
}

minWidth576.addListener(autoExpandNav);
setYear();