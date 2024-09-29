    //Fontion pour faire afficher les éléments du menu ( navigation )
    export function navigationPages(navigation){
        navigation.forEach(function(page) {
            let lienPage = `<a id="accueil" href="${page.url}">${page.titre}</a>`;

                navigateurPrincipal.insertAdjacentHTML("beforeend", lienPage);
                let elementNavHTML = navigateurPrincipal.lastElementChild;

            });
        
    }
    //Appel de la fonction our afficher la description dans la zone du produit vedette. Remplacer l'élément HTML qui était déjà là
    // navigationPages(navigation);
