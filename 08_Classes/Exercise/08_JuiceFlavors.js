function solve(input){
    let juices = new Map();
    let bottles = new Map();

    while(input.length > 0){
        let [type, quantity] = input.shift().split(" => ");
        if (!juices.has(type)){
            juices.set(type, Number(quantity));
        } else {
            let currentQuantity = juices.get(type);
            juices.set(type, currentQuantity + Number(quantity));
        }

        let qtty = juices.get(type);
        while(qtty >= 1000){
            
            if (!bottles.has(type)){
                bottles.set(type, 0);
            } 

            let currentBottles = bottles.get(type);
            bottles.set(type, currentBottles + 1);
            qtty -= 1000;
        }

        juices.set(type, qtty);
    }

    for(let [type, qtty] of bottles){
        console.log(`${type} => ${qtty}`);
    }
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)