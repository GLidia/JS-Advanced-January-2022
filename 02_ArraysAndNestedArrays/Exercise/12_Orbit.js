function solve(input){

    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = [];

    //populate the matrix with 0s

    for(let i = 0; i < height; i++){
        matrix[i] = [];
    }

    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            matrix[i][j] = 0;
        }
    }

    matrix[x][y] = 1;

    let currentNumber = 2;

    //populate the matrix with correct numbers
    while (!isFull(matrix)){
        
        for(let i = 0; i < height; i++){
            for(let j = 0; j < width; j++){
                if ((i + 1 < height && matrix[i + 1][j] == currentNumber - 1 )|| (j + 1 < width && matrix [i][j  + 1] == currentNumber - 1)
                     || (i - 1 >= 0 && matrix[i - 1][j] == currentNumber - 1 )|| (i + 1 < height && j + 1 < width && matrix[i + 1][j + 1] == currentNumber - 1)
                     || (i + 1 < height && j - 1 >= 0 && matrix[i + 1][j - 1] == currentNumber - 1) || (j - 1 >= 0 && matrix[i][j - 1] == currentNumber - 1)
                     || (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1] == currentNumber - 1) ||(i - 1 >= 0 && j + 1 < width && matrix[i - 1][j + 1] == currentNumber - 1)){
                        if (matrix[i][j] == 0){
                            matrix[i][j] = currentNumber; 
                        }                
                     }
            }
        }

        currentNumber++;

    }

    // populate remaining spaces with currentNumber

    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            if (matrix[i][j] == 0){
                matrix[i][j] = currentNumber;
            }
        }
    }

    //print matrix

    for(let i = 0; i < height; i++){
        console.log(matrix[i].join(" "));
    }

    function isFull(matrix){

        for (let i = 0; i < height; i++){
            for(let j = 0; j < width; j++){
                if (matrix[i][j] == 0){
                    return false;
                }
            }
        }

        return true;
    }
    
}
solve([3, 3, 2, 2])