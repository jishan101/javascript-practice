const numbers = [10, 2, 33, 9, 54, 6, 7, 8, 9, 10];

numbers.forEach(function(num, index, arr) {
    console.log(num);
    console.log(index);
    console.log(arr[index]);
});

const sortArr = numbers.sort();
console.log(sortArr);
console.log(numbers);

console.log(numbers.sort(function(num1, num2) {
    if (num1 > num2) {
        return 1;
    }
    if (num1 < num2) {
        return -1;
    }
    return 0;
}));

console.log(numbers);
