var x="Hello World.";
var y="What up?";

//just show the string in variable x
console.log(x);

//concatenating x & y
console.log(x + " " + y);

//showing the length of variable x
console.log(x.length);

//showing the type of variable y
console.log(typeof y);

//need to use backslash(\) if we use same type of quotation inside the string
console.log("My name is \"JISHAN\"");

//can use different quotation inside the string to avoid the error
console.log('My name is "JISHAN"');

//will show the character on the 4th position(index starts from 0 in any programming language)
console.log(x[3]);

//template string
console.log(`Yo, ${x} ${y}`);
