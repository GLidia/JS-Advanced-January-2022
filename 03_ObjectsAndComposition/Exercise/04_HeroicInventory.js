function solve(input){
    let heroes = [];

    while(input.length > 0){
        let info = input.shift().split(" / ");
        let hero = {};
        hero.name = info[0];
        hero.level = Number(info[1]);
        hero.items = [];

        //hero.items = info[2] ? info[2].split(", ") : [];
        if (info.length > 2){

            let itemInventory = info[2].split(", ");
            for(let item of itemInventory){
                hero.items.push(item);
            }

        }


        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 ']
)