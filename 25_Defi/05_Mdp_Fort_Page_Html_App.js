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
      document.write("<p>Félicitations, vous avez trouvé le mot de passe aléatoire !</p>");
    } else {
      document.write(`<p>Désolé, le mot de passe était : ${password}</p>`);
    }
  
    // Afficher le mot de passe dans la page HTML
    document.write(`<p>Le mot de passe aléatoire est : ${password}</p>`);
  }
  
  guessPassword();
  