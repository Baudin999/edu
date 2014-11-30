
import human = require('./human');

export class Person extends human.Human {
    constructor(name?:string) {
        super(name || 'Carlos');
    }
}
