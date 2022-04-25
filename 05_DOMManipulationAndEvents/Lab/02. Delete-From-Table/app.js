function deleteByEmail() {
    let inputEmail = document.getElementsByTagName("input")[0].value;
    let tdElements = document.getElementsByTagName("td");

    let deleted = false;

    for(let td of tdElements){
        if (td.textContent == inputEmail){
            let elementToDelete = td.parentNode;
            elementToDelete.parentNode.removeChild(elementToDelete);
            deleted = true;
        }
    }

    let resultElement = document.getElementById("result");

    if (deleted){
        resultElement.textContent = "Deleted.";
    } else {
        resultElement.textContent = "Not found.";
    }

}