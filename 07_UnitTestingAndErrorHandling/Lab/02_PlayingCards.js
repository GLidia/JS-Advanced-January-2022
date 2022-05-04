function solve(face, suit){

    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = ["S", "H", "D", "C"];

    if (!faces.includes(face)){
        throw new Error("Error");
    }

    if (!suits.includes(suit)){
        throw new Error("Error");
    }

    class Card {
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }
    }

    Card.prototype.toString = function(){
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

    let newCard = new Card(face, suit);

    return newCard;

}
solve("10", "H")