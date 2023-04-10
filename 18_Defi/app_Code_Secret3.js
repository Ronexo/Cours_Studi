/*var code_cache = "1234"; // Code caché du téléphone
var devine = 0000; // Valeur initiale pour commencer à deviner

while (devine != code_cache) {
    devine++; // Essayez le code suivant

    if (devine == 10000) { // Si tous les codes ont été essayés
        console.log("Impossible de trouver le code caché"); // Afficher un message d'erreur
        break; // Arrêtez la boucle
    }
}

console.log("Le code caché est: " + devine); // Afficher le code caché*/


/*var code_cache = "a1B2C3d4E5F6g7H8i9JkLmNoPqRsTuVwXyZz"; // Code caché du téléphone
var devine = ""; // Valeur initiale pour commencer à deviner

while (devine != code_cache) {
    // Essayez le code suivant en incrémentant chaque caractère dans l'ordre ascii
    var temp = devine.split("");
    var index = temp.length - 1;
    var carry = true;
    while (index >= 0 && carry) {
        var ascii = temp[index].charCodeAt(0);
        ascii++;
        if (ascii > 122) {
            temp[index] = "0";
        } else if ((ascii > 90 && ascii < 97) || ascii < 48) {
            ascii = 48;
        }
        else {
            temp[index] = String.fromCharCode(ascii);
            carry = false;
        }
        index--;
    }
    if (carry) {
        temp.unshift("0");
    }
    devine = temp.join("");

    if (devine == code_cache) { // Si le code a été deviné avec succès
        console.log("Le code caché est: " + devine); // Afficher le code caché
        break; // Arrêtez la boucle
    }
}

if (devine != code_cache) {
    console.log("Impossible de trouver le code caché"); // Afficher un message d'erreur
}*/



/*var code_cache = "karim"; // Code caché du téléphone
var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}\\|;':\",./<>?`~ "; // Tous les caractères possibles du clavier
var longueur = caracteres.length; // Longueur de la chaîne de caractères
var tentative = ""; // Chaîne vide pour commencer à deviner

while (tentative != code_cache) {
    for (var i = 0; i < longueur; i++) {
        for (var j = 0; j < longueur; j++) {
            for (var k = 0; k < longueur; k++) {
                for (var l = 0; l < longueur; l++) {
                    tentative = caracteres[i] + caracteres[j] + caracteres[k] + caracteres[l]; // Essayez la combinaison suivante
                    if (tentative == code_cache) { // Si le code caché est trouvé
                        console.log("Le code caché est: " + tentative); // Afficher le code caché
                        break; // Arrêtez la boucle
                    }
                }
            }
        }
    }
}

console.log("Le code caché est: " + tentative); // Afficher le code caché*/


/*var code_cache = "5632"; // Code caché du téléphone
var devine = "0000"; // Valeur initiale pour commencer à deviner
var max_essais = 10000; // Nombre maximum d'essais avant de sortir de la boucle

var essais = 0; // Compteur d'essais

while (devine !== code_cache && essais < max_essais) {
    essais++; // Incrémenter le compteur d'essais
    devine = devine.toString().padStart(4, "0"); // Convertir le nombre en chaîne de caractères et ajouter des zéros si nécessaire

    // Essayer le code suivant
    if (essais < 10) {
        devine = "000" + essais;
    } else if (essais < 100) {
        devine = "00" + essais;
    } else if (essais < 1000) {
        devine = "0" + essais;
    } else {
        devine = essais.toString();
    }
}

if (devine === code_cache) {
    console.log("Le code caché est: " + devine); // Afficher le code caché
} else {
    console.log("Impossible de trouver le code caché"); // Afficher un message d'erreur
}*/

/*var code_cache = "karim"; // Code caché du téléphone
var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}\\|;':\",./<>?`~ "; // Tous les caractères possibles du clavier
var longueur = caracteres.length; // Longueur de la chaîne de caractères
var tentative = ""; // Chaîne vide pour commencer à deviner

while (tentative != code_cache) {
for (var i = 0; i < longueur; i++) {
for (var j = 0; j < longueur; j++) {
for (var k = 0; k < longueur; k++) {
for (var l = 0; l < longueur; l++) {
tentative = caracteres[i] + caracteres[j] + caracteres[k] + caracteres[l]; // Essayez la combinaison suivante
if (tentative == code_cache) { // Si le code caché est trouvé
console.log("Le code caché est: " + tentative); // Afficher le code caché
break; // Arrêtez la boucle
}
}
}
}
}
}

console.log("Le code caché est: " + tentative); // Afficher le code caché*/


