console.log(1);
printNum(2, function(number) {
    console.log(number);
});
console.log(3);

function printNum(num, callback) {
    setTimeout(() => {
        console.log("After 2 sec");
        callback(num);
    }, 2000);
}

//Exercise
getUser(1, function(user) {
    console.log(user);
    getCorses(user.name, function(courses) {
        console.log(courses);
        getPrice(courses[0], function(price) {
            console.log("Price: " + price);
        });
    });
});

function getUser(id, callback) {
    setTimeout(() => {
        callback({id, name: "Jishan", profession: "Student"});
    }, 2000);
}

function getCorses(userName, callback) {
    setTimeout(() => {
        callback(["JavaScript", "React", "Node.js"]);
    }, 2000);
}

function getPrice(courseName, callback) {
    setTimeout(() => {
        callback(4000);
    }, 2000);
}
