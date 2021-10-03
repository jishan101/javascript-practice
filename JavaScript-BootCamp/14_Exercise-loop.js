<<<<<<< HEAD
//Erercise - 1
let num = 1;

while (num <= 10) {
    console.log(num); /*loop will go until num is less than or equal 10. 
    It will print the num and increment the num by 2 on every step.*/
    num += 2;
}

//Erercise - 2
let x = 1;

while (x <= 20) {
    if (x % 4 === 0) {
        console.log(x); /*loop will go until x is less than or equal 20. 
        It will divide the x by 4 and print it if the reminder is 0. Then x will be incremented by 1.*/
    }
    x++;
}

//Erercise - 3
// let y = 100;

// while (y < 150) {
/*     console.log(y + 1); /*y will be incremented by 1 and decremented by 1 on the next statement 
in every step of the loop. Loop will keep printing the same thing again and again until 
the memory limit. It says "JavaScript heap out of memory" in the end.*/
//     y--;
// }

//Erercise - 4
let z = 1;

while (z <= 100) {
    if (z % 2 === 0) {
        console.log(z);
        z += 2;
    } else {
        z++;
    }
}

for (let z = 1; z <= 100; z++) {
    if (z % 2 === 0) {
        console.log(z);
    }
}

//Erercise - 5
let dollar = "$";

for (let i = 1; i <= 6; i++) {
    console.log(dollar);
    dollar += "$"
}

//Erercise - 6
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); //will divide i by 3 and 5 both and print FizzBuzz if reminder is 0 in both cases.
    } else if (i % 3 === 0) {
        console.log("Fizz"); //will divide i by 3 and print Fizz if reminder is 0.
    } else if (i % 5 === 0) {
        console.log("Buzz"); //will divide i by 5 and print Buzz if reminder is 0.
    } else {
        console.log(i); //will print i if it is not divisible by 3 or 5.
    }
}
=======
//Erercise - 1
let num = 1;

while (num <= 10) {
    console.log(num); /*loop will go until num is less than or equal 10. 
    It will print the num and increment the num by 2 on every step.*/
    num += 2;
}

//Erercise - 2
let x = 1;

while (x <= 20) {
    if (x % 4 === 0) {
        console.log(x); /*loop will go until x is less than or equal 20. 
        It will divide the x by 4 and print it if the reminder is 0. Then x will be incremented by 1.*/
    }
    x++;
}

//Erercise - 3
// let y = 100;

// while (y < 150) {
/*     console.log(y + 1); /*y will be incremented by 1 and decremented by 1 on the next statement 
in every step of the loop. Loop will keep printing the same thing again and again until 
the memory limit. It says "JavaScript heap out of memory" in the end.*/
//     y--;
// }

//Erercise - 4
let z = 1;

while (z <= 100) {
    if (z % 2 === 0) {
        console.log(z);
        z += 2;
    } else {
        z++;
    }
}

for (let z = 1; z <= 100; z++) {
    if (z % 2 === 0) {
        console.log(z);
    }
}

//Erercise - 5
let dollar = "$";

for (let i = 1; i <= 6; i++) {
    console.log(dollar);
    dollar += "$"
}

//Erercise - 6
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz"); //will divide i by 3 and print Fizz if reminder is 0.
    } else if (i % 5 === 0) {
        console.log("Buzz"); //will divide i by 5 and print Buzz if reminder is 0.
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); //will divide i by 3 and 5 both and print FizzBuzz if reminder is 0 in both cases.
    } else {
        console.log(i); //will print i if it is not divisible by 3 or 5.
    }
}
>>>>>>> c2f9c0ee75850bc56b506d24cdbd7ed49ca2b77b
