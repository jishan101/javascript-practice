class User {
    constructor(id, userName, email) {
        this.id = id;
        this.userName = userName;
        this.email = email;
    }

    login() {
        console.log(`${this.userName} has logged in with "${this.email}".`);
        return this; //enables method chaining by returning the name of the instance
    }

    logout() {
        console.log(`${this.userName} has logged out.`);
        return this;
    }
}

class Admin extends User {
    constructor(id, userName, email) {
        super(id, userName, email);
        this.role = "Admin";
    }

    deleteUser(user) {
        users = users.filter(u => u.email !== user.email);
        return this;
    }
}

const userOne = new User(1, "Harry", "harry@gmail.com");
const userTwo = new User(2, "Voldemort", "voldemort@gmail.com");
const adminOne = new Admin(3, "Dumbledore", "dumbledore@gmail.com")
// userOne.login().logout(); //method chaining

// console.log(userOne);

let users = [userOne, userTwo, adminOne];
console.log(users);

adminOne.deleteUser(userTwo);

console.log(users);

