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



function factorial(n){
  let sum = 1;

  for(let i = 1; i <= n; i++) {
      sum *= i;
      console.log(sum);
  }
  return sum;
}  