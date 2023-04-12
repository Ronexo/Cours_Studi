const date = new Date(2020, 11, 25);
//const dateDisplayed = date.toLocaleDateString('fr-FR')/
const dateDisplayed = new Intl.DateTimeFormat('fr-FR').format(date)
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
//const dateDisplayedLong = date.toLocaleDateString('fr-FR', options)/
const dateDisplayedLong = new Intl.DateTimeFormat('fr-FR', options).format(date)

console.log(date)
console.log(dateDisplayed)
console.log(dateDisplayedLong)