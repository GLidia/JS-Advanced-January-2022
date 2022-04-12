function solve(input){
    let towns = [];

    for(let i = 1; i < input.length; i++){
        let [name, latitude, longitude] = input[i].split("|").filter(n => n).map(n => n.trim());
        let town = {Town: name, Latitude: Number(Number(latitude).toFixed(2)), Longitude: Number(Number(longitude).toFixed(2))};
        towns.push(town);        
    }
    
    console.log(JSON.stringify(towns));
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)