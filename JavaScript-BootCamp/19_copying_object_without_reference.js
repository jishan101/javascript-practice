//loop
const obj1 = {
    name: "jishan",
    age: 25,
    pro: "Web Developer"
};

const obj2 = {};
for(let i in obj1) {
    obj2[i] = obj1[i];
}
console.log(obj2);

//assign method
let obj3 = Object.assign(obj1);
console.log(obj3);

obj3 = Object.assign({}, obj1);
console.log(obj3);

obj3 = Object.assign({yo: "yo"}, obj1);
console.log(obj3);

//spread ...
let obj4 = {...obj1};
console.log(obj4);

obj4 = {...obj1, yo: "yo"};
console.log(obj4);
