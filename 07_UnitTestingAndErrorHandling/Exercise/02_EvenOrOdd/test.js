let isOddOrEven = require("./isOddOrEven");
let expect = require("chai").expect;

describe("Testing all functionality", function(){
    it("Should return undefined when input is not string", function(){
        expect(isOddOrEven(4)).to.be.equal(undefined);
        expect(isOddOrEven(2.3)).to.be.equal(undefined);
        expect(isOddOrEven(null)).to.be.equal(undefined);
        expect(isOddOrEven({name: "Pesho"})).to.be.equal(undefined);
        expect(isOddOrEven(["array", "string"])).to.be.equal(undefined);
        expect(isOddOrEven(undefined)).to.be.equal(undefined);
    });
    it("Should return even when input string length is even", function(){
        expect(isOddOrEven("")).to.be.equal("even");
        expect(isOddOrEven("more")).to.be.equal("even");
    });
    it("Should return odd when input string length is odd", function(){
        expect(isOddOrEven("a")).to.be.equal("odd");
        expect(isOddOrEven("night")).to.be.equal("odd");
    });
});