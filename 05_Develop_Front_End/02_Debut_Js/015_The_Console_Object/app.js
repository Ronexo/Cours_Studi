/*const val = 4
const min = 8
const infoMessage = 'Début de la fonction'

console.info('GO !')
console.info({val, min, infoMessage})

const numbers = [4, 8, 14, 2]

console.log('Debug')
console.log(val)
console.log(numbers)

console.error('Une erreur est survenue')*/

/*const numbers = [4, 8, 14, 2]
console.table(numbers);
console.log(numbers);

const min = 10
const assertReason = 'La valeur doit être supérieure à 10'
console.assert(4 > min, assertReason)*/


// 4)
initialize()

function logged() {
  console.log('Hello')
  console.trace()
}

function login() {
  logged()
}

function initialize() {
  login()
}