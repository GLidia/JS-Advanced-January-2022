let { Repository } = require("./solution.js");
let expect = require("chai").expect;
let assert = require("chai").assert;


describe("Tests", function () {

    it("Should initialize repository with correct data", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        assert.deepEqual(properties, repository.props);
    });
    it("Should initialize repository and return 0 when calling nextId", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        expect(repository.nextId()).to.be.equal(0);
    });
    it("Should initialize return 0 when using getter count", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        expect(repository.count).to.be.equal(0);
    });
    // adding entities
    it("Should throw an error when adding entity with missing property", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            birthday: new Date(1998, 0, 7)
        };
        expect(() => repository.add(entity)).to.throw(`Property age is missing from the entity!`);       
    });
    it("Should throw an error when adding entity with missing property", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            age: 33,
            birthday: new Date(1998, 0, 7)
        };
        expect(() => repository.add(entity)).to.throw(`Property name is missing from the entity!`);       
    });
    it("Should throw an error when adding entity with missing property", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 33,
        };
        expect(() => repository.add(entity)).to.throw(`Property birthday is missing from the entity!`);       
    });
    it("Should throw an error when adding entity with property of wrong type", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: "three",
            birthday: new Date(1998, 0, 7)
        };
        expect(() => repository.add(entity)).to.throw(`Property age is not of correct type!`);        
    });
    it("Should throw an error when adding entity with property of wrong type", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: 12,
            age: 38,
            birthday: new Date(1998, 0, 7)
        };
        expect(() => repository.add(entity)).to.throw(`Property name is not of correct type!`);        
    });
    it("Should throw an error when adding entity with property of wrong type", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 38,
            birthday: "four"
        };
        expect(() => repository.add(entity)).to.throw(`Property birthday is not of correct type!`);        
    });
    it("Should return correct id when entity added", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let returnedId = repository.add(entity);
        let secondReturnedId = repository.add(entity);
        expect(returnedId).to.be.equal(0);        
        expect(secondReturnedId).to.be.equal(1);
    });
    it("Should add entity with correct key to data when entity added", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        repository.add(entity);
        repository.add(entity);
        expect(repository.data).to.be.have.keys(0, 1);        
    });
    //get id
    it("Should throw an error when get(id) called with non-existent id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        repository.add(entity);
        repository.add(entity);
        expect(() => repository.getId(3)).to.throw(`Entity with id: 3 does not exist!`)       
    });
    it("Should return correct entity when get(id) called with existing id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Tosho",
            age: 32,
            birthday: new Date(1984, 1, 3)
        };
        repository.add(entity);
        repository.add(entity2);
        let returnedEntity = repository.getId(1);
        assert.deepEqual(returnedEntity, entity2);    
    });
    //update
    it("Should throw an error when update is called with non-existing id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Tosho",
            age: 32,
            birthday: new Date(1984, 1, 3)
        };
        repository.add(entity);
        repository.add(entity2);
        expect(() => repository.update(3, {})).to.throw(`Entity with id: 3 does not exist!`);
    });
    it("Should throw an error when update is called with entity with missing property", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Tosho",
            birthday: new Date(1984, 1, 3)
        };
        repository.add(entity);
        expect(() => repository.update(0, entity2)).to.throw(`Property age is missing from the entity!`);
    });
    it("Should throw an error when update is called with entity with property of wrong type", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Tosho",
            age: "five",
            birthday: new Date(1984, 1, 3)
        };
        repository.add(entity);
        expect(() => repository.update(0, entity2)).to.throw(`Property age is not of correct type!`);
    });
    it("Should update entity when update is called with appropriate entity and id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Tosho",
            age: 38,
            birthday: new Date(1984, 1, 3)
        };
        repository.add(entity);
        repository.update(0, entity2);
        let updatedEntity = repository.data.get(0);
        assert.deepEqual(updatedEntity, entity2);
    });
    //del(id)
    it("Should throw an error when del(id) is called with non-existing id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Tosho",
            age: 32,
            birthday: new Date(1984, 1, 3)
        };
        repository.add(entity);
        repository.add(entity2);
        expect(() => repository.del(3)).to.throw(`Entity with id: 3 does not exist!`);
    });
    it("Should delete entity when del(id) is called with existin id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Tosho",
            age: 32,
            birthday: new Date(1984, 1, 3)
        };
        repository.add(entity);
        repository.add(entity2);
        repository.del(0);
        expect(repository.count).to.be.equal(1);
    });
    // testing everything
    it("Should work properly when all methods called", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Tosho",
            age: 32,
            birthday: new Date(1984, 1, 3)
        };
        let entity3 = {
            name: "Gosho",
            age: 19,
            birthday: new Date(1959, 2, 4)
        }
        repository.add(entity);
        repository.add(entity2);
        let returnedEntity = repository.getId(1);
        repository.update(1, entity3);
        repository.del(0);
        expect(repository.count).to.be.equal(1);
        assert.deepEqual(returnedEntity, entity2);
    });
    //adding and deleting multiple times
    it("Should work properly when adding and deleting multiple times", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Tosho",
            age: 32,
            birthday: new Date(1984, 1, 3)
        };
        let entity3 = {
            name: "Gosho",
            age: 19,
            birthday: new Date(1959, 2, 4)
        }
        repository.add(entity);
        repository.add(entity2);
        repository.add(entity3);
        repository.del(0);
        repository.del(1);
        repository.del(2);
        expect(repository.count).to.be.equal(0);
    });
});
