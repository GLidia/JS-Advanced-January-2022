class Circle{
    constructor(r){
        this.radius = r;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    
    get diameter() {
        return this.radius * 2;
    }

    get area() {
        let area = Math.PI * (this.radius ** 2);
        return area;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
