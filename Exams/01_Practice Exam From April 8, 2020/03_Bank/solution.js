class Bank{
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer = function(customer){
        if(this.allCustomers.find(x => x.firstName == customer.firstName && x.lastName == customer.lastName)){
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        } else {
            customer.totalMoney = 0;
            customer.transactions = [];
            customer.transactionsCount = 0;
            this.allCustomers.push(customer);
            return customer;
        }
    }

    depositMoney = function(personalId, amount){
        if(!this.allCustomers.find(x => x.personalId == personalId)){
            throw new Error(`We have no customer with this ID!`);
        } else {
            let cust = this.allCustomers.find(x => x.personalId == personalId);

            cust.totalMoney += amount;
            cust.transactionsCount++;
            cust.transactions.push({id: cust.transactionsCount, type: "deposit", amount: amount});
            return `${cust.totalMoney}$`;
        }
    }

    
    withdrawMoney = function(personalId, amount){
        if(!this.allCustomers.find(x => x.personalId == personalId)){
            throw new Error(`We have no customer with this ID!`);
        } else {
            let cust = this.allCustomers.find(x => x.personalId == personalId);
            if (cust.totalMoney < amount){
                throw new Error(`${cust.firstName} ${cust.lastName} does not have enough money to withdraw that amount!`)
            } 
            cust.totalMoney -= amount;

            cust.transactionsCount++;
            cust.transactions.push({id: cust.transactionsCount, type: "withdrawal", amount: amount});
            return `${cust.totalMoney}$`;
        }
    }

    customerInfo = function(personalId){
        if(!this.allCustomers.find(x => x.personalId == personalId)){
            throw new Error(`We have no customer with this ID!`);
        } else {
            let toReturn = `Bank name: ${this._bankName}\n`;
            let cust = this.allCustomers.find(x => x.personalId == personalId);
            toReturn += `Customer name: ${cust.firstName} ${cust.lastName}\n`;
            toReturn += `Customer ID: ${cust.personalId}\n`;
            toReturn += `Total Money: ${cust.totalMoney}$\n`;
            toReturn += `Transactions:\n`;
            for(let tran of cust.transactions.sort((a, b) => b.id - a.id)){
                if (tran.type == "deposit"){
                    toReturn += `${tran.id}. ${cust.firstName} ${cust.lastName} made deposit of ${tran.amount}$!\n`;
                } else if (tran.type == "withdrawal"){
                    toReturn += `${tran.id}. ${cust.firstName} ${cust.lastName} withdrew ${tran.amount}$!\n`;
                }
            }

            return toReturn.trim();
            
        }

    }
}
let bank = new Bank(`SoftUni Bank`);

console.log(bank.newCustomer({firstName: `Svetlin`, lastName: `Nakov`, personalId: 6233267}));
console.log(bank.newCustomer({firstName: `Mihaela`, lastName: `Mileva`, personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
