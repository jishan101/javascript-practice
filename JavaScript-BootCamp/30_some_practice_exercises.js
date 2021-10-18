//1. Write a JavaScript program to create a new string without the first and last character of a given string and string length must be 3 or more
function without_first_end(str) {
    //Todo-write your code here
    if (str.length < 3) {
        return false;
    }
    const newString = str.split('');
    newString.shift();
    newString.pop();
    return newString.join('');
}
console.log(without_first_end('JavaScript')); //avaScrip
console.log(without_first_end('JS')); //false
console.log(without_first_end('PHP')); //H

//2. Write a JavaScript program to convert a given number to hours and minutes
function time_convert(num) { 
    //Todo- write your code here
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}:${minutes}`;
}
console.log(time_convert(71));//1:11
console.log(time_convert(450)); //7:30
console.log(time_convert(1441)); //24:1

//3. Write a JavaScript program to reverse a given string.
function string_reverse(str) {
    //Todo -write your code
    const strArray = str.split("");
    strArray.reverse();
    str = strArray.join("");
    return str;
}
console.log(string_reverse("w3resource"));//ecruoser3w
console.log(string_reverse("www"));//www
console.log(string_reverse("JavaScript"));//tpircSavaJ

//4. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
function array_max_diff(arr) {
    //Todo - write your code here
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max-min;
}
console.log(array_max_diff([1, 2, 3, 8, 9])); //lowest value-1 ,highest value-9 //result will be 9-1 = 8
console.log(array_max_diff([1, 2, 3, 18, 9])); //17
console.log(array_max_diff([13, 2, 3, 8, 9])); //11

//5. Find out the maximum number from array
//this Function should result 15(max number inside the array)
function maxNum(numms) {
    //Todo -write your code here
    return Math.max(...numms); 
}
  
const nums = [1, 3, 5, 9, 15, 2];
const result = maxNum(nums);
console.log(result); //15

//6. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

function match_Character(str, char) {
    if (str.slice(1, 4).indexOf(char) !== -1) {
        return true;
    }
    return false;
    //Todo- write code
}
console.log(match_Character('javascript', 'a')) //true
console.log(match_Character('python', 'y')) //false
console.log(match_Character('console', 'o')) //false

//7. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function near_100(x, y) {
    //Todo -write your code here
    if (x === y) {
        return false;
    } else if (100 - x < 100 - y) {
        return x;
    } else {
        return y;
    }
}
    
console.log(near_100(90, 89)); //90
console.log(near_100(-90, -89)); //-89
console.log(near_100(90, 90)); //false

//8. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive

function max_townums_range(x, y) {
    //Todo-write your code here
    if (x === y || x < 40 || y < 40 || x > 60 || y > 60) {
        return false;
    }
    return Math.max(x, y);
}   
console.log(max_townums_range(45, 60)); //60
console.log(max_townums_range(25, 60)); //false
console.log(max_townums_range(45, 80)); //false

//9. check and compare each element of both two array if both array are exact match result will be true otherwise result will be false

function compare(arr1, arr2) {
    //Todo-write your code here
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.toString() === arr2.toString()
}
console.log(compare([1, 2, 3], [1, 2, 3])) //true
console.log(compare([1, 2, 3], [2, 2, 3])) //false
console.log(compare([1, 2, 3], [1, 2, 3, 4])) //false

//10.Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

function swap(arr) {
    //Todo -Write your code here
    if (arr.length > 0) {
        const temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        return arr;
    }
    return false;
}
console.log(swap([1, 2, 3, 4])); //[4, 2, 3, 1]
console.log(swap([0, 2, 1])); //[1,2,0]
console.log(swap([3])); //[3]
console.log(swap([]));
