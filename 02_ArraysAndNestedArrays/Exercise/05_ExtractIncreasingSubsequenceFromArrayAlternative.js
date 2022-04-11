function solve(arr){

    return arr.reduce((output, element) => {
        if (element >= (output[output.length - 1] || arr[0])){
            output.push(element);
        }

        return output;
    }, [])

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