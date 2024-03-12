//using selectors inside the element
// traversing the dom
// Dom selectors
let buttons = document.querySelectorAll(".question-btn");
let buttonStyle = document.querySelectorAll(".fa-plus");
let questText = document.querySelectorAll(".question-text");


// Buttons Functions

let getBtnOne = () => {
    questText[0].classList.toggle("question-text");
    questText[0] = true;
    questText[1] = false;
    questText[2] = false;

    if (questText[1] || questText[2] === false) {
        questText[1].classList.add("question-text");
        questText[2].classList.add("question-text");
    }

   buttonStyle[0].classList.toggle("fa-plus");
   buttonStyle[0].classList.toggle("fa-minus");
   buttonStyle[0] = true;
   buttonStyle[1] = false;
   buttonStyle[2] = false;

   if (buttonStyle[1] || buttonStyle[2] === false) {
    buttonStyle[1].classList.add("fa-plus");
    buttonStyle[2].classList.add("fa-plus");
    }
};
let getBtnTwo = () => {
    questText[1].classList.toggle("question-text");
    questText[0] = false;
    questText[1] = true;
    questText[2] = false;

    if (questText[0] || questText[2] === false) {
        questText[0].classList.add("question-text");
        questText[2].classList.add("question-text");
    }

    buttonStyle[1].classList.toggle("fa-plus");
    buttonStyle[1].classList.toggle("fa-minus");
    buttonStyle[1] = true;
    buttonStyle[0] = false;
    buttonStyle[2] = false;

   if (buttonStyle[0] || buttonStyle[2] === false) {
    buttonStyle[0].classList.add("fa-plus");
    buttonStyle[2].classList.add("fa-plus");
   }
};
let getBtnThree = () => {
    questText[2].classList.toggle("question-text");
    questText[0] = false;
    questText[1] = false;
    questText[2] = true;

    if (questText[0] || questText[1] === false) {
        questText[0].classList.add("question-text");
        questText[1].classList.add("question-text");
    }
    
    buttonStyle[2].classList.toggle("fa-plus");
    buttonStyle[2].classList.toggle("fa-minus");
    buttonStyle[2] = true;
    buttonStyle[0] = false;
    buttonStyle[1] = false;

   if (buttonStyle[0] || buttonStyle[1] === false) {
    buttonStyle[0].classList.add("fa-plus");
    buttonStyle[1].classList.add("fa-plus");
   }
};

// Button Clicks 

buttons[0].addEventListener("click", getBtnOne);
buttons[1].addEventListener("click", getBtnTwo);
buttons[2].addEventListener("click", getBtnThree);
