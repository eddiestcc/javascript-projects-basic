//using selectors inside the element
// traversing the dom
// Dom selectors
let buttons = document.querySelectorAll(".question-btn");

// functions

let selectBtn = () => {
    buttons.forEach(i => {
        console.log("click", [i]);
    });
};

