function solve(area, vol, parameters){
    let input = JSON.parse(parameters);
    let objects = [];

    while(input.length > 0){
        let obj = input.shift();
        let object = {};
        object.area = area.call(obj);
        object.volume = vol.call(obj);
        objects.push(object);
    }

    return objects;
}