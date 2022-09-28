//subtarct two numbers
function sub(num1,num2)
{

    return num1-num2;
}

console.log(sub(563,321))

//function expression

const welcome= function( name, age, gender){

    return console.log(`my name is ${name}, i am ${age} years old and of gender ${gender}`);
}

  welcome("phani", 31, "male");

  //arrow function 

  powerUp=(n1,n2)=>Math.pow(n1,n2);

  console.log(powerUp(5,3));
  


