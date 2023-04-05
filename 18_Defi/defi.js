/* Les fonctions  */

/*console.log("Avant la déclaration");*/
//Déclarer une fonction 
/*function maFonction(prenom) {
    console.log("Instruction 1");
    console.log(`bonjour ${prenom}`);
}
console.log("Avant la déclaration");
//Appel de la fonction
let monPrenom = "jéremy"
maFonction(monPrenom);
console.log("Après l'appel");*/
/*Utiliser des paramètres */

//Déclaration avec paramètres

/*function calculerPrixTTC(prixHorsTaxe, TVAEnPourcent) {
    let prixTTC = prixHorsTaxe * (1 + TVAEnPourcent / 100);
    return prixTTC;
}

console.log("Prix TTC : " + calculerPrixTTC(10, 20));

console.log("Fin du code");*/

//exemple d'exercice

/*let chaise = 120.50;
let table = 1200.99;
let vase = 420.01;
let canape = 12585.55;
const prices = [chaise, table, vase, canape];

function calculerPrixFinal(prix, pourcentage) {
  let prixApresPromo = prix - (prix * pourcentage / 100);
  let prixArrondis = Math.ceil(prixApresPromo);
  return prixArrondis.toString().replace('.', ',') + '€';
};

prices.forEach(price => {
  let prixFinal = calculerPrixFinal(price, 25);
  console.log(prixFinal);
});*/



/*function factorial(n){
  let sum = 1;

  for(let i = 1; i <= n; i++) {
      sum *= i;
      console.log(sum);
  }
  return sum;
}  

factorial(5);*/

/*function factorial(num) {
  // si le nombre est 0 ou 1, retourne 1
  if (num === 0 || num === 1) {
    return 1;
  }
  
  // initialise un produit à 1
  let product = 1;
  
  // multiplie chaque nombre de 2 à num
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  
  // retourne le produit final
  return product;
}

console.log(factorial(5)); // output: 120*/

function factorial(num) {
  let result = 1;
  let formula = "";
  
  for (let i = num; i >= 1; i--) {
    result *= i;
    formula += i + (i !== 1 ? " * " : " = ");
  }
  
  formula += result;
  
  console.log(formula);
  
  return result;
}

console.log(factorial(5)); // output: 5 * 4 * 3 * 2 * 1 = 120


for(let i = 1; i <= 11; i++) {
  const remainder = i % 2;
  const isEven = remainder === 0;
  if(isEven) {
      count++;
  }
}