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

minWidth790 = window.matchMedia("(min-width: 790px)");

/**
 * Automatically expands nav links if window is expanded >790px.
 */
function autoExpandNav() {
    minWidth790.matches || window.innerWidth > 790 ? menu.classList.add('expanded') : menu.classList.remove('expanded');
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

const lightSwitch = document.querySelectorAll('.lightswitch');
const selfiePic = document.querySelector('.selfie');
let pathname = window.location.pathname;

/**
 * Switches between the light and dark theme.
 */
function switchTheme(storedTheme) {
    let root = document.documentElement;
    if (root.getAttribute('data-theme') === 'light' || storedTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        lightSwitch.forEach((element) => {
            element.classList.remove('bi-moon-stars-fill')
            element.classList.add('bi-sun-fill')
            if (pathname != '/resume.html') {
                selfiePic.src = 'img/selfie-night.jpg';
            }
            localStorage.setItem('theme', 'dark')
        });
    }
    else {
        root.setAttribute('data-theme', 'light');
        lightSwitch.forEach((element) => {
            element.classList.remove('bi-sun-fill')
            element.classList.add('bi-moon-stars-fill')
            if (pathname != '/resume.html') {
                selfiePic.src = 'img/selfie-day.jpg';
            }
            localStorage.setItem('theme', 'light');
        });
    }
}

/**
 * Sets the desired icons/images depending on which theme is active upon entering the page.
 */
function setThemedIcons() {
    if (theme === 'dark') {
        lightSwitch.forEach(element => {
            element.classList.remove('bi-moon-stars-fill');
            element.classList.add('bi-sun-fill');
        });
        if (pathname != '/resume.html') {
            selfiePic.src = 'img/selfie-night.jpg';
        }
    }
    else {
        lightSwitch.forEach(element => {
            element.classList.remove('bi-sun-fill');
            element.classList.add('bi-moon-stars-fill');
        });
        if (pathname != '/resume.html') {
            selfiePic.src = 'img/selfie-day.jpg';
        }
    }
}

lightSwitch.forEach((element) => element.addEventListener('click', switchTheme, false));

autoExpandNav();
setThemedIcons();
setYear();

minWidth790.addListener(autoExpandNav);