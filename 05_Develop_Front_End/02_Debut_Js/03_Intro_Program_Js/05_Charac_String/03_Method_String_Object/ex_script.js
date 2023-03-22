let urserName =  'rOmAin deLaNoix';

let changeName = urserName.toLowerCase();

let nameCorrect = changeName.slice(0, 1).toUpperCase() + changeName.slice(1,6) +' '+ changeName.slice(7, 8).toUpperCase() + changeName.slice(8);

console.log(nameCorrect);


let name = 'rOmAin deLaNoix';
let nameFormated = name.toLowerCase();
// nameFormated.substring(0, 1) // r
// .toUpperCase() // R
let firstNameUpperLetter = nameFormated.substring(0, 1).toUpperCase();
// nameFormated.substring(1, 6) // OmAin
// .toLowerCase() // omain
let firstNameLowerLetter = nameFormated.substring(1, 6).toLowerCase();
// nameFormated.substring(7, 8) // d
// .toUpperCase() // D
let lastNameFirstLetter = nameFormated.substring(7, 8).toUpperCase();
// nameFormated.substring(8) // eLaNoix
// .toLowerCase() // elanoix
let lastNameLowerLetter = nameFormated.substring(8).toLowerCase();
nameFormated = `${firstNameUpperLetter}${firstNameLowerLetter} ${lastNameFirstLetter}${lastNameLowerLetter}`
console.log(nameFormated)