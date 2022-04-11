function solve(input){
    let arr = [];

    if (input.length < 2){
        console.log(input.join(" "));
    } else {
        while (arr.length < 2){
            let smallest = Number.MAX_VALUE;

            for(let i = 0; i < input.length; i++){
                if (input[i] < smallest){
                    smallest = input[i];
                    index = i;
                }
            }

            arr.push(smallest);
            input.splice(index, 1);
        }

        console.log(arr.join(" "));
    }
}
solve([3])