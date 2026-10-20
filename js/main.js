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
            if (pathname == '/') {
                selfiePic.src = 'img/selfie-night.webp';
            }
            localStorage.setItem('theme', 'dark')
        });
    }
    else {
        root.setAttribute('data-theme', 'light');
        lightSwitch.forEach((element) => {
            element.classList.remove('bi-sun-fill')
            element.classList.add('bi-moon-stars-fill')
            if (pathname == '/') {
                selfiePic.src = 'img/selfie-day.webp';
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
        if (pathname == '/' || pathname == '#projects') {
            selfiePic.src = 'img/selfie-night.webp';
        }
    }
    else {
        lightSwitch.forEach(element => {
            element.classList.remove('bi-sun-fill');
            element.classList.add('bi-moon-stars-fill');
        });
        if (pathname == '/' || pathname == '#projects') {
            selfiePic.src = 'img/selfie-day.webp';
        }
    }
}

// listens for changes in user color scheme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newTheme = event.matches ? 'dark' : 'light';
    switchTheme(newTheme);
});

lightSwitch.forEach((element) => element.addEventListener('click', switchTheme, false));

// img click

// Dialog Popup Window
// Select the dialog and the target image slot inside it
const dialog = document.getElementById("image-dialog");
const dialogImg = document.getElementById("dialog-img");

// Attach a listener to the entire document (Event Delegation)
document.addEventListener("click", (event) => {
    // Check if the clicked item is an image and NOT already inside the dialog
    if (
        event.target.tagName === "IMG" &&
        !dialog.contains(event.target) &&
        !event.target.classList.contains("no-dialog")
    ) {
        // Copy the clicked image's source and alt text into the dialog elements
        dialogImg.src = event.target.src;
        dialogImg.alt = event.target.alt;

        // Open the native HTML dialog
        dialog.showModal();
    }
});

// Close the dialog automatically if a user clicks outside the image container
dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});


autoExpandNav();
setThemedIcons();
setYear();

minWidth790.addListener(autoExpandNav);