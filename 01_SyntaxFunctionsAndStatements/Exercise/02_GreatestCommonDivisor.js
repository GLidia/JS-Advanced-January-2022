function solve(a, b){
    let gcd = 1;

    for(let i = Math.max(a, b) - 1; i > 0; i--){
        if (a % i == 0 && b % i == 0){
            gcd = i;
            break;
        }
    }

    console.log(gcd);
}
solve(2154, 458)