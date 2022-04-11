function solve(input){
    let matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let count = 0;

    while (input.length > 0){
        let coordinates = input.shift().split(" ").map(Number);
        let x = coordinates[0];
        let y = coordinates[1];

        if (count % 2 == 0){
            if (matrix[x][y] == false){
                matrix[x][y] = "X";

                if (checkIfWon(matrix)){
                    break;
                }

                if (checkIfFull(matrix)){
                    break;
                }

            } else {
                count--;
                console.log("This place is already taken. Please choose another!")
            }
        } else {
            if (matrix[x][y] == false){
                matrix[x][y] = "O";

                if (checkIfWon(matrix)){
                    break;
                }

                if (checkIfFull(matrix)){
                    break;
                }

            } else {
                count--;
                console.log("This place is already taken. Please choose another!")
            }
        }

        count++;
            
    }

    function checkIfFull(matrix){

        for(let row = 0; row < matrix.length; row++){
            for(let col = 0; col < matrix.length; col++){
                if (matrix[row][col] == false){
                    return false;
                }
            }
        }

        console.log(`The game ended! Nobody wins :(`);
        return true;
    }

    function checkIfWon(matrix){
        
        for(let i = 0; i < matrix.length; i++){
            let row = matrix[i];
            let symbolCountHorizontally = 1;

            for(let j = 0; j < row.length  - 1; j++){

                if (row[j] == row[j + 1] && (row[j] == 'X' || row[j] == 'O')){
                    symbolCountHorizontally++;
                }

                if (symbolCountHorizontally == row.length){
                    console.log(`Player ${row[j]} wins!`);
                    return true;
                } 
            }

            if (i == 0){

                for(let col = 0; col < row.length; col++){

                    let symbolCountVertically = 1;
                    let countDiagonallyPrimary = 1;
                    let countDiagonallySecondary = 1;

                    for(let k = 0; k < matrix.length - 1; k++){
                        if (matrix[k][col] == matrix[k + 1][col] && (matrix[k][col] == 'X' || matrix[k][col] == 'O')){
                            symbolCountVertically++;
                        }

                        if (matrix[k][k] == matrix[k + 1][k + 1] && (matrix[k][k] == 'X' || matrix[k][k] == 'O')){
                            countDiagonallyPrimary++;
                        }

                        if (matrix[k][matrix.length - 1 - k] == matrix[k + 1][matrix.length - 2 - k] && (matrix[k][matrix.length - 1 - k] == 'O' || matrix[k][matrix.length - 1 - k] == 'X')){
                            countDiagonallySecondary++;
                        }

                        if (symbolCountVertically == matrix.length){
                            console.log(`Player ${matrix[k][col]} wins!`);
                            return true;
                        }

                        if (countDiagonallyPrimary == matrix.length){
                            console.log(`Player ${matrix[k][k]} wins!`);
                            return true;
                        }

                        if (countDiagonallySecondary == matrix.length){
                            console.log(`Player ${matrix[k][matrix.length - 1 - k]} wins!`);
                            return true;
                        }
                    }


                }

            }
        }
    }

    for(let i = 0; i < matrix.length; i++){
        let row = matrix[i];
        console.log(row.join("\t"));
    }
}
solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)