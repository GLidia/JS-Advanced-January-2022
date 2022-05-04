function solve(array){
    let cards = [];
    
    class Card {
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }
    }

    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = ["S", "H", "D", "C"];

    Card.prototype.toString = function(face, suit){
            let suitAsString = "";
            if (suit == "S"){
                suitAsString = "\u2660"
            } else if (suit == "H"){
                suitAsString = "\u2665";
            } else if (suit == "D"){
                suitAsString = "\u2666";
            } else if (suit == "C"){
                suitAsString = "\u2663";
            }
            return face + suitAsString;
    }

    while(array.length > 0){
        let cardInfo = array.shift();
        let face = cardInfo.substring(0, cardInfo.length - 1);
        let suit = cardInfo[cardInfo.length - 1];
 
        if (!faces.includes(face) || !suits.includes(suit)){
            console.log(`Invalid card: ${cardInfo}`);
            return;
        }
    
        let newCard = new Card(face, suit);
        cards.push(newCard);
    }

    let cardsAsStrings = cards.map(x => x.toString(x.face, x.suit));
    console.log(cardsAsStrings.join(', '));
}
solve(['5S', '3D', 'QD', '1C'])