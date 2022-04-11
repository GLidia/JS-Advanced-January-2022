function solve(n, k){
    
    let arr = [1];

    for(let i = 1; i < n; i++){

        let number = 0;
        for(let j = Math.max(0, i - k); j < i; j++){
            number += arr[j];
        }

        arr.push(number);

    }

    return arr;
}
solve(8, 2)