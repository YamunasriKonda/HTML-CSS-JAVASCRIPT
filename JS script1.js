'use strict'
let isMutable =10;
const isImmutable =12;
var inInsecure= "dont use me";

//two types of types
//primatives and objects

let aboolean= true;
let aNumber=4;
let string="some text";
let aBigInt= 999999999999n;
let aSymbol= symbol("description in here");
let aNull= Null;
let anUndefined;
console.log(aNull);


let myObject={ key:"value", anotherkey: 12345};


//console .log(myObject);
//string concatenation
//joining strings end to end
//this is quite memory intensive

let string1= "13*12=";
let result =13*12;

console.log(string1+result)


//string interpolation
//using one string
//and literals containing placeholders
//called template literals

let string2= `13*12=${13*12}, 1+1=${1+1};
console.log(string2);
