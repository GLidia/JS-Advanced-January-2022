function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tdElements = document.getElementsByTagName("td");
      let searchElement = document.getElementById("searchField");

      for(let td of tdElements){
         td.parentElement.classList.remove("select");
      }

      for(let td of tdElements){
         if (td.textContent.includes(searchElement.value)){
            td.parentElement.classList.add("select");
         }
      }

      searchElement.value = "";
   }
}