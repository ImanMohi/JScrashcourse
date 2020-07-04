//constructor fuhnction
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}



//Instantiate Object
const person1 = new Person('John', 'Doe', '3-6-2000');
const person2 = new Person('Anne', 'Marie', '4-3-1970');

console.log(person1.getBirthYear());
console.log(person2.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getFullName());

