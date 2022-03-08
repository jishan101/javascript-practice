const result = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Problem solved!");
        reject(new Error("ERROR"));
    }, 2000);
});

result
    .then(text => console.log(text))
    .catch(err => console.log(err));

//Exercise
getUser(1)
    .then(obj => {
        console.log(obj);
        return getCorses(obj.name);
    })
    .then(arr => {
        console.log(arr);
        return getPrice(arr[0]);
    })
    .then((price) => {
        console.log("Price:" + price);
    })
    .catch(err => console.log(err));

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id, name: "Jishan", profession: "Student"});
            // reject("User function rejected!");
        }, 2000);
    });
}

function getCorses(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["JavaScript", "React", "Node.js"]);
            // reject("Corse function rejected!");
        }, 2000);
    });
}

function getPrice(courseName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4000);
            // reject("Price function rejected!");
        }, 2000);
    });
}

//Promise.all, Promise.race
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1");
    }, 2000);
});
const p2 = Promise.resolve("Promise 2");
const p3 = Promise.resolve("Promise 3");

Promise.all([p1, p2, p3])
    .then(result => console.log(result))
    .catch(err => console.log(err));

Promise.race([p1, p2, p3])
    .then(result => console.log(result))
    .catch(err => console.log(err));

