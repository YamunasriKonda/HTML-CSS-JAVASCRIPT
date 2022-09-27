'use strict'

console.log("Hello World")

const text=" this is a message";
console.log(text);
console.info(text);
console.dir(text);
console.warn(text);
console.error(text);
console.log("%c"+text,"color: black;background-color : white; font-size:20px;padding:5px;")

console.log("%c" +text+ "%c" + text, "color: ReadableStream;", "color:yellow;");