/*var code_cache = "test"; // Code caché du téléphone
var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}\\|;':\",./<>?`~ "; // Tous les caractères possibles du clavier
var longueur = caracteres.length; // Longueur de la chaîne de caractères
var tentative = ""; // Chaîne vide pour commencer à deviner

function deviner(code, longueur, tentative) {
  for (var i = 0; i < longueur; i++) {
    var nouvelleTentative = tentative + code[i]; // Ajouter un caractère à la chaîne actuelle
    if (nouvelleTentative.length == code.length) { // Si la chaîne a la longueur du code caché
      if (nouvelleTentative == code) { // Si la chaîne est égale au code caché
        console.log("Le code caché est : " + nouvelleTentative); // Afficher le code caché
        return nouvelleTentative; // Retourner la chaîne
      }
    } else { // Sinon
      var resultat = deviner(code, longueur, nouvelleTentative); // Appeler récursivement la fonction avec la nouvelle chaîne
      if (resultat != null) { // Si la chaîne a été trouvée
        return resultat; // Retourner la chaîne
      }
    }
  }
  return null; // Retourner null si la chaîne n'a pas été trouvée
}

deviner(code_cache, longueur, tentative); // Appeler la fonction pour deviner le code*/

/*var code_cache = "haha"; // Code caché du téléphone
var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}\\|;':\",./<>?`~ "; // Tous les caractères possibles du clavier
var longueur = caracteres.length; // Longueur de la chaîne de caractères
var tentative = ""; // Chaîne vide pour commencer à deviner
var code_trouve = false; // Indique si le code a été trouvé

for (var i = 0; i < longueur && !code_trouve; i++) {
  for (var j = 0; j < longueur && !code_trouve; j++) {
    for (var k = 0; k < longueur && !code_trouve; k++) {
      for (var l = 0; l < longueur && !code_trouve; l++) {
        tentative = caracteres[i] + caracteres[j] + caracteres[k] + caracteres[l]; // Essayez la combinaison suivante
        if (tentative == code_cache) { // Si le code caché est trouvé
          console.log("Le code caché est: " + tentative); // Afficher le code caché
          code_trouve = true; // Mettre à jour la variable pour indiquer que le code a été trouvé
        }
      }
    }
  }
}*/

/*var code_cache = "abcdefghijklmnopqrstuvwxyzt"; // Code caché du téléphone
var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}\\|;':\",./<>?`~ "; // Tous les caractères possibles du clavier
var longueur = caracteres.length; // Longueur de la chaîne de caractères
var tentative = ""; // Chaîne vide pour commencer à deviner

function deviner(code, longueur, tentative) {
  for (var i = 0; i < longueur; i++) {
    var nouvelleTentative = tentative + code[i]; // Ajouter un caractère à la chaîne actuelle
    if (nouvelleTentative.length == code.length) { // Si la chaîne a la longueur du code caché
      if (nouvelleTentative == code) { // Si la chaîne est égale au code caché
        console.log("Le code caché est : " + nouvelleTentative); // Afficher le code caché
        return nouvelleTentative; // Retourner la chaîne
      }
    } else { // Sinon
      var resultat = deviner(code, longueur, nouvelleTentative); // Appeler récursivement la fonction avec la nouvelle chaîne
      if (resultat != null) { // Si la chaîne a été trouvée
        return resultat; // Retourner la chaîne
      }
    }
  }
  return null; // Retourner null si la chaîne n'a pas été trouvée
}

deviner(code_cache, longueur, tentative); // Appeler la fonction pour deviner le code*/


var code_cache = "testtesttesttesttesttesttesttesttestt"; // Code caché du téléphone
var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}\\|;':\",./<>?`~ "; // Tous les caractères possibles du clavier
var longueur = caracteres.length; // Longueur de la chaîne de caractères
var tentative = ""; // Chaîne vide pour commencer à deviner
var code_trouve = false; // Indique si le code a été trouvé

while (!code_trouve) {
  for (var i = 0; i < longueur && !code_trouve; i++) {
    for (var j = 0; j < longueur && !code_trouve; j++) {
      for (var k = 0; k < longueur && !code_trouve; k++) {
        for (var l = 0; l < longueur && !code_trouve; l++) {
          tentative = tentative + caracteres[i] + caracteres[j] + caracteres[k] + caracteres[l]; // Ajouter une nouvelle combinaison à la tentative actuelle
          if (tentative == code_cache) { // Si le code caché est trouvé
            console.log("Le code caché est: " + tentative); // Afficher le code caché
            code_trouve = true; // Mettre à jour la variable pour indiquer que le code a été trouvé
          }
          if (tentative.length == code_cache.length) { // Si la tentative a la même longueur que le code caché
            tentative = ""; // Réinitialiser la tentative pour commencer à deviner une nouvelle combinaison
          }
        }
      }
    }
  }
}
