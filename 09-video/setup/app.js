// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
// DOM Selectors 
const button = document.querySelector(".switch")
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

// Events 
// Button slider
button.addEventListener("click", () => {
    button.parentElement.classList.toggle("slide");
    if (button.parentElement.classList.contains("slide")) {
        video.pause();
        video.controls = true;
    } else {
        video.play();
    }
})

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
    video.muted = true;
    video.play();
    video.loop = true;
})
