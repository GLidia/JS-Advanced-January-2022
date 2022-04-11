function solve(arr){
    arr.sort((a, b) =>{
        if (a.length > b.length){
            return 1;
        } else if (a.length < b.length){
            return -1;
        } else if (a.length == b.length){
            return a.localeCompare(b);
        }
    })

    console.log(arr.join("\n"));
}
solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
)