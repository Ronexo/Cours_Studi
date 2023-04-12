let date = dayjs('10-09-2021 10:30:04')

console.log(date.format()) // Display : 2021-10-09T00:00:00+02:00
console.log(date.format('dddd D MMMM YYYY')) // Display : Saturday 9 October 2021
console.log(date.year()) // Display : 2021
console.log(date.month()) // Display : 9
console.log(date.day()) // Display : 6 (ce qui correspond au 7ème jour avec une semaine qui commence le dimanche pour une valeur à 0)
console.log(date.hour()) // Display : 10
console.log(date.minute()) // Display : 30
console.log(date.second()) // Display : 4

console.log(date.add(7, 'day').format('le DD/MM/YYYY à hh:mm:ss')) // Display : le 16/10/2021 à 10:30:04
console.log(date.subtract(7, 'year').format('le DD/MM/YYYY à hh:mm:ss')) // Display : le 09/10/2014 à 10:30:04

console.log(date.startOf('year').format('le DD/MM/YYYY')) // Display : le 01/01/2021
console.log(date.endOf('month').format('le DD/MM/YYYY')) // Display : le 31/10/2021...