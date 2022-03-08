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

async function getResult() {
    const user = await getUser(1);
    console.log(user);
    const courses = await getCorses(user.name);
    console.log(courses);
    const price = await getPrice(courses[0]);
    return price;
    // console.log("Price: " + price);
}

getResult()
    .then(result => console.log("Price: " + result))
    .catch(err => console.log(err));


//try{}catch(){}
try{
    async function getResult() {
        const user = await getUser(1);
        console.log(user);
        const courses = await getCorses(user.name);
        console.log(courses);
        const price = await getPrice(courses[0]);
        // return price;
        console.log("Priceee: " + price);
    }
    getResult()
        // .then(result => console.log("Priceee: " + result))
        // .catch(err => console.log(err));
} catch(err) {
    console.log(err);
}

