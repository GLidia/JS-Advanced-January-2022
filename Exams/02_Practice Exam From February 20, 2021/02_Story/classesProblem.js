class Story{
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes(){
        if (this._likes.length == 0){
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1){
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like = function(username){
        if (this._likes.includes(username)){
            throw new Error(`You can't like the same story twice!`);
        } else if (this.creator == username){
            throw new Error(`You can't like your own story!`);
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike = function(username){
        if (!this._likes.includes(username)){
            throw new Error(`You can't dislike this story!`);
        } else {
            this._likes = this._likes.filter(x => x != username);
            return `${username} disliked ${this.title}`;
        }
    }

    comment = function(username, content, id){

        if (id == undefined || !this._comments.find(x => x.Id == id)){
            let newComment = {Id: (this._comments.length + 1), Username: username, Content: content, Replies: []};
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        } else {
            let commentOnWhichToReply = this._comments.filter(x => x.Id == id)[0];
            let reply = {Id: Number(`${commentOnWhichToReply.Id}.${commentOnWhichToReply.Replies.length + 1}`), Username: username, Content: content};
            commentOnWhichToReply.Replies.push(reply);
            return `You replied successfully`;
        } 
    }

    toString = function(sortingType){

        let sortedComments;

        if (sortingType == "asc"){
            sortedComments = this._comments.sort((a, b) => a.Id - b.Id);
            for(let com of sortedComments){
                com.Replies.sort((a, b) => a.Id - b.Id);
            }
        } else if (sortingType == "desc"){
            sortedComments = this._comments.sort((a, b) => b.Id - a.Id);
            for(let com of sortedComments){
                com.Replies.sort((a, b) => b.Id - a.Id);
            }
        } else if (sortingType == "username"){
            sortedComments = this._comments.sort((a, b) => (a.Username).localeCompare(b.Username));
            for(let com of sortedComments){
                com.Replies.sort((a, b) => (a.Username).localeCompare(b.Username));
            }
        }

        let toReturn = `Title: ${this.title}\n`;
        toReturn += `Creator: ${this.creator}\n`;
        toReturn += `Likes: ${this._likes.length}\n`;
        toReturn += `Comments:\n`;

        for(let comment of sortedComments){
            toReturn += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}\n`;
            if (comment.Replies.length != 0){
                for(let reply of comment.Replies){
                    toReturn += `--- ${reply.Id}. ${reply.Username}: ${reply.Content}\n`;
                }
            }
        }

        return toReturn.trim();
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
