/* /* 
function happyAlpacas(N, X) {
    let biggyalpaca = (N - X)
    if(biggyalpaca % 2 !== 0) {
        console.log(-1)
    }
    let alpacaList = []
    for(let i = 0; i <= N; i++) {
        i += 1
        alpacaList.push(1);
        current = 2
        if(alpacaList[i] % 2 !== )
        return(alpacaList)
        
    }
}
 */
/* 
function elder(n, start, duels) {
    let owner = start
    let owners = 1
    for(let i = 0; i < n; i++) {
        if(duels[i][1] === owner) {
            owner = duels[i][0];
            owners++
        } 
    }
}
    console.log(owner, owners);
 */

/* function tarifa(x, n, firstmonths) {
  let guh = x * (n + 1);
  let cuh = 0;
  for (let i = 0; i < firstmonths.length; i++) {
    cuh += firstmonths[i];
  }
  let final = guh - cuh;
  return final;
}

console.log(tarifa(15, 3, [15, 10, 20]));

function ThunderCoaster(n, person) {
  let canRide = 0;
  for (let i = 0; i < n; i++) {
    if (person[i][0] >= 120 && (person[i][1] >= 12 || person[i][2] === "y")) {
      canRide += 1;
    }
  }
  return canRide;
}

console.log(
  ThunderCoaster(6, [
    [130, 14, "n"],
    [125, 9, "y"],
    [125, 9, "n"],
    [110, 15, "y"],
    [120, 12, "n"],
    [119, 13, "y"],
  ]),
);
 */
/* function createStudent(name, grade, gpa) {
  let student = [{ name: name, grade: grade, gpa: gpa }];
  let isHonors = false;
  if (gpa >= 3.5) {
    isHonors = true;
  } else if (gpa < 3.5) {
    isHonors = false;
  }
  return Object.entries(student); */
/* } */

/* function filter(array, category) {
  let array = [{name: "chocolate chip cookie", price: 4.99}, 
    {name: "funfetti cookie", price: 4.99}, 
    {name: "red velvet cookie", price: 5.99}, 
    {name: "sugar cookie", price: 3.99}, 
    {name: "strawberry shortcake cookie", price: 6.99}, 
    {name: "cheesecake cookie", price: 6.99},
    {name: "everything in the kitchen sink cookie", price: 6.99}
    {name: "triple chocolate cookie", price: },
    {name: "", price: },
    {name: "", price: },
    {name: "", price: },
    {name: "", price: }]
} */

let array = [
  { name: "chocolate chip cookie", price: 4.99 },
  { name: "funfetti cookie", price: 4.99 },
  { name: "red velvet cookie", price: 5.99 },
  { name: "sugar cookie", price: 3.99 },
  { name: "strawberry shortcake cookie", price: 6.99 },
  { name: "cheesecake cookie", price: 6.99 },
  { name: "everything in the kitchen sink cookie", price: 6.99 },
  { name: "triple chocolate cookie", price: 5.99 },
  { name: "white chocolate matcha cookie", price: 5.99 },
  { name: "suspicious cookie", price: 3.99 },
  { name: "apple cider cookie", price: 4.99 },
  { name: "black and white cookie", price: 4.99 },
  { name: "butter cookies", price: 3.99 },
  { name: "snickerdoodle cookie", price: 4.99 },
  { name: "ugly macarons", price: 3.99 },
  { name: "couture macarons", price: 7.99 },
  { name: "spooky dirt cookie", price: 5.99 },
  { name: "peppermint hot chocolate cookie", price: 5.99 },
  { name: "vanilla cookie", price: 4.99 },
  { name: "mia", price: 0.01 },
  { name: "olivia", price: 0.01 },
];

const cart = {};
/* 
function addToCart(cart, items) {} */

let total = 0;

let final = total.toFixed(2);

function addtoCart(item) {
  if (cart[item.name]) {
    cart[item.name].qty++;
    total += cart[item.name].price;
  } else {
    cart[item.name] = item;
    cart[item.name].qty = 1;
    total += cart[item.name].price;
  }
}

function removefromCart(item) {
  if (cart[item.name]) {
    cart[item.name].qty--;
    total -= cart[item.name].price;
  } else {
    cart[item.name] = item;
    cart[item.name].qty = 0;
    total -= cart[item.name].price;
  }
}

addtoCart({ name: "olivia", price: 0.01 });
addtoCart({ name: "olivia", price: 0.01 });
addtoCart({ name: "mia", price: 0.01 });
addtoCart({ name: "white chocolate matcha cookie", price: 5.99 });
removefromCart({ name: "olivia", price: 0.01 });
console.log(cart);

/* function addtocart(item) {
  x = item.name
  if (cart.x) {
    console.log("inc qty");
  } else {
    cart.x = item;
  }
}
 */

/* function total(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i.price];
  }
  return total;
}

console.log(total(cart)); */

console.log(final);
