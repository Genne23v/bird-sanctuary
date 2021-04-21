let birds = [];
// let fs = require('fs'), jsonData = JSON.stringify(birds);
// fs.writeFile('./data.json', jsonData, function(err){
//     if (err){
//         console.err();
//     }
// });
function addJsonLocally() {
    let bird = {
        species_name: document.getElementById('species-name').value,
        description: document.getElementById('description').value,
        date_found: document.getElementById('date-found').value,
        important_note: document.getElementById('important-notes').value,
        image: document.getElementById('inputGroupFile02').value,
        wiki_url: document.getElementById('wiki-url').value
    }

    if (localStorage.getItem('BirdBreedList') !== null) {
        birds = localStorage.getItem('BirdBreedList');
        let parsedBirds = JSON.parse(birds);
        parsedBirds.push(bird);
        localStorage.setItem('BirdBreedList', JSON.stringify(parsedBirds));
    
    } else {
        birds.push(bird);
        localStorage.setItem('BirdBreedList', JSON.stringify(birds));

    }
}

function validateUrl(url) {
    try {
        let parsedUrl = new URL(url);
        let hostname = parsedUrl.hostname;

        if (hostname === 'en.wikipedia.org')
            return true;
        else
            console.log('URL is not Wikipedia URL!', url);

    } catch (err) {
        console.log('Unable to parse the URL', url);
        return false;
    }
}
function validateImgUrl(url) {
    if (!url) {
        return true;
    }
    try {
        let regex = /\.jpe?g$/;

        if (regex.test(url)){
            return true;
        } else {
            console.log('URL is not for an image');
        }

    } catch (err) {
        console.log('URL is not for an image', url);
        return false;
    }
}
function validate(event) {
    // TODO - write custom validation logic to validate the 
    // values entered by the user. If values are
    // invalid, show the appropriate error message in the form, and stop the 
    // form from being submitted. If both values are valid, allow the form to be
    // submitted.
}

// Wait for the window to load, then set up the submit event handler for the form.

window.onload = function() {
   let form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
    
        let wikiUrl = document.querySelector('#wiki-url').value;
        let imgUrl = document.querySelector('#inputGroupFile02').value;

        if (!form.checkValidity()) {
            form.classList.add('was-validated');

            event.preventDefault();
            return false;
        }

        if (!validateImgUrl(imgUrl)){
            form.imgUrl.setCustomValidity('Please enter image URL1');
            form.classList.add('was-validated');
            
            form.imgUrl.oninput = function(even) {

                if (!validateImgUrl(form.imgUrl.value)){
                    form.imgUrl.setCustomValidity('Please enter image URL2');
                } else {
                    form.imgUrl.setCustomValidity('');
                    form.imgUrl.oninput = null;
                }
            }
            event.preventDefault();
            return false;
        }
//debugger;
        if (!validateUrl(wikiUrl)) {
            form.wikiUrl.setCustomValidity('Please enter Wikipedia URL');
            form.classList.add('was-validated');
            form.wikiUrl.oninput = function(event) {
                
                if (!validateUrl(form.wikiUrl.value)) {
                    form.wikiUrl.setCustomValidity('Please enter Wikipedia URL only');
                }
                else {
                     form.wikiUrl.setCustomValidity('');
                     form.wikiUrl.oninput = null;
                 }
            };
            event.preventDefault();
            return false;
        }
        addJsonLocally();

        return true;
    });
}