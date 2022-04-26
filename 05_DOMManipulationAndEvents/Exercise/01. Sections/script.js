function create(words) {

   let contentElement = document.getElementById('content');

   while(words.length > 0){
      let text = words.shift();
      let pElement = document.createElement("p");
      pElement.textContent = text;
      pElement.style.display = "none";
      let divElement = document.createElement("div");
      divElement.appendChild(pElement);
      divElement.addEventListener("click", function(){
         divElement.children[0].style.display = "block";
      });
      contentElement.appendChild(divElement);
   }
}