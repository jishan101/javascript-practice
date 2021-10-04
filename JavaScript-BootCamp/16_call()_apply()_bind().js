function sayHi(age, pro) {
    return `Hi, this is ${this}. I am ${age} and I am a ${pro}.`;
}

const sayHiCall = sayHi.call("Jishan", 25, "Web Developer"); /*makes the 1st arguement the value of this keyword. 
Passes the other arguements in the function.*/
console.log(sayHiCall);

const sayHiApply = sayHi.apply("Jishan", [25, "Web Developer"]); /*makes the 1st arguement the value of this keyword.
 Passes the array elements as the arguements in the function.*/
console.log(sayHiApply);

const sayHiBind = sayHi.bind("Irfanul Islam Jishan"); //makes the arguement the value of this keyword.
const sayHiWithBind = sayHiBind(25, "Web Developer"); /*need to call the function with created object(sayHiBind) 
to accesss the value of this keyword.*/
console.log(sayHiWithBind);

//binding the this keyword value when declaring the function as function expression
const sayYo = function(age, pro) {
    return `Yo, this is ${this}. I am ${age} and I am a ${pro}.`;
}.bind("Irfanul Islam Jishan");

const sayYoWithBind = sayYo(25, "Web Developer");
console.log(sayHiWithBind);