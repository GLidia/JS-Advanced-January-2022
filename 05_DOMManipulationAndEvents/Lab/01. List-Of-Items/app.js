function addItem() {
    let itemsElement = document.getElementById("items");
    let newTextItem = document.getElementById("newItemText").value;

    let newLi = document.createElement("li");
    newLi.textContent = newTextItem;
    itemsElement.appendChild(newLi);
}