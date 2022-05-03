function getArticleGenerator(input) {

    let articles = input;

    return function addArticle() {
            let currentArticle = articles.shift();

            if(currentArticle){
            let newAElement = document.createElement("article");
            newAElement.textContent = currentArticle;

            document.getElementById("content").appendChild(newAElement);
        }
    };
}
