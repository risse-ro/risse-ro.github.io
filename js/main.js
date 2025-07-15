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

/**
 * Expands hamburger menu if it is clicked while collapsed; collapses it if it is expanded.
 */
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
accordionTitle.forEach((accordionHeading, index) => {
    accordionHeading.addEventListener('click', (event) => {
        event.stopPropagation();
        let clickTarget = accordionBody[index];
        clickTarget.classList.toggle('expanded');
        accordionHeading.classList.toggle('expanded');
    })
});

// const lightSwitch = document.querySelector('.lightswitch');

// lightSwitch.addEventListener('click', () => {
//     console.log('clicked');
//     const root = document.querySelector(':root');
//     root.classList.toggle('.dark');
// })

autoExpandNav();
minWidth576.addListener(autoExpandNav);
setYear();