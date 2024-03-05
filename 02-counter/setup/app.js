// dom selectors 
const decreaseBtn = document.getElementById("btn-1");
const resetBtn = document.getElementById("btn-2");
const increaseBtn = document.getElementById("btn-3");
let counter = document.getElementById("counter");

// functions 

count = 0;

decreaseBtn.addEventListener("click", function() {
    count--;
    counter.innerHTML = count;
    if (count < 0) {
        counter.style.color = "red";
    }
});
increaseBtn.addEventListener("click", function() {
    count++;
    counter.innerHTML = count;
    if (count > 0) {
        counter.style.color = "green";
    }
});
resetBtn.addEventListener("click", function() {
    count = 0;
    counter.innerHTML = count;
    if (count === 0) {
        counter.style.color = "black";
    }
});