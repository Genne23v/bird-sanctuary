function getBirdBreeds(callback) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        try {
            let data = JSON.parse(this.responseText);
            //get the key of json data
            callback(Object.keys(data.message));

        } catch (err) {
            console.error('Unable to parse bird breed JSON', err);
        }
    };
    xhr.onerror = function() {
        console.error('Unable to get bird breed JSON data');
    };
    let url = 'https://dog.ceo/api/breeds/list/all';
    xhr.open('GET', url);
    xhr.send();
}

function getBreedData(breed, callback) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        try {
            let data = JSON.parse(this.responseText);
            callback(data.message);

        } catch (err) {
            console.error('Unable to parse bird breed image from JSON data', err);
        }
    };
    xhr.onerror = function() {
        console.error('Unable to get bird breed image from JSON data');
    };
    let url = `https://dog.ceo/api/breed/${breed}/images`;
    xhr.open('GET', url);
    xhr.send();
}