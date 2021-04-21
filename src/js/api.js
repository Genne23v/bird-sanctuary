// let fs = require('fs');
// const data = require('./data');

function getBirdBreeds() {
    let localStorageData  = localStorage.getItem('BirdBreedList');
    console.log(localStorageData);
    let birds = JSON.parse(localStorageData);

    birds.forEach(function(e) {
        delete e.description;
        delete e.date_found;
        delete e.image;
        delete e.important_note;
        delete e.wiki_url;
    })
    return birds;
}

function getImage(breed){
    let localStorageData  = localStorage.getItem('BirdBreedList');
    let birds = JSON.parse(localStorageData);

    let imageLink;
    birds.forEach(function(bird){
        if (bird.species_name.toLowerCase() === breed.toLowerCase()){
            imageLink = bird.image;
        }
    })
    return imageLink;
}


