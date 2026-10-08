/* 
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

function tarifa(x, n, firstmonths) {
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
