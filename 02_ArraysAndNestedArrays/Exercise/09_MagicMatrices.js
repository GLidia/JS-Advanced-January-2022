function solve(input){
    let forComparison;

    for(let i = 0; i < input.length; i++){
        let row = input[i];
        let rowSum = row.reduce((a, v) =>{
            a = a + v;
            return a;
        });

        if (i == 0){
            forComparison = rowSum; 

            for(let col = 0; col < input.length; col++){
                let colSum = 0;

                for(let r = 0; r < input.length; r++){
                    colSum += input[r][col];
                }

                if (colSum != forComparison){
                    console.log(false);
                    return;
                }
            }

        }

        if (rowSum != forComparison){
            console.log(false);
            return;
        }

    }

    console.log(true);

}
solve([[4, 5, 6],
    [6, 5, 4]]
   )