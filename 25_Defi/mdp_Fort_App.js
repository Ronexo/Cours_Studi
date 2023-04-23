function generatePassword(length) {
    // Ensemble de caractères pour le mot de passe
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    // Générer un mot de passe aléatoire
    var password = "";
    for (var i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    // Vérifier si le mot de passe répond aux critères de complexité
    while (!(/[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password))) {
      password = "";
      for (var i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    }
    
    return password;
  }
  
  function returnSecretWord() {
    var password = generatePassword();
    var guess = prompt("Trouver le mot alétoire ! Il contient des caractère aléatoires");

    if (guess === password) {
        alert("Félicitation, vous avez trouvé le mot de passe aléatoire !");
    } else {
        alert("Désolé, le mot de passe était : " + password);
    }
  }

  var password = generatePassword(20); // Appeler la fonction avec la longueur souhaitée du mot de passe
  console.log(password); // Afficher le mot de passe dans la console
  