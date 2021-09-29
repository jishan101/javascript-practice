//Exercise - 1
const x = 10;
const y = "a";

console.log(y === "b" || x >= 10); //output is true when one of the condition is true for logical OR operator. Here x >= 10 is true.

//Exercise - 2
const a = 3;
const b = 8;

console.log(!(a == "3" || a === b) && !(b != 8 && a <= b)); /*inside the first brakets a == "3" is true, so it gets 
short circuited. Then it changes to false because of the not operator. Then it again gets short circuited as 
logical operator gets short circuited when it gets a false.*/

//Exercise - 3
console.log(!"Hello World");
console.log(!"");
console.log(!null);
console.log(!0);
console.log(!-1);
console.log(!NaN);

//Exercise - 4
const str = "";
const msg = "haha!";
const isFunny = "false";

console.log(!((str || msg) && isFunny)); /*(str || msg) is true. (ture && isFunny) is also true 
but changes to false because of the not Operator.*/
