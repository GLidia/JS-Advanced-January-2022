let lookupChar = require("./lookupChar");
let expect = require("chai").expect;

describe("Testing all functionality", function(){
    it("Should return 'undefined' when input is of incorrect type", function(){
        expect(lookupChar(3, 3)).to.be.equal(undefined);
        expect(lookupChar(2.3, 3)).to.be.equal(undefined);
        expect(lookupChar(["array", "string"], 3)).to.be.equal(undefined);
        expect(lookupChar({name: "Pesho"}, 3)).to.be.equal(undefined);
        expect(lookupChar("string", "string")).to.be.equal(undefined);
        expect(lookupChar("string", 3.3)).to.be.equal(undefined);
        expect(lookupChar("string", ["array", "string"])).to.be.equal(undefined);
        expect(lookupChar("string", {name: "Pesho"})).to.be.equal(undefined);
        expect(lookupChar(3, "string")).to.be.equal(undefined);
    });
    it("Should return 'Incorrect index' if index is out of bounds", function(){
        expect(lookupChar("string", -1)).to.be.equal("Incorrect index");
        expect(lookupChar("string", 6)).to.be.equal("Incorrect index");
        expect(lookupChar("string", 10)).to.be.equal("Incorrect index");
    });
    it("Should return correct char when input is of correct type and value", function(){
        expect(lookupChar("string", 1)).to.be.equal("t");
        expect(lookupChar("string", 0)).to.be.equal("s");
        expect(lookupChar("END", 1)).to.be.equal("N");
        expect(lookupChar("ENDING", 5)).to.be.equal("G");
    });
});