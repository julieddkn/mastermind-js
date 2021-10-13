// créer un array avec les différentes couleurs possibles
// let colors = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '⚫️'];
let colors = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// créer un random de 4 éléments du tableau
let code = [];
let codeLenght = 4;
function newRandomCode(nbrOfColors) {
    for (let index = 0; index < nbrOfColors; index++) {
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        code.push(newColor);
    }
    return code;
}
code = newRandomCode(codeLenght);
console.log(code);

// mettre en place un compteur
let count = 10;
let userCount = document.querySelector(".count");
userCount.innerText = count;

// demander au joueur une première combinaison
// on utiliser un input qu'on récupère afin de checker
function checkUserCode() {
    let userCode = document.getElementById("userCode").value;
    let hint = document.querySelector(".hint");
    let pastGuess = "";
    let lastGuess = document.querySelector(".board").innerHTML = "<li>" + userCode + "</li>";
    pastGuess = pastGuess + lastGuess;
    if (userCode.length > codeLenght || userCode.length < codeLenght) {
        hint.innerText = "Ce n'est pas le bon nombre d'éléments.";
    }
    for (let index = 0; index < code.length; index++) {
        let color = code[index];
        if (userCode.indexOf(color) == index) {
            console.log(color + " bon index et bonne couleur");
        }
    }
    
}




// si tout bon, gagné

// créer une varaible indice qui sera concaténée puis réaffectée à chaque fois

// si une couleur bien placée -> indice qui le dit

// si une couleur mal placée -> indice qui le dit

// si tout est faux -> indice qui le dit







// BONUS
// Transformer les lettres en emoji
// Ajouter un historique des essais
// Faire un système de form pour personnaliser le jeu (nombre d'essais, de couleurs).
// Faire également un select pour ajouter les couleurs plutôt que les taper
// Gérer les erreurs
// Optimisation du code
// CSS TROP COOL
// Mise en ligne