function solve(input){

    let array = [];
            
    let manipulateArray = {

            add: (toAdd) => array.push(toAdd),
            remove: (toRemove) => {
                while(array.includes(toRemove)){
                    let index = array.indexOf(toRemove);
                    array.splice(index, 1);
                }
                return array;
            },
            print: () => console.log(array.join(","))
    }

    while(input.length > 0){
        let info = input.shift().split(" ");
        let command = info[0];

        if (info[1]){
            manipulateArray[command](info[1]);
        } else {
            manipulateArray[command]();
        }
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])