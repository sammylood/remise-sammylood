import { init as initModale, afficherModale, cacherModale } from "../components/modale.js";
import Carrousel from "../classes/Carrousel.js";
import ScrollAnimator from "../classes/ScrollAnimator.js";


//VARIABLES ET SÉLÉCTIONS HTML
let nav = document.querySelector("#dark-mode");

    //modale
const modale = document.querySelector(".modale-conteneur");
const fermer = document.querySelector(".fermer-modale");

    //carrousel
const avancer = document.querySelector("[data-direction]");


    //Event listeners
nav.addEventListener("click", function (event) {
    let bouton = event.target.closest("[data-mode]");
    
    if (bouton !== null) {
        document.body.dataset.theme = bouton.dataset.mode;
    }
});

nav.addEventListener("click", function (event) {
    let bouton = event.target.closest("[data-mode]");

    if (bouton !== null) {
        document.body.dataset.theme = bouton.dataset.mode;
        localStorage.setItem("theme", bouton.dataset.mode);
        changerModeSombreClair();
    }
});


//FONCTIONS
function init() {
    let theme = localStorage.getItem("theme");
    if (theme !== null) {
        document.body.dataset.theme = theme;
    }

    //Carrousel 
    let carrouselConteneur = document.querySelector("[data-carrousel]");
    let tableauImages = ["assets/img/marcus-miller-basses.jpg", "assets/img/american-basses.jpg"];

    let carrousel = new Carrousel(carrouselConteneur, tableauImages);

    let zone = null;
    let cibles = document.querySelectorAll(".from-bottom");
    new ScrollAnimator(zone, cibles); 

        };

    //ajouter une classe 
function changerModeSombreClair(){
    let theme = localStorage.getItem("theme");
    if (theme == "light") {
        nav.innerHTML = `<div class="bouton" data-mode="dark">Mode sombre</div>`;
    }else if (theme == "dark") {
        nav.innerHTML = `<div class="bouton" data-mode="light">Mode clair</div>`;
}
}


//ÉXÉCUTION
init();
initModale();
setTimeout(afficherModale, 5000);
changerModeSombreClair();





