window.addEventListener('load', solve);

function solve() {
    let modelInputElement = document.getElementById("model");
    let yearInputElement = document.getElementById("year");
    let descriptionTextareaElement = document.getElementById("description");
    let priceInputArea = document.getElementById("price");
    let addButton = document.getElementById("add");
    let furnitureListElement = document.getElementById("furniture-list");

    addButton.addEventListener("click", addEntry);

    function addEntry(e){
        e.preventDefault();

        let model = modelInputElement.value;
        let year = Number(yearInputElement.value);
        let description = descriptionTextareaElement.value;
        let price = Number(priceInputArea.value).toFixed(2);

        if (model.trim().length > 0 && description.trim().length > 0 && year > 0 && price > 0){
            
            //creating and appending elements
            let newTRVisibleElement = document.createElement("tr");
            newTRVisibleElement.classList.add("info");
            let newTDModelElement = document.createElement("td");
            newTDModelElement.textContent = model;
            let newTDPriceElement = document.createElement("td");
            newTDPriceElement.textContent = price;
            let newTDButtonsElement = document.createElement("td");
            let newMoreInfoButton = document.createElement("button");
            newMoreInfoButton.classList.add("moreBtn");
            newMoreInfoButton.textContent = "More Info";
            newMoreInfoButton.addEventListener("click", showMore);
            let newBuyButton = document.createElement("button");
            newBuyButton.classList.add("buyBtn");
            newBuyButton.textContent = "Buy it";
            newBuyButton.addEventListener("click", buy);
            newTDButtonsElement.appendChild(newMoreInfoButton);
            newTDButtonsElement.appendChild(newBuyButton);
            newTRVisibleElement.appendChild(newTDModelElement);
            newTRVisibleElement.appendChild(newTDPriceElement);
            newTRVisibleElement.appendChild(newTDButtonsElement);

            let newTRHiddenElement = document.createElement("tr");
            newTRHiddenElement.classList.add("hide");
            let newTDYearElement = document.createElement("td");
            newTDYearElement.textContent = `Year: ${year}`;
            let newTDDescriptionElement = document.createElement("td");
            newTDDescriptionElement.setAttribute("colspan", 3);
            newTDDescriptionElement.textContent = `Description: ${description}`;
            newTRHiddenElement.appendChild(newTDYearElement);
            newTRHiddenElement.appendChild(newTDDescriptionElement);

            furnitureListElement.appendChild(newTRVisibleElement);
            furnitureListElement.appendChild(newTRHiddenElement);

            function buy(e){
                e.preventDefault();

                let totalPriceElement = document.querySelector(".total-price");
                let currentTotal = Number(totalPriceElement.textContent).toFixed(2);
                let newTotal = Number(currentTotal) + Number(price);
                console.log(newTotal);
                totalPriceElement.textContent = "";
                totalPriceElement.textContent = newTotal.toFixed(2);             
                furnitureListElement.removeChild(newTRVisibleElement);
                furnitureListElement.removeChild(newTRHiddenElement);
            }

            function showMore(e){
                e.preventDefault();
                let btn = e.currentTarget;

                if (btn.textContent == "More Info"){
                    newTRHiddenElement.style.display = "contents";
                    btn.textContent = "Less Info";                    
                } else if (btn.textContent == "Less Info"){
                    newTRHiddenElement.style.display = "none";
                    btn.textContent = "More Info";
                }


            }

            //clearing input
            modelInputElement.value = "";
            yearInputElement.value = "";
            descriptionTextareaElement.value = "";
            priceInputArea.value = "";
        }    
    }
}
