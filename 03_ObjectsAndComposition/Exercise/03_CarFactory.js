function solve(requirements){
    let car = {};
    car["model"] = requirements["model"];

    if(requirements["power"] <= 90){
        car["engine"] = { power: 90, volume: 1800};
    } else if (requirements["power"] <= 120){
        car["engine"] = { power: 120, volume:2400 };
    } else {
        car["engine"] = { power: 200, volume: 3500 };
    }

    if (requirements["carriage"] == "hatchback"){
        car["carriage"] = { type: 'hatchback', color: requirements["color"] };
    } else {
        car["carriage"] = { type: 'coupe', color: requirements["color"]};
    }

    let wheel;
    if (Math.floor(requirements["wheelsize"]) % 2 != 0 ){
        wheel = Math.floor(requirements["wheelsize"]);
    } else {
        wheel = Math.floor(requirements["wheelsize"]) - 1;
    }

    car["wheels"] = [wheel, wheel, wheel, wheel]

    return car;
}
solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)