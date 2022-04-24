function solve() {
    let firstOptionToElement = document.querySelector("#selectMenuTo option");
    firstOptionToElement.value = 'binary';
    firstOptionToElement.textContent = "Binary";
    let secondOptionToElement = document.createElement("option");
    secondOptionToElement.value = 'hexadecimal';
    secondOptionToElement.textContent = "Hexadecimal";
    firstOptionToElement.parentNode.appendChild(secondOptionToElement);

    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function(event){
        let decimalNumber = Number(document.getElementById("input").value);
        let result;
        if (firstOptionToElement.selected){
            result = decimalNumber.toString(2);
        } else if (secondOptionToElement.selected){
            result = decimalNumber.toString(16);
            result = result.toUpperCase();
        }

        document.getElementById("result").value = result;
    });
}