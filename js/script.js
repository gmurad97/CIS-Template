/*WOW ANIMATION INIT*/
new WOW().init();

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
        animateOut: "animate__flipOutY",
        animateIn: "animate__flipInY",
        autoplay: true,
        autoplayTimeout: 4096,
        items: 1,
        loop: true,
        dots: false,
        nav: false
    });
});

$(document).ready(function () {
    $(".owl-carousel-partners").owlCarousel({
/*         animateOut: "animate__flipOutY",
        animateIn: "animate__flipInY", */
        items: 3,
        loop: true,
        dots: false,
        nav: false,
        center:true
    });
});