let chaise = 120.50
let table = 1200.99
let vase = 420.01
let canape = 12585.55
const prices = [120.50,1200.99,420.01,12585.55]

function promoAppliquer(prix, pourcentage) {
  return prix - (prix * pourcentage / 100);
};

function formatagePrix(prix) {
  return prix.toString().replace('.', ',') + '€'; 
};

function arrondisDecimal(nombre) {
  return Math.ceil(nombre);
};

for (let i = 0; i < prices.length; i++) {
  let nouveauxPrix = promoAppliquer(prices[i], 25);
  let prixArrondis = arrondisDecimal(nouveauxPrix);
  let prixFinal = formatagePrix(prixArrondis)
  console.log(prixFinal);
}

console.log('----- Ou -----')

prices.forEach(function(prices) {
  let nouveauxPrix = promoAppliquer(prices, 25);
  let prixArrondis = arrondisDecimal(nouveauxPrix);
  let prixFinal = formatagePrix(prixArrondis)
  console.log(prixFinal);
});

console.log('----- Ou -----')

function calculerPrixFinal(prix, pourcentage) {
  let prixApresPromo = prix - (prix * pourcentage / 100);
  let prixArrondis = Math.ceil(prixApresPromo);
  return prixArrondis.toString().replace('.', ',') + '€';
   
};

for (let i = 0; i < prices.length; i++) {
  console.log(calculerPrixFinal(prices[i], 25));
}

console.log('--- ou ---');

prices.forEach(function(price) {
  console.log(calculerPrixFinal(price, 25));
});
