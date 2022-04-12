function solve(input){
    let products = [];

    while (input.length > 0){
        let [name, price] = input.shift().split(" : ");
        let product = {};
        product.name = name;
        product.price = Number(price);
        product.firstLetter = name[0];
        products.push(product);
    }

    products.sort((a, b) => (a.name).localeCompare(b.name));
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let letter of alphabet){

        if (products.filter(x => x.firstLetter == letter).length > 0){
            console.log(letter);
        }

        for(let product of products){
            if (product.firstLetter == letter){
                console.log(`  ${product.name}: ${product.price}`);
            }
        }
    }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)