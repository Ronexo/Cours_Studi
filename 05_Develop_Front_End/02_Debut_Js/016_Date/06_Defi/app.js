/*const dateStart = new Date(2028, 6, 21)
const dateEnd = new Date(
  dateStart.getFullYear(),
  dateStart.getMonth(),
  dateStart.getDate() + 16
)

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

// Display : vendredi 21 juillet 2028
console.log(dateStart.toLocaleString('fr-FR', options))

// Display : dimanche 6 août 2028
console.log(dateEnd.toLocaleString('fr-FR', options))

// Current date
const currentDate = new Date()
// Difference between start date and current date 
const result = dateStart.getTime() - currentDate.getTime()
// Converting milliseconds to days
const days = result / 1000 / 60 / 60 / 24
// Display : date actuelle au format long ex : vendredi 5 novembre 2021
console.log(currentDate.toLocaleString('fr-FR', options))
// Display : 2449.252169814815
console.log(days)*/


const dateStart = new Date(2028, 6, 21)
const dateEnd = new Date(
  dateStart.getFullYear(),
  dateStart.getMonth(),
  dateStart.getDate() + 16
)

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

// Display : vendredi 21 juillet 2028
console.log(new Intl.DateTimeFormat('fr-FR', options).format(dateStart))

// Display : dimanche 6 août 2028
console.log(new Intl.DateTimeFormat('fr-FR', options).format(dateEnd))

// Current date
const currentDate = new Date()
// Difference between start date and current date 
const result = dateStart.getTime() - currentDate.getTime()
// Converting milliseconds to days
const days = result / 1000 / 60 / 60 / 24
// Display : date actuelle au format long ex : vendredi 5 novembre 2021
console.log(new Intl.DateTimeFormat('fr-FR', options).format(currentDate))
// Display : 2449.249325972222
console.log(days)