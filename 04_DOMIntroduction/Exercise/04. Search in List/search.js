function search() {
   let searchTextElement = document.getElementById("searchText");
   let liElements = document.querySelectorAll("ul li");
   let resultElement = document.getElementById("result");
   let count = 0;

   for(let li of liElements){
      li.style.textDecoration = "none";
      li.style.fontWeight = "normal";
      
      if (li.textContent.includes(searchTextElement.value)){
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
         count++;
      }
   }

   searchTextElement.value = "";
   resultElement.textContent = `${count} matches found`;

}
