function generatePassword(length = 12, uppercase = true, lowercase = true, numbers = true, symbols = true) {
    // Ensemble de caractères pour le mot de passe
    let chars = "";
  
    if (uppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
      chars += "0123456789";
    }
    if (symbols) {
      chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
  
    // Générer un mot de passe aléatoire
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    // Vérifier si le mot de passe répond aux critères de complexité
    while (!(uppercase && /[A-Z]/.test(password) && lowercase && /[a-z]/.test(password) && numbers && /\d/.test(password) && symbols && /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password))) {
      password = "";
      for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    }
  
    return password;
  }
  
  function guessPassword() {
    // Générer un mot de passe aléatoire
    const password = generatePassword();
  
    // Demander à l'utilisateur de deviner le mot de passe
    const guess = prompt("Trouvez le mot de passe aléatoire ! Il contient des caractères aléatoires : ");
  
    // Vérifier la réponse de l'utilisateur
    if (guess === password) {
      console.log("Félicitations, vous avez trouvé le mot de passe aléatoire !");
    } else {
      console.log(`Désolé, le mot de passe était : ${password}`);
    }
  
    // Afficher le mot de passe dans la console
    console.log(password);
  }
  
  guessPassword();
  