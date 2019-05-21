

class Person {
    constructor(lastname) {
        this.lastname = lastname;
    }
    greet() {
        return `${this.lastname}`;
    }
};

const x = new Person(Todoric);