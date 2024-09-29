/* */

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
