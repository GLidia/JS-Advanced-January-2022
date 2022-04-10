function solve(fruit, weight, price){
    let weightInKG = weight / 1000;
    let totalPrice = weightInKG * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80)