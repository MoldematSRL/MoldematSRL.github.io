// Sidebar Display
const sidebar = document.querySelector('.sidebar');

function changeBars(x) {
    x.classList.toggle('bar-active');
    sidebar.classList.toggle('display-sidebar');
}

// AOS
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


//
const host = "https://moldemat.com/";
const localhost = "http://127.0.0.1:5500/index.html";

window.addEventListener('load', function () {
    // Navbar
    const navbar = document.querySelector('.header');
    // Logo
    const logoOne = document.querySelector('.logo-one');
    const logoTwo = document.querySelector('.logo-two');
    // Anchors
    const navbarAnchors = document.querySelector('.navbar-anchors');
    // Bars
    const bar = document.querySelector('.bars');
    const cross = document.querySelector('#cross');
    // Arrow
    const arrow = document.querySelector('.arrow');

    if ((window.location.href == host + 'index.html') || (window.location.href == host) || (window.location.href == localhost)) {
        window.onscroll = () => {
            if (window.scrollY > 100) {
                // Navbar
                navbar.classList.add('nav-active');
                // Logo
                logoOne.classList.add('display-none');
                logoTwo.classList.remove('display-none');
                // Anchors
                navbarAnchors.classList.add('navbar-anchors-active');
                // button-bars
                bar.classList.add('button-active');
                cross.classList.add('button-active');
                // Arrow
                arrow.classList.add('arrow-hide');
            } else {
                // Navbar
                navbar.classList.remove('nav-active');
                // Logo
                logoTwo.classList.add('display-none');
                logoOne.classList.remove('display-none');
                // Anchors
                navbarAnchors.classList.remove('navbar-anchors-active');
                // button-bars
                bar.classList.remove('button-active');
                cross.classList.remove('button-active');
                // Arrow
                arrow.classList.remove('arrow-hide');
            }
        }
    } else {
        // Navbar
        navbar.classList.add('nav-active');
        // Logo
        logoOne.classList.add('display-none');
        logoTwo.classList.remove('display-none');
        // Anchors
        navbarAnchors.classList.add('navbar-anchors-active');
        // button-bars
        bar.classList.add('button-active');
        cross.classList.add('button-active');
    }
});






