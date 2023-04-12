const orderedAt = moment('2019-11-22 10:45');
const specialOfferStartedAt = moment('2019-12-18 18:00');
const specialOfferEndedAt = specialOfferStartedAt.clone().add(10, 'days');
const hasReducedPrice = orderedAt.isBetween(specialOfferStartedAt, specialOfferEndedAt);

if (hasReducedPrice) {
  console.log('La commande a bénéficié du tarif réduit !')
} else {
  console.log('La commande a été effectuée en dehors de la période promotionnelle.')
}