// on crée un nombre entre 0 et 10
// 3 essaie pour deviner le mot
//isRight(n) true false
//guess()


function guessNumber() {
    // Générer un nombre aléatoire entre 1 et 10
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    // Initialiser une variable guessesLeft à 3 pour suivre le nombre de tentatives restantes
    let guessesLeft = 3;
  
    while (guessesLeft > 0) {
      // Demander à l'utilisateur de deviner un nombre entre 1 et 10
      const guess = parseInt(prompt("Devinez un nombre entre 1 et 10"));
  
      if (isNaN(guess)) {
        // Si la réponse de l'utilisateur n'est pas un nombre, afficher un message d'erreur
        alert("Veuillez entrer un nombre valide");
      } else if (guess === secretNumber) {
        // Si la réponse de l'utilisateur est égale à secretNumber, afficher un message de félicitations et retourner de la fonction
        alert("Félicitations, vous avez deviné le nombre !");
        return;
      } else {
        // Si la réponse de l'utilisateur n'est pas égale à secretNumber, décrémenter guessesLeft de 1 et afficher un message pour indiquer le nombre de tentatives restantes
        guessesLeft--;
        alert(`Désolé, ce n'est pas le bon nombre. Il vous reste ${guessesLeft} tentative(s).`);
      }
    }
  
    // Si l'utilisateur n'a pas deviné le nombre après 3 tentatives, afficher un message pour révéler le nombre secret
    alert(`Désolé, vous n'avez pas deviné le nombre. Le nombre était ${secretNumber}.`);
  }
  
  guessNumber();
  