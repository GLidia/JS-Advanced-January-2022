function solve(...args){

    let counter = [];

    while (args.length > 0){
        let currentArg = args.shift();
        let type = typeof(currentArg);
        console.log(`${type}: ${currentArg}`);
        
        if (counter.filter(obj => obj.typee == type).length == 0){
            let obj = {typee: type, count: 1};
            counter.push(obj);
        } else {
            counter.find(obj => obj.typee == type).count += 1;
        }
    }

    counter.sort((a, b) => b.count - a.count);

    for(let entry of counter){
        console.log(`${entry.typee} = ${entry.count}`);
    }
}
solve('cat', 42, function () { console.log('Hello world!'); })