// file: ./fac.js
var fac = x => x === 1 ? 1 : x * fac(x - 1);
var log = m => console.log( m );
export { fac, log }


