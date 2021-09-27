const myBio = {
    myName: "Jishan",
    myAge: 25,
    myCity: "Chattogram",
    myPro: "Wev Developer",
    'previous Pro': "Student"
}; //created an object and inserted soome keys  and their values

console.log(myBio.myName + " " + myBio.myAge + " " + myBio['previous Pro']);

console.log(myBio);

myBio.nextPro = "Engineer"; //inserted a key and its value

console.log(myBio.nextPro);

console.log(myBio);

myBio.myAge += 2; //updated the value of a key

console.log(myBio.myAge);

//creating array and object inside an object
const bio = {
    my_name: "Jishan",
    age: 25,
    city: "Chattogram",
    pro: ["Student", "Wev Developer"],
    birthPlace: "Satkania",
    myFather: {
        fatherName: "Sukkur",
        fatherAge: 50
    }
};

console.log(bio);
