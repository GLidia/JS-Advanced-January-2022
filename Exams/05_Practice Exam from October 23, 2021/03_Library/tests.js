let library = require("./library");
let expect = require("chai").expect;

describe("Testing all functionality", function(){
    //calcPriceOfBook
    it ("Should throw an error when input is invalid", function(){
        //invalid year
        expect(() => library.calcPriceOfBook("string", "another")).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook("string", 3.4)).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook("string", undefined)).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook("string", ["array"])).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook("string", {name: "Pesho"})).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook("string", -20.3)).to.throw("Invalid input");
        //invalid title
        expect(() => library.calcPriceOfBook(3, 20)).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook(3.5, 20)).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook(undefined, 20)).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook(["array"], 20)).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook({name: "Pesho"}, 20)).to.throw("Invalid input");

    });
    it ("Should return correct message when year is <= 1980", function() {
        let expectedMessage = `Price of Peter Pan is 10.00`;
        let actualMessage = library.calcPriceOfBook("Peter Pan", 1940);
        expect(expectedMessage).to.be.equal(actualMessage);
    });
    it ("Should return correct message when year is <= 1980", function() {
        let expectedMessage = `Price of Peter Pan is 10.00`;
        let actualMessage = library.calcPriceOfBook("Peter Pan", 1980);
        expect(expectedMessage).to.be.equal(actualMessage);
    });
    it ("Should return correct message when year is <= 1980", function() {
        let expectedMessage = `Price of Peter Pan is 10.00`;
        let actualMessage = library.calcPriceOfBook("Peter Pan", 0);
        expect(expectedMessage).to.be.equal(actualMessage);
    });
    it ("Should return correct message when year is > 1980", function() {
        let expectedMessage = `Price of Peter Pan is 20.00`;
        let actualMessage = library.calcPriceOfBook("Peter Pan", 1990);
        expect(expectedMessage).to.be.equal(actualMessage);
    });
    it ("Should return correct message when year is > 1980", function() {
        let expectedMessage = `Price of Peter Pan is 20.00`;
        let actualMessage = library.calcPriceOfBook("Peter Pan", 1981);
        expect(expectedMessage).to.be.equal(actualMessage);
    });
    //findBook
    it ("Should throw an error when called with an empty array", function() {
        expect(() => library.findBook([], "Peter Pan")).to.throw("No books currently available")
    });
    it ("Should return correct message when the book is found", function(){
        let expectedMessage = "We found the book you want.";
        let actualMessage = library.findBook(["Peter Pan", "John Doe"], "Peter Pan");
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it ("Should return correct message when the book is found", function(){
        let expectedMessage = "We found the book you want.";
        let actualMessage = library.findBook(["Mary Had a Lamb", "Mozart", "Peter Pan", "John Doe"], "Peter Pan");
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it ("Should return correct message when the book is not found", function(){
        let expectedMessage = "The book you are looking for is not here!";
        let actualMessage = library.findBook(["Peter Pan", "John Doe"], "Peter");
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it ("Should return correct message when the book is found", function(){
        let expectedMessage = "The book you are looking for is not here!";
        let actualMessage = library.findBook(["Mary Had a Lamb", "Mozart", "Peter Pan", "John Doe"], "Peter");
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    //arrangeTheBooks
    it ("Should throw an error when the input is invalid", function(){
        expect(() => library.arrangeTheBooks(3.4)).to.throw("Invalid input");
        expect(() => library.arrangeTheBooks(-5)).to.throw("Invalid input");
        expect(() => library.arrangeTheBooks("string")).to.throw("Invalid input");
        expect(() => library.arrangeTheBooks(["array"])).to.throw("Invalid input");
        expect(() => library.arrangeTheBooks({name: "Pesho"})).to.throw("Invalid input");
        expect(() => library.arrangeTheBooks(undefined)).to.throw("Invalid input");
        expect(() => library.arrangeTheBooks(-3.4)).to.throw("Invalid input");
    });
    it ("Should return correct message when books are fewer than available slots", function(){
        let expectedMessage = "Great job, the books are arranged.";
        let actualMessage = library.arrangeTheBooks(5);
        expect(expectedMessage).to.be.equal(actualMessage);
    });
    it ("Should return correct message when books are fewer than available slots", function(){
        let expectedMessage = "Great job, the books are arranged.";
        let actualMessage = library.arrangeTheBooks(0);
        expect(expectedMessage).to.be.equal(actualMessage);
    });
    it ("Should return correct message when books are fewer than available slots", function(){
        let expectedMessage = "Great job, the books are arranged.";
        let actualMessage = library.arrangeTheBooks(40);
        expect(expectedMessage).to.be.equal(actualMessage);
    });
    it ("Should return correct message when books are more than available slots", function(){
        let expectedMessage = "Insufficient space, more shelves need to be purchased.";
        let actualMessage = library.arrangeTheBooks(41);
        expect(expectedMessage).to.be.equal(actualMessage);
    });
    it ("Should return correct message when books are more than available slots", function(){
        let expectedMessage = "Insufficient space, more shelves need to be purchased.";
        let actualMessage = library.arrangeTheBooks(89);
        expect(expectedMessage).to.be.equal(actualMessage);
    });
});