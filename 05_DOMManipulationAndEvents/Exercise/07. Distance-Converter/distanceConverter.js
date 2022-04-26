function attachEventsListeners() {
    let convertButtonElement = document.getElementById("convert");
    let fromSelectMenuElement = document.getElementById("inputUnits");
    let toSelectMenuElement = document.getElementById("outputUnits");
    let inputDistanceElement = document.getElementById("inputDistance");
    let outputDistanceElement = document.getElementById("outputDistance");

    convertButtonElement.addEventListener("click", convert);

    function convert(){
        let fromUnit = fromSelectMenuElement.value;
        let inputDistance = Number(inputDistanceElement.value);
        let toUnit = toSelectMenuElement.value;

        let inM = 0;

        if(fromUnit == "km"){
            inM = inputDistance * 1000;
        } else if (fromUnit == "m"){
            inM = inputDistance;
        } else if (fromUnit == "cm"){
            inM = inputDistance * 0.01;
        } else if (fromUnit == "mm"){
            inM = inputDistance * 0.001;
        } else if (fromUnit == "mi"){
            inM = inputDistance * 1609.34;
        } else if (fromUnit == "yrd"){
            inM = inputDistance * 0.9144;
        } else if (fromUnit == "ft"){
            inM = inputDistance * 0.3048;
        } else if (fromUnit == "in"){
            inM = inputDistance * 0.0254;
        }

        let outputValue = 0;

        if(toUnit == "km"){
            outputValue = inM / 1000;
        } else if (toUnit == "m"){
            outputValue = inM;
        } else if (toUnit == "cm"){
            outputValue = inM / 0.01;
        } else if (toUnit == "mm"){
            outputValue = inM / 0.001;
        } else if (toUnit == "mi"){
            outputValue = inM / 1609.34;
        } else if (toUnit == "yrd"){
            outputValue = inM / 0.9144;
        } else if (toUnit == "ft"){
            outputValue = inM / 0.3048;
        } else if (toUnit == "in"){
            outputValue = inM / 0.0254;
        }

        outputDistanceElement.value = outputValue;
    };
}