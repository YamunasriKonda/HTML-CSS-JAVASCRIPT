'use strict';

//dom manipulation

const title = document.createElement("h1");// creating a h1 tag
title.innerText = "let's manipulate the DOM";// adding the text in between the 
document.body.appendChild(title);//the h1 tag is going in the body tag
const div = document.getElementById("myDiv");
console.log("target div:", div)// prints details of the tag
const newButton = document.createElement("button");//creates a button element
newButton.innerText = "PRESS ME";// update text of the button element
div.prepand(newButton);// adds the button to the div we got
const secondDiv = document.queryselector("body > div.divNoId");
console.log(secondDiv);
const para = document.querySelector("body > div.divNoId > p");
para,innerText = "hello";

para
//event handing

const greet = () => console.log("hello world");

newButton.onclick = greet;
newButton.addEventListener("click, greet ");















