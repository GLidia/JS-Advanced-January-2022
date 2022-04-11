function solve(input){

    let arr = [];

    for(let i = 0; i < input.length; i++){
        if (Number(input[i]) < 0){
            arr.unshift(input[i]);
        } else {
            arr.push(input[i]);
        }
    }

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
solve([7, -2, 8, 9])