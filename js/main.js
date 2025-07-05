/**
 * Sets the current year automatically in the footer.
 */
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

minWidth576 = window.matchMedia("(min-width: 790px)");

/**
 * Automatically expands nav links if window is expanded >790px.
 */
function autoExpandNav() {
    minWidth576.matches || window.innerWidth > 790 ? menu.classList.add('expanded') : menu.classList.remove('expanded');
}

const accordionTitle = document.querySelectorAll('.accordion-title');
const accordionBody = document.querySelectorAll('.accordion-body');

/**
 * Listener will expand text if an accordion header is clicked.
 */
accordionTitle.forEach((accordionHeading) => {
    accordionHeading.addEventListener('click', (event) => {
        event.stopPropagation();
        event.target.nextElementSibling.classList.toggle('collapsed');
        accordionHeading.classList.toggle('expanded');
    })
});

autoExpandNav();
minWidth576.addListener(autoExpandNav);
setYear();