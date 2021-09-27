//problem 1
function myBio(myName, myAge, myPro, myFav){
    return `I am ${myName} and I am ${myAge}. I'm a ${myPro}. I love ${myFav}.`; //returing the whole line inside template string
};

const bio = myBio("Jishan", 25, "Wev Developer", "\"JavaScript\""); //storing the return value from myBio function in bio variable
console.log(bio);

//problem 2
function movieDB(movieArr){
    const index = movieArr[2]; //storing the index of the third object from movieArr array
    return `${index.name} got ${index.rating}/5 rating under ${index.category} category.`; //returing the whole line inside template string
};

const movie = [
    {
        id: 1,
        name: "Movie 1",
        rating: 4,
        category: "Comedy"
    },
    {
        id: 2,
        name: "Movie 2",
        rating: 3.5,
        category: "Adventure"
    },
    {
        id: 3,
        name: "Movie 3",
        rating: 5,
        category: "Sci-Fi"
    },
    {
        id: 4,
        name: "Movie 4",
        rating: 2,
        category: "Horror"
    },
    {
        id: 5,
        name: "Movie 5",
        rating: 4,
        category: "Drama"
    }
]; //storing some data in the array movie via some objects

const movieReview = movieDB(movie); //storing the return value from movieDB function in movieReview variable
console.log(movieReview);
