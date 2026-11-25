const cart = {};

let array = [
  {
    name: "chocolate chip cookie",
    price: 4.99,
    img: "ccc",
    id: "chocolatechip",
    sort: "chocolate",
    quantity: 7,
  },
  {
    name: "funfetti cookie",
    price: 4.99,
    img: "funfetti",
    id: "funfetti",
    sort: "sugar",
    quantity: 7,
  },
  {
    name: "red velvet cookie",
    price: 5.99,
    img: "redvelvet",
    id: "redvelvet",
    sort: "chocolate",
    quantity: 7,
  },
  {
    name: "sugar cookie",
    price: 3.99,
    img: "sugar",
    id: "sugar",
    sort: "sugar",
    quantity: 7,
  },
  {
    name: "strawberry shortcake cookie",
    price: 6.99,
    img: "strawberry",
    id: "strawberry",
    sort: "fruit",
    quantity: 7,
  },
  {
    name: "cheesecake cookie",
    price: 6.99,
    img: "cheesecake",
    id: "cheesecake",
    sort: "sugar",
    quantity: 7,
  },
  {
    name: "everything in the kitchen sink cookie",
    price: 6.99,
    img: "ksc",
    id: "kitchensink",
    sort: "chocolate",
    quantity: 7,
  },
  {
    name: "triple chocolate cookie",
    price: 5.99,
    img: "tcc",
    id: "triplechocolate",
    sort: "chocolate",
    quantity: 7,
  },
  {
    name: "white chocolate matcha cookie",
    price: 5.99,
    img: "matcha",
    id: "matcha",
    sort: "chocolate",
    quantity: 7,
  },
  {
    name: "suspicious cookie",
    price: 3.99,
    img: "suspicious",
    id: "suspicious",
    sort: "sugar",
    quantity: 7,
  },
  {
    name: "apple cider cookie",
    price: 4.99,
    img: "apple",
    id: "apple",
    sort: "fruity",
    quantity: 7,
  },
  {
    name: "black and white cookie",
    price: 4.99,
    img: "bnw",
    id: "blacknwhite",
    sort: "chocolate",
    quantity: 7,
  },
  {
    name: "butter cookies",
    price: 3.99,
    img: "butter",
    id: "butter",
    sort: "sugar",
    quantity: 7,
  },
  {
    name: "snickerdoodle cookie",
    price: 4.99,
    img: "snickerdoodle",
    id: "snickerdoodle",
    sort: "sugar",
    quantity: 7,
  },
  {
    name: "ugly macarons",
    price: 3.99,
    img: "macaroon",
    id: "uglymacaron",
    sort: "fruity",
    quantity: 7,
  },
  {
    name: "couture macarons",
    price: 7.99,
    img: "cutemacaron",
    id: "cutemacaron",
    sort: "fruity",
    quantity: 7,
  },
  {
    name: "spooky dirt cookie",
    price: 5.99,
    img: "dirt",
    id: "dirt",
    sort: "chocolate",
    quantity: 7,
  },
  {
    name: "peppermint hot chocolate cookie",
    price: 5.99,
    img: "cpc",
    id: "peppermint",
    sort: "chocolate",
    quantity: 7,
  },
  {
    name: "mia",
    price: 0.01,
    img: "ccc",
    id: "miar",
    sort: "fruity",
    quantity: 7,
  },
  {
    name: "olivia",
    price: 0.01,
    img: "ccc",
    id: "oliviar",
    sort: "fruity",
    quantity: 7,
  },
];

function inject() {
  for (let item of array) {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="box" data-item="${item.id}">
          <h2 class="box-title">${item.name}</h2>
          <img class="box-img" src="images/${item.img}.jpg" alt="" />
          <p id="price">$${item.price}</p>
          <button class="cookie">add to cart!</button>
        </div> `,
    );
  }
  const cookies = document.querySelectorAll(".cookie");
  cookies.forEach((button) =>
    button.addEventListener("click", function (event) {
      let cookie = event.target.closest(".box").getAttribute("data-item");
      console.log(cookie);
      addtoCart(array.find((item) => item.id === cookie));
    }),
  );
}

const button = document.getElementById("shop");
button.addEventListener("click", function () {
  console.log("clicked");
  /* console.log(event.target.closest(".card").getAttribute("data-item")); */
  inject();
});

function addtoCart(item) {
  let total = 0;
  const shop = document.querySelector(".cart");
  if (cart[item.id]) {
    cart[item.id].qty++;
    total += cart[item.id].price;
    let quantity = document.getElementById(`${item.id}qty`);
    quantity.remove();
  } else {
    cart[item.id] = item;
    cart[item.id].qty = 1;
    total += cart[item.id].price;
    shop.insertAdjacentHTML(
      "beforeend",
      `<ol>${item.name}        ${item.price}</ol>`,
    );
  }
  shop.insertAdjacentHTML(
    "beforeend",
    `<ol id = "${item.id}qty">quantity: ${item.qty}</ol>`,
  );
}

function filter() {
  const system = document.getElementById("filter");
  system.forEach((button) => button.addEventListener("click", function () {}));
}
