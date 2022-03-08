const products = [
    {
        id: 1,
        name: "shoes",
        price: 65
    },
    {
        id: 2,
        name: "bag",
        price: 55
    },
    {
        id: 3,
        name: "shoes",
        price: 88
    }
];

console.log(products.find(function(productInfo) {
    return productInfo.name === "shoes";
})); //will check if an element of reference type is availble by value and print the 1st element containing that value

console.log(products.find(productInfo => productInfo.name === "shoes")); /*will check if an element of 
reference type is availble by value and print the 1st element containing that value*/

console.log(products.filter(function(productInfo) {
    return productInfo.name === "shoes";
})); //will check if an element of reference type is availble by value and print the all the elements containing that value

console.log(products.filter(productInfo => productInfo.name === "shoes")); /*will check if an element of 
reference type is availble by value and print the all the elements containing that value*/

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

console.log([num1, num2]); //will add both the array in an array
console.log([...num1, ...num2]); //will add the elements from both the array in an array

console.log(num2.join("")); //will take out the array elements as a string and add any thing in between two elements

const str = "My name is Jishan";

console.log(str.split('')); //will put the string in an array and split by anything we pass in the argument
console.log(str.split(' ')); //will put the string in an array and split by anything we pass in the argument
