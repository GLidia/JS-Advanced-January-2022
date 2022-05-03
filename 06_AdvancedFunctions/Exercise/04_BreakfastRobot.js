function solve(){

    let apple = {name: "apple", carbohydrate: 1, flavour: 2};
    let lemonade = {name: "lemonade", carbohydrate: 10, flavour: 20};
    let burger = {name: "burger", carbohydrate: 5, fat: 7, flavour: 3};
    let eggs = {name: "eggs", protein: 5, fat: 1, flavour: 1};
    let turkey = {name: "turkey", protein: 10, carbohydrate: 10, fat: 10, flavour: 10};
    let recipes = [apple, lemonade, burger, eggs, turkey];

    let ingredients = [{name: "protein", quantity: 0}, {name: "carbohydrate", quantity: 0}, {name: "fat", quantity: 0},
            {name: "flavour", quantity: 0}];

    return (input) => {
        if (input.includes("report")){
            return`protein=${ingredients.find(x => x.name == "protein").quantity} carbohydrate=${ingredients.find(x => x.name == "carbohydrate").quantity} fat=${ingredients.find(x => x.name == "fat").quantity} flavour=${ingredients.find(x => x.name == "flavour").quantity}`;
        } else if (input.includes("restock")){
            let [command, element, quantity] = input.split(" ");
            let ingredient = ingredients.find(x => x.name == element);
            ingredient.quantity += Number(quantity);
            return "Success";
        } else if (input.includes("prepare")){
            let [command, recipe, quantity] = input.split(" ");
            let meal = recipes.find(x => x.name == recipe);
            let qtt = Number(quantity);

            for(let ingredient of ingredients){
                if (meal[ingredient.name]){
                    if (meal[ingredient.name] * qtt > ingredients.find(x => x.name == ingredient.name).quantity){
                        return `Error: not enough ${ingredient.name} in stock`;                   
                    }
                }
            }

            for(let ingredient of ingredients){
                if (meal[ingredient.name]){
                    ingredients.find(x => x.name == ingredient.name).quantity -= meal[ingredient.name] * qtt;
                }
            }

            return "Success";
        }
    };

}
let manager = solve();
console.log(manager("restock flavour 50 "));
console.log(manager("report"));
console.log (manager ("prepare lemonade 4")); 
console.log(manager("report"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("report"));
console.log (manager ("restock flavour 10")); 
console.log(manager("report"));
console.log(manager("prepare apple 1"));
console.log(manager("report"));
console.log (manager ("restock fat 10")); // Success 
console.log(manager("report"));
console.log (manager ("prepare burger 1")); 
console.log(manager("report"));