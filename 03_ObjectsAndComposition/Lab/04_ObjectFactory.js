function solve(library, orders){

    let objects = [];

    for(let order of orders){
        let obj = Object.assign({}, order.template);

        for(let part of order.parts){
            obj[part] = library[part];
        }
        objects.push(obj);
    }

    return objects;
}