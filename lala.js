function inject() {
  for (let item of array) {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="box" data-item="${item.price}">
          <h2 class="box-title">${item.name}</h2>
          <img class="box-img" src="images/${item.img}.jpg" alt="" />
          <p>$${item.price}</p>
          <button id="cookie">add to cart!</button>
        </div> `,
    );
  }
}

let array = [
  { name: "chocolate chip cookie", price: 4.99, img: "ccc" },
  { name: "funfetti cookie", price: 4.99, img: "funfetti" },
  { name: "red velvet cookie", price: 5.99, img: "redvelvet" },
  { name: "sugar cookie", price: 3.99, img: "sugar" },
  { name: "strawberry shortcake cookie", price: 6.99, img: "strawberry" },
  { name: "cheesecake cookie", price: 6.99, img: "cheesecake" },
  { name: "everything in the kitchen sink cookie", price: 6.99, img: "ksc" },
  { name: "triple chocolate cookie", price: 5.99, img: "tcc" },
  { name: "white chocolate matcha cookie", price: 5.99, img: "matcha" },
  { name: "suspicious cookie", price: 3.99, img: "suspicious" },
  { name: "apple cider cookie", price: 4.99, img: "apple" },
  { name: "black and white cookie", price: 4.99, img: "bnw" },
  { name: "butter cookies", price: 3.99, img: "butter" },
  { name: "snickerdoodle cookie", price: 4.99, img: "snickerdoodle" },
  { name: "ugly macarons", price: 3.99, img: "macaroon" },
  { name: "couture macarons", price: 7.99, img: "cutemacaron" },
  { name: "spooky dirt cookie", price: 5.99, img: "dirt" },
  { name: "peppermint hot chocolate cookie", price: 5.99, img: "cpc" },
  { name: "vanilla cookie", price: 4.99, img: "vanilla" },
  { name: "mia", price: 0.01, img: "ccc" },
  { name: "olivia", price: 0.01, img: "ccc" },
];

const cart = {};

const button = document.getElementById("shop");
button.addEventListener("click", function () {
  console.log("clicked");
  /* console.log(event.target.closest(".card").getAttribute("data-item")); */
  inject();
});

const cookies = document.getElementById("cookie");
cookies.forEach((button) =>
  button.addEventListener("click", function () {
    console.log("click");
    addtocart();
  }),
);

/* btn.addEventListener("click", function () {
  x++;
  rgb();
}); */

function addtocart() {
  for (let item of array) {
    const cart = document.querySelector(".cart");
    cart.insertAdjacentHTML(
      "afterbegin",
      `<h2 class="box-title">${item.name}</h2>`,
    );
  }
}

//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons
