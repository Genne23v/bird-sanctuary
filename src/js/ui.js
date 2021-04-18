function titleCase(text) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function populateBreedFromDropdown(breeds) {
    let dropdownMenu = document.getElementById('dropdown-menu');

    breeds.forEach(breed => {
        let dropdownItem = document.querySelector('a');
        dropdownItem.id = breed;
        dropdownItem.className = 'dropdown-item';
        dropdownItem.href = '#';
        dropdownItem.innerText = titleCase(breed);

        dropdownMenu.appendChild(dropdownItem);
    });
}


function row(child) {
    let row = document.createElement('div');
    row.className = 'row mt-2';
    row.appendChild(child);
    return row;
}

function col(child) {
    let col = document.createElement('div');
    col.className = 'col';
    col.appendChild(child);
    return col;
}

function img(url) {
    let img = new Image();
    img.className = 'img-fluid rounded mx-auto d-block';
    img.src = url;
    return img;
}

function createGrid(url) {
    return row(col(img(url)));
}

function showBreed(breed, images) {
    let breedName = document.querySelector('#breed-name');
    breedName.innerText = titleCase(breed);

    let breedGrid = document.querySelector('#breed-grid');
    breedGrid.innerHTML = '';

    images.forEach(imageUrl => breedGrid.appendChild(createGrid(imageUrl)));
}