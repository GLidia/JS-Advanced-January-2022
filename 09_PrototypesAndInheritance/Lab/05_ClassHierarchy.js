function solve(){
    
    class Figure{
        constructor(units = "cm"){
            this.units = units;
        }

        get area() {};
        changeUnits(newUnit) {
            this.units = newUnit;
        }   

        toString() { return `Figures units: ${this.units}`}
    }

    class Circle extends Figure {
        constructor(radius, units){
            super(units);
            this.radius = radius;
        }

        get area() { 
            let radius = this.radius;
            if (this.units == 'mm'){
                radius = radius * 10;
            } else if (this.units == 'mm'){
                radius = radius / 100;
            }
            return Math.PI * radius * radius;
        }
        toString() { 
            let radius = this.radius;
            if (this.units == 'mm'){
                radius = radius * 10;
            } else if (this.units == 'mm'){
                radius = radius / 100;
            }
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units){
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            let width = this.width;
            let height = this.height;
            if (this.units == 'mm'){
                width = width * 10;
                height = height * 10;
            } else if (this.units == 'm'){
                width = width / 100;
                height = height / 100;
            }
            return width * height;
        }
        toString = function() {
            let width = this.width;
            let height = this.height;
            if (this.units == 'mm'){
                width = width * 10;
                height = height * 10;
            } else if (this.units == 'm'){
                width = width / 100;
                height = height / 100;
            }

            return `Figures units: ${this.units} Area: ${this.area} - width: ${width}, height: ${height}`}
    }

    return { Figure, Circle, Rectangle}

}
solve()