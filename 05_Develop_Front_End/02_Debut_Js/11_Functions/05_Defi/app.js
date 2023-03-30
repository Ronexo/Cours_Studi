//Dans un premier temps, vous allez devoir écrire la fonction qui permet de calculer le nouveau prix d'un seul produit.

//La promotion doit être de 25 % du prix initial.

//Afin de tester son bon fonctionnement, vous appellerez cette fonction avec le prix de la chaise et afficherez le résultat dans la console du navigateur.//

//Vous vous souvenez que votre client est très pointilleux et qu'il remarquera que le format du prix n'est pas le bon. Là encore, une fonction vous permettra de remplacer le point du prix par une virgule, et vous pourrez ajouter le symbole "€".//

//Cette fois-ci, vous testerez directement votre fonction dans la console du navigateur.//


let chaise = 120.50
let table = 1200.99
let vase = 420.01
let canape = 12585.55
const prices = [120.50,1200.99,420.01,12585.55];

//fonction pour calculer la promo d'un nouveau prix//
//La promotion doit être de 25 % du prix initial.

function getPromoPrice(price, percent) {
    return price - (price * percent / 100)
}

function formatPrice(price) {
    return price.toString().replace('.', ',') +' €'
}

function roundDecimal(number) {
    return Math.ceil(number)
}

let newPromoPrice = getPromoPrice(120.5, 25);
let roundDedPrice = roundDecimal(newPromoPrice)
let finalPrice = formatPrice(roundDedPrice)

console.log(finalPrice);



//Vous remarquez que le prix après promotion affiche trop de chiffres après la virgule.//

//L'année dernière, quand vous avez dû calculer tous les prix promotionnels manuellement, le client vous avait indiqué de toujours arrondir cette partie du prix à l'entier supérieur.//

//Vous écrirez donc une fonction qui vous permettra d'obtenir le prix arrondi, à partir du prix promotionnel.//
/*let newPromoPrice = getPromoPrice(120.5, 25);
let roundDedPrice = roundDecimal(newPromoPrice);
let finalPrice = formaPrice(roundDedPrice);
console.log((finalPrice));*/

