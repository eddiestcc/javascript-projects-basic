// DOM Selectors 
const buttons = document.querySelectorAll(".tab-btn");
const paraName = document.querySelectorAll(".names");
// Browse function 

let browse = () => {
    buttons.forEach(button => {
        addEventListener ("click", (e)=> {
            currentSel = e.currentTarget.value;
            console.log(currentSel, button);
        })
    }); 
}

// DOM EVENT LISTENERS 

document.addEventListener("click", browse)