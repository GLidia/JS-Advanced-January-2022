function solve(input){

    let obj = {};

    for(let i = 0; i < input.length; i+=2){
        let name = input[i];
        let calories = Number(input[i + 1]);
        obj[name] = calories;
    }

    console.log(obj);
}
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])