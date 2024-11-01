interface Question {
    question: string;
    options: string[];
    correctAnswer: number; // Indice de la réponse correcte (0 pour A, 1 pour B, etc.)
}

const questionnaire: Question[] = [
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
    },
    {
        question: "Quel est le plat préféré de Jet Black, qu'il tente souvent de préparer ?",
        options: ["A : Sushi", "B : Spaghetti", "C : Poulet Teriyaki", "D : Bœuf aux poivrons sans bœuf"],
        correctAnswer: 3 // Réponse D
    },
    {
        question: "Quel est le véritable nom de Faye Valentine ?",
        options: ["A : Julia", "B : Myra", "C : Alyssa", "D : Faye H. West"],
        correctAnswer: 3 // Réponse D
    },
    {
        question: "Dans quel épisode Spike affronte Vicious pour la première fois ?",
        options: ["A : Asteroid Blues", "B : Ballad of Fallen Angels", "C : Jupiter Jazz", "D : The Real Folk Blues"],
        correctAnswer: 1 // Réponse B
    },
    {
        question: "Quelle planète est la résidence principale de l'équipage du Bebop ?",
        options: ["A : Mars", "B : Jupiter", "C : Ganymède", "D : Vénus"],
        correctAnswer: 0 // Réponse A
    },
    {
        question: "Quel est le nom de l’organisation criminelle que Spike a quittée ?",
        options: ["A : Red Dragon", "B : White Tiger", "C : Blue Serpent", "D : Black Widow"],
        correctAnswer: 0 // Réponse A
    },
    {
        question: "Quel personnage est souvent associé à des airs au piano dans des moments clés de la série ?",
        options: ["A : Jet Black", "B : Spike Spiegel", "C : Vicious", "D : Ed"],
        correctAnswer: 1 // Réponse B
    },
    {
        question: "Quel est le nom complet de Radical Edward ?",
        options: ["A : Edward Wong Hau Pepelu Tivrusky IV", "B : Edward Longpaw Tivrusky II", "C : Radical Edward Smith", "D : Ed Tivrosky"],
        correctAnswer: 0 // Réponse A
    },
    {
        question: "Quel est le but de l’organisation Red Dragon à laquelle Vicious appartient ?",
        options: ["A : Dominer le système solaire", "B : Accumuler de la richesse", "C : Contrôler les activités criminelles", "D : Vivre en paix"],
        correctAnswer: 2 // Réponse C
    },
    {
        question: "Quelle est la spécialité de Faye Valentine lorsqu'elle cherche des informations ?",
        options: ["A : Manipulation", "B : Piratage informatique", "C : Combats au corps-à-corps", "D : Pilotage de vaisseau"],
        correctAnswer: 0 // Réponse A
    },
    {
        question: "Comment Edward rejoint-elle l'équipage du Bebop ?",
        options: ["A : Elle pirate leur vaisseau", "B : Elle est capturée", "C : Elle leur demande de l'aide", "D : Elle suit Ein"],
        correctAnswer: 0 // Réponse A
    },
    {
        question: "Quelle est la boisson favorite de Jet Black ?",
        options: ["A : Café", "B : Vin rouge", "C : Thé vert", "D : Whisky"],
        correctAnswer: 2 // Réponse C
    },
    {
        question: "Pourquoi Spike a-t-il des yeux de couleurs différentes ?",
        options: ["A : C'est une caractéristique génétique", "B : Un œil est artificiel", "C : Il porte une lentille de couleur", "D : C'est un effet de la gravité zéro"],
        correctAnswer: 1 // Réponse B
    },
    {
        question: "Quel est le nom de l'ex-compagne de Spike Spiegel ?",
        options: ["A : Faye", "B : Julia", "C : Alicia", "D : Miria"],
        correctAnswer: 1 // Réponse B
    },
    {
        question: "Quel épisode de la série est le seul entièrement centré sur Ein ?",
        options: ["A : Jamming with Edward", "B : Asteroid Blues", "C : Mushroom Samba", "D : Boogie Woogie Feng Shui"],
        correctAnswer: 2 // Réponse C
    },
    {
        question: "Quelle est la particularité d'Ein, le chien de l'équipage ?",
        options: ["A : Il est un chien cybernétique", "B : Il a des capacités intellectuelles accrues", "C : Il peut parler", "D : Il peut prédire le futur"],
        correctAnswer: 1 // Réponse B
    },
    {
        question: "Quel est l'arme de prédilection de Spike Spiegel ?",
        options: ["A : Fusil à pompe", "B : Pistolet", "C : Couteau de combat", "D : Fusil sniper"],
        correctAnswer: 1 // Réponse B
    },
    {
        question: "Comment Jet Black a-t-il perdu son bras ?",
        options: ["A : En sauvant Spike", "B : Lors d'une mission de police", "C : En affrontant Vicious", "D : Dans un accident de vaisseau"],
        correctAnswer: 1 // Réponse B
    },
    {
        question: "Quelle est la devise emblématique de Spike Spiegel ?",
        options: ["A : « Bang. »", "B : « See you, space cowboy... »", "C : « I’m just living in the moment. »", "D : « Let’s jam. »"],
        correctAnswer: 1 // Réponse B
    }
];


