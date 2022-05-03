function solution(command){

    let totalVotes = this.upvotes + this.downvotes;

    if (command == "upvote"){
        this.upvotes++;
    } else if (command == "downvote"){
        this.downvotes++;
    } else if (command == "score"){
        let toReturn = [];
        let upvotesToReturn = this.upvotes;
        let downvotesToReturn = this.downvotes;

        if(totalVotes > 50){
            upvotesToReturn += Math.ceil(0.25 * Math.max(this.upvotes, this.downvotes));
            downvotesToReturn += Math.ceil(0.25 * Math.max(this.upvotes, this.downvotes));
        }
        toReturn.push(upvotesToReturn);
        toReturn.push(downvotesToReturn);

        let tallyToReturn = upvotesToReturn - downvotesToReturn;
        toReturn.push(tallyToReturn);

        let ratingToReturn = "";

        if (totalVotes < 10){
            ratingToReturn = "new";
        } else if (this.upvotes / totalVotes > 0.66){
            ratingToReturn = "hot";
        } else if ((this.upvotes - this.downvotes >= 0) && totalVotes > 100) {
            ratingToReturn = "controversial";
        } else if (this.upvotes - this.downvotes < 0){
            ratingToReturn = "unpopular";
        } else {
            ratingToReturn = "new";
        }


        toReturn.push(ratingToReturn);
        return toReturn;
    }
}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for(let i = 0; i < 50; i++){
    solution.call(post, 'downvote');
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);
