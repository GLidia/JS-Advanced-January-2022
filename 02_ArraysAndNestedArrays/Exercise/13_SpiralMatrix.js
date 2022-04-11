function solve(width, height){

    //populate matrix with 0s
    let matrix = [];

    for(let i = 0; i < height; i++){
        matrix[i] = [];
    }

    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            matrix[i][j] = 0;
        }
    }

    //populate matrix with correct numbers
    let count = 1;

    while (count < width * height){

        for(let i = 0; i <= height / 2; i++){

            //horizontally left to right
            for(let j = 0; j < width; j++){
                if (matrix[i][j] == 0){
                    matrix[i][j] = count;
                    count++;
                }
            }

            //vertically top to bottom       
            for(let j = 0; j < width; j++){
                if (matrix[j][height - 1 - i] == 0){
                    matrix[j][height -1 - i] = count;
                    count++
                }
            }

            //horizontally right to left
            for(let j = width - 1; j >= 0; j--){
                if (matrix[height - 1 - i][j] == 0){
                    matrix[height - 1 - i][j] = count;
                    count++;
                }
            }
            
            //vertically bottom to top
            for(let j = height - 1; j >= 0; j--){
                if (matrix[j][i] == 0){
                    matrix[j][i] = count;
                    count++;
                }
            }
        }
    }

    //print matrix
    for(let i = 0; i < height; i++){
        console.log(matrix[i].join(" "));
    }
}
solve(3, 3)