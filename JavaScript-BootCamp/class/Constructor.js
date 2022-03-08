function User(id, userName, email) {
    this.id = id;
    this.userName = userName;
    this.email = email;
}

User.prototype.login = function() {
    console.log(`${this.userName} has logged in with "${this.email}".`);
    return this; //enables method chaining by returning the name of the instance
}

User.prototype.logout = function() {
    console.log(`${this.userName} has logged out.`);
    return this;
}

function Admin(...args) {
    User.apply(this, args);
}

Admin.prototype = User.prototype;

Admin.prototype.deleteUser = function(user) {
    users = users.filter(u => u.email !== user.email);
}

const userOne = new User(1, "Harry", "harry@gmail.com");
const userTwo = new User(2, "Voldemort", "voldemort@gmail.com");
const adminOne = new Admin(3, "Dumbledore", "dumbledore@gmail.com");

let users = [userOne, userTwo, adminOne];
// adminOne.deleteUser(userOne);

console.log(userOne);
// userOne.login().logout(); //method chaining
// adminOne.login();

