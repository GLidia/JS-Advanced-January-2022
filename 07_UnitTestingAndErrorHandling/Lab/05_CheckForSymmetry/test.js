let isSymmetric = require("./CheckForSymmetry");
let expect = require("chai").expect;

describe("Testing with wrong input type", function(){
    it("Should return false when input is string", function(){
        let actualResult = isSymmetric("string");
        expect(actualResult).to.be.equal(false);
    });
    it("Should return false when input is number", function(){
        let actualResult = isSymmetric(5);
        expect(actualResult).to.be.equal(false);
    });
    it("Should return false when input is object", function(){
        let actualResult = isSymmetric({name: "Pesho"});
        expect(actualResult).to.be.equal(false);
    });
});

describe("Testing with asymmetric array", function(){
    it("Should return false when input is a, b, c", function(){
        let actualResult = isSymmetric(["a", "b", "c"]);
        expect(actualResult).to.be.equal(false);
    });
    it("Should return false when input is 1, 2, 3", function(){
        let actualResult = isSymmetric([1, 2, 3]);
        expect(actualResult).to.be.equal(false);
    });
    it("Should return false when input is asymmetric mixed array", function(){
        let actualResult = isSymmetric([{name: "Pesho"}, 2, "string"]);
        expect(actualResult).to.be.equal(false);
    });
});

describe("Testing with symmetric array", function(){
    it("Should return true when input is empty array", function(){
        let actualResult = isSymmetric([]);
        expect(actualResult).to.be.equal(true);
    });
    it("Should return true when input is 1, 2, 3, 2, 1", function(){
        let actualResult = isSymmetric([1, 2, 3, 2, 1]);
        expect(actualResult).to.be.equal(true);
    });
    it("Should return true when input is symmetric mixed array", function(){
        let actualResult = isSymmetric([{name: "Pesho"}, 2, "string", "string", 2, {name: "Pesho"}]);
        expect(actualResult).to.be.equal(true);
    });
});