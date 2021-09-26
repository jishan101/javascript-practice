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
];

const index = movie[2];
console.log(index.name + " got " + index.rating + "/5 rating under " + index.category + " category.")
