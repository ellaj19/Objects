function happyAlpacas(N, X) {
    let alpacaList = []
    let happyIndex = 1
    for(let i = 0; i <= N; i++) {
        alpacaList += 1
        alpacaList.map((happyIndex) => happyIndex += 1)
        if(N + X % 2 === 0) {
            alpacaList.push(happyIndex)
        } 

        
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