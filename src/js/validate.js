function getDataUrl(img) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = img.Width;
    canvas.height = img.Height;
    context.drawImage(img, 0, 0);


    // const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    // const data = imageData.data;

    // img.src = reader.ressult;

    // let imgAsDataUrl = imgCanvas.toDataURL('image/jpeg', 1.0);
    // console.log(imgAsDataUrl);

    // let bird = {
    //     species_name: document.getElementById('species-name').value,
    //     description: document.getElementById('description').value,
    //     date_found: document.getElementById('date-found').value,
    //     important_note: document.getElementById('important-notes').value,
    //     image_url: imgAsDataUrl,
    //     wiki_url: document.getElementById('url').value
    // }

    return canvas.toDataURL('image/jpeg');
}


function addJsonLocally() {

    // let img = document.getElementById('img');
    // img.addEventListener('change', imgToData);

    // let jsonData = JSON.stringify(birds);

    // fs.writeFile('./js/data.json', jsonData, function(err) {
    //     if (err) throw err;
    //     console.log('Saved');
    // });
    debugger;
    let birds = [];
    //let bird = getInputData();
    const img = document.getElementById('img');
    let test = document.getElementById('img').files[0];
    const reader = new FileReader();
    let binaryData = reader.result;
    let base64String = window.Blob(binaryData);
    console.log(base64String);

    //  test.src = reader.result;
    //reader.readAsDataURL(file);
    console.log(test.src);

    let bird = {
        species_name: document.getElementById('species-name').value,
        description: document.getElementById('description').value,
        date_found: document.getElementById('date-found').value,
        important_note: document.getElementById('important-notes').value,
        image_url: imgAsDataUrl,
        wiki_url: document.getElementById('url').value
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
    if (!url) {
        return true;
    }
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

function validate(event) {
    // TODO - write custom validation logic to validate the 
    // values entered by the user. If values are
    // invalid, show the appropriate error message in the form, and stop the 
    // form from being submitted. If both values are valid, allow the form to be
    // submitted.
    debugger;
    let birds = [];
    //let bird = getInputData();
    const img = document.getElementById('img');
    let test = document.getElementById('img').files[0];

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = test.height;
    canvas.width = test.width;
    context.drawImage(test, 0, 0);

    let what = canvas.toDataURL('image/jpeg');
    console.log(what);
    //const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imageData);

    const reader = new FileReader();
    reader.onload = function(theFile) {
        return function(event) {
            let binaryData = event.target.result;
            let base64String = window.Blob(binaryData);
        }
    }
    console.log(base64String);




    const form = document.querySelector('form');

    if (!form.checkValidity()) {
        form.classList.add('was-validated');

        event.preventDefault();
        return false;
    }

    if (!validateUrl(form.url.value)) {
        form.url.setCustomValidity('Please enter Wikipedia URL');
        form.classList.add('was-validated');

        form.url.oninput = function(event) {
            if (!validateUrl(form.url.value)) {
                form.url.setCustomValidity('Please enter Wikipedia URL only');
            } else {
                form.url.setCustomValidity('');
                form.url.oninput = null;
            }
        };
        event.preventDefault();
        return false;
    }

    addJsonLocally();

    return true;

    console.log('TODO - validate the entries of Bird here before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
    const img = document.getElementById('inputGroupFile02');
    img.addEventListener('change', function(event) {
        debugger;
        const dataUrl = getDataUrl(event.currentTarget);
        console.log(dataUrl);
    });

    const form = document.querySelector('form');
    form.onsubmit = validate;
};