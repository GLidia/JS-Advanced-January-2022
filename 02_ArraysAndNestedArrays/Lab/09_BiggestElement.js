function solve(input){
    let biggest = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < input.length; i++){
        let arr = input[i];

        for(let j = 0; j < arr.length; j++){
            if (arr[j] >= biggest){
                biggest = arr[j];
            }
        }
    }

    console.log(biggest);
}
solve([[0]]
   )