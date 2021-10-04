//pass by value
let x = 10;
console.log(x);

function passByValue(x_value) {
    x_value = 15;
    return x_value;
}

const x_call = passByValue(x);
console.log(x_call);
console.log(x);

//pass by reference
let obj = {age : 25};

function passByReference(objPassed) {
    objPassed.age = 26;
    return objPassed;
}

const obj_call = passByReference(obj);
console.log(obj);
console.log(obj_call.age);
