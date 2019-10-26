'use strict';

var a = 'a';
let b = 'b';
const c = 'c';

if(1 > 0) {
   let d = 'd';
   const e = 'e';
   console.log('DENTRO DO IF');
   console.log(a);
   console.log(b);
   console.log(c);
   console.log(d);
   console.log(e);
}

console.log('FORA DO IF')
console.log(a);
console.log(b);
console.log(c);
//console.log(d);
//console.log(e);