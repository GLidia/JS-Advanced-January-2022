function solve(arr, step){
    let output = [];

    for(let i = 0; i < arr.length; i += Number(step)){
        output.push(arr[i]);
    }

    return output;
}
solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)