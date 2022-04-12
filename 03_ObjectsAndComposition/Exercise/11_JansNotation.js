function solve(input){

    let numbers = [];

    while (input.length > 0){
        let element = input.shift();

        if (typeof element == 'number'){
            numbers.push(element);
        } else if (numbers.length < 2){
            console.log("Error: not enough operands!");
            return;
        } else {
            let newElement;
            let n2 = numbers.pop();
            let n1 = numbers.pop();
            if (element == "+"){
                newElement = n1 + n2;
            } else if (element == "-"){
                newElement = n1 - n2;
            } else if (element == "*"){
                newElement = n1 * n2;
            } else if (element == "/"){
                newElement = n1 / n2; 
            }

            numbers.push(newElement);
        }
    }

    if (numbers.length > 1){
        console.log("Error: too many operands!");
    } else {
        console.log(numbers[0]);
    }
}
solve([15,
    '/']
    
   )