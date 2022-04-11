function solve(input){
    let matrix = [];

    //populate matrix
    while (input.length > 0){
        matrix.push(input.shift().split(" ").map(Number));
    }

    //calculate diagonal sums
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for(let i = 0; i < matrix.length; i++){
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    //change other elements to sum if sums are equal
    if (primaryDiagonalSum == secondaryDiagonalSum){

        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix.length; j++){
                if ((j != i) && (j != matrix.length - 1 - i)){
                    matrix[i][j] = primaryDiagonalSum;
                }
            }
        }

    }

    //print matrix
    for(let i = 0; i < matrix.length; i++){
        console.log(matrix[i].join(" "));
    }
    
}
solve(['1 1 1',
'1 1 1',
'1 1 0']
)