function solve(input){
    let brands = new Map();

    while(input.length > 0){
        let [brand, model, count] = input.shift().split(" | ");

        if (!brands.has(brand)){
            brands.set(brand, new Map());
        }

        let modelsMap = brands.get(brand);

        if(!modelsMap.has(model)){
            modelsMap.set(model, Number(count));
        } else {
            let currentCount = modelsMap.get(model);
            modelsMap.set(model, currentCount + Number(count));
        }

        brands.set(brand, modelsMap);
    }

    for(let [brand, modelMap] of brands){
        console.log(brand);
        for(let [model, count] of modelMap){
            console.log(`###${model} -> ${count}`);
        }
    }
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)