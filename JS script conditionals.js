'use strict'
//what are the return values for the following code 

let strictA=true;
let strictB=1;

console.log(strictA==strictB);//true(output)
console.log(strictA===strictB);//flase(output)

// result for below code

console.log(strictA!=strictB);//flase 
console.log(strictA!==strictB);//true 

//create if stat that satidsfies 

let age=27

if (age>=18 && age<=65){
    console.log("age is in range");

}

else if (age<18){
    console.log("underage");

}
else 
{console.log("catch all else")
}

// fizzbuss exam

let a=0;

for(a=1; a<100; a++)

if(a%3==0 && a%5==0) {
    console.log("FizzBuzz")
} else if (a%3==0){
    console.log("Fizz")

} else if ((a%5)==0) {
    
console.log("Buzz")
}else 

{ console.log(a)
    
}
















