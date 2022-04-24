function toggle() {
    let buttonElement = document.getElementsByClassName("button")[0];
    let textElement = document.getElementById("extra");

    if (buttonElement.textContent == "More"){
        textElement.style.display = "block";
        buttonElement.textContent = "Less"
    } else {
        textElement.style.display = "none";
        buttonElement.textContent = "More";
    }

}