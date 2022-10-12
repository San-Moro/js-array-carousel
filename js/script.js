// **MILESTONE 2**
// inseriamo tutte le immagini dinamicamente con js

const imagesSlider = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"]

const col = document.querySelector(".col")


for (let i = 0; i < imagesSlider.length; i++) {
    const element = `
    <div class="image-container">
        <img src="${imagesSlider[i]}" alt="">
    </div>`;
    col.innerHTML += element;
}

// Stato di partenza
// active su prima img

const imageContainer = document.getElementsByClassName("image-container");

imageContainer[0].classList.add("active");
