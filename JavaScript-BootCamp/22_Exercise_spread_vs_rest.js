//Exercise - 1
const array = [0, null, undefined, '', 2, 3];

function countTruthy(arr) {
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if(!!arr[i]) {
            count++;
            console.log(arr[i]);
        }
    }

    return count;
}

console.log(countTruthy(array));

//Exercise - 2
function sum([...arr]) {
    let total = 0;
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

console.log(sum([1, 2, 3, 4]));
