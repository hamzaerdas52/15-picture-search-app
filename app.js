// Access key 
// 9EhJutdYidlkVQ84o8mugCnhyLrNILOLinDIL_nL1L8

const form = document.querySelector("#form-search");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const clearBtn = document.querySelector("#clearBtn");
const imageListWrapper = document.querySelector(".image-list-wrapper");

runEventListeners();

function runEventListeners() {
    form.addEventListener("submit", search);
}

function search(e) {
    
    const value = searchInput.value.trim();
    console.log(value);
    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID 9EhJutdYidlkVQ84o8mugCnhyLrNILOLinDIL_nL1L8"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach(image => {
            console.log(image.urls.small)
        });
    })
    .catch((err) => console.log(err))

    e.preventDefault();
}
