function solve(width, height, color){
    let rectangleColor = color[0].toUpperCase() + color.substring(1);

    let rectangle = {
        width: width,
        height: height,
        color: rectangleColor,
        calcArea: () => {
            return width * height;
        }

    };

    return rectangle;
}
solve(4, 5, 'red');

