function solve(n, m){
    let sum = 0;

    for (let i = Number(n); i <= Number(m); i++){
        sum += Number(i);
    }

    console.log(sum);
}
solve(-8, 20)