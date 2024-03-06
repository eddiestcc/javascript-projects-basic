// DOM Selectors 
const sideBar = document.querySelector(".sidebar");
const toggle = document.getElementsByTagName("button");

// function 
let toggler = () => {
    sideBar.classList.toggle("show-sidebar");
}

// event listeners 
toggle[0].addEventListener("click", toggler);
toggle[1].addEventListener("click", toggler);