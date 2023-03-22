let healthPass = "pass sanitaire";
let pcrTest = "Test PCR négatif";
let booking = "yes";

let passMatheo = "pass sanitaire";
let bookingMatheo = "yes";

// Le code suivant vérifie que Mathéo est en possession du pass sanitaire ou d’un test PCR négatif et qu’il a bien réservé une table
let result = [healthPass, pcrTest].includes(passMatheo) && booking === bookingMatheo;

console.log(result); //Si vrai, return true