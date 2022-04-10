function solve(number, o1, o2, o3, o4, o5){
    let n = Number(number);
    let operations = [o1, o2, o3, o4, o5];

    for(let i = 0; i < operations.length; i++){
        let op = operations[i];

        switch(op){
            case "chop":
                n = n / 2;
                break;
            case "dice":
                n = Math.sqrt(n);
                break;
            case "spice":
                n = n + 1;
                break;
            case "bake":
                n = n * 3;
                break;
            case "fillet":
                n = n * 0.8;
                break;
        }

        console.log(n);
    }

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')