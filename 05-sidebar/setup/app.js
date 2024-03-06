// DOM Selectors 
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

// function 
let toggler = () => {
    sideBar.classList.toggle("show-sidebar");
}

// event listeners 
toggleBtn.addEventListener("click", toggler);
closeBtn.addEventListener("click", toggler);