function solve(array, startIndex, endIndex){
    if (!Array.isArray(array)){
        return NaN;
    }

    if (startIndex < 0){
        startIndex = 0;
    }

    if (endIndex >= array.length){
        endIndex = array.length - 1;
    }

    let sum = 0;

    for(let i = startIndex; i <= endIndex; i++){
        sum += Number(array[i]);
    }

    return sum;
}