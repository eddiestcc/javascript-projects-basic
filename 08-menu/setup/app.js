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
let section = document.querySelector(".section-center");
let btnContainer = document.querySelector(".btn-container");
let menuItem = document.querySelectorAll(".menu-item");
// let buttons = document.querySelectorAll(".filter-btn");
let buttons = btnContainer.childNodes;

// Display all buttons 
let setUpCatBtn = () => { 
  const categories = menu.reduce(function(values, item){ 
  if (!values.includes(item.category)) {
    values.push(item.category);
  }
  return values; 
},
["all"]
);
let displayBtnMenu = categories.map(function(category){
  return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
});
displayBtnMenu = displayBtnMenu.join('');
btnContainer.innerHTML = displayBtnMenu;
console.log(displayBtnMenu);
};



// Display each menu item function 
let display = (menuItems) => {
  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item" data-id=${item.category}>
    <div> 
      <img class="photo"  src=${item.img} alt=>
    </div>
    <header>
        <div class="item-info">
          <h4 id="title">${item.title}</h4> 
          <h4 class="price">$${item.price}</h4>
        </div>
        <div class="item-text">
          <p>${item.desc}</p>
        </div>
    </header>
</article>`
  });
  displayMenu = displayMenu.join('');
  section.innerHTML = displayMenu;
};

// Filter button functionality
let setBtn = () => { 
  buttons.forEach(button => {
  button.addEventListener("click", (e) => {
   const category = e.currentTarget.dataset.id;
   const menuCategory = menu.filter((menuItem) => {
    return menuItem.category === category
   })
   if (category === "all") {
    display(menu);
   } else
    display(menuCategory);
   });
  });
}

// DOM Event Listener 
window.addEventListener("DOMContentLoaded", () => {
  display(menu)
  setUpCatBtn();
  setBtn()
});
