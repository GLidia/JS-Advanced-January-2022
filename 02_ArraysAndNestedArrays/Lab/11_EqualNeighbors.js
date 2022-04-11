function solve(input){
    let n = 0;

    for(let i = 0; i < input.length; i++){
        let arr = input[i];

        for(let j = 0; j < arr.length; j++){
            let element = arr[j];

            if ((j - 1) >= 0 && element == arr[j - 1]){
                n++;
            }

            if ((j + 1) < arr.length && element == arr[j + 1]){
                n++;
            }

            if ((i - 1) >= 0 && element == input[i - 1][j]){
                n++;
            }

            if ((i + 1) < input.length && element == input[i + 1][j]){
                n++;
            }
        }
    }

    return n / 2;
}
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
)