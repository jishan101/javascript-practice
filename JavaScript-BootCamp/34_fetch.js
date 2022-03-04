// COVID-19 API
// fetch("https://covid-api.mmediagroup.fr/v1/vaccines?country=Bangladesh")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.All);
//         console.log(data.All.people_vaccinated + " no. of people got vaccinated in Bangladesh.");
//     })
//     .catch(err => console.log(err));


// Cute DOG image API
const dogImg = document.querySelector(".dog-img");

fetch("https://random.dog/woof.json?ref=apilist.fun")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.url);
        dogImg.setAttribute("src", data.url);
    })
    .catch(err => console.log(err));
    

