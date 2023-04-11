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


/*var code_cache = "testtesttesttesttesttesttesttesttestt"; // Code caché du téléphone
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
}*/


/*var code_cache = "testfjdlfjsdlfjsljflsdjflsdjf"; // Code caché du téléphone
var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}\\|;':\",./<>?`~ "; // Tous les caractères possibles du clavier
var longueur = caracteres.length; // Longueur de la chaîne de caractères
var code_trouve = false; // Indique si le code a été trouvé

for (var i = 1; i <= 30 && !code_trouve; i++) { // Boucle pour essayer des codes de longueur 1 à 30
  var tentative = "";
  for (var j = 0; j < i; j++) { // Boucle pour générer une tentative de longueur i
    tentative += caracteres[0]; // Commencer avec le premier caractère
  }
  while (tentative != null && !code_trouve) { // Boucle jusqu'à ce qu'un code soit trouvé ou que toutes les tentatives soient épuisées
    if (tentative == code_cache) { // Si le code caché est trouvé
      console.log("Le code caché est: " + tentative); // Afficher le code caché
      code_trouve = true; // Mettre à jour la variable pour indiquer que le code a été trouvé
    } else {
      tentative = prochaineTentative(tentative, caracteres); // Générer la prochaine tentative
    }
  }
}

function prochaineTentative(tentative, caracteres) {
  var longueur = tentative.length;
  var index = longueur - 1;
  var derniereCaractere = tentative[index];
  while (index >= 0 && derniereCaractere == caracteres[caracteres.length - 1]) { // Boucle pour trouver le dernier caractère qui n'est pas le dernier caractère de la liste de caractères possibles
    index--;
    derniereCaractere = tentative[index];
  }
  if (index < 0) { // Si tous les caractères sont le dernier caractère de la liste, toutes les tentatives ont été épuisées
    return null;
  } else { // Sinon, générer la prochaine tentative en remplaçant le dernier caractère par le suivant dans la liste
    return tentative.slice(0, index) + caracteres[caracteres.indexOf(derniereCaractere) + 1] + Array(longueur - index - 1 + 1).join(caracteres[0]);
  }
}*/

/*var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}\\|;':\",./<>?`~ "; // Tous les caractères possibles du clavier
var longueur = caracteres.length; // Longueur de la chaîne de caractères

function genererCodeAleatoire(longueur) {
  var code = "";
  for (var i = 0; i < longueur; i++) {
    code += caracteres[Math.floor(Math.random() * longueur)]; // Ajouter un caractère aléatoire à la chaîne
  }
  return code;
}

function devinerCode() {
  var code_cache = genererCodeAleatoire(29); // Générer un code aléatoire de 29 caractères
  var tentative = ""; // Chaîne vide pour commencer à deviner
  var code_trouve = false; // Indique si le code a été trouvé
  var debut = Date.now(); // Temps de début de la recherche

  while (!code_trouve) {
    for (var i = 0; i < longueur && !code_trouve; i++) {
      for (var j = 0; j < longueur && !code_trouve; j++) {
        for (var k = 0; k < longueur && !code_trouve; k++) {
          for (var l = 0; l < longueur && !code_trouve; l++) {
            tentative = caracteres[i] + caracteres[j] + caracteres[k] + caracteres[l]; // Essayez la combinaison suivante
            if (tentative == code_cache) { // Si le code caché est trouvé
              console.log("Le code caché est : " + tentative); // Afficher le code caché
              code_trouve = true; // Mettre à jour la variable pour indiquer que le code a été trouvé
            }
          }
        }
      }
    }
    if (!code_trouve && Date.now() - debut > 5000) { // Si le temps écoulé est supérieur à 5 secondes
      console.log("Le code caché était : " + code_cache); // Afficher le code caché
      break; // Sortir de la boucle
    }
  }
}

devinerCode(); // Appeler la fonction pour deviner le code*/

/*var caracteresPossibles = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}\\|;':\",./<>?`~ ";
var longueurCodeSecret = 9;
var codeSecret = genererCodeSecret(longueurCodeSecret);

console.log("Le code secret est: " + codeSecret);

var min = 0;
var max = Math.pow(caracteresPossibles.length, longueurCodeSecret) - 1;

while (min <= max) {
  var milieu = Math.floor((min + max) / 2);
  var tentative = convertirIndiceEnCode(milieu, longueurCodeSecret, caracteresPossibles);

  console.log("Tentative: " + tentative);

  if (tentative === codeSecret) {
    console.log("Le code secret est: " + tentative);
    break;
  } else if (codeSecret.localeCompare(tentative) === 1) {
    min = milieu + 1;
  } else {
    max = milieu - 1;
  }
}

function genererCodeSecret(longueur) {
  var code = "";
  for (var i = 0; i < longueur; i++) {
    code += caracteresPossibles[Math.floor(Math.random() * caracteresPossibles.length)];
  }
  return code;
}

function convertirIndiceEnCode(indice, longueur, caracteres) {
  var code = "";
  for (var i = 0; i < longueur; i++) {
    code = caracteres[indice % caracteres.length] + code;
    indice = Math.floor(indice / caracteres.length);
  }
  return code;
}*/


