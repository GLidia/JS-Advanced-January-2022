function solve(n){
    let sum = 0;
    let nAsString = n.toString();
    let isSame = true;

    for(let i = 0; i < nAsString.length - 1; i++){

        if (nAsString[i] != nAsString[i + 1]){
            isSame = false;
            break;
        }
    }

    for(let i = 0; i < nAsString.length; i++){
        sum += Number(nAsString[i]);
    }

    console.log(isSame);
    console.log(sum);
}
solve(1234)