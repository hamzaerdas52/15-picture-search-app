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
    clearBtn.addEventListener("click", clear);
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
                //console.log(image.urls.small)
                addImageToUI(image.urls.small);
            });
        })
        .catch((err) => console.log(err))

    e.preventDefault();
}

function addImageToUI(url) {
    const col = document.createElement("div");
    col.className = "col-md-4"

    const div = document.createElement("div");
    div.className = "card m-3";

    const image = document.createElement("img");
    image.src = url;
    image.width = "400";
    image.height = "300";
    image.className = "card-img thumbnail";

    div.appendChild(image);
    col.appendChild(div);
    imageListWrapper.appendChild(col);
}

function clear() {
    searchInput.value = "";
    imageListWrapper.innerHTML = "";
}
