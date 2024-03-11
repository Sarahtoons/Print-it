// Sélection des flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Ajout des écouteurs d'événements sur les flèches
arrowLeft.addEventListener('click', () => {
    showPreviousImage();
});

arrowRight.addEventListener('click', () => {
    showNextImage();
});

// Sélection de l'élément du carrousel
let carousel = document.querySelector('.banner-img');

let textslider = document.querySelector('.textslider');

const slides = [
    {
        "image": "assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Indice de l'image actuellement affichée
let currentIndex = 0;

// Sélection du conteneur des dots
const dotsContainer = document.querySelector('.dots');

// Création des dots
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        handleDotClick(index);
    });
    dotsContainer.appendChild(dot);
});

// Fonction pour mettre à jour les dots
function updateDots() {
    const dots = document.querySelectorAll('.dot');

    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Fonction pour gérer le clic sur les dots
function handleDotClick(index) {
    currentIndex = index;
    carousel.src = slides[currentIndex].image;
    textslider.innerHTML = slides[currentIndex].tagLine;
    updateDots();
}

// Fonction pour passer à l'image précédente dans le carrousel
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    carousel.src = slides[currentIndex].image;
    textslider.innerHTML = slides[currentIndex].tagLine;
    updateDots();
}

// Fonction pour passer à l'image suivante dans le carrousel
function showNextImage() {
    currentIndex = (currentIndex + 1 + slides.length) % slides.length;
    carousel.src = slides[currentIndex].image;
    textslider.innerHTML = slides[currentIndex].tagLine;
    updateDots();
}


// Appel initial pour mettre à jour les dots
updateDots();
