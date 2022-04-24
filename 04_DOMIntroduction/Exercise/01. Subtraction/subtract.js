function subtract() {
    let firstElement = document.getElementById("firstNumber");
    let secondElement = document.getElementById("secondNumber");
    let resultElement = document.getElementById("result");

    resultElement.textContent = Number(firstElement.value) - Number(secondElement.value);
}