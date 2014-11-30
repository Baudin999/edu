import personImport = require('./Person');

var log = (m) => console.log( m );

var person = new personImport.Person();
log( person.name );

