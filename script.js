var questionnaire = [
    {
        question: "Quel est le nom du vaisseau spatial utilisé par l'équipage du Bebop ?",
        options: ["A : Red Dragon", "B : Swordfish II", "C : Bebop", "D : Hammerhead"],
        correctAnswer: 2 // Réponse C
    },
    {
        question: "Qui est le personnage principal de la série ?",
        options: ["A : Jet Black", "B : Faye Valentine", "C : Spike Spiegel", "D : Edward Wong"],
        correctAnswer: 2 // Réponse C
    },
    {
        question: "Quel est le surnom du chien d'Ein ?",
        options: ["A : Corgi", "B : Beagle", "C : Poodle", "D : Bulldog"],
        correctAnswer: 0 // Réponse A
    },
    {
        question: "Quel est le nom de la chanson emblématique du générique d'ouverture ?",
        options: ["A : Tank!", "B : Green Bird", "C : The Real Folk Blues", "D : Rain"],
        correctAnswer: 0 // Réponse A
    },
    {
        question: "Quel est le métier principal de l'équipage du Bebop ?",
        options: ["A : Chasseurs de primes", "B : Commerçants", "C : Explorateurs", "D : Diplomates"],
        correctAnswer: 0 // Réponse A
    },
    {
        question: "Quel est le nom du partenaire de Spike ?",
        options: ["A : Radical Edward", "B : Faye Valentine", "C : Jet Black", "D : Vicious"],
        correctAnswer: 2 // Réponse C
    },
    {
        question: "Quelle est la principale motivation de Spike tout au long de la série ?",
        options: ["A : Trouver un trésor", "B : Venger son passé", "C : Devenir un chasseur de primes", "D : Voyager à travers la galaxie"],
        correctAnswer: 1 // Réponse B
    },
    {
        question: "Quel personnage est un hacker brillant et un enfant prodige ?",
        options: ["A : Faye Valentine", "B : Edward Wong", "C : Ein", "D : Spike Spiegel"],
        correctAnswer: 1 // Réponse B
    }
];
var tmp = 0; // Question courante
var score = 0; // Score
var reponseChoisie = null; // Variable pour stocker la réponse choisie
// Sélection des éléments HTML
var questionElement = document.getElementById('question');
var scoreElement = document.getElementById('score');
var questionTextElement = document.getElementById('questionText');
var boutonValidation = document.getElementById('Validation');
var optionsContainer = document.getElementById('options');
// Fonction pour afficher une question
function afficherQuestion(index) {
    var questionData = questionnaire[index];
    questionTextElement.textContent = questionData.question;
    // Vider le conteneur des options précédentes
    optionsContainer.innerHTML = '';
    // Afficher les options
    questionData.options.forEach(function (option, idx) {
        var optionDiv = document.createElement('div');
        optionDiv.className = 'bouton';
        optionDiv.textContent = option;
        // Ajout de l'écouteur d'événements pour changer la couleur
        optionDiv.addEventListener('click', function () {
            reponseChoisie = idx; // Indice de la réponse choisie
            // Retirer la classe active de tous les boutons
            var boutons = document.querySelectorAll('.bouton');
            boutons.forEach(function (b) { return b.classList.remove('active'); });
            // Ajouter la classe active au bouton cliqué
            optionDiv.classList.add('active');
            console.log("La r\u00E9ponse s\u00E9lectionn\u00E9e est : ".concat(idx + 1)); // Affiche le numéro de la réponse
        });
        optionsContainer.appendChild(optionDiv);
    });
}
// Fonction qui vérifie si la réponse est correcte
function BonneReponse(index, reponse) {
    return questionnaire[index].correctAnswer === reponse; // Compare la réponse avec la valeur dans le questionnaire
}
// Écouteur d'événements pour le clic sur le bouton de validation
boutonValidation.addEventListener('click', function () {
    if (reponseChoisie !== null && BonneReponse(tmp, reponseChoisie)) {
        score++; // Incrémente le score
        scoreElement.textContent = "".concat(score); // Met à jour le score affiché
        console.log('Réponse correcte ! Score :', score); // Affiche le score
    }
    else {
        console.log("La r\u00E9ponse ".concat(reponseChoisie + 1, " est incorrecte.")); // Affiche un message si la réponse est incorrecte
    }
    // Incrémente le numéro de la question
    tmp++;
    if (tmp < questionnaire.length) {
        afficherQuestion(tmp); // Affiche la prochaine question
        questionElement.textContent = "".concat(tmp + 1); // Met à jour le numéro de la question affiché
    }
    else {
        console.log("Quiz terminé !");
        // Vous pouvez afficher un message de fin ou réinitialiser le quiz ici
    }
    // Réinitialise la réponse choisie
    reponseChoisie = null;
});
// Afficher la première question au chargement
afficherQuestion(tmp);
