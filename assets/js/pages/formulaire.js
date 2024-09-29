// Variables
let sectionActuelle = 0;
let formulaireValide = false;
const donnees = {};




// Éléments HTML
const formulaire = document.querySelector("#formulaire-client");
const sectionResume = document.querySelector(".resume");
const champs = document.querySelectorAll("input, textarea, select");
let nav = document.querySelector("#dark-mode");
// - Sections
const sections = formulaire.querySelectorAll("section");

// - Boutons
const boutonsAvancer = formulaire.querySelectorAll("[data-direction='1']");
const boutonsReculer = formulaire.querySelectorAll("[data-direction='-1']");




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
        affichageMode();
    }
});



//Fonctions
function init() {
    formulaire.addEventListener("submit", onSubmit);
    champs.forEach(function (champ) {
        champ.addEventListener("change", onChangementChamp);
    });
}

function onSubmit(evenement) {
    evenement.preventDefault();

    if (formulaireValide) {
        // formulaire.submit();
        // formulaire.reset();
    }
}

function onSubmit(evenement) {
    evenement.preventDefault();
    formulaireValide = formulaire.checkValidity();
    if (formulaireValide) {
        console.log("Formulaire envoyé");


    }
}

function onChangementChamp(evenement) {
    //Élément qui déclenche l'événement
    const declencheur = evenement.currentTarget;
    const name = declencheur.name;
    const value = declencheur.value;
    const type = declencheur.type;
    const checked = declencheur.checked;

  //Gestion des champs avec exceptions
  if (type == "checkbox") {
    //Activer le champs date
    const champMessage = formulaire.querySelector("[name='message']");
    if (checked == true) {
        champMessage.disabled = false;
        champMessage.required = true;
    } else {
        champMessage.disabled = true;
        champMessage.required = false;
        champMessage.value = "";
    }
}

    console.log(name, value, checked);
    if (type == "checkbox") {
        afficherResumeCheckbox(name, checked);
    } else {
        afficherResume(name, value);
    }
}

function afficherResumeCheckbox(nomChamp, estCoche) {
    const champResume = sectionResume.querySelector(`[data-name="${nomChamp}"]`);
    console.log(champResume);
    if (champResume !== null) {
        let texte = estCoche ? "OUI" : "NON";
        champResume.textContent = texte;
    }
}

function afficherResume(nomChamp, valeur) {
    const champResume = sectionResume.querySelector(`[data-name="${nomChamp}"]`);
    // console.log(champResume);
    if (champResume !== null) {
        champResume.textContent = valeur;
    }
}







//Fonctions
function navigation() {
    boutonsReculer.forEach(function (bouton) {
        bouton.addEventListener("click", reculerSection);
    });

    boutonsAvancer.forEach(function (bouton) {
        bouton.addEventListener("click", avancerSection);
    });
   
    formulaire.addEventListener("submit", onSubmit);
    toutCacher();
    afficherSection();
}





function afficherSection() {
    toutCacher();
    sections[sectionActuelle].classList.remove("invisible");
}


function toutCacher() {
    sections.forEach(function (element) {
        element.classList.add("invisible");
    });
}

function avancerSection(evenement) {
    const declencheur = evenement.currentTarget;
    sectionActuelle++;


    if (sectionActuelle < sections.length) {
        afficherSection();
    }
}

function reculerSection(evenement) {
    const declencheur = evenement.currentTarget;
    sectionActuelle--;
    console.log("bouton appuyé");
    console.log(sectionActuelle);

    if (sectionActuelle >= 0) {
        afficherSection();
    }else{
      bouton.classList.remove("invisible");
    }
}








//ajouter une classe au mode au bouton pour le mode sombre
function affichageMode(){
    let theme = localStorage.getItem("theme");
    if (theme == "light") {
        nav.innerHTML = `<div class="bouton" data-mode="dark">Mode sombre</div>`;
    }else if (theme == "dark") {
        nav.innerHTML = `<div class="bouton" data-mode="light">Mode clair</div>`;
}
}

// Exécution
init();
// Exécution
navigation();
affichageMode();

