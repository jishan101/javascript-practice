//copy by value
let x = 10;
let y = x;

console.log(x);
console.log(y);

x = 15;

console.log(x);
console.log(y);

//copy by reference
let obj1 = {age : 25};
let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2.age = 26

console.log(obj1);
console.log(obj2);
