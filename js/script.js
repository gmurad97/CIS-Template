let bodyStyle = document.body.style;
let pLoader = document.querySelector(".preloader");

pLoader.addEventListener("transitionend", function () {
    pLoader.style.display = "none";
    pLoader.style.zIndex = "-1024";
});

pLoader.addEventListener("webkitTransitionEnd", function () {
    pLoader.style.display = "none";
    pLoader.style.zIndex = "-1024";
});

window.addEventListener("load", function () {
    new WOW().init();
    bodyStyle.overflow = "visible";
    pLoader.style.opacity = "0";
});

/*TYPE IT INIT*/
new TypeIt("#nav-typing-text", {
    strings: "caspian international services",
    speed: 128,
    waitUntilVisible: true
}).go();

new TypeIt("#footer-typing-text", {
    strings: "caspian international services",
    speed: 128,
    waitUntilVisible: true
}).go();

/*OWL-HEADER-CAROUSEL*/
$(document).ready(function () {
    $(".owl-carousel-slider").owlCarousel({
        /*animateOut: "animate__flipOutY",
        animateIn: "animate__flipInY", */
        autoplay: true,
        autoplayTimeout: 4096,
        autoplaySpeed: 2048,
        items: 1,
        loop: true,
        dots: false,
        nav: false
    });
});

$(document).ready(function () {
    $(".owl-carousel-partners").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2816,
        autoplaySpeed: 2048,
        autoplayHoverPause: true,
        items: 4,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 5,
            },
            992: {
                items: 4,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            360: {
                items: 1
            }
        }
    });
});