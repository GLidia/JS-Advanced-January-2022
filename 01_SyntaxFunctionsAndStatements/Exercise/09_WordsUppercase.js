function solve(input){
    let pattern = /\b\w+\b/g;
    let matches = input.match(pattern);
    matches = matches.map(x => x.toUpperCase());
    console.log(matches.join(", "));
}
solve('hello')