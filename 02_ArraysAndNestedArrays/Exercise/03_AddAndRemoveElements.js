function solve(commands){
    let output = [];

    for(let i = 0; i < commands.length; i++){
        
        if (commands[i] == "add"){
            output.push(i + 1);
        } else {
            output.pop();
        }
        
    }

    if (output.length == 0){
        console.log("Empty");
    } else {
        console.log(output.join("\n"));
    }

}
solve([ 
'remove'])