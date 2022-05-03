function solve(numbers, order){
    if (order == "asc"){
        return numbers.sort((a, b) => a - b);
    } else if (order == "desc"){
        return numbers.sort((a, b) => b - a);
    }
}