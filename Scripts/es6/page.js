// file: ./page.js
import Person from './person.js';
let person = new Person();
person.yell( 'Hello world!!' );



import { fac, log } from './fac.js';
log( fac ( 6 ) );



function curried(fn, ...args) {
    return (...nArgs) => fn.apply(this, [...args, ...nArgs])
}


