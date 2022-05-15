function solve(){
   
   let sectionElements = document.getElementsByTagName("section");
   let createButton = sectionElements[2].getElementsByTagName("button")[0];

   createButton.addEventListener("click", create);

   function create(e){
      e.preventDefault();
      let button = e.currentTarget;

      let author = document.getElementById("creator").value;
      let title = document.getElementById("title").value;
      let category = document.getElementById("category").value;
      let content = document.getElementById("content").value;

      let newArticleElement = document.createElement("article");

      let newH1Element = document.createElement("h1");
      newH1Element.textContent = title;

      let newCategoryPElement = document.createElement("p");
      newCategoryPElement.innerHTML = `Category: <strong>${category}</strong>`;

      let newCreatorPElement = document.createElement("p");
      newCreatorPElement.innerHTML = `Creator: <strong>${author}</strong>`;

      let newContentPElement = document.createElement("p");
      newContentPElement.textContent = content;

      let newButtonsDivElement = document.createElement("div");
      newButtonsDivElement.classList.add("buttons");
      let newDeleteButton = document.createElement("button");
      newDeleteButton.classList.add("btn");
      newDeleteButton.classList.add("delete");
      newDeleteButton.textContent = "Delete";
      newDeleteButton.addEventListener("click", deleteArticle);
      let newArchiveButton = document.createElement("button");
      newArchiveButton.classList.add("btn");
      newArchiveButton.classList.add("archive");
      newArchiveButton.textContent = "Archive";
      newArchiveButton.addEventListener("click", moveToArchive);
      newButtonsDivElement.appendChild(newDeleteButton);
      newButtonsDivElement.appendChild(newArchiveButton);

      newArticleElement.appendChild(newH1Element);
      newArticleElement.appendChild(newCategoryPElement);
      newArticleElement.appendChild(newCreatorPElement);
      newArticleElement.appendChild(newContentPElement);
      newArticleElement.appendChild(newButtonsDivElement);

      sectionElements[1].appendChild(newArticleElement);

      function moveToArchive(ev){
         ev.preventDefault();
         let archiveBtn = ev.currentTarget;
         let title = archiveBtn.parentNode.parentNode.getElementsByTagName("h1")[0].textContent;

         let newLiElement = document.createElement("li");
         newLiElement.textContent = title;

         let olElement = sectionElements[3].getElementsByTagName("ol")[0];
         olElement.appendChild(newLiElement);

         let wholeArticleElement = archiveBtn.parentNode.parentNode;
         
         wholeArticleElement.remove();

         sortLiElements();

         function sortLiElements(){
            let allLiElements = Array.from(sectionElements[3].getElementsByTagName("ol")[0].children);
            
            allLiElements.sort((a, b) => (a.textContent).localeCompare(b.textContent));

            while(olElement.firstChild){
               olElement.firstChild.remove();
            }

            for(let el of allLiElements){
               olElement.appendChild(el);
            }

         }
      }


      function deleteArticle(event){
         event.preventDefault();
         let delBtn = event.currentTarget;
         let wholeArticleElement = delBtn.parentNode.parentNode;
         wholeArticleElement.remove();
      }
   }
}
