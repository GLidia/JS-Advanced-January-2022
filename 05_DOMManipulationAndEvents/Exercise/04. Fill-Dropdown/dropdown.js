function addItem() {
    let newItemTextElement = document.getElementById("newItemText");
    let newItemValueElement = document.getElementById("newItemValue");
    let menuElement = document.getElementById("menu");

    let newOptionElement = document.createElement("option");
    newOptionElement.textContent = newItemTextElement.value;
    newOptionElement.value = newItemValueElement.value;

    menuElement.appendChild(newOptionElement);

    newItemTextElement.value = "";
    newItemValueElement.value = "";
}