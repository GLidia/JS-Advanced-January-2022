function addItem() {
    let itemsElement = document.getElementById("items");
    let newTextItem = document.getElementById("newItemText").value;

    let newLi = document.createElement("li");
    newLi.textContent = newTextItem;

    let deleteLinkElement = document.createElement("a");
    deleteLinkElement.textContent = "[Delete]";
    deleteLinkElement.href = "#";
    deleteLinkElement.addEventListener("click", function(){
        let toDelete = deleteLinkElement.parentNode;
        toDelete.parentNode.removeChild(toDelete);
    });
    newLi.appendChild(deleteLinkElement);

    itemsElement.appendChild(newLi);
}