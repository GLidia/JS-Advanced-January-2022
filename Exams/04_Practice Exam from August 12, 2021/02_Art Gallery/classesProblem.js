class ArtGallery {
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle = function(articleModel, articleName, quantity){
        let possArticles = Array.from(Object.keys(this.possibleArticles));

        if (!possArticles.includes(articleModel.toLowerCase())){
            throw new Error("This article model is not included in this gallery!");
        }

        if (this.listOfArticles.filter(x => x.articleName == articleName && x.articleModel == articleModel).length > 0){
            let art = this.listOfArticles.filter(x => x.articleName == articleName && x.articleModel == articleModel)[0];
            art.quantity += quantity;
        } else {
            this.listOfArticles.push({articleModel: articleModel.toLowerCase(), articleName: articleName, quantity: Number(quantity)});
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest = function(guestName, personality){
        if (this.guests.filter(x => x.guestName == guestName).length > 0){
            throw new Error(`${guestName} has already been invited.`)
        } else {
            let points;

            if (personality == "Vip"){
                points = 500;
            } else if (personality == "Middle"){
                points = 250;
            } else {
                points = 50;
            }
            
            this.guests.push({guestName: guestName, points: points, purchaseArticle: 0});
            return `You have successfully invited ${guestName}!`;
        }
    }

    buyArticle = function(articleModel, articleName, guestName){
        if (!this.listOfArticles.filter(x => x.articleName == articleName && x.articleModel == articleModel).length > 0){
            throw new Error("This article is not found.");
        }

        let art = this.listOfArticles.filter(x => x.articleName == articleName && x.articleModel == articleModel)[0];
        if (art.quantity == 0){
            return `The ${art.articleName} is not available.`;
        }

        if (!this.guests.find(x => x.guestName == guestName)){
            return `This guest is not invited.`;
        }

        let guest = this.guests.find(x => x.guestName == guestName);
        let guestPoints = guest.points;
        let articlePoints = this.possibleArticles[articleModel];

        if (guestPoints < articlePoints){
            return `You need to more points to purchase the article.`;
        } else {
            this.guests.find(x => x.guestName == guestName).points -= articlePoints;
            this.guests.find(x => x.guestName == guestName).purchaseArticle++;
            this.listOfArticles.find(x => x.articleModel == articleModel && x.articleName == articleName).quantity--;

            return `${guestName} successfully purchased the article worth ${articlePoints} points.`;
        }
    }

    showGalleryInfo = function(criteria){
        let toReturn;

        if (criteria == "article"){
            toReturn = 'Articles information:\n';
            for(let art of this.listOfArticles){
                toReturn += `${art.articleModel} - ${art.articleName} - ${art.quantity}\n`;
            }
        } else if (criteria == "guest"){
            toReturn = `Guests information:\n`;
            for(let guest of this.guests){
                toReturn += `${guest.guestName} - ${guest.purchaseArticle}\n`;
            }
        }

        return toReturn.trim();
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