let currentQuestionIndex: number = 0; // Indice de la question courante
let score: number = 0; // Score
let chosenAnswer: number | null = null; // Variable pour stocker la réponse choisie

// Sélection des éléments HTML
const fin = document.getElementById('fin') as HTMLParagraphElement;
const appreciation = document.getElementById('appreciation') as HTMLParagraphElement;
const questionElement = document.getElementById('question') as HTMLParagraphElement;
const conteur = document.getElementById('conteur') as HTMLParagraphElement;
const block = document.getElementById('block') as HTMLParagraphElement;
const scoreElement = document.getElementById('score') as HTMLSpanElement;
const questionTextElement = document.getElementById('questionText') as HTMLParagraphElement;
const validationButton = document.getElementById('Validation') as HTMLDivElement;
const optionsContainer = document.getElementById('options') as HTMLDivElement;

// Fonction pour afficher une question
function displayQuestion(index: number) {
    const questionData = questionnaire[index];
    questionTextElement.textContent = questionData.question;

    // Vider le conteneur des options précédentes
    optionsContainer.innerHTML = '';

    // Afficher les options
    questionData.options.forEach((option, idx) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'bouton';
        optionDiv.textContent = option;

        // Ajout de l'écouteur d'événements pour changer la couleur
        optionDiv.addEventListener('click', () => {
            chosenAnswer = idx; // Indice de la réponse choisie
            
            // Retirer la classe active de tous les boutons
            const buttons = document.querySelectorAll('.bouton');
            buttons.forEach(b => b.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            optionDiv.classList.add('active');
            console.log(`La réponse sélectionnée est : ${idx + 1}`); // Affiche le numéro de la réponse
        });

        optionsContainer.appendChild(optionDiv);
    });
}

// Fonction qui vérifie si la réponse est correcte
function isCorrectAnswer(index: number, answer: number): boolean {
    return questionnaire[index].correctAnswer === answer; // Compare la réponse avec la valeur dans le questionnaire
}

// Écouteur d'événements pour le clic sur le bouton de validation
validationButton.addEventListener('click', () => {
    // Vérification pour s'assurer que le quiz est terminé
    if (currentQuestionIndex >= questionnaire.length) {
        console.log("Le quiz est déjà terminé."); // Empêche les actions supplémentaires si le quiz est terminé
        //const finalMessage = `Bien joué ! Votre score est de ${score} sur ${questionnaire.length}.`;
        //console.log(finalMessage); // Affiche le message final dans la console
    }

    if (chosenAnswer !== null && isCorrectAnswer(currentQuestionIndex, chosenAnswer)) {
        score++; // Incrémente le score
        scoreElement.textContent = `${score}`; // Met à jour le score affiché
        console.log('Réponse correcte ! Score :', score); // Affiche le score
    } else if (chosenAnswer !== null) {
        console.log(`La réponse ${chosenAnswer + 1} est incorrecte.`); // Affiche un message si la réponse est incorrecte
    }

    // Incrémente le numéro de la question
    currentQuestionIndex++;
    if (currentQuestionIndex < questionnaire.length) {
        displayQuestion(currentQuestionIndex); // Affiche la prochaine question
        questionElement.textContent = `${currentQuestionIndex + 1}`; // Met à jour le numéro de la question affiché
    } else {
        // Affichage final avec "Bien joué !"
        const finalMessage = `Bien joué ! Votre score est de ${score} sur ${questionnaire.length}.`;
        fin.textContent = `Votre score est de ${score} / ${questionnaire.length}`; // Met à jour le score affiché
        questionTextElement.textContent = finalMessage; // Affiche le message "Bien joué !" avec le score
        optionsContainer.innerHTML = ''; // Vider les options
        questionElement.style.display = 'none';
        block.style.display = 'none';
        conteur.style.display = 'none';
        if (score < (questionnaire.length - 11)) {
            appreciation.textContent = "Ah… Perdu dans l’espace ! On dirait que la chasse aux réponses n’était pas pour toi. Reste en orbite, cow-boy, la prochaine fois, tu toucheras peut-être ta prime !";
        } else if (score >= (questionnaire.length - 11) && score < (questionnaire.length - 2)) {
            appreciation.textContent = "Pas mal, cow-boy ! Tu t’es pris quelques balles, mais t’as survécu. Comme Spike après un bar fight, tu t’en sors avec style... et un peu de casse !";
        } else if (score >= (questionnaire.length - 2)) {
            appreciation.textContent = "Bang ! En plein dans le mille ! On dirait que t’es prêt pour le Bebop, chasseur de primes. Tu as dompté ce quiz comme un pro des étoiles. Bien joué !";
        }
        


    }

    // Réinitialise la réponse choisie
    chosenAnswer = null;
});


// Afficher la première question au chargement
displayQuestion(currentQuestionIndex);