/*var code_cache = "test"; // Code caché du téléphone
var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}\\|;':\",./<>?`~ "; // Tous les caractères possibles du clavier
var longueur = caracteres.length; // Longueur de la chaîne de caractères
var tentative = ""; // Chaîne vide pour commencer à deviner
var code_trouve = false; // Indique si le code a été trouvé

// Calculer le nombre de combinaisons possibles pour une longueur donnée
function nombreCombinations(longueur) {
  var total = 0;
  for (var i = 1; i <= longueur; i++) {
    total += Math.pow(caracteres.length, i);
  }
  return total;
}

// Calculer le nombre total de combinaisons possibles pour un code de longueur donnée
var nb_combinations = nombreCombinations(code_cache.length);

// Afficher le nombre total de combinaisons à tester
console.log("Nombre total de combinaisons à tester : " + nb_combinations);

// Tester toutes les combinaisons possibles
for (var i = 0; i < longueur && !code_trouve; i++) {
  for (var j = 0; j < longueur && !code_trouve; j++) {
    for (var k = 0; k < longueur && !code_trouve; k++) {
      for (var l = 0; l < longueur && !code_trouve; l++) {
        tentative = caracteres[i] + caracteres[j] + caracteres[k] + caracteres[l]; // Essayez la combinaison suivante
        if (tentative == code_cache) { // Si le code caché est trouvé
          console.log("Le code caché est : " + tentative); // Afficher le code caché
          code_trouve = true; // Mettre à jour la variable pour indiquer que le code a été trouvé
        } else {
          // Calculer le nombre de combinaisons restantes à tester
          var nb_combinations_restantes = nb_combinations - (i * Math.pow(caracteres.length, 3) + j * Math.pow(caracteres.length, 2) + k * caracteres.length + l + 1);
          // Afficher le nombre de combinaisons restantes à tester
          console.log("Nombre de combinaisons restantes : " + nb_combinations_restantes);
        }
      }
    }
  }
}*/

/*var code_cache = "test"; // Code caché du téléphone
var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}\\|;':\",./<>?`~ "; // Tous les caractères possibles du clavier
var longueur = caracteres.length; // Longueur de la chaîne de caractères
var population_size = 1000; // Taille de la population
var max_generations = 5000; // Nombre maximal de générations à exécuter
var mutation_rate = 0.05; // Taux de mutation
var elite_rate = 0.1; // Taux d'élitisme
var population = []; // Population de candidats
var code_trouve = false; // Indique si le code a été trouvé
var generations = 0; // Compteur de générations

// Générer une population initiale de candidats
function initialiserPopulation() {
  for (var i = 0; i < population_size; i++) {
    var candidat = "";
    for (var j = 0; j < code_cache.length; j++) { // Correction ici
      var index = Math.floor(Math.random() * longueur);
      candidat += caracteres[index];
    }
    population.push(candidat);
  }
}


// Evaluer la qualité des candidats de la population
function evaluerPopulation() {
  for (var i = 0; i < population_size; i++) {
    var candidat = population[i];
    var score = 0;
    for (var j = 0; j < code_cache.length; j++) {
      if (candidat[j] == code_cache[j]) {
        score++;       
      }
    }
    population[i] = {code: candidat, score: score};
    if (score == code_cache.length) { // Si le code est trouvé
      console.log("Le code caché est : " + candidat); // Afficher le code caché
      code_trouve = true; // Mettre à jour la variable pour indiquer que le code a été trouvé
      
    }
    console.log("Score du candidat " + i + " : " + score);
  }
}

// Sélectionner les meilleurs candidats de la population pour la génération suivante
function selectionner() {
  population.sort(function(a, b) {
    return b.score - a.score; // Tri en ordre décroissant en fonction du score
  });

  var elite_size = Math.floor(population_size * elite_rate);
  var elite = population.slice(0, elite_size);
  var parents = population.slice(elite_size);
  parents = parents.filter(function(candidat, index) { // Filtrer les candidats avec un score de zéro
    return candidat.score > 0 && candidat.code !== undefined;
  });
  population = elite;
  while (population.length < population_size) {
    var parent1 = parents[Math.floor(Math.random() * parents.length)];
    var parent2 = parents[Math.floor(Math.random() * parents.length)];
    if (parent1 && parent2 && parent1.code && parent2.code) {

      var enfant = croiser(parent1.code, parent2.code);
      enfant = muter(enfant);
      population.push(enfant);
    }
  }
}

// Exécuter l'algorithme génétique
function executer() {
  initialiserPopulation();
  while (!code_trouve && generations < max_generations) {
    evaluerPopulation();
    selectionner();
    generations++;
    
    console.log("Code trouvé : " + code_trouve);
    console.log("Générations : " + generations);

    // Afficher le nombre de générations écoulées toutes les 10 générations
    if (generations % 10 == 0) {
      console.log(generations + " générations ont été exécutées.");
    }
  }

  if (!code_trouve) {
    console.log("Le code n'a pas été trouvé après " + max_generations + " générations.");
  }
}

executer();*/


const brain = require('brain.js');
const gpu = new brain.NGPU();
const net = new brain.NeuralNetworkGPU();

const config = {
    inputSize: 10,
    hiddenLayers: [5],
    outputSize: 10,
    learningRate: 0.01,
    activation: 'sigmoid'
};

const trainingData = [
    {input: [0,0,0,0,0,0,0,0,0,0], output: [0,0,0,0,0,0,0,0,0,0]},
    {input: [1,1,1,1,1,1,1,1,1,1], output: [1,1,1,1,1,1,1,1,1,1]}
];

gpu.acquire(net);
net.train(trainingData, config);
gpu.release(net);

const output = net.run([0,0,0,0,0,0,0,0,0,0]);
console.log(output);


