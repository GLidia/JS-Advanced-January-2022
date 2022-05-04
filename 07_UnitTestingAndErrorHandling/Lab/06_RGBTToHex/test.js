let rgbToHexColor = require("./RGBToHex");
let expect = require("chai").expect;

describe("Checking with invalid input", function(){
    //invalid type
    it("Should return undefined when the first input parameter is of invalid type", function(){
        let actualResult = rgbToHexColor("string", 4, 50);
        expect(actualResult).to.be.equal(undefined);
    });
    it("Should return undefined when the second input parameter is of invalid type", function(){
        let actualResult = rgbToHexColor(47, 5.3, 50);
        expect(actualResult).to.be.equal(undefined);
    });
    it("Should return undefined when the third input parameter is of invalid type", function(){
        let actualResult = rgbToHexColor(38, 4, {name: "Pesho"});
        expect(actualResult).to.be.equal(undefined);
    });

    // out of range
    it("Should return undefined when the first input parameter is out of range", function(){
        let actualResult = rgbToHexColor(-40, 4, 50);
        expect(actualResult).to.be.equal(undefined);
    });
    it("Should return undefined when the second input parameter is out of range", function(){
        let actualResult = rgbToHexColor(47, 500, 50);
        expect(actualResult).to.be.equal(undefined);
    });
    it("Should return undefined when the third input parameter is out of range", function(){
        let actualResult = rgbToHexColor(38, 4, 340);
        expect(actualResult).to.be.equal(undefined);
    });
});

describe("Checking with valid input", function(){
    
    it("Should return #000000 when the input is 0, 0, 0", function(){
        let actualResult = rgbToHexColor(0, 0, 0);
        expect(actualResult).to.be.equal("#000000");
    });
    it("Should return #FFFFFF when the inptut is 255, 255, 255", function(){
        let actualResult = rgbToHexColor(255, 255, 255);
        expect(actualResult).to.be.equal("#FFFFFF");
    });
    it("Should return #0E10C8 when the input is 14, 16, 200", function(){
        let actualResult = rgbToHexColor(14, 16, 200);
        expect(actualResult).to.be.equal("#0E10C8");
    });

});