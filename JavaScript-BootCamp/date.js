const time = new Date();
console.log(time);

console.log(time.toLocaleDateString("En", {day: 'numeric', month: 'long', year: 'numeric', hour : "numeric", minute : "numeric"}));

console.log(time.toLocaleTimeString("En", {hour : "numeric", minute : "numeric"}));

console.log(time.toString());

console.log(time.toLocaleString("En", {day: 'numeric', month: 'long', year: 'numeric', hour : "numeric", minute : "numeric"}));

console.log(time.toTimeString());

