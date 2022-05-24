class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant = function(name, condition, money){
        if (condition != "child" && condition != "student" && condition != "collegian"){
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (this.listOfParticipants.find(x => x.name == name)){
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]){
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({name: name, condition: condition, power: 100, wins: 0});
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant = function(name){
        if (!this.listOfParticipants.find(x => x.name == name)){
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay = function(typeOfGame, participant1, participant2){

        if (!this.listOfParticipants.find(x => x.name == participant1)){
            throw new Error(`Invalid entered name/s.`);
        }

        if (participant2 && !this.listOfParticipants.find(x => x.name == participant2)){
            throw new Error(`Invalid entered name/s.`);
        }

        let pl1 = this.listOfParticipants.find(x => x.name == participant1);
        let pl2 = this.listOfParticipants.find(x => x.name == participant2);

        if (pl2 && pl1.condition != pl2.condition){
            throw new Error(`Choose players with equal condition.`);
        }

        if (typeOfGame == "Battleship"){
            pl1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        } else if (typeOfGame == "WaterBalloonFights"){
            if (pl1.power > pl2.power){
                pl1.wins++;
                return `The ${pl1.name} is winner in the game ${typeOfGame}.`;
            } else if (pl2.power > pl1.power){
                pl2.wins++;
                return `The ${pl2.name} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
        }

    }

    toString = function(){
        let toReturn = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for(let p of this.listOfParticipants){
            toReturn += `${p.name} - ${p.condition} - ${p.power} - ${p.wins}\n`;
        }
        return toReturn.trim();
    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

