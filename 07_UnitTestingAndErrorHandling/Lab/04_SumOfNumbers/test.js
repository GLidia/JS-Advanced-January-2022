let sum = require("./SumOfNumbers");
let expect = require("chai").expect;

describe("Testing all functionality", function(){
    it("Should return 0 when array is empty", function(){
        expect(sum([])).to.be.equal(0);
    });
    it("Should return 5 when array contains 1, 2, 2", function(){
        let actualResult = sum([1, 2, 2]);
        expect(actualResult).to.be.equal(5);
    });
    it("Should return 5 when array contains 5", function(){
        let actualResult = sum([5]);
        expect(actualResult).to.be.equal(5);
    });
    it("Should return 5 when array contains -10, 10, 2=5", function(){
        let actualResult = sum([-10, 10, 5]);
        expect(actualResult).to.be.equal(5);
    });
    it("Should return -5 when array contains -1, -2, -2", function(){
        let actualResult = sum([-1, -2, -2]);
        expect(actualResult).to.be.equal(-5);
    });
    it("Should return 5 when array contains 0, 5, 0", function(){
        let actualResult = sum([0, 5, 0]);
        expect(actualResult).to.be.equal(5);
    });

});