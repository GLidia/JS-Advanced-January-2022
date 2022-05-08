let PaymentPackage = require("./PaymentPackage");
let expect = require("chai").expect;

describe("Testing all functionality", function(){
    it("Should throw an error when initialized with non-string or empty string as name", function(){
        expect(() => new PaymentPackage(9, 9)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage([], 9)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage({name: "Pesho"}, 9)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage("", 9)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(3.4, 9)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(null, 9)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(undefined, 9)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(false, 9)).to.throw('Name must be a non-empty string');
    });
    it("Should throw an error when initialized with non-number or negative number as value", function(){
        expect(() => new PaymentPackage("string", "another")).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage("string", [])).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage("string", {name: "Pesho"})).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage("string", -9)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage("string", "9")).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage("string", null)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage("string", undefined)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage("string", false)).to.throw('Value must be a non-negative number');
    });
    it("Should initialize with correct value", function(){
        let package = new PaymentPackage("Pesho", 9);
        expect(package.name).to.be.equal("Pesho");
        expect(package.value).to.be.equal(9);
        expect(package.VAT).to.be.equal(20);
        expect(package.active).to.be.equal(true);
    });
    it("Should initialize with correct value", function(){
        let package = new PaymentPackage("Pesho", 0);
        expect(package.name).to.be.equal("Pesho");
        expect(package.value).to.be.equal(0);
        expect(package.VAT).to.be.equal(20);
        expect(package.active).to.be.equal(true);
    });
    it("Should throw an error when name is changed to non-string or empty string", function(){
        let package = new PaymentPackage("Pesho", 9);
        expect(() => package.name = "").to.throw('Name must be a non-empty string');
        expect(() => package.name = 9).to.throw('Name must be a non-empty string');
        expect(() => package.name = []).to.throw('Name must be a non-empty string');
        expect(() => package.name = {name: "Pesho"}).to.throw('Name must be a non-empty string');
        expect(() => package.name = 3.4).to.throw('Name must be a non-empty string');
        expect(() => package.name = null).to.throw('Name must be a non-empty string');
        expect(() => package.name = undefined).to.throw('Name must be a non-empty string');
        expect(() => package.name = false).to.throw('Name must be a non-empty string');
    });
    it("Should throw an error when value is changed to non-number or negative number", function(){
        let package = new PaymentPackage("Pesho", 9);
        expect(() => package.value = -5).to.throw('Value must be a non-negative number');
        expect(() => package.value = {name: "Pesho"}).to.throw('Value must be a non-negative number');
        expect(() => package.value = []).to.throw('Value must be a non-negative number');
        expect(() => package.value = "string").to.throw('Value must be a non-negative number');
        expect(() => package.value = "3.4").to.throw('Value must be a non-negative number');
        expect(() => package.value = null).to.throw('Value must be a non-negative number');
        expect(() => package.value = undefined).to.throw('Value must be a non-negative number');
        expect(() => package.value = false).to.throw('Value must be a non-negative number');
    });
    it("Should be able to set appropriate values", function(){
        let package = new PaymentPackage("Pesho", 9);
        package.name = "Gosho";
        package.value = 19;
        package.VAT = 30;
        package.active = false;
        expect(package.name).to.be.equal("Gosho");
        expect(package.value).to.be.equal(19);
        expect(package.VAT).to.be.equal(30);
        expect(package.active).to.be.equal(false);
    });
    it("Should throw an error when VAT is changed to non-number or negative number", function(){
        let package = new PaymentPackage("Pesho", 9);
        expect(() => package.VAT = -5).to.throw('VAT must be a non-negative number');
        expect(() => package.VAT = {name: "Pesho"}).to.throw('VAT must be a non-negative number');
        expect(() => package.VAT = []).to.throw('VAT must be a non-negative number');
        expect(() => package.VAT = "string").to.throw('VAT must be a non-negative number');
        expect(() => package.VAT = "3.4").to.throw('VAT must be a non-negative number');
        expect(() => package.VAT = null).to.throw('VAT must be a non-negative number');
        expect(() => package.VAT = undefined).to.throw('VAT must be a non-negative number');
        expect(() => package.VAT = true).to.throw('VAT must be a non-negative number');
    });
    it("Should throw an error when active is changed to non-boolean value", function(){
        let package = new PaymentPackage("Pesho", 9);
        expect(() => package.active = -5).to.throw('Active status must be a boolean');
        expect(() => package.active = {name: "Pesho"}).to.throw('Active status must be a boolean');
        expect(() => package.active = []).to.throw('Active status must be a boolean');
        expect(() => package.active = "string").to.throw('Active status must be a boolean');
        expect(() => package.active = "3.4").to.throw('Active status must be a boolean');
        expect(() => package.active = null).to.throw('Active status must be a boolean');
        expect(() => package.active = undefined).to.throw('Active status must be a boolean');
    });
    it("Should return correct value when toString is called and active is true", function(){
        let package = new PaymentPackage("Pesho", 1500);
        let expectedMessage = `Package: Pesho\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`
        expect(package.toString()).to.be.equal(expectedMessage);
    });
    it("Should return correct value when toString is called and active is false", function(){
        let package = new PaymentPackage("Pesho", 1500);
        package.active = false;
        let expectedMessage = `Package: Pesho (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`
        expect(package.toString()).to.be.equal(expectedMessage);
    });
   
});