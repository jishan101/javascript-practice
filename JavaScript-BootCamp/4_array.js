const sample = [1, 2, 3, 4, 5, 6];

console.log(sample);

console.log(sample.indexOf(3)); //finds the index of an array element
console.log(sample.includes(3)); //finds out if an array element id available or not

sample.push(7); //inserts a new element
console.log(sample);
sample.pop(); //deletes the last element from the array
console.log(sample);

sample.shift(); //deletes the first element from the array
console.log(sample);
sample.unshift(1); ////inserts a new element in the first index of the array
console.log(sample);

sample.splice(5, 1, 7); //deletes the elements according to (startIndex, deletesNoOfElements, insertElement_1, insertElement_2, insertElement_N)
console.log(sample);
sample.splice(5, 0, 6);
console.log(sample);

const newSample = sample.slice(0, -5); //copies elements acording to (startIndex, endIndex)
console.log(newSample);
console.log(sample);
