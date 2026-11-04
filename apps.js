console.log("test");

let x = document.querySelector(".box");
x.style.backgroundColor = "rgb(255,255,0)";
const header = document.querySelector("#color");
header.style.backgroundColor = "rgb(0,255,0)";

document.getElementById("btn").addEventListener("click", function () {
  console.log("test");
  x++;
  header.textContent = `clocked ${x}`;
});

function getRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  const box = document.querySelector(".box");
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  header.textContent = `rgb(${r}, ${g}, ${b})`;
}

function inject() {
  const box = document.querySelector(".box");
  box.insertAdjacentHTML("afterbegin", `<h2 class="test">Inserted</h2>`);
}

const header = document.getElementById("color");
let x = 0;
document.getElementById("btn").addEventListener("click", function () {
  getRGB();
});

// select the container
// create inject function that takes argument for items
//inject 1 full html card into the container
