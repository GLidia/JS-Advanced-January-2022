function solve(input){
    console.log(input.filter((x, i) => i % 2 != 0).map((x) => x * 2).reverse().join(", "));
}
solve([3, 0, 10, 4, 7, 3])