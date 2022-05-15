let numberOperations = require("./numberOperations");
let expect = require("chai").expect;

describe("Testing all functionality", () => {
    //powNumber
    it("Should return 9 when powNumber is called with 3", () => {
        let n = numberOperations.powNumber(3);
        expect(n).to.be.equal(9);
    });
    it("Should return 6.25 when powNumber is called with 2.5", () => {
        let n = numberOperations.powNumber(2.5);
        expect(n).to.be.equal(6.25);
    });
    it("Should return 0 when powNumber is called with 0", () => {
        let n = numberOperations.powNumber(0);
        expect(n).to.be.equal(0);
    });
    it("Should return 9 when powNumber is called with -3", () => {
        let n = numberOperations.powNumber(-3);
        expect(n).to.be.equal(9);
    });
    it("Should return 6.25 when powNumber is called with -2.5", () => {
        let n = numberOperations.powNumber(-2.5);
        expect(n).to.be.equal(6.25);
    });
    //numberChecker(input)
    it("Should throw an error when numberChecker is called with a non-number", () => {
        expect(() => numberOperations.numberChecker("string")).to.throw("The input is not a number!");
        expect(() => numberOperations.numberChecker(["string", "another"])).to.throw("The input is not a number!");
        expect(() => numberOperations.numberChecker({name: "Pesho"})).to.throw("The input is not a number!");
    });
    it("Should return correct message when input is number < 100", () => {
        let message = numberOperations.numberChecker(9);
        expect(message).to.be.equal('The number is lower than 100!');
    });
    it("Should return correct message when input is number < 100", () => {
        let message = numberOperations.numberChecker(0);
        expect(message).to.be.equal('The number is lower than 100!');
    });
    it("Should return correct message when input is number < 100", () => {
        let message = numberOperations.numberChecker(-5);
        expect(message).to.be.equal('The number is lower than 100!');
    });
    it("Should return correct message when input is number < 100", () => {
        let message = numberOperations.numberChecker(99.9);
        expect(message).to.be.equal('The number is lower than 100!');
    });
    it("Should return correct message when input is number < 100", () => {
        let message = numberOperations.numberChecker(-100.9);
        expect(message).to.be.equal('The number is lower than 100!');
    });
    it("Should return correct message when input is number >= 100", () => {
        let message = numberOperations.numberChecker(100);
        expect(message).to.be.equal('The number is greater or equal to 100!');
    });
    it("Should return correct message when input is number >= 100", () => {
        let message = numberOperations.numberChecker(193);
        expect(message).to.be.equal('The number is greater or equal to 100!');
    });
    it("Should return correct message when input is number >= 100", () => {
        let message = numberOperations.numberChecker(100.1);
        expect(message).to.be.equal('The number is greater or equal to 100!');
    });
    it("Should return correct message when input is number >= 100", () => {
        let message = numberOperations.numberChecker(193.39);
        expect(message).to.be.equal('The number is greater or equal to 100!');
    });
    //sumArrays(arr1, arr2)
    it("Should return correct array when input arrays are of equal length (integers)", () => {
        let newArr = numberOperations.sumArrays([1, 2, 3], [1, 2, 3]);
        expect(newArr).to.have.same.members([2, 4, 6]);
    });
    it("Should return correct array when input arrays are of equal length (with floats)", () => {
        let newArr = numberOperations.sumArrays([1.5, 2.3, 3], [3.1, 2, 1]);
        expect(newArr).to.have.same.members([4.6, 4.3, 4]);
    });
    it("Should return correct array when input arrays are of diff length (integers)", () => {
        let newArr = numberOperations.sumArrays([1, 2, 3, 4], [1, 2, 3]);
        expect(newArr).to.have.same.members([2, 4, 6, 4]);
    });
    it("Should return correct array when input arrays are of diff length (integers)", () => {
        let newArr = numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4, 9]);
        expect(newArr).to.have.same.members([2, 4, 6, 4, 9]);
    });
    it("Should return correct array when input arrays are of diff length (floats)", () => {
        let newArr = numberOperations.sumArrays([0, 2, 3, 4.4], [1.5, 2, 3]);
        expect(newArr).to.have.same.members([1.5, 4, 6, 4.4]);
    });
    it("Should return correct array when input arrays are of diff length (floats)", () => {
        let newArr = numberOperations.sumArrays([1, 2, 3.3], [1, 2, 3.1, 4, 9]);
        expect(newArr).to.have.same.members([2, 4, 6.4, 4, 9]);
    });
});