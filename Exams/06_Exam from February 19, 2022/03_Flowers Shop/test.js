let flowerShop = require("./flowerShop");
let expect = require("chai").expect;

describe("Testing all functionality", function(){
    // calcPriceOfFlowers
    it("Should throw an error when the input is invalid", function(){
        // invalid flower
        expect(() => flowerShop.calcPriceOfFlowers(3, 3, 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers(3.2, 3, 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers(-9, 3, 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers(-9.3, 3, 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers(["array"], 3, 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers({name: "Pesho"}, 3, 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers(undefined, 3, 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers(null, 3, 3)).to.throw("Invalid input!");
        //invalid price
        expect(() => flowerShop.calcPriceOfFlowers('String', "string", 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers("string", 3.3, 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers("string", -3.3, 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers("string", {name: "Pesho"}, 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers("string", undefined, 3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers("string", ["array"], 3)).to.throw("Invalid input!");
        //invalid quantity
        expect(() => flowerShop.calcPriceOfFlowers("string", 3, "string")).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers("string", 3, 3.9)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers("string", 3, -3.3)).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers("string", 3, {name: "Pesho"})).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers("string", 3, ["array"])).to.throw("Invalid input!");
        expect(() => flowerShop.calcPriceOfFlowers("string", 3, undefined)).to.throw("Invalid input!");
    });
    it("Should return correct message when input is valid", function(){
        let expectedMessage = `You need $20.00 to buy flower!`;
        let actualMessage = flowerShop.calcPriceOfFlowers("flower", 2, 10);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    //checkFlowersAvailable
    it("Should return the correct message when the flower is available", function(){
        let expectedMessage = `The flower are available!`;
        let actualMessage = flowerShop.checkFlowersAvailable("flower", ["flower", "another"]);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when the flower is available", function(){
        let expectedMessage = `The flower are available!`;
        let actualMessage = flowerShop.checkFlowersAvailable("flower", ["flower"]);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when the flower is available", function(){
        let expectedMessage = `The flower are available!`;
        let actualMessage = flowerShop.checkFlowersAvailable("flower", ["first", "second", "flower", "another"]);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when the flower is available", function(){
        let expectedMessage = `The flower are available!`;
        let actualMessage = flowerShop.checkFlowersAvailable("flower", ["first", "second", "flower"]);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when the flower is not available", function(){
        let expectedMessage = `The flower are sold! You need to purchase more!`
        let actualMessage = flowerShop.checkFlowersAvailable("flower", ["another"]);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when the flower is not available", function(){
        let expectedMessage = `The flower are sold! You need to purchase more!`
        let actualMessage = flowerShop.checkFlowersAvailable("flower", []);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when the flower is not available", function(){
        let expectedMessage = `The flower are sold! You need to purchase more!`
        let actualMessage = flowerShop.checkFlowersAvailable("flower", ["another", "more", "three"]);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    //sellFlowers
    it("Should throw an error when the input in invalid", function(){
        //invalid space
        expect(() => flowerShop.sellFlowers(["flower", "another"], "string")).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(["flower", "another"], 3.4)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(["flower", "another"], {name: "Pesho"})).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(["flower", "another"], ["array"])).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(["flower", "another"], undefined)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(["flower", "another"], -3)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(["flower", "another"], -1)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(["flower", "another"], -3.4)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(["flower", "another"], "1")).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(["flower", "another"], 2)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(["flower", "another"], 19)).to.throw("Invalid input!");
        //invalid array
        expect(() => flowerShop.sellFlowers("flower", 1)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(3, 1)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(-4, 1)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(1.3, 1)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(-4.5, 1)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers({name: "Pesho"}, 1)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(undefined, 1)).to.throw("Invalid input!");
        expect(() => flowerShop.sellFlowers(null, 1)).to.throw("Invalid input!");
    });
    it("Should return the correct message when the input is valid", function(){
        let expectedMessage = "flower / another";
        let actualMessage = flowerShop.sellFlowers(["flower", "another", "third"], 2);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when the input is valid", function(){
        let expectedMessage = "flower";
        let actualMessage = flowerShop.sellFlowers(["flower", "another"], 1);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
    it("Should return the correct message when the input is valid", function(){
        let expectedMessage = "";
        let actualMessage = flowerShop.sellFlowers(["flower"], 0);
        expect(actualMessage).to.be.equal(expectedMessage);
    });
});