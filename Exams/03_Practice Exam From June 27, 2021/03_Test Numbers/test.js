let testNumbers = require("./testNumbers");
let expect = require("chai").expect;

describe("Testing all functionality", () => {
    //sumNumbers returning undefined
    it("should return undefined when either input entry is not a number", () => {
        let n = testNumbers.sumNumbers(9, "string");
        expect(n).to.be.equal(undefined);
    });
    it("should return undefined when either input entry is not a number", () => {
        let n = testNumbers.sumNumbers("another", "string");
        expect(n).to.be.equal(undefined);
    });
    it("should return undefined when either input entry is not a number", () => {
        let n = testNumbers.sumNumbers("string", 3.8);
        expect(n).to.be.equal(undefined);
    });
    it("should return undefined when either input entry is not a number", () => {
        let n = testNumbers.sumNumbers(9, {name: "Pesho"});
        expect(n).to.be.equal(undefined);
    });
    it("should return undefined when either input entry is not a number", () => {
        let n = testNumbers.sumNumbers({name: "Pesho"}, 9);
        expect(n).to.be.equal(undefined);
    });
    it("should return undefined when either input entry is not a number", () => {
        let n = testNumbers.sumNumbers(9, null);
        expect(n).to.be.equal(undefined);
    });
    it("should return undefined when either input entry is not a number", () => {
        let n = testNumbers.sumNumbers(["array", "of", "strings"], 9);
        expect(n).to.be.equal(undefined);
    });
    it("should return undefined when either input entry is not a number", () => {
        let n = testNumbers.sumNumbers(9, "string");
        expect(n).to.be.equal(undefined);
    });
    //sumNumbers summing numbers
    it("should return correct value when both input entries are numbers", () => {
        let n = testNumbers.sumNumbers(9, 5).toString();
        expect(n).to.be.equal("14.00");
    });
    it("should return correct value when both input entries are numbers", () => {
        let n = testNumbers.sumNumbers(9.83, 5.1).toString();
        expect(n).to.be.equal("14.93");
    });
    it("should return correct value when both input entries are numbers", () => {
        let n = testNumbers.sumNumbers(-9, 5).toString();
        expect(n).to.be.equal("-4.00");
    });
    it("should return correct value when both input entries are numbers", () => {
        let n = testNumbers.sumNumbers(-9.3, -5.1).toString();
        expect(n).to.be.equal("-14.40");
    });
    it("should return correct value when both input entries are numbers", () => {
        let n = testNumbers.sumNumbers(0, 0).toString();
        expect(n).to.be.equal("0.00");
    });
    it("should return correct value when both input entries are numbers", () => {
        let n = testNumbers.sumNumbers(0, -5.8392).toString();
        expect(n).to.be.equal("-5.84");
    });
    //numberChecker
    it("should throw an error when numberChecker is called with a non-number", () => {
        expect(() => testNumbers.numberChecker("string")).to.be.throw('The input is not a number!');
        expect(() => testNumbers.numberChecker(["array", "of", "strings"])).to.be.throw('The input is not a number!');
        expect(() => testNumbers.numberChecker({name: "Pesho"})).to.be.throw('The input is not a number!');
        expect(() => testNumbers.numberChecker(undefined)).to.be.throw('The input is not a number!');
    });
    it("should return 'The number is even!' when the number is even", () => {
        let message = testNumbers.numberChecker(8);
        expect(message).to.be.equal('The number is even!');
    });
    it("should return 'The number is even!' when the number is even", () => {
        let message = testNumbers.numberChecker(-8);
        expect(message).to.be.equal('The number is even!');
    });
    it("should return 'The number is even!' when the number is even", () => {
        let message = testNumbers.numberChecker("8");
        expect(message).to.be.equal('The number is even!');
    });
    it("should return 'The number is even!' when the number is even", () => {
        let message = testNumbers.numberChecker(0);
        expect(message).to.be.equal('The number is even!');
    });
    it("should return 'The number is odd!' when the number is odd", () => {
        let message = testNumbers.numberChecker(9);
        expect(message).to.be.equal('The number is odd!');
    });
    it("should return 'The number is odd!' when the number is odd", () => {
        let message = testNumbers.numberChecker(1);
        expect(message).to.be.equal('The number is odd!');
    });
    it("should return 'The number is odd!' when the number is odd", () => {
        let message = testNumbers.numberChecker(-1);
        expect(message).to.be.equal('The number is odd!');
    });
    //averageSumArray
    it("should return the correct average sum", () => {
        let av = testNumbers.averageSumArray([9, 9, 9]);
        expect(av).to.be.equal(9);
    });
    it("should return the correct average sum", () => {
        let av = testNumbers.averageSumArray([1, 2, 3]);
        expect(av).to.be.equal(2);
    });
    it("should return the correct average sum", () => {
        let av = testNumbers.averageSumArray([-1, 0, 7]);
        expect(av).to.be.equal(2);
    });
    it("should return the correct average sum", () => {
        let av = testNumbers.averageSumArray([-1, 0, 1]);
        expect(av).to.be.equal(0);
    });
});