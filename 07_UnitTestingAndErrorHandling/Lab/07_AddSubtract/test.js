let createCalculator = require("./AddSubtract");
let expect = require("chai").expect;

describe("Testing", function(){
    it("Should return the correct keys when Object.keys(calc) is called", function(){
        let calc = createCalculator();
        let keys = Object.keys(calc);
        expect(keys[0]).to.be.equal("add");
        expect(keys[1]).to.be.equal("subtract");
        expect(keys[2]).to.be.equal("get");
    });
    it("Should return 0 when get is called", function(){
        let calc = createCalculator();
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(0);
    });
    it("Should return 5 when add(5) and get is called", function(){
        let calc = createCalculator();
        calc.add(5);
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(5);
    });
    it("Should return -5 when add(-5) and get is called", function(){
        let calc = createCalculator();
        calc.add(-5);
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(-5);
    });
    it("Should return 5 when add('5') and get is called", function(){
        let calc = createCalculator();
        calc.add('5');
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(5);
    });
    it("Should return -5 when add('-5') and get is called", function(){
        let calc = createCalculator();
        calc.add('-5');
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(-5);
    });
    it("Should return 0 when add(0) and get is called", function(){
        let calc = createCalculator();
        calc.add(0);
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(0);
    });
    it("Should return 5 when add(2), add(3) and get is called", function(){
        let calc = createCalculator();
        calc.add(2);
        calc.add(3);
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(5);
    });
    it("Should return -5 when subtract(5) and get is called", function(){
        let calc = createCalculator();
        calc.subtract(5);
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(-5);
    });
    it("Should return -5 when subtract(2), subtract(3) and get is called", function(){
        let calc = createCalculator();
        calc.subtract(2);
        calc.subtract(3);
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(-5);
    });
    it("Should return -5 when subtract('5') and get is called", function(){
        let calc = createCalculator();
        calc.subtract('5');
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(-5);
    });
    it("Should return 5 when subtract(-5) and get is called", function(){
        let calc = createCalculator();
        calc.subtract(-5);
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(5);
    });
    it("Should return -5 when subtract(10), add(5) and get is called", function(){
        let calc = createCalculator();
        calc.subtract(10);
        calc.add(5);
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(-5);
    });
    it("Should return -5 when subtract(5), add(3), subtract(4), subtract(-1) and get is called", function(){
        let calc = createCalculator();
        calc.subtract(5);
        calc.add(3);
        calc.subtract(4);
        calc.subtract(-1);
        let actualResult = calc.get();
        expect(actualResult).to.be.equal(-5);
    });
});