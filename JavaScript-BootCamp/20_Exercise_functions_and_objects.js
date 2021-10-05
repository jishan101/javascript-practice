//Exercise - 1
function max(a, b) {
    if(a >= b) {
        return a;
    } else{
        return b;
    }
}

console.log(max(20, 25));

//Exercise - 2
function showNumber(num) {
    for(let i = 0; i < num; i++) {
        console.log(i);
    }
}

showNumber(30);

//Exercise - 3
function sum(num) {
    let total = 0;

    for(let i = 0; i < num; i++) {
        total += i;
    }
    return total;
}

console.log(sum(15));

//Exercise - 4
function calculateAverage(arr) {
    let total = 0;

    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    const average = total / arr.length;

    switch(average) {
        case average < 60 && average:
            return "F";
        case average >= 60 && average <= 69 && average:
            return "D";
        case average >= 70 && average <= 79 && average:
            return "C";
        case average >= 80 && average <= 89 && average:
            return "B";
        case average >= 90 && average:
            return "A";
    }
}

console.log(calculateAverage([60, 70, 90, 50, 55]));

//Exercise - 5
const movie = {
    title: "a",
    releaseYear: 2018,
    rating: 4.5,
    director: "b"
};

function showProperties(movieData) {
    let result = {};

    for(let key in movieData) {
        if(typeof(movieData[key]) === "string") {
            result[key] = movieData[key];
        }
    }
    return result;
}

console.log(showProperties(movie));
