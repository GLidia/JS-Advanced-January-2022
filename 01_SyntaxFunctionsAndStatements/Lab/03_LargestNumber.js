function solve(a, b, c){
    let largestNumber = 0;
    if (a >= b && a >= c){
        largestNumber = a;
    } else if (b >= a && b >= c){
        largestNumber = b;
    } else {
        largestNumber = c;
    }

    console.log(`The largest number is ${largestNumber}.`);
}
solve(1, 2, 3)