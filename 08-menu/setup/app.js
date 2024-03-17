// Database
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 16.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Bison Steak",
    category: "dinner",
    price: 42.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// DOM SELECTORS 
let itemInfo = document.querySelectorAll(".item-info");
let itemText = document.querySelectorAll(".item-text");
let itemImg = document.querySelectorAll(".photo");
let menuItem = document.querySelectorAll(".menu-item");
const buttons = document.querySelectorAll(".filter-btn");

// Pass server information function 
const passInformation = () => {
  // Img pass 
  itemImg.forEach(_x => {
    for (let i = 0; i < menu.length; i++)
    itemImg[i].attributes[1].textContent = menu[i].img;
  });
  // Paragraph pass 
  itemText.forEach(_x => {
    for (let i = 0; i < menu.length; i++)
    itemText[i].childNodes[1].textContent = menu[i].desc;
  });
  // Food name pass
  itemInfo.forEach(_x => {
    for (let i = 0; i < menu.length; i++)
    itemInfo[i].childNodes[1].textContent = menu[i].title;
  });
  // Food price pass
  itemInfo.forEach(_x => {
    for (let i = 0; i < menu.length; i++)
    itemInfo[i].childNodes[3].textContent ="$" + menu[i].price;
  });
  // Category pass
  menuItem.forEach(_x => {
    for (let i = 0; i < menu.length; i++)
    menuItem[i].valueOf = menu[i].category;
  });
  // Category ID
  menuItem.forEach(_x => {
    for (let i = 0; i < menu.length; i++)
    menuItem[i].valueOf = menu[i].id;
  });  
};

// Filter fuctions 
let newArrayFuct = () => {
  let newArray = menu.filter((item) => {
  return item.category !== "breakfast";
 })
 console.log(newArray);
 if (menu[1].category !== "breakfast") {
  itemImg[1].attributes[1].textContent = null;
  itemText[1].childNodes[1].textContent = null;
  itemInfo[1].childNodes[1].textContent = null;
  itemInfo[1].childNodes[3].textContent = null;
 }
}

// DOM Event Listener 
window.addEventListener("DOMContentLoaded", passInformation);

buttons[1].addEventListener("click", newArrayFuct);
// buttons[2].addEventListener("click", lunchFilter);
// buttons[3].addEventListener("click", shakesFilter);
// buttons[4].addEventListener("click", dinnerFilter);
