// ====================
// CARRUSEL AUTOMÁTICO
// ====================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);


// ====================
// LIGHTBOX
// ====================

const galleryImages = document.querySelectorAll(".card img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", e => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});