let mathEnforcer = require("./mathEnforcer");
let expect = require("chai").expect;

describe("Testing all functionality", function(){
    //testing addFive
    it("Should return 'undefined' when parameter is not a number", function(){
        expect(mathEnforcer.addFive("string")).to.be.equal(undefined);
        expect(mathEnforcer.addFive(["array"])).to.be.equal(undefined);
        expect(mathEnforcer.addFive({name: "Pesho"})).to.be.equal(undefined);
    });
    it("Should return correct number when parameter is a number", function(){
        expect(mathEnforcer.addFive(0)).to.be.approximately(5, 0.01);
        expect(mathEnforcer.addFive(-5)).to.be.approximately(0, 0.01);
        expect(mathEnforcer.addFive(10)).to.be.approximately(15, 0.01);
        expect(mathEnforcer.addFive(1.3)).to.be.approximately(6.3, 0.01);
        expect(mathEnforcer.addFive(-4.7)).to.be.approximately(0.3, 0.01);
    });
    //testing subtractTen
    it("Should return 'undefined' when parameter is not a number", function(){
        expect(mathEnforcer.subtractTen("string")).to.be.equal(undefined);
        expect(mathEnforcer.subtractTen(["array"])).to.be.equal(undefined);
        expect(mathEnforcer.subtractTen({name: "Pesho"})).to.be.equal(undefined);
    });
    it("Should return correct number when parameter is a number", function(){
        expect(mathEnforcer.subtractTen(0)).to.be.approximately(-10, 0.01);
        expect(mathEnforcer.subtractTen(5)).to.be.approximately(-5, 0.01);
        expect(mathEnforcer.subtractTen(10)).to.be.approximately(0, 0.01);
        expect(mathEnforcer.subtractTen(1.3)).to.be.approximately(-8.7, 0.01);
        expect(mathEnforcer.subtractTen(-4.7)).to.be.approximately(-14.7, 0.01);
        expect(mathEnforcer.subtractTen(14.7)).to.be.approximately(4.7, 0.01);
    });
    //testing sum
    it("Should return 'undefined' any of the two parameters is not a number", function(){
        expect(mathEnforcer.sum("string", 1)).to.be.equal(undefined);
        expect(mathEnforcer.sum(["array"], 1)).to.be.equal(undefined);
        expect(mathEnforcer.sum({name: "Pesho"}, 2)).to.be.equal(undefined);
        expect(mathEnforcer.sum(2, "string")).to.be.equal(undefined);
        expect(mathEnforcer.sum(3, ["array"])).to.be.equal(undefined);
        expect(mathEnforcer.sum(3, {name: "Pesho"})).to.be.equal(undefined);
        expect(mathEnforcer.sum({name: "Pesho"}, "string")).to.be.equal(undefined);
    });
    it("Should return correct number when both parameters are numbers", function(){
        expect(mathEnforcer.sum(0, 0)).to.be.approximately(0, 0.01);
        expect(mathEnforcer.sum(5, -10)).to.be.approximately(-5, 0.01);
        expect(mathEnforcer.sum(10, 2)).to.be.approximately(12, 0.01);
        expect(mathEnforcer.sum(1.3, 0)).to.be.approximately(1.3, 0.01);
        expect(mathEnforcer.sum(0, -14.7)).to.be.approximately(-14.7, 0.01);
        expect(mathEnforcer.sum(14.7, -10)).to.be.approximately(4.7, 0.01);
        expect(mathEnforcer.sum(-14.7, -10)).to.be.approximately(-24.7, 0.01);
        expect(mathEnforcer.sum(14.7, -4.7)).to.be.approximately(10, 0.01);
    });
});