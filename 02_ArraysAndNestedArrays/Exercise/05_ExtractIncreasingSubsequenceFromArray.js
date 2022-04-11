function solve(arr){
    let output = [];
    let currentBiggestNumber = arr[0];

    for(let i = 0; i < arr.length; i++){
        if (arr[i] >= currentBiggestNumber){
            output.push(arr[i]);
            currentBiggestNumber = arr[i];
        }
    }

    return output;
}
solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )