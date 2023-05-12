new TypeIt("#typing-text", {
    strings: "Caspian international services",
    speed: 128,
    waitUntilVisible: true
}).go();

window.addEventListener("load", function () {
    new WOW().init();
});