const exp = require("constants");
let cinema = require("./cinema");
let expect = require("chai").expect;

describe("Testing all functionality", function() {
    //showMovies
    it("Should return correct message when showMovies is called with an empty array", function() {
        let arr = [];
        let expectedMessage = 'There are currently no movies to show.';
        let actualMessage = cinema.showMovies(arr);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return correct message when showMovies is called with an array of one title", function() {
        let arr = ['The Mask of Zorro'];
        let expectedMessage = 'The Mask of Zorro';
        let actualMessage = cinema.showMovies(arr);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return correct message when showMovies is called with an array of 3 titles", function() {
        let arr = ['The Mask of Zorro', `The Matrix`, `Inferno`];
        let expectedMessage = 'The Mask of Zorro, The Matrix, Inferno';
        let actualMessage = cinema.showMovies(arr);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    //ticketPrice
    it("Should throw an error when ticketPrice called with a non-existent projection type", function() {

        expect(() => cinema.ticketPrice("string")).to.throw('Invalid projection type.');
    });
    it("Should return the correct price when ticketPrice is called with a valid projection type", function() {
        // "Premiere": 12.00,
        // "Normal": 7.50,
        // "Discount": 5.50
        let expectedPrice = 12.00;
        let actualPrice = cinema.ticketPrice("Premiere");
        expect(actualPrice).to.be.equal(expectedPrice);
    });
    it("Should return the correct price when ticketPrice is called with a valid projection type", function() {
        // "Premiere": 12.00,
        // "Normal": 7.50,
        // "Discount": 5.50
        let expectedPrice = 7.50;
        let actualPrice = cinema.ticketPrice("Normal");
        expect(actualPrice).to.be.equal(expectedPrice);
    });
    it("Should return the correct price when ticketPrice is called with a valid projection type", function() {
        // "Premiere": 12.00,
        // "Normal": 7.50,
        // "Discount": 5.50
        let expectedPrice = 5.50;
        let actualPrice = cinema.ticketPrice("Discount");
        expect(actualPrice).to.be.equal(expectedPrice);
    });
    //swapSeatsInHall
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall("string", 3);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(2.4, 3);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(0, 3);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(-4, 3);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(21, 3);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(3, "string");
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(3, 3.4);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(3, -3);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(3, -3.5);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(3, 33);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(3, 0);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(null, 3);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(3, null);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(3);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall();
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(3, undefined);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(undefined, 3);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is unsuccessful", function() {
        let expectedMessage = "Unsuccessful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(3, 3);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is successful", function() {
        let expectedMessage = "Successful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(5, 3);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when swap is successful", function() {
        let expectedMessage = "Successful change of seats in the hall."
        let actualMessage = cinema.swapSeatsInHall(1, 20);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
});