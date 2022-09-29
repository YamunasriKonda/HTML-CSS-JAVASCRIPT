"use strict"

const counter = document.getElementById("counter");//getting the input for element

const minusOne= () => {

    counter.value = parseInt(counter.value) - 1;

    history ();

}

const plusOne= () =>{

    counter.value = parseInt(counter.value) +1;

    history();
    
}

const reset = () => {

 counter.value  = "0";

}

const minusFive = () => {

    counter.value = parseInt(counter.value) -5;

    history();

}

const plusFive = () => {
     counter.value =parseInt(counter.value) +5;

     history();

}


