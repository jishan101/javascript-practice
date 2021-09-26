//writing bio with object
const myBio = {
    myName: "Jishan",
    myAge: 25,
    myPro: "Wev Developer",
    myFav: "\"JavaScript\""
}; //created an object and inserted soome keys  and their values

const bio = "I am " + myBio.myName + " and I am " + myBio.myAge + ". I\'m a " + myBio.myPro + ". I love " + myBio.myFav;
console.log(bio);

//invalid key
const someObject = {}; //created an empty object
someObject._name = "Hedwig"; //valid key
someObject.age = 6; //valid key

var prop = "color"; //a variable with "color" as its value
someObject[prop] = "red"; //valid key, color(which is the value of the variable prop) became a key name and "red" its value

//someObject.123 = true; //invalid key, key name can't start with number or special characters except _ and $
someObject['123'] = true; //valid key
console.log(someObject);
