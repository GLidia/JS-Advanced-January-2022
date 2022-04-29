function solve(input){

    let objects = {};

    let factory = {
        create(name) {
            let newObj = {name: name};
            objects[name] = newObj;
        }, 
        createThatInherits(name, parentName){
            let newObj = {name: name}
            newObj.parent = parentName;
            objects[name] = newObj;
        },
        set(name, key, value){
            let obj = objects[name];
            obj[key] = value;
        },
        print(name){
            let obj = objects[name];
            let keys = Object.keys(obj);
            let arrayToPrint = [];
            let child = false;
            for(let key of keys){
                if (key != "name" && key != "parent"){
                   arrayToPrint.push(`${key}:${obj[key]}`); 
                }  
                
                if (key == "parent"){
                    child = true;
                }
            }

            if(child){
                let parentName = obj.parent;
                let parentObj = objects[parentName];
                let parentKeys = Object.keys(parentObj);
                let grandChild = false;

                for(let k of parentKeys){
                    if(k != "name" && k != "parent" && !keys.includes(k)){
                        arrayToPrint.push(`${k}:${parentObj[k]}`);
                    }

                    if (k == "parent"){
                        grandChild = true;
                    }
                }

                if (grandChild){
                    let grandparentName = parentObj.parent;
                    let grandparentObj = objects[grandparentName];
                    let grandparentKeys = Object.keys(grandparentObj);
                    let greatgrandChild = false;
    
                    for(let ke of grandparentKeys){
                        if(ke != "name" && ke != "parent" && !keys.includes(ke)){
                            arrayToPrint.push(`${ke}:${grandparentObj[ke]}`);
                        }
    
                        if (ke == "parent"){
                            greatgrandChild = true;
                        }
                    }
                }
            }
        
            console.log(arrayToPrint.join(","));
        }

    }

    while(input.length > 0){
        let command = input.shift().split(" ");

        if (command.includes("print")){
            factory.print(command[1]);
        } else if (command.includes("set")){
            factory.set(command[1], command[2], command[3]);
        } else if (command.includes("create") && command.includes("inherit")){
            factory.createThatInherits(command[1], command[3]);
        } else if (command.includes("create") && !command.includes("inherit")){
            factory.create(command[1]);
        }
    }
}
solve(['create pesho',
'create gosho inherit pesho',
'create stamat inherit gosho',
'set pesho rank number1',
'set gosho nick goshko',
'print stamat']
)