class Restaurant{
    constructor(budgetMoney){
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts = function(products){
        let toReturn = "";
        while(products.length > 0){
            let message;
            let [name, quantityStr, priceStr] = products.shift().split(" ");
            if (Number(priceStr) <= this.budgetMoney){
                this.budgetMoney -= Number(priceStr);

                if (!this.stockProducts.hasOwnProperty(name)){
                    this.stockProducts[name] = 0;
                }

                this.stockProducts[name] += Number(quantityStr);
                message = `Successfully loaded ${quantityStr} ${name}`;

            } else {
                message = `There was not enough money to load ${quantityStr} ${name}`;

            } 
            
            toReturn += message + '\n';
            this.history.push(message);
        }

        return toReturn.trim();
    }

    addToMenu = function(meal, neededProducts, price){
        if (!this.menu.hasOwnProperty(meal)){
            this.menu[meal] = {products: neededProducts, price: price};
            let menuMeals = Array.from(Object.keys(this.menu));
            if (menuMeals.length == 1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${menuMeals.length} meals in the menu, other ideas?`;
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu = function(){
        let toReturn = "";

        if (Array.from(Object.keys(this.menu)).length > 0){
            for (let meal in this.menu){
                toReturn += `${meal} - $ ${this.menu[meal].price}\n`;
            }
        } else {
            toReturn = `Our menu is not ready yet, please come later...`;
        }

        return toReturn.trim();
    }

    makeTheOrder = function(meal){
        let menuMeals = Array.from(Object.keys(this.menu));

        if (!menuMeals.includes(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {

            //checking whether we have the products (name quantity)
            let prdNeeded = this.menu[meal].products;
            let missingProducts = false;

            
            for (let i = 0; i < prdNeeded.length; i++){

                let [product, quantityStr] = prdNeeded[i].split(" ");
                if (!this.stockProducts.hasOwnProperty(product) || this.stockProducts[product] < Number(quantityStr)){
                    missingProducts = true;
                }
            }

            if (missingProducts){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                for (let [product, quantityStr] of prdNeeded){
                    this.stockProducts[product] -= Number(quantityStr);
                }
                this.budgetMoney += this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
            }
        }
    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
