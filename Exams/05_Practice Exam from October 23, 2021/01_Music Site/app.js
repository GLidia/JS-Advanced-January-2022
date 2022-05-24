window.addEventListener('load', solve);

function solve() {
    let addButton = document.getElementById("add-btn");
    let genreInputElement = document.getElementById("genre");
    let nameInputElement = document.getElementById("name");
    let authorInputElement = document.getElementById("author");
    let dateInputElement = document.getElementById("date");

    addButton.addEventListener("click", addSong);

    function addSong(e){
        e.preventDefault();
        let genre = genreInputElement.value;
        let name = nameInputElement.value;
        let author = authorInputElement.value;
        let date = dateInputElement.value;
        let allHitsDivElement = document.querySelector("div .all-hits-container");
        let savedSongsDivElement = document.querySelector("div .saved-container");

        if(genre.trim().length != 0 && name.trim().length != 0 && author.trim().length != 0 && date.trim().length != 0){

            //creating and appending new elements
            let newDivElement = document.createElement("div");
            newDivElement.classList.add("hits-info");
            let newImgElement = document.createElement("img");
            newImgElement.src = "./static/img/img.png";
            let newGenreH2Element = document.createElement("h2");
            newGenreH2Element.textContent = `Genre: ${genre}`;
            let newNameH2Element = document.createElement("h2");
            newNameH2Element.textContent = `Name: ${name}`;
            let newAuthorH2Element = document.createElement("h2");
            newAuthorH2Element.textContent = `Author: ${author}`;
            let newDateH3Element = document.createElement("h3");
            newDateH3Element.textContent = `Date: ${date}`;
            let newSaveButton = document.createElement("button");
            newSaveButton.classList.add("save-btn");
            newSaveButton.textContent = "Save song";
            newSaveButton.addEventListener("click", saveSong);
            let newLikeButtonElement = document.createElement("button");
            newLikeButtonElement.classList.add("like-btn");
            newLikeButtonElement.textContent = "Like song";
            newLikeButtonElement.addEventListener("click", increaseLikes);
            let newDeleteButtonElement = document.createElement("button");
            newDeleteButtonElement.classList.add("delete-btn");
            newDeleteButtonElement.textContent = "Delete";
            newDeleteButtonElement.addEventListener("click", deleteSong);

            newDivElement.appendChild(newImgElement);
            newDivElement.appendChild(newGenreH2Element);
            newDivElement.appendChild(newNameH2Element);
            newDivElement.appendChild(newAuthorH2Element);
            newDivElement.appendChild(newDateH3Element);
            newDivElement.appendChild(newSaveButton);
            newDivElement.appendChild(newLikeButtonElement);
            newDivElement.appendChild(newDeleteButtonElement);
            allHitsDivElement.appendChild(newDivElement);

            function deleteSong(event){
                event.preventDefault();
                let btn = event.currentTarget;
                btn.parentNode.remove();
            }

            function increaseLikes(e){
                e.preventDefault();
                let currentText = document.querySelector("div .likes>p").textContent;
                let likesAsString = currentText.replace("Total Likes: ", "");
                let totalLikes = Number(likesAsString);
                totalLikes++;
                document.querySelector("div .likes>p").textContent = `Total Likes: ${totalLikes}`;
                let btn = e.currentTarget;
                btn.disabled = true;
            }

            function saveSong(e){
                e.preventDefault();
                let btn = e.currentTarget;
                let wholeDiv = btn.parentNode;
                wholeDiv.querySelector("button.like-btn").remove();
                wholeDiv.querySelector("button.save-btn").remove();
                savedSongsDivElement.appendChild(wholeDiv);

            }
            //clear input
            genreInputElement.value = "";
            nameInputElement.value = "";
            authorInputElement.value = "";
            dateInputElement.value = "";
        }
    }
}