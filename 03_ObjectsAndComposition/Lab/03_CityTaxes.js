function solve(cityName, cityPopulation, cityTreasury){
    let city = {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury,
        taxRate: 10,
        collectTaxes() {this.treasury += this.population * this.taxRate},
        applyGrowth(percentage) {this.population += this.population * percentage/100},
        applyRecession(percentage) {this.treasury -= this.treasury * percentage/100}
    };
    
    return city;
}
solve('Tortuga', 7000, 15000)