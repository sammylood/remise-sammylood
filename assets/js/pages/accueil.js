// import { navigationPages } from "../components/nav-principale.js";

//VARIABLES
const conteneurHTML = document.querySelector(".liste-produits ")
const boutonTriAscendant = document.querySelector(".tri-ascendant")
const boutonTriDescendant = document.querySelector(".tri-descendant")
const boutonTriPrix = document.querySelector(".tri-prix")
const navigateurPrincipal = document.querySelector(".nav-right")
const dossierImg = "assets/img/"

let nav = document.querySelector("#dark-mode");

// FONCTIONS 
  //Fonction pour ordonner les éléments d'un tableau par ordre alphabétique ascendant
  function trierAscendant(basses){  
    // utilisation de la méthode sort() qui compare des éléments spécifique du tableau (nom du modèle)
    basses.sort((a, b) => {
        // Comparer les 2 valeurs
        if (a.model < b.model) {
            return -1;
        }
        if (a.model > b.model) {
            return 1;
        }
        return 0;
    });
    // console.log(basses);
}
//Fonction pour ordonner les éléments d'un tableau par ordre alphabétique descendant
function trierDescendant(basses){  
   // utilisation de la méthode sort() qui compare des éléments spécifique du tableau (nom du modèle)
    basses.sort((a, b) => {
        // Comparer les 2 valeurs
        if (a.model > b.model) {
            return -1;
        }
        if (a.model < b.model) {
            return 1;
        }
        return 0;
    });
    // console.log(basses);
}

//Fonction pour ordonner les éléments d'un tableau par ordre de nombre
function trierPrix(basses){  
    // utilisation de la méthode sort() qui compare des éléments spécifique du tableau (prix)
    basses.sort((a, b) => {
        // Comparer les 2 valeurs
        if (a.prix < b.prix) {
            return -1;
        }
        if (a.prix > b.prix) {
            return 1;
        }
        return 0;
    });
    // console.log(basses);
}


//Fonction pour faire afficher la liste de produits
function afficherBasse(basses) {
    // console.log(basses);
  
conteneurHTML.innerHTML = "";
    basses.forEach(function(basse) {
        let contenuCarte = `<div class="carte-produit" id="${basse.id}">
                <a href="#">
                <img src="${dossierImg}` + `${basse.basseImg}" alt="${basse.model} ${basse.type}">
                    <h1 class="titre-produit">${basse.model} </h1>
                    <p class="description-produit"> ${basse.type} <br/>n°${basse.SKU}</p>
                    <p class="prix-produit">${basse.prix}\$</p>
                </a>
            </div>`;

            conteneurHTML.insertAdjacentHTML("beforeend", contenuCarte);
            let elementHTML = conteneurHTML.lastElementChild;

            elementHTML.addEventListener("click",function(){
                //Fonction our afficher la description dans la zone du produit vedette
                afficherDescription(basse)
            });

        });
    
    }
    //Appel de la fonction qui affiche la liste de produits
    afficherBasse(basses);

    //Appel de la fonction qui trie et affiche les produits triés de façon ascendant
    boutonTriAscendant.addEventListener("click",function(){
        trierAscendant(basses)
        afficherBasse(basses)
    }); 

    //Appel de la fonction qui trie et affiche les produits triés de façon descendant
    boutonTriDescendant.addEventListener("click",function(){
        trierDescendant(basses)
        afficherBasse(basses)
    }); 

 //Appel de la fonction qui trie et affiche les produits triés par prix
    boutonTriPrix.addEventListener("click",function(){
        trierPrix(basses)
        afficherBasse(basses)
    });  
    
    //Fonction pour afficher la description dans la zone du produit vedette. Remplacer l'élément HTML qui était déjà là
    function afficherDescription(basseInfo){

        let nomBasse = document.querySelector(".titre-produit-vedette");
        let descriptionBasse = document.querySelector(".description-produit-vedette");
        let prixBasse = document.querySelector(".prix-produit-vedette");
        let imgBasse = document.getElementById("imageVedette");
        let nouveauimgBasse = dossierImg + basseInfo.basseImg;
        // console.log(basseInfo.basseImg);
        // console.log("var" + nouveauimgBasse);
        imgBasse.src = nouveauimgBasse;
        nomBasse.textContent = basseInfo.model;
        // console.log(imgBasse);
        descriptionBasse.textContent = basseInfo.type + " n°" + basseInfo.SKU;
        prixBasse.textContent = basseInfo.prix + "$";
        // console.log(basseInfo);
    }


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


//ajouter une classe 
function affichageMode(){
    let theme = localStorage.getItem("theme");
    if (theme == "light") {
        nav.innerHTML = `<div class="bouton" data-mode="dark">Mode sombre</div>`;
    }else if (theme == "dark") {
        nav.innerHTML = `<div class="bouton" data-mode="light">Mode clair</div>`;
}
}

affichageMode();

// function init(){
//     navigationPages();
// }
// init();