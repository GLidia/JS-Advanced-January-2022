function solve() {
    let onScreenButtonElement = document.querySelector("#container button");
    let onScreenInputElements = document.querySelectorAll("#container input");
    let clearButtonElement = document.querySelector("#archive > button");

    clearButtonElement.addEventListener("click", clearAll);

    onScreenButtonElement.addEventListener("click", addMovie);

    function clearAll(event){
        let button = event.currentTarget;
        let ulElement = button.parentNode.querySelector("ul");

        while (ulElement.firstChild){
            ulElement.firstChild.remove();
        }
    }

    function addMovie(event){
        event.preventDefault();

        let name = onScreenInputElements[0].value;
        let hall = onScreenInputElements[1].value;
        let priceAsString = onScreenInputElements[2].value;

        if(name && hall && priceAsString && name.trim().length != 0 && hall.trim().length != 0 && priceAsString.trim().length != 0){

            let price = Number(priceAsString);

            if (!Number.isNaN(price)){

                price = price.toFixed(2);

                let newLiElement = document.createElement("li");

                let newSpanElement = document.createElement("span");
                newSpanElement.textContent = name;

                let newStrongElement = document.createElement("strong");
                newStrongElement.textContent = `Hall: ${hall}`;

                let newDivElement = document.createElement("div");
                let secondStrongElement = document.createElement("strong");
                secondStrongElement.textContent = price;
                let inputElement = document.createElement("input");
                inputElement.placeholder = "Tickets Sold";
                let newButtonElement = document.createElement("button");
                newButtonElement.textContent = "Archive";
                newButtonElement.addEventListener("click", addToArchive);
                newDivElement.appendChild(secondStrongElement);
                newDivElement.appendChild(inputElement);
                newDivElement.appendChild(newButtonElement);

                newLiElement.appendChild(newSpanElement);
                newLiElement.appendChild(newStrongElement);
                newLiElement.appendChild(newDivElement);
                
                document.querySelector("#movies ul").appendChild(newLiElement);

                for(let el of onScreenInputElements){
                    el.value = "";
                }
            }
        }
    } 
    
    function addToArchive(event){
        event.preventDefault();
        let button = event.currentTarget;

        let ticketsSoldAsString = button.parentNode.querySelector("input").value;
        if (ticketsSoldAsString && ticketsSoldAsString.trim().length != 0){
   
            let price = Number(button.parentNode.querySelector("strong").textContent);
            let numberOfTickets = Number(ticketsSoldAsString);
            let name = button.parentNode.parentNode.querySelector("span").textContent;

            if (!Number.isNaN(numberOfTickets)){

                let newLi = document.createElement("li");

                let newSpan = document.createElement("span");
                newSpan.textContent = name;

                let newStrong = document.createElement("strong");
                newStrong.textContent = `Total amount: ${(price * numberOfTickets).toFixed(2)}`;

                let newButton = document.createElement("button");
                newButton.textContent = "Delete";
                newButton.addEventListener("click", function(e){
                    e.preventDefault();
                    e.currentTarget.parentNode.remove();
                });

                newLi.appendChild(newSpan);
                newLi.appendChild(newStrong);
                newLi.appendChild(newButton);

                document.querySelector("#archive ul").appendChild(newLi);

                button.parentNode.parentNode.remove();
            }
        }
    }
}