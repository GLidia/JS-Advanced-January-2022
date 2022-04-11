function solve(arr, rotations){

    for(let i = 0; i < rotations % arr.length; i++){
        arr.unshift(arr.pop());
    }

    console.log(arr.join(" "));
}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)