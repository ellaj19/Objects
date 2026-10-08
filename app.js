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
    let guh = x * (n + 1)
    let cuh = 0
    for(let i = 0; i < firstmonths.length; i++) {
        cuh += firstmonths[i]
    }
    let final = guh - cuh
    return(final)
}

console.log(tarifa(10, 3, [4, 6, 2]))