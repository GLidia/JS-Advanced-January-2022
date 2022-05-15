function solve() {
    let addButton = document.getElementById("add");
    let taskInputElement = document.getElementById("task");
    let dateInputElement = document.getElementById("date");
    let descriptionTextareaElement = document.getElementById("description");
    let sectionElements = document.getElementsByTagName("section");

    addButton.addEventListener("click", add);

    function add(e){
        e.preventDefault();

        if (taskInputElement.value == null || taskInputElement.value.trim().length == 0 || dateInputElement.value == null || dateInputElement.value.trim().length == 0){
            return;
        }

        let task = taskInputElement.value;
        let date = dateInputElement.value;
        let description = descriptionTextareaElement.value;

        let newArticleElement = document.createElement("article");

        let newH3Element = document.createElement("h3");
        newH3Element.textContent = task;

        let newPForDescriptionElement = document.createElement("p");
        newPForDescriptionElement.textContent = `Description: ` + description;
        
        let newPForDateElement = document.createElement("p");
        newPForDateElement.textContent = `Due Date: ${date}`;

        let newDivForButtonsElement = document.createElement("div");
        newDivForButtonsElement.classList.add("flex");
        let newStartButton = document.createElement("button");
        newStartButton.classList.add("green");
        newStartButton.textContent = "Start";
        newStartButton.addEventListener("click", start);
        let newDeleteButton = document.createElement("button");
        newDeleteButton.classList.add("red");
        newDeleteButton.textContent = "Delete";
        newDeleteButton.addEventListener("click", deleteTask);

        newDivForButtonsElement.appendChild(newStartButton);
        newDivForButtonsElement.appendChild(newDeleteButton);

        newArticleElement.appendChild(newH3Element);
        newArticleElement.appendChild(newPForDescriptionElement);
        newArticleElement.appendChild(newPForDateElement);
        newArticleElement.appendChild(newDivForButtonsElement);

        sectionElements[1].getElementsByTagName("div")[1].appendChild(newArticleElement);

        function deleteTask(e){
            e.preventDefault();
            let button = e.currentTarget;
            button.parentNode.parentNode.remove();
        }

        function start(e){
            e.preventDefault();
            let button = e.currentTarget;
            let wholeArticleElement = button.parentNode.parentNode;

            document.getElementById("in-progress").appendChild(wholeArticleElement);   

            button.parentNode.firstChild.remove();

            let newFinishButton = document.createElement("button");
            newFinishButton.classList.add("orange");
            newFinishButton.textContent = "Finish";
            newFinishButton.addEventListener("click", finish);

            wholeArticleElement.getElementsByTagName("div")[0].appendChild(newFinishButton);

            function finish(e){
                e.preventDefault();
                let bttn = e.currentTarget;
                let articleElement = bttn.parentNode.parentNode;

                sectionElements[3].getElementsByTagName("div")[1].appendChild(articleElement);

                articleElement.getElementsByTagName("div")[0].remove();
            }
        }  
        
        taskInputElement.value = "";
        dateInputElement.value = "";
        descriptionTextareaElement.value = "";
    }
}