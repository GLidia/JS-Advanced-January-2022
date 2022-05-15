function solve(){
    class Post{
        constructor(title, content){
            this.title = title,
            this.content = content
        }
        
        toString = function(){
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes,
            this.dislikes = dislikes,
            this.comments = []
        }

        addComment = function(comment){
            this.comments.push(comment);
        }

        toString = function(){
            let toReturn = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0){
                toReturn += `\nComments:`;
                for(let comment of this.comments){
                    toReturn += `\n * ${comment}`;
                }
            }
            return toReturn;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views
        }
        view = function(){
            this.views++;
            return this;
        }
        toString = function(){
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}

const classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!