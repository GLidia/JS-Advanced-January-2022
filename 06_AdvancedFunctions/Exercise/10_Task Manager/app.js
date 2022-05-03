function solve() {
    let addButtonElement = document.getElementById("add");
    let sectionElements = document.querySelectorAll("section");

    addButtonElement.addEventListener("click", addNewTask);

    function addNewTask(event){
        event.preventDefault();

        let inputElements = event.currentTarget.parentNode.querySelectorAll("input");
        let descriptionElement = event.currentTarget.parentNode.querySelector("textarea");

        if(inputElements[0].value && inputElements[1].value && inputElements[0].value.trim().length != 0 && inputElements[1].value.trim().length != 0){

            let newArticleElement = document.createElement("article");

            let newH3Element = document.createElement("h3");
            newH3Element.textContent = inputElements[0].value;

            let newPElement1 = document.createElement("p");
            newPElement1.textContent = `Description: ${descriptionElement.value}`;

            let newPElement2 = document.createElement("p");
            newPElement2.textContent = `Due Date: ${inputElements[1].value}`;

            let newDivElement = document.createElement("div");
            newDivElement.classList.add("flex");
            let newButtonElement1 = document.createElement("button");
            newButtonElement1.classList.add("green");
            newButtonElement1.textContent = "Start";
            newButtonElement1.addEventListener("click", startTask);
            let newButtonElement2 = document.createElement("button");
            newButtonElement2.classList.add("red");
            newButtonElement2.textContent = "Delete";
            newButtonElement2.addEventListener("click", deleteElement);
            newDivElement.appendChild(newButtonElement1);
            newDivElement.appendChild(newButtonElement2);

            newArticleElement.appendChild(newH3Element);
            newArticleElement.appendChild(newPElement1);
            newArticleElement.appendChild(newPElement2);
            newArticleElement.appendChild(newDivElement);
            
            sectionElements[1].querySelectorAll("div")[1].appendChild(newArticleElement);

            inputElements[0].value = "";
            inputElements[1].value = "";
            descriptionElement.value = "";
        }
    }

    function moveToComplete(event){
        event.preventDefault();

        let button = event.currentTarget;

        let article = button.parentNode.parentNode;
        button.parentNode.remove();
        
        sectionElements[3].querySelectorAll("div")[1].appendChild(article);
    }

    function startTask(event){
        event.preventDefault();

        let button = event.currentTarget;

        let newButton = document.createElement("button");
        newButton.classList.add("orange");
        newButton.textContent = "Finish";
        newButton.addEventListener("click", moveToComplete);

        button.parentNode.appendChild(newButton);

        let wholeArticleElement = button.parentNode.parentNode;
        button.parentNode.firstChild.remove();
        document.getElementById("in-progress").appendChild(wholeArticleElement);
    }

    function deleteElement(event){
        event.preventDefault();

        let button = event.currentTarget;
        button.parentNode.parentNode.remove();
    }
}