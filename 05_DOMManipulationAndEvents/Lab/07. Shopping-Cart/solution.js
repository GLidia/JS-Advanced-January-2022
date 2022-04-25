function solve() {
   let allButtonElements = document.getElementsByTagName("button");
   let allProductTitleElements = document.querySelectorAll("div[class='product-title']");
   let allPriceElements = document.querySelectorAll("div[class='product-line-price']");
   let textAreaElement = document.querySelector("textarea");
   
   let productsAdded = [];
   let totalCost = 0;


   for(let i = 0; i < allButtonElements.length - 1; i++){
      allButtonElements[i].addEventListener("click", function addProduct(){
         let name = allProductTitleElements[i].textContent;
         let price = Number(allPriceElements[i].textContent);

         totalCost += price;
         if (!productsAdded.includes(name)){
            productsAdded.push(name);
         }

         textAreaElement.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`; 
      });
   }

   allButtonElements[allButtonElements.length - 1].addEventListener("click", checkout);

   function checkout(){
      textAreaElement.value += `You bought ${productsAdded.join(", ")} for ${totalCost.toFixed(2)}.`;

      for(let i = 0; i < allButtonElements.length; i++){
         allButtonElements[i].disabled = true;
      } 
    
   };

}