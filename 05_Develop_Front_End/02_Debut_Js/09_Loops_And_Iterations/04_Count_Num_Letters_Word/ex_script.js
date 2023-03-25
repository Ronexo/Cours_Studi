const animals = ['dog', 'cat', 'bird', 'fish'];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.log('---------------------------------- ----------------------------------');

for (let animal of animals) {
    console.log(animal);
}

console.log('---------------------------------- ----------------------------------');

const secretAgent = {firstName: 'James', lastName: 'BOND', code: '007'};

for (let property in secretAgent) {
    console.log(`${property} : ${secretAgent[property]}`);
};

let text = 'Javascript';

console.log('-------------------');

for (let value of text) {
    console.log(value);
}

console.log("----------------------------");

let word = "Javascript";
let i = 0; 

/*
 * On crée une boucle pour parcourir le mot contenu dans word
 * word[i] renvoie la lettre du mot word à la position indiquée par "i", par exemple: 0 = "B"
 * s'il n'y a plus de lettres pour la valeur de "i", on sort de la boucle.
 */
while (word[i]) {
  i = i + 1;
}

// Une fois sorti de la boucle, i contiendra le nombre de lettres. On l'affiche avec console.log :
console.log(i);

console.log("-------------------");

let word1 = "Bonjour";
let cpt = 0;
for (let letter of word1) {
  if (letter == "o") { // Si la lettre actuelle est égale à "o", on réalise l'opération entre les accolades, sinon on ignore.
    cpt = cpt + 1; // On incrémente notre compteur.
  }
}

// Une fois sorti de la boucle, nombre compteur contiendra le nombre de "o". On l'affiche avec console.log :
console.log(cpt);