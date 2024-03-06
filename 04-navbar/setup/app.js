// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
// DOM Selectors 
const btn = document.getElementsByTagName("button")[0];
let menu = document.querySelector(".links");

// functions

btn.addEventListener("click", () => {
    menu.classList.toggle("show-links");
    btn.classList.toggle("nav-toggle-click");
});