//using selectors inside the element
// traversing the dom
// Dom selectors
let buttons = document.querySelectorAll(".question-btn");
let buttonStyle = document.querySelectorAll(".fa-plus-square");
let questText = document.querySelectorAll(".question-text");

// variables 

let buttonSwitch = 0;

// button style toggle function 
let buttonToggle = () => {
    if (buttonSwitch === 1) {
        buttonStyle[0].classList.toggle("fa-plus-square");
        buttonStyle[0].classList.toggle("fa-minus-square");
        buttonStyle[1].classList.remove("fa-minus-square");
        buttonStyle[1].classList.add("fa-plus-square");
        buttonStyle[2].classList.remove("fa-minus-square");
        buttonStyle[2].classList.add("fa-plus-square");
    } else if (buttonSwitch === 2) {
        buttonStyle[1].classList.toggle("fa-plus-square");
        buttonStyle[1].classList.toggle("fa-minus-square");
        buttonStyle[0].classList.remove("fa-minus-square");
        buttonStyle[0].classList.add("fa-plus-square");
        buttonStyle[2].classList.remove("fa-minus-square");
        buttonStyle[2].classList.add("fa-plus-square");
    } else if (buttonSwitch === 3) {
        buttonStyle[2].classList.toggle("fa-plus-square");
        buttonStyle[2].classList.toggle("fa-minus-square");
        buttonStyle[0].classList.remove("fa-minus-square");
        buttonStyle[0].classList.add("fa-plus-square");
        buttonStyle[1].classList.remove("fa-minus-square");
        buttonStyle[1].classList.add("fa-plus-square");
    }
};

 // Buttons Functions
// button 1
let getBtnOne = () => {
// quetions answer toggle 
    questText[0].classList.toggle("hide");
    questText[0] = false;
    questText[1] = true;
    questText[2] = true;

    if (questText[1] || questText[2] === true) {
        questText[1].classList.add("hide");
        questText[2].classList.add("hide");
    }
// button style toggle
    buttonSwitch = 1;
    buttonToggle();
};
// button 2
let getBtnTwo = () => {
// quetions answer toggle 
    questText[1].classList.toggle("hide");
    questText[0] = false;
    questText[1] = true;
    questText[2] = false;

    if (questText[0] || questText[2] === false) {
        questText[0].classList.add("hide");
        questText[2].classList.add("hide");
    }
// button style toggle 
    buttonSwitch = 2;
    buttonToggle();
};
// button 3 
let getBtnThree = () => {
// quetions answer toggle     
    questText[2].classList.toggle("hide");
    questText[0] = false;
    questText[1] = false;
    questText[2] = true;

    if (questText[0] || questText[1] === false) {
        questText[0].classList.add("hide");
        questText[1].classList.add("hide");
    }
// button style toggle 
    buttonSwitch = 3;
    buttonToggle();
};
// Button Clicks 

buttons[0].addEventListener("click", getBtnOne);
buttons[1].addEventListener("click", getBtnTwo);
buttons[2].addEventListener("click", getBtnThree);
