class Person {
    constructor(first, last){
        this.firstName = first;
        this.lastName = last;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(full){

        let [first, last] = full.split(" ");
        if (first && last){
            this.firstName = first;
            this.lastName = last;            
        }
    }
}

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson


