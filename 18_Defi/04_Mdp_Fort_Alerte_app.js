/**
 * Génère un mot de passe aléatoire qui répond aux critères de complexité.
 * @param {number} length - La longueur souhaitée du mot de passe (par défaut : 12).
 * @param {boolean} uppercase - Si true, inclut des lettres majuscules dans le mot de passe (par défaut : true).
 * @param {boolean} lowercase - Si true, inclut des lettres minuscules dans le mot de passe (par défaut : true).
 * @param {boolean} numbers - Si true, inclut des chiffres dans le mot de passe (par défaut : true).
 * @param {boolean} symbols - Si true, inclut des caractères spéciaux dans le mot de passe (par défaut : true).
 * @returns {string} - Le mot de passe aléatoire généré.
 */
function generatePassword(length = 12, uppercase = true, lowercase = true, numbers = true, symbols = true) {
    // Ensemble de caractères pour le mot de passe
    var chars = "";
  
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
    // Générer un mot de passe aléatoire
    var password = Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  
    // Vérifier si le mot de passe répond aux critères de complexité
    while (!(uppercase && /[A-Z]/.test(password) && lowercase && /[a-z]/.test(password) && numbers && /[0-9]/.test(password) && symbols && /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password))) {
      password = Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    }
  
    return password;
  }
  
  /**
   * Fait deviner à l'utilisateur le mot de passe généré aléatoirement.
   */
  function guessPassword() {
    // Générer un mot de passe aléatoire
    var password = generatePassword();
  
    // Demander à l'utilisateur de deviner le mot de passe
    var guess = prompt("Trouvez le mot de passe aléatoire ! Il contient des caractères aléatoires.");
  
    // Vérifier la réponse de l'utilisateur
    if (guess === password) {
      alert("Félicitations, vous avez trouvé le mot de passe aléatoire !");
    } else {
      alert("Désolé, le mot de passe était : " + password);
    }
  
    // Afficher le mot de passe dans la console!
    console.log(password)
} 

guessPassword();