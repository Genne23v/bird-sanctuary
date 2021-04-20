function addJsonLocally(image) {
    let birds = [];
    let bird = {
        species_name: document.getElementById('species-name').value,
        description: document.getElementById('description').value,
        date_found: document.getElementById('date-found').value,
        important_note: document.getElementById('important-notes').value,
        image: image || "",
        wiki_url: document.getElementById('url').value
    }

    if (localStorage.getItem('BirdBreedList') !== null) {
        birds = localStorage.getItem('BirdBreedList');
        let parsedBirds = JSON.parse(birds);
        parsedBirds.push(bird);
        localStorage.setItem('BirdBreedList', JSON.stringify(parsedBirds));
        //return parsedBirds
    } else {
        birds.push(bird);
        localStorage.setItem('BirdBreedList', JSON.stringify(birds));
        //return birds;
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

function validate(event, srcData) {
    // TODO - write custom validation logic to validate the 
    // values entered by the user. If values are
    // invalid, show the appropriate error message in the form, and stop the 
    // form from being submitted. If both values are valid, allow the form to be
    // submitted.

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

    addJsonLocally(srcData);

    return true;

    //console.log('TODO - validate the entries of Bird here before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.

window.onload = function() {
    let img = document.getElementById('inputGroupFile02');
    let srcData;

    img.addEventListener('change', function() {
        debugger;
        let files = document.getElementById('inputGroupFile02').files;

        if (files.length > 0) {
            fileSelect = files[0];
            let fileReader = new FileReader();

            fileReader.onloadend = function(e) {
                srcData = e.target.result;
            };
            fileReader.readAsDataURL(fileSelect);
        };

        //  setTimeout(function() {
        const form = document.querySelector('form');

        form.addEventListener('submit', function(event, srcData) {

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
                    }
                    // else {
                    //     form.url.setCustomValidity('');
                    //     form.url.oninput = null;
                    // }
                };
                event.preventDefault();
                return false;
            }
            addJsonLocally(srcData);

            return true;
        });
    });
    //}, 500);
}







//form.onsubmit = validate;

