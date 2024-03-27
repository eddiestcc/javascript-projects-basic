// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
const topLink = document.querySelector(".top-link");
const hamburger = document.querySelector(".fa-bars");
const links = document.querySelector(".links");
const navbar = document.querySelector(".fixed-nav");
const clearBtn = document.querySelector(".clear-btn");
const linksCont = document.querySelector(".links-container")

// SHOW TOP LINK FUNCTION 
let showTopLink = () => {
    topLink.classList.add("show-link");
}
// HIDE TOP LINK FUNCTION 
let hideTopLink = () => {
    topLink.classList.remove("show-link");
}
// SHOW LINKS MENU FUNCTION 
let showLinksMenu = () => {
    links.classList.remove("links-hide");
}
// HIDE LINKS MENU FUNCTION 
let hideLinksMenu = () => {
    links.classList.add("links-hide");
}

// SWITCH NAVBAR STYLES 
let switchNavBar = () => {
    if (clearBtn.getBoundingClientRect().y < 450) {
        navbar.classList.remove("clear-nav");
    } if (clearBtn.getBoundingClientRect().y > 451) {
        navbar.classList.add("clear-nav");
    }
}

// STICKY BUTTON TOGGLE APPEARANCE

let toggleSticky = () => {
    if (clearBtn.getBoundingClientRect().y < 15) {
        topLink.classList.add("show-link");
    } else if (topLink.getBoundingClientRect().y > 15) {
        topLink.classList.remove("show-link");
    }
}

// HAMBURGER MENU TOGGLE 

let toggleMenu = () => {
    links.classList.toggle("links-show");
}



// DOM EVENT LISTENERS 
window.addEventListener("scroll", () => {
    switchNavBar();
    toggleSticky();
});

hamburger.addEventListener("click", toggleMenu);