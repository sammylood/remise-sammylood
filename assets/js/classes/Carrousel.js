// Class Carrousel
//constructor, afficherImage, avancer, reculer
class Carrousel {
    constructor(conteneurHTML, tableauImages) {
        //ConteneurHTML
        this.conteneurHTML = conteneurHTML;
        this.imageConteneur = this.conteneurHTML.querySelector(".image-principale");

        //Liste images a afficher
        this.tableauImages = tableauImages;

        //position à laquelle je suis rendu dans tableau
        this.position = 0;

        // this.conteneurHTML.addEventListener("click", this.onClicCarrousel);
        this.conteneurHTML.addEventListener("click", this.onClicCarrousel.bind(this));

        let imageAuDepart = this.tableauImages[this.position];
        this.afficherImage(imageAuDepart);

        console.log(this);
        let contexteClasse = this;

        window.setInterval(
            function () {
                this.avancer();
            }.bind(contexteClasse),
            3000
        );
    }
    onClicCarrousel(evenement) {
        let target = evenement.target;
        let bouton = target.closest("[data-direction]");

        if(bouton!=null){
            let direction = bouton.dataset.direction;
            if (direction == "1") {
                this.avancer();
            }else if(direction == "-1"){
                this.reculer();
            }
        }
    }
    /** -----------------mettre un seul event listener pour toute la page------------------ */

    // section.addEventListener("next, changeImage");

    // function onChange(event) {
    //         let target = event.target;
    //         let boutonNext = target.closest("")
    // }

    /** ----------------------------------- */

    //Fonction qui affiche une image
    afficherImage(source) {
        this.imageConteneur.src = source;
    }

    avancer() {
        this.position++;
        if (this.position >= this.tableauImages.length) {
            this.position = 0;
        }

        let image = this.tableauImages[this.position];
        this.afficherImage(image);
    }

    reculer() {
        this.position--;
        if (this.position < 0) {
            this.position = this.tableauImages.length - 1;
        }

        let image = this.tableauImages[this.position];
        this.afficherImage(image);
    }
    
}

export default Carrousel;
