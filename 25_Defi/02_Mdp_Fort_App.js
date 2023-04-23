function generateWord() {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
    var wordLength = Math.floor(Math.random() * (16 - 8 + 1)) + 8; // Choisit une longueur de mot aléatoire entre 8 et 16 caractères
    var word = "";
  
    // Génère le mot aléatoire
    for (var i = 0; i < wordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      word += characters.charAt(randomIndex);
    }
  
    return word;
  }
  
  function playGame() {
    var secretWord = generateWord();
    var guess = prompt("Trouvez le mot aléatoire ! Il contient entre 8 et 16 caractères aléatoires.");
  
    if (guess === secretWord) {
      alert("Félicitations, vous avez trouvé le mot aléatoire !");
    } else {
      alert("Désolé, le mot aléatoire était : " + secretWord);
    }
  }
  
  playGame();
  