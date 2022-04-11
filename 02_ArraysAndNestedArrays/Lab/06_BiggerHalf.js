function solve(input){
    input.sort((a, b) => a - b);
    let arr = input.splice(input.length/2);
    return arr;
}
solve([3, 19, 14, 7, 2, 19, 6])