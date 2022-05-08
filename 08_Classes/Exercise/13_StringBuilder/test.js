let StringBuilder = require("./StringBuilder");
let expect = require("chai").expect;

describe("Testing", function(){
    it("Should throw an error when initialized with neither a string nor undefined", function(){
        expect(() => new StringBuilder(9)).to.throw('Argument must be a string');
        expect(() => new StringBuilder([])).to.throw('Argument must be a string');
        expect(() => new StringBuilder(3.4)).to.throw('Argument must be a string');
        expect(() => new StringBuilder(-3)).to.throw('Argument must be a string');
        expect(() => new StringBuilder(null)).to.throw('Argument must be a string');
        expect(() => new StringBuilder({name: "Pesho"})).to.throw('Argument must be a string');
        expect(() => new StringBuilder(false)).to.throw('Argument must be a string');
    });
    it("Should be initialized with correct value when it's a string", function(){
        let sb = new StringBuilder("string");
        expect(sb._stringArray).to.have.same.members(['s','t','r','i','n','g']);
    });
    it("Should be initialized with correct value when it's undefined", function(){
        let sb = new StringBuilder();
        let sb2 = new StringBuilder(undefined);
        expect(sb._stringArray).to.have.same.members([]);
        expect(sb2._stringArray).to.have.same.members([]);
    });
    it("Should return correct string when toString is called", function(){
        let sb = new StringBuilder("string");
        let actual = sb.toString();
        expect(actual).to.be.equal("string");
    });
    it("Should throw error when append is called with with non-string", function(){
        let sb = new StringBuilder("string");
        expect(() => sb.append(3)).to.throw('Argument must be a string');
        expect(() => sb.append([])).to.throw('Argument must be a string');
        expect(() => sb.append({name: "Pesho"})).to.throw('Argument must be a string');
        expect(() => sb.append(null)).to.throw('Argument must be a string');
        expect(() => sb.append(false)).to.throw('Argument must be a string');
        expect(() => sb.append(3.2)).to.throw('Argument must be a string');
        expect(() => sb.append(-9)).to.throw('Argument must be a string');
        expect(() => sb.append(undefined)).to.throw('Argument must be a string');
    });
    it("Should throw error when prepend is called with with non-string", function(){
        let sb = new StringBuilder("string");
        expect(() => sb.prepend(3)).to.throw('Argument must be a string');
        expect(() => sb.prepend([])).to.throw('Argument must be a string');
        expect(() => sb.prepend({name: "Pesho"})).to.throw('Argument must be a string');
        expect(() => sb.prepend(null)).to.throw('Argument must be a string');
        expect(() => sb.prepend(false)).to.throw('Argument must be a string');
        expect(() => sb.prepend(3.2)).to.throw('Argument must be a string');
        expect(() => sb.prepend(-9)).to.throw('Argument must be a string');
        expect(() => sb.prepend(undefined)).to.throw('Argument must be a string');
    });
    it("Should return correct string when append is called", function(){
        let sb = new StringBuilder("string");
        sb.append("first")
        let actual = sb.toString();
        expect(actual).to.be.equal("stringfirst");
    });
    it("Should return correct string when prepend is called", function(){
        let sb = new StringBuilder("string");
        sb.prepend("first")
        let actual = sb.toString();
        expect(actual).to.be.equal("firststring");
    });
    it("Should throw an error when insertAt is called with with non-string", function(){
        let sb = new StringBuilder("string");
        expect(() => sb.insertAt(3, 3)).to.throw('Argument must be a string');
        expect(() => sb.insertAt([], 3)).to.throw('Argument must be a string');
        expect(() => sb.insertAt({name: "Pesho"}, 3)).to.throw('Argument must be a string');
        expect(() => sb.insertAt(null, 3)).to.throw('Argument must be a string');
        expect(() => sb.insertAt(false, 3)).to.throw('Argument must be a string');
        expect(() => sb.insertAt(3.2, 3)).to.throw('Argument must be a string');
        expect(() => sb.insertAt(-9, 3)).to.throw('Argument must be a string');
        expect(() => sb.insertAt(undefined, 3)).to.throw('Argument must be a string');
    });
    it("Should return correct string when insertAt is called 1", function(){
        let sb = new StringBuilder("string");
        sb.insertAt("first", 0)
        let actual = sb.toString();
        expect(actual).to.be.equal("firststring");
    });
    it("Should return correct string when insertAt is called 2", function(){
        let sb = new StringBuilder("string");
        sb.insertAt("first", 3)
        let actual = sb.toString();
        expect(actual).to.be.equal("strfirsting");
    });
    it("Should return correct string when insertAt is called 3", function(){
        let sb = new StringBuilder("string");
        sb.insertAt("first", 6)
        let actual = sb.toString();
        expect(actual).to.be.equal("stringfirst");
    });
    it("Should return correct string when remove is called 1", function(){
        let sb = new StringBuilder("string");
        sb.remove(0, 2)
        let actual = sb.toString();
        expect(actual).to.be.equal("ring");
    });
    it("Should return correct string when remove is called 2", function(){
        let sb = new StringBuilder("string");
        sb.remove(2, 0)
        let actual = sb.toString();
        expect(actual).to.be.equal("string");
    });
    it("Should return correct string when remove is called 3", function(){
        let sb = new StringBuilder("string");
        sb.remove(2, 2)
        let actual = sb.toString();
        expect(actual).to.be.equal("stng");
    });
    it("Should return correct string when remove is called 4", function(){
        let sb = new StringBuilder("string");
        sb.remove(5, 2)
        let actual = sb.toString();
        expect(actual).to.be.equal("strin");
    });
    it("Should return correct string when toString is called after append, prepend, insertAt and remove", function(){
        let sb = new StringBuilder("string");
        sb.append("first") //"stringfirst";
        sb.prepend("last") //"laststringfirst"
        sb.insertAt("aaa", 4 ) // "lastaaastringfirst"
        sb.remove(7, 6) //"lastaafirst";
        let actual = sb.toString();
        expect(actual).to.be.equal("lastaaafirst");
    });
});