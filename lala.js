function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.closest(".card").getAttribute("data-item"));
  }),
);

btn.addEventListener("click", function () {
  x++;
  rgb();
});

function addtocart(item) {
  const cart = document.querySelector(".cart");
  cart.insertAdjacentHTML(
    "beforeend",
    `<div class="b">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}

//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons
