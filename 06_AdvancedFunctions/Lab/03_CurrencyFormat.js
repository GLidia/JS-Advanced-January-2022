function solve(separator, symbol, symbolFirst, formatter){

    let newFunction = (value) => {
        return formatter(separator, symbol, symbolFirst, value);
    }

    return newFunction;
}