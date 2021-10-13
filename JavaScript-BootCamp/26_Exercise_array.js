//Exercise - 1
//========================================
//must result a array including all elements in the defined range
//results will be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbers = arrayFromRange(1, 10);

console.log(numbers);
function arrayFromRange(min, max) {
    const array = [];
    for (min; min <= max; min++) {
        array.push(min);
    }

    return array;
}

//Exercise - 2
//==================================
//custom includes methods that is defined by you
//result true or false based on searchElement
const numbers2 = [1, 2, 3, 4]; 

console.log(includes(numbers2, -1));

function includes(array, searchElement) {
    return array.includes(searchElement);
}

//Exercise - 3
//==================================
//Exclude the numbers you passed to the function  from numbers array
//result will be [3, 4]

const numbers3 = [1, 2, 3, 4]; 

const output = except(numbers3, [1, 2]);

console.log(output); 

function except(array, excluded) {
    excluded.forEach(num => {array.splice(array.indexOf(num), 1)});
    return array;
}

//Exercise - 4
//==================================
//count the occurrence of numbers 
//result will be number of occurrence .Example case: result will be 2  
//At first use procedural way
//Then use reduce method

const numbers4 = [1, 2, 3, 1];

const count = countOccurrences(numbers4, 1); 

console.log(count);

function countOccurrences(array, searchElement) {
    const result = array.reduce((a, b) => b === searchElement ? a += 1 : a += 0, 0);
    return result;
}

//Exercise - 5
//==================================
//Get the maximum number from the array
//At first use procedural way
//THen use reduce method
const numbers5 = [1, 2, 3, 4];

const max = getMax(numbers5);

console.log(max);


function getMax(array) {
    const result = array.reduce((a, b) => a > b ? a : b, 0);
    return result;
}
