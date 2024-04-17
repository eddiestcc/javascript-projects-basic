// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// VARIABLES 

let editElement;
let editFlag = false;
let editID = '';

// ****** FUNCTIONS **********

let addItem = (e) => {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
     
    if (value && !editFlag){
       const element = document.createElement('article');
        //    class
        element.classList.add('grocery-item');
    
        // add id 
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = ` <p class="title">${value}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;
        // append child 
        list.appendChild(element);
        // display alert 
        displayAlert('item added to the list', 'success');
        // show container 
        container.classList.add('show-container');
        // add to local storage 
        addToLocalStorage(id,value);
        // set back to default 
        setBackToDefault(); 
    }
    else if(value && editFlag){
        console.log('editing')
    }
    else{
        displayAlert('please enter value', 'danger');
    }
}

// Display Alert

let displayAlert = (text,action) => {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // Remove alert 
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1500);
} 
// set back to default 
let setBackToDefault = () => {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********
let addToLocalStorage = (id,value) => {
    console.log("added to local storage");
}
// ****** SETUP ITEMS **********

// ****** EVENT LISTENERS **********
// Submit form
form.addEventListener('submit', addItem)