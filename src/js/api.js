function getBirdBreeds() {
    let birds = [];
    birds = localStorage.getItem('BirdBreedList');
    let parsedBirds = JSON.parse(birds);

    parsedBirds.forEach(function(e) {
        delete e.description;
        delete e.date_found;
        delete e.image_url;
        delete e.important_note;
        delete e.wiki_url;
    })
    return parsedBirds;
}




// function getBirdBreeds(callback) {
//     let xhr = new XMLHttpRequest();

//     xhr.onload = function() {
//         try {
//             let data = JSON.parse(this.responseText);
//             //get the key of json data
//             callback(Object.keys(data.message));

//         } catch (err) {
//             console.error('Unable to parse bird breed JSON', err);
//         }
//     };
//     xhr.onerror = function() {
//         console.error('Unable to get bird breed JSON data');
//     };
//     let url = 'https://formspree.io/f/mleaeqak';
//     xhr.open('GET', url);
//     xhr.send();
// }

// function getBreedData(breed, callback) {
//     let xhr = new XMLHttpRequest();

//     xhr.onload = function() {
//         try {
//             let data = JSON.parse(this.responseText);
//             callback(data.message);

//         } catch (err) {
//             console.error('Unable to parse bird breed image from JSON data', err);
//         }
//     };
//     xhr.onerror = function() {
//         console.error('Unable to get bird breed image from JSON data');
//     };
//     let url = `https://formspree.io/f/mleaeqak`;
//     xhr.open('GET', url);
//     xhr.send();
// }