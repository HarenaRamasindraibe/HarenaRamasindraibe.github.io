//Fonction qui permet d'écrire un texte progressivement et automatiquement//

function createTypingEffect(text, elementOuEcrire) {
    let i = 0;
    const speed = 50;

    function writeText() {
        const element = document.querySelector(elementOuEcrire);
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(writeText, speed);
        }
    }

    function checkScroll() {
        const textContainer = document.querySelector(elementOuEcrire);
        const rect = textContainer.getBoundingClientRect();
        const isTextVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isTextVisible && i === 0) {
            // Start the typing effect when the text becomes visible
            writeText();
        }
    }

    window.addEventListener('load', function () {
        checkScroll();
    });

    window.addEventListener('scroll', function () {
        checkScroll();
    });
}

// Usage
createTypingEffect("Mes compétences", 'h1#titre');
createTypingEffect("Outils utilisés", 'h1#titre2');
createTypingEffect("Quelques projets", 'h1#titre3');
createTypingEffect(" À propos de moi ;)", 'h1#titre4');
createTypingEffect("Et voici quelques photos que j'ai réalisé à l'argentique...", 'h1#titre5');
createTypingEffect("Envie de discuter ou de proposer une idée, un projet ? Contactez - moi !", 'p#contact-text');



//Fonction qui fait en sorte que chaque bouton du menu renvoie vers la rubrique dédiée//

document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les éléments du menu
    let quiSuisJeButton = document.querySelector(".menu-button .button:nth-child(1)");
    let mesCreationsButton = document.querySelector(".menu-button .button:nth-child(2)");
    let contactButton = document.querySelector(".menu-button .button:nth-child(3)");

    // Récupérer les éléments cibles
    let biographySection = document.getElementById("biography");
    let creationsSection = document.getElementById("titre3");
    let contactSection = document.querySelector(".contact-title");

    // Ajouter des écouteurs d'événements pour chaque bouton
    quiSuisJeButton.addEventListener("click", function() {
        biographySection.scrollIntoView({ behavior: "smooth" });
    });

    mesCreationsButton.addEventListener("click", function() {
        creationsSection.scrollIntoView({ behavior: "smooth" });
    });

    contactButton.addEventListener("click", function() {
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
})










