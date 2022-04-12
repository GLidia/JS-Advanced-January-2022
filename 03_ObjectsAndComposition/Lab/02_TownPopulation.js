function solve(input){
    let towns = {};

    while (input.length > 0){
        let [name, population] = input.shift().split(" <-> ");
        if (!(name in towns)){
            towns[name] = Number(population);
        } else {
            let currentPopulation = towns[name];
            towns[name] = Number(currentPopulation) + Number(population);
        }
        
    }

    for(let key in towns){
        console.log(`${key} : ${towns[key]}`);
    }
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)