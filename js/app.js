// Avec cette fucntion je vais créer mon nombre aleatoire
function generateRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// le parametre targetId va contenir soit "player" soit "dealer"
function createDiceInDom(targetId) {
  console.log(
    "Je suis la valeur de target id apres le querySelectro " + targetId
  );
  // je vais créer ma div myDice, ella va contenir l'element div avec la class dice
  var myDice = document.createElement("div");
  // on ajoute la class dice a cette div
  myDice.classList.add("dice");
  // on ajoute la div dans la div deja present qui possède l'id player
  // Afin de dynamiser la récupération du plateau de jeu en fonction du paramètre, je remplace la valeur en dur "player" par la valeur du paramètre targetId.
  // Par contre il faut conserver le # devant la valeur afin de sélectionner un élément par l'id
  var board = document.querySelector("#" + targetId);
  // je vais ajouter ma div avce la class dice dans chacun des div player et dealer
  board.appendChild(myDice);
  // je vais déclancher la function generateRandomValue en lui donnan comment arguments 1 et 6
  var roll = generateRandomValue(1, 6);
  console.log(roll);
  var angle = generateRandomValue(0, 90);

  //On se sert du nombre obtenu pour modifier la POSITION de l'arrière plan du dé
  // largeur du dé : 100 pixels
  // propriété css pour bouger le fond horizontalement : background-position-x
  // quand je bouge de -200px j'obtiens 3, -300px : 4
  // Donc je peux en conclure qu'il faille que soustraire 1 au lancer de dé et que je le multiplie par -100
  // (roll - 1) * -100
  var diceBackgroundHorizontalPosition = (roll - 1) * -100;
  console.log("Valeur de dice: " + diceBackgroundHorizontalPosition);

  // Maintenant il va falloir appliquer cette valeur à la propriété background-position-x du dé en précisant que ce sont des pixels
  //! Attention en JavaScript les propriété css sont réécrite en camelCase, car il ne peux pa utiliser le kebab-case
  // Je rajoute le x, car je ne modifie que la position horizontal
  // 1. J'utilise l'élément DOM de mon dé contenu dans la variable "die". Je peux utiliser cette variable car l'élément évolue à l'intérieur de celle-ci et qu'il valable du début à la fin de mon script
  // 2. je rentre dans la propriété style (il correspond à l'attribut style en HTML)
  // 3. j'ajoute/modifie la valeur de la propriété background-position-x du style avec la valeur calculer
  // 4. Je concatène l'unité 'px' pour préciser que le décalage ce fait avec cette unité
  myDice.style.backgroundPositionX = diceBackgroundHorizontalPosition + "px";
  myDice.style.transform = "rotate(" + angle + "deg)";
}
// Maintenant faudrait lancer plusieurs dés
// Il faudrait demander à l'utilisateur de saisir combien de dés il veut lancer

//var numberOfDice = prompt("Combien de dé désirez-vous lancer ? ");
//console.log("La valur de numberOfDice est:" + numberOfDice);
// On pourrait utiliser la fonction contenant les instructions à la création d'un dé
// createDiceInDom

function play(numberOfDice) {
  cleanBoard();
  console.log("que hago yo ?" + cleanBoard)
  // Et enfin executer les fonction autant de fois que de dés demandés par l'utilisateur
  // Pour un compteur qui commence à 0, tant que ce compteur est inférieur au nombre de dé demander par l'utilisateur, on exécute la liste d'instruction et on incrémente le compteur
  // A chaque tour de boucle on créer un dé pour jouer et un dé pour le dealer
  // le for /initialize counter/ en tant que condition true/ update counter {alors ti fait quelque chose}
  for (var diceCounter = 0; diceCounter < numberOfDice; diceCounter++) {
    console.log("La valeur de diceCounter au debut est:" + diceCounter);
    // On exécute la function charger de créer un dé dans le DOM avecs ses arguments
    // On créer un dé pour le dealer et pour le player
    createDiceInDom("player");
    createDiceInDom("dealer");
  }
}

function cleanBoard() {
  // la propriété textContent permet de modifier le contenu texteule d'une balise
  // Donc en le spécifiant une string vide, il va se retrouver sans rien dedans
  // le résultat dans le DOM sera :
  // <div class="board" id="player"></div>
  document.querySelector('#player').textContent = '';
  // La propriété innerHTML fais exactement la même chose mais en interprêtant le HTML. Pour notre cas présent cela n'a pas de différence avec textContent
  document.querySelector('#dealer').innerHTML = '';
}

// C'est ici que l'on doit capturer le click sur le bouton

var playButton = document.querySelector('#play');

function launchPlay (params) {
  play(5)
}

// On utilise la méthode "ajouter un écouteur d'evenement"
// 1-dans le premier argument on le precise quel évenement on veut écouter (click)
// 2-comme deuxieme argument on lui donne la function sans l'executer play, il devra executer au momeny l'évenement sera déclanche. ç'appelle "Handler"
playButton.addEventListener('click', launchPlay )
