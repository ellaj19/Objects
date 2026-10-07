/* function happyAlpacas(N, X) {
    let biggyalpaca = (N - X)
    if(biggyalpaca % 2 !== 0) {
        console.log(-1)
    }
    let alpacaList = []
    for(let i = 0; i <= N; i++) {
        alpacaList.push(1);
        current = 2
        if(alpacaList[i] % 2 !== )
        return(alpacaList)
        
    }
}


function elder(n, start, duels) {
    let owner = start
    let owners = 1
    for(let i = 0; i < n; i++) {
        if(duels[i][1] === owner) {
            owner = duels[i][0];
            owners++
        } 
    }
    console.log(owner, owners);
}

elder()
 */
function tarifa(x, n, firstmonths) {
    for(let i = 0; i <= n; i++) {
        let remainder = x - firstmonths[i]
        let y = x + remainder
        y + x
        
    }
    return(y + x)
}

console.log(tarifa(10, 3, [4, 6, 2]))