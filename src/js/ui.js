function titleCase(text) {
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  
    return words.join(" ");
  }

function populateBreedFromDropdown(breeds) {
    let dropdownMenu = document.getElementById('dropdown-menu');

    breeds.forEach(breed => {
        let dropdownItem = document.createElement('a');
        dropdownItem.id = breed.species_name;
        dropdownItem.className = 'dropdown-item';
        dropdownItem.href = '#';
        dropdownItem.innerText = titleCase(breed.species_name);

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

function showBreed(breed, image) {
    let breedName = document.querySelector('#breed-name');
    breedName.innerText = titleCase(breed);

    let breedGrid = document.querySelector('#breed-grid');
    breedGrid.innerHTML = '';

    breedGrid.appendChild(createGrid(image));
    //images.forEach(imageUrl => breedGrid.appendChild(createGrid(imageUrl)));
}