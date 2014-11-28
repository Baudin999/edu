// file: ./Person.js

class Human { }

class Person extends Human {
    constructor(name) {
        "use strict";
        this.name = name;
    }

    yell(message) {
        "use strict";
        console.log( message );
    }
}

export default Person;