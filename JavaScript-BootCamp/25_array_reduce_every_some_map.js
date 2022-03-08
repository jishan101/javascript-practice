const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce
const sum = arr.reduce((previousValue, currentValue, index, array) => {
    console.log(index);
    return previousValue + currentValue;
}, 0);
console.log(sum);
console.log(arr); //reduce doesn't change the original array

// map
arr.map((element, index, array) => {
    console.log(element * 2);
    console.log(index);
});
console.log(arr); //map doesn't change the original array

//every
const every = arr.every((element, index, array) => {
    console.log(element);
    console.log(index);
    return element <= 10;
})
console.log(every);
console.log(arr);

//some
const some = arr.some((element, index, array) => {
    console.log(element);
    console.log(index);
    return element >= 5;
})
console.log(some);
console.log(arr);

