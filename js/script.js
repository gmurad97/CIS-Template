new TypeIt("#typing-text", {
    strings: "Caspian international services",
    speed: 128,
    waitUntilVisible: true
}).go();

let bodyStyle = document.body.style;
let pLoader = document.querySelector(".preloader");

pLoader.addEventListener("transitionend", () => {
    pLoader.style.display = "none";
    pLoader.style.zIndex = "-1024";
})

window.onload = () => {
    new WOW().init();
    bodyStyle.overflow = "visible";
    pLoader.style.opacity = "0";
}