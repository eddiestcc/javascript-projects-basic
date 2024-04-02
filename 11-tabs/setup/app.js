// DOM Selectors 
const buttons = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

// SWITCH FUNCTION 
let switchSelection = () => {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent === "goals") {
                content[2].classList.add('active');
                buttons[2].classList.add('active');
                content[0].classList.remove('active');
                buttons[0].classList.remove('active');
                content[1].classList.remove('active');
                buttons[1].classList.remove('active');
            }
            else if (button.textContent === "vision") {
                content[1].classList.add('active');
                buttons[1].classList.add('active');
                content[0].classList.remove('active');
                buttons[0].classList.remove('active');
                content[2].classList.remove('active');
                buttons[2].classList.remove('active');
            } else if (button.textContent === "history") {
                content[0].classList.add('active');
                buttons[0].classList.add('active');
                content[1].classList.remove('active');
                buttons[1].classList.remove('active');
                content[2].classList.remove('active');
                buttons[2].classList.remove('active');
            }
        })
    });
}

// DOM EVENT LISTENERS 
window.addEventListener("DOMContentLoaded", () => {
    content[0].classList.add('active');
    buttons[0].classList.add('active');
})

switchSelection();