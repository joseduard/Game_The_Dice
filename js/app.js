function createDiceInDom() {
  // je cree ma div
  var myDice = document.createElement("div");
  // on ajoute la class dice a cette div
  myDice.classList.add("dice");
  // on ajoute la div dans la div deja present qui possède l'id player
  var playerBoard = document.getElementById("player");
  playerBoard.appendChild(myDice);

  function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var roll = generateRandomValue(1, 6);
  console.log(roll);

  //On se sert du nombre obtenu pour modifier la position de l'arrière plan du dé
  // 1ère question a se poser : comment on modifie la position de l'arrière plan.
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
}
// Maintenant faudrait lancer plusieurs dés

// Il faudrait demander à l'utilisateur de saisir combien de dés il veut lancer

var numberOfDice = prompt("Combien de dé désirez-vous lancer ? ");
console.log('La valur de numberOfDice est:' + numberOfDice)
// On pourrait utiliser la fonction contenant les instructions à la création d'un dé
// createDiceInDom

// Et enfin executer la fonction autant de fois que de dés demandés par l'utilisateur
// Pour un compteur qui commence à 0, tant que ce compteur est inférieur au nombre de dé demander par l'utilisateur, on exécute la liste d'instruction et on icrémente le compteur
// le for /initialize counter/ en tant que condition true/ update counter {alors ti fait quelque chose}
for (var diceCounter = 0; diceCounter < numberOfDice; diceCounter++) {
    console.log('La valeur de diceCounter au debut est:' + diceCounter)
    
    // Un affichage nous permettant de vérifier chaque création de dé
    diceCounter + 1;
    console.log('Création du dé n°' + (diceCounter + 1));
    // On exécute la function charger de créer un dé dans le DOM
    createDiceInDom();
} 