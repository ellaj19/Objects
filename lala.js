function inject() {
  for (let item of array) {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="box" data-item="${item.id}">
          <h2 class="box-title">${item.name}</h2>
          <img class="box-img" src="images/${item.img}.jpg" alt="" />
          <p>$${item.price}</p>
          <button class="cookie">add to cart!</button>
        </div> `,
    );
  }
  const cookies = document.querySelectorAll(".cookie");
  cookies.forEach((button) =>
    button.addEventListener("click", function (event) {
      let cookie = event.target.closest(".box").getAttribute("data-item");
      console.log(cookie);
      addtoCart(cart.find((item) => item.name === cookie));
    }),
  );
}

function addtoCart(item) {
  const carts = document.querySelector(".cart");
  if (cart[item.name]) {
    cart[item.name].qty++;
    total += cart[item.name].price;
    cart.append(item);
  } else {
    cart[item.name] = item;
    cart[item.name].qty = 1;
    total += cart[item.name].price;
    cart.append(item);
  }
  carts.insertAdjacentHTML("afterbegin", `<div>${item.name}</div>`);
}

let array = [
  {
    name: "chocolate chip cookie",
    price: 4.99,
    img: "ccc",
    id: "chocolatechip",
  },
  { name: "funfetti cookie", price: 4.99, img: "funfetti", id: "funfetti" },
  { name: "red velvet cookie", price: 5.99, img: "redvelvet", id: "redvelvet" },
  { name: "sugar cookie", price: 3.99, img: "sugar", id: "sugar" },
  {
    name: "strawberry shortcake cookie",
    price: 6.99,
    img: "strawberry",
    id: "strawberry",
  },
  {
    name: "cheesecake cookie",
    price: 6.99,
    img: "cheesecake",
    id: "cheesecake",
  },
  {
    name: "everything in the kitchen sink cookie",
    price: 6.99,
    img: "ksc",
    id: "kitchensink",
  },
  {
    name: "triple chocolate cookie",
    price: 5.99,
    img: "tcc",
    id: "triplechocolate",
  },
  {
    name: "white chocolate matcha cookie",
    price: 5.99,
    img: "matcha",
    id: "matcha",
  },
  {
    name: "suspicious cookie",
    price: 3.99,
    img: "suspicious",
    id: "suspicious",
  },
  { name: "apple cider cookie", price: 4.99, img: "apple", id: "apple" },
  {
    name: "black and white cookie",
    price: 4.99,
    img: "bnw",
    id: "blacknwhite",
  },
  { name: "butter cookies", price: 3.99, img: "butter", id: "butter" },
  {
    name: "snickerdoodle cookie",
    price: 4.99,
    img: "snickerdoodle",
    id: "snickerdoodle",
  },
  { name: "ugly macarons", price: 3.99, img: "macaroon", id: "uglymacaron" },
  {
    name: "couture macarons",
    price: 7.99,
    img: "cutemacaron",
    id: "cutemacaron",
  },
  { name: "spooky dirt cookie", price: 5.99, img: "dirt", id: "dirt" },
  {
    name: "peppermint hot chocolate cookie",
    price: 5.99,
    img: "cpc",
    id: "peppermint",
  },
  { name: "vanilla cookie", price: 4.99, img: "vanilla", id: "vanilla" },
  { name: "mia", price: 0.01, img: "ccc", id: "miar" },
  { name: "olivia", price: 0.01, img: "ccc", id: "oliviar" },
];

const cart = {};

const button = document.getElementById("shop");
button.addEventListener("click", function () {
  console.log("clicked");
  /* console.log(event.target.closest(".card").getAttribute("data-item")); */
  inject();
});

/* btn.addEventListener("click", function () {
  x++;
  rgb();
}); */

/* function addtocart(item) {
  const carts = document.querySelector(".cart");
  carts.insertAdjacentHTML(
    "afterbegin",
    `<div>${item.name}</div>`,
  );
}
 */
//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons
