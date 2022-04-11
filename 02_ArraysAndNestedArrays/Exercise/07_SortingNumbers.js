function solve(numbers){
    let output = [];

    numbers.sort((a, b) => a - b);
    let count = 0;

    while (numbers.length > 0){
        
        if (count % 2 == 0){
            output.push(numbers.shift());
        } else {
            output.push(numbers.pop());
        }

        count++;
    }

    return output;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])