"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gI0SUNDX1BST0ZJTEUAAQEAAAIkYXBwbAQAAABtbnRyUkdCIFhZWiAH4QAHAAcADQAWACBhY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGzKGpWCJX8QTTiZE9XR6hWCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAGVjcHJ0AAABZAAAACN3dHB0AAABiAAAABRyWFlaAAABnAAAABRnWFlaAAABsAAAABRiWFlaAAABxAAAABRyVFJDAAAB2AAAACBjaGFkAAAB+AAAACxiVFJDAAAB2AAAACBnVFJDAAAB2AAAACBkZXNjAAAAAAAAAAtEaXNwbGF5IFAzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAAQ29weXJpZ2h0IEFwcGxlIEluYy4sIDIwMTcAAFhZWiAAAAAAAADzUQABAAAAARbMWFlaIAAAAAAAAIPfAAA9v////7tYWVogAAAAAAAASr8AALE3AAAKuVhZWiAAAAAAAAAoOAAAEQsAAMi5cGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltzZjMyAAAAAAABDEIAAAXe///zJgAAB5MAAP2Q///7ov///aMAAAPcAADAbv/bAEMAAgEBAQEBAgEBAQICAgICBAMCAgICBQQEAwQGBQYGBgUGBgYHCQgGBwkHBgYICwgJCgoKCgoGCAsMCwoMCQoKCv/bAEMBAgICAgICBQMDBQoHBgcKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCv/AABEIBAADAAMBIgACEQEDEQH/xAAeAAAABgMBAQAAAAAAAAAAAAABAgMEBQgGBwkACv/EAE0QAAECBAUDAgUDAgQEAwYBDQECAwAEBREGBxIhMQgTQSJRCRQyYXEjQoEVkTNSobEWJGLBF0PRChglNHKSJuHxGTVTgqLC0vBEZHP/xAAcAQABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xAA3EQACAgICAgEEAgECBgIBBAMAAQIDBBEFIRIxBhMiQVEUMmEVcQcWI0KRoTOBUiSx0eE0wfD/2gAMAwEAAhEDEQA/AOfQ7T7an5hGpINiYM8tgMlOgf8AQPMEZn0S6RpAt4B8w7Uph1sqDaQTuVExoNsr36GzSu/o7ifSOISWhM26st7ltW6YeS8q0VApeJ0gnfa8GYlkGWUpltKe6d1Ewu2IvRO4al2JeaYmUrSrUjhPg+0ZG8iXmVmbW2Qu29ztGJ4WkVMzXbem9SiP0024jK9DqWkBarahwPIjktEl7EWAppfdZASk/VePMNOI1Pqf1pUSbQLqkSySmXbvYbgmPNrdmHVsvelKgO2BEJCMa0ZV5gOzTxSpo3YWk/QoeYsXgbMpifyYRS8J1VM1OspBflNV17eYrvUJKVdUlh2xSFerf6omcoa5RMvsXrmphxxEvMIIWQokbgiGyW0KvZI1nElaq+JphdWQUAJP1H1Ae0Y7Ul95elpwBAVdNjE1j6lzPzDtWpjijTplWppw/fxeMSS+oWQkEAkjeCK0DHTi3lru1Y2tcjyY9MKmilFxsN7jxBWQhX/LKWRc/WPeFA2lL4lS9cp33hwgkpLLv/MBwrI8X8wXtrccBG229j4hw00dCl6bbnxzCSQ53r8bb7Q5LYBXkracS2Bf7iAdAQLPJvfcE+IdJl2ZlCnu/p2sSYavs6bMFzUlRg8UAi8ksoBL4IJv+YIAmYXa1x5IhuzMTLU4ZF5PcQSe257faHEuCQVBe+ri0HihfJjljuoR8vqvbzeEXDZZZmUG3g/eDlDrKS4yu/2MFfWl8oLySQB6iDxDdMd5Ibvy84paeyxrQFbaeRA0dwmmPtS8mXHlvgWVuUb+Ie0t6lyU52GJhaHHVfpa0kgq/mNhdM+UVZzUxy7KuSSW5RT6DMOX50nwItOMx1k5MYsSdiqg5P8ABbb4fmVLeEMDP4iebW1MT7B1ocG+45jfKkKKUyz6x20fSfeEcLYclMJ0CWw1STdEswAs6LeIRzGmaxgehsYimqWFyrqrBzuWsfxH0BgLH43CimzzrInPkMuWhw6lDLK0oN9W4H4hqytwrSEJsm25iSw405iLCsvVlypaU4i+k7gD8wzdYb7xQXDYGx0iLrGyar4bizktpnVLTCqWW3PqvBmXAlV7c+0EdkilYUi6k32HmBDYAC3gRY3SLR0NprohfSJqhyFOxDTJvDFekm3pacYU2606m4UlQI3/AIjkrVqqz8Pj4oL79IWJTDz04e5Lp2BlioEpHiOsOG6nLy1UUt1fNrbXjnZ8c7IvEDuYNGzlouHlqp83IfKT0+0gq7TilE7242HMU+VW42tlhx9kXLxZ0RRWKJjShSWNsPTqHJGfl0PsEeQsXt/EM3pcg63FedgIrr8IPPqmZu9MAy6rlXQ5WcPvraCCrUrsg6UK9wLCLITTQQtKSvUAeRHRh2+S8f0Q5VThZsauJToIU4R7QRlJQi5UTf3MKuobSTZeoE7G0FdKk6UIOse4EWKezlANhzAEhI+kbwZxvtgPLXsP2wZ1OshSbAEcQoCXpSLhQPsI8VHSbG6h7QfQEmwtcjYQQJaZJSpW6uRAADSU9tRWbEiCpTpFkj/WDX1qto2TxvHiS0drEqhdABY2F/8ASPJSVAoU6PxA6iTccwQOhR7ZbOryqEY5egwGhvbgGCod2VrRc+E/aBUshHpRc+d4VDrCWkqCCVW3NoBX6Ewe6nQ4rSkeISmm0qYIS920g3UpJ5EKuoOkrJuLXvaG8/21UZ5Ztt4+0OT0hq9maZkTX9J6QMWVhtrUGaXcD3uQI5A0/W87MFlo63ptSm78EajeOvGaKzMdFeKZZ1wBKqSLL+1xtHIWiS84lXdDutKZhfaTfceox4R84cnkvf7ZvPjv/wADHM0ospVLr+u9lf8A5IK2VhALu6SOfaHrjYenFOPpsVXKgRtHpyQS/KWpqU/deviPOmtov5R/I1ZS0tAaIHp4MJzKLegvAH2hpVKkxSlp78wm9thcXP8AEFkcTtTjivk6Q9NJQn1lpoq0/m3EQvSZC+mPbtjQhKgQPqMHmEpUEmXa9J2VDaVmEVBJcVKrYBVshYsR/EP5VttppQW4VAAm0A4SQhDIUjxp3EEYKHJXUk/SfMIqnUFwpallWB3JgC6QR2CNJO4vCNbQ1vTJViZ7aElwbK+mFUzsqQpp1F1jgwzYWsEF5vUkeLQd2ZWl0KDN08naIX7HDsOtzcoW+4ElHgnmES0hyTsytOpI9VoTacRMuKUGtNxxBEyykKKWFkX+rfxCAJziVLbDKh6eR9zDZ2YTJOfpWNhbf3h4t5aXwgp1BPBtDSalkJf76VX1ncEXtEsV0gDiryhbT3BpdHtBUMzRBn0P6Uj9l/q/METJtOuqXsSjfjiFFzjjjOllAsk72h4GPYfxpibKrOGiZi0youSYlJ5ExMJlzZLrQO6Ve4jrdhPENJzHyrpOY9Jn0zDFRZBKkm4Suw1D+8coq3IprUk4G5dJ7LJ1E+Ith8I7O2Rdy4mOnerTqkOys8+/Jh5zWo61lVhfgfaN18G5Z4XJxrk/tkUfO4318XyXtFpX5ZVgpRKbePeDMOJl1B5DZVcWJHEOZ1LjClpnEelKrJVbmEWm2VLCpfcc2PEfRUZqcN/g8/7Xs8W0OKUpCgFfeCHUk6ipJV7iDuAkWe/ceBCakBk6R/eHoAHGy4QpZG8Ak9sFBbv7AQKkgW1KvfcR7XpcBSg394UAGVqdmNekpAEFQUpC7j1KPmFW1LDZCvKjvaA1K2StkbjY3gATLYvqCybD3gwSlxBFxcQKm+2vWk/xBUFl5RWpZA/EA9egXHFqaDbg82Bjzr6l2ZbAuPPtAalNHUPWAebx5al8osCdz94BTwSWxurn7x59QXpIPq8ewgjrzxcQy4yAD+4QdaEBR9ViIAAUrQ+Eabi31R54BxjQlR+q8eUqybjzBkEH6bD8wC9fkDuJuWyNyNjBES4bTcqub7kGB1Eqsr35jwWgKLaTciHRGOPYZTadPcJII4tAXK0jV4gpdcd2WnYcWgSu27g44hUu9ir0e1oG1z9oBQUVau+sf7R4Aleq20eeVqUkH3hQbAeZW9o7TnqTzc8wJadMwSQAkCBLahwq1vIjy5m6LatX3taEESASvtn1DfxBk6V3SqxUOLwT0lrWs2F/THm1FB1EJ1GEfoVPZ5TB16ib38CFm2LI50+wEAEpCtRVv7QYKWVhTh28bQye1FiJPyRx5FBT2lOnUsDdu0IyqFhIl3klOo3SFDeMjqsi8wyZuXSW2kn1I5N4by1PZqkmZt1Ju3sCBYx8mqaPYGiPblphQ7JZslPFx4heXlAlKTNNBLevx4ETEnTkKZLCFK1AAm+8Iy8mWplbhurT9SVHaByQeIoukqkajLLYcKkOAaSObRlU8ChpAKv1Ep3tGKyxeaqQmpVwqC7DQs30/iMrnZdqWQhaXS9rRe8c9vfoifsYqShwakkgq2JAjzhSU2CCSNt4ScmmpZ0NlJA97wm/UWC2EtK9V/V7xCkyNiU4ps7rIuBDH5qXSkodRso+lR8Q5cafdKphISUfeG5+WfCv2pR7+TCixMxwtiROKaN/wbNfptsJ0soV5+4iArkmKPNpphICyshAVyYgW61M0uoNO37ZCtLak35942Is0XH1OTpbSipSzYKD/mPkwBIxEodlldt5JSsG5+0OmwlQIS0lanEg9z2hGaYlqVOLVWFL7l7BJvzCko4ttfzjLZ0jZSfaHR9DQy0rSPlgvjc38wq4yhxoOtbKK"