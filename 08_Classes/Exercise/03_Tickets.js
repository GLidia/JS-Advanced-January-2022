function solve(data, criterion){
    
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    while(data.length > 0){
        let [destination, price, status] = data.shift().split("|");
        let ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    }

    if (criterion == "destination"){
        tickets.sort((a, b) => (a.destination).localeCompare(b.destination));
    } else if (criterion == "price"){
        tickets.sort((a, b) => a - b);
    } else if (criterion == "status"){
        tickets.sort((a, b) => (a.status).localeCompare(b.status));
    }

    return tickets;
}