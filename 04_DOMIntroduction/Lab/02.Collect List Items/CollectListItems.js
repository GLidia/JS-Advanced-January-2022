function extractText() {
    let elements = document.querySelectorAll('#items li');
    let text = "";

    for(let element of elements){
        text += element.textContent + "\n";
    }

    let resultElement = document.getElementById("result");
    resultElement.textContent = text;
}