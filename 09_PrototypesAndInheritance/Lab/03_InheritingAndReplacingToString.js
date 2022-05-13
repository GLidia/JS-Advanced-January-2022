function solve(){

    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email
        }

        toString = () => `Person (name: ${this.name}, email: ${this.email})`;
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }

        toString = () => `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }
        
        toString = () => `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }
    
    return { Person, Teacher, Student}
}
