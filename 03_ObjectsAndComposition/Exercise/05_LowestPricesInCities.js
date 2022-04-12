function solve(input){
    let products = [];

    while(input.length > 0){
        let [town, product, price] = input.shift().split(" | ");

        if (products.filter(x => x.product == product).length > 0){
            let obj = products.find(x => x.product == product);
            if (obj.price > Number(price)){
                obj.price = Number(price);
                obj.town = town;
            }
        } else {
            let obj = { product: product, town: town, price: Number(price)};
            products.push(obj);
        }
    }

    for(let product of products){
        console.log(`${product.product} -> ${product.price} (${product.town})`);
    }
}
solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
)