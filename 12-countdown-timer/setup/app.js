const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// 10 DAY COUNTDOWN
// DOM ELEMENTS 
const expirationDate = document.querySelector(".give-away");
const timer = document.querySelectorAll(".deadline-format h4");

// VARIABLES FOR HEADER
let futureDate = new Date(2024, 3, 10, 10, 30);
let todaysDate = new Date();
let date = futureDate.getDate();
let year = futureDate.getFullYear();
let hour = futureDate.getHours();
let minute = futureDate.getMinutes();
let day =  weekdays[futureDate.getDay()];
let month = months[futureDate.getMonth()];

// DOM DYNAMIC HEADER
expirationDate.textContent= `Giveaway Ends On ${day}, ${date}th of ${month} ${year} at ${hour}:${minute}am `


// UPDATE TIME FUNCTION
let updateTime = (year, month, day, hour, minute) => {
  return new Date(year, month, day, hour, minute) - new Date();
};

let x = setInterval(() => {
  // Update Time 
  updateTime();
  let time = updateTime(2024, 3, 10, 10, 30);
  // Set Time 
  let days = Math.floor(time/86400000);
  let hours = Math.floor((time/3600000)-(days*24));
  let minutes = Math.floor((time/60000)-((days*1440)+(hours*60)));
  let seconds = Math.floor(time/1000-((days*86400)+(hours*3600)+(minutes*60)));
  // Display Time 
  timer[0].textContent = days;
  timer[1].textContent = hours;
  timer[2].textContent = minutes;
  timer[3].textContent = seconds;

  // CLEAR TIMER 
  if (time < 1000) {
    clearInterval(x);
  }
}, 1000);