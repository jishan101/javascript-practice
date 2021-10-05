//immediately invoked function expression (IIFE)
const sayHi = function(name) {
    console.log(`Hi! ${name}.`);
} ("Jishan");

//arrow function
const arrowFunction = (x, y) => `${x} ${y}.`;

console.log(arrowFunction("arrow", "function"));

//function as object
function fAsObj(name) {
    return `My name is ${name}.`;
}

console.log(fAsObj("Jishan"));

fAsObj.lastName = "Islam";
console.log(fAsObj.lastName);
console.log(Object.entries(fAsObj));
