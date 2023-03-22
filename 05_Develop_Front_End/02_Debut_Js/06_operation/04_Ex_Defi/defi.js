let ballPierre = 10;
let ballJeanne = 15;
let ballPaul = 5;

const TOTALBALLS = 30;

let playParty = 5;

//parti 1 et 2 gagné par pierre

ballPierre += 4;
ballJeanne -= 2;
ballPaul -= 2;

console.log(ballPierre, ballJeanne, ballPaul);

// parti 3et 5 gagné par jeanne

ballJeanne += 4;
ballPierre -= 2;
ballPaul -= 2;

console.log(ballPierre, ballJeanne, ballPaul);

//parti 4 

ballPierre--;
ballJeanne--;
ballPaul += 2;

console.log(ballPierre, ballJeanne, ballPaul);

//echange bille pierre

let ballPierreRestante = ballPierre % 4;
let caloPierre = (ballPierre - ballPierreRestante) / 4;

console.log(ballPierreRestante);
console.log(caloPierre);

// echange bille jeanne

let ballRestanteJeanne = ballJeanne % 2;
let caloJeanne = (ballJeanne - ballRestanteJeanne) / 2;

console.log(ballRestanteJeanne);
console.log(caloJeanne);

//echange bille paul

let ballPaulRestante = ballPaul % 3;
let caloPaul = (ballPaul - ballPaulRestante) / 3; 

console.log(ballPaulRestante);
console.log(caloPaul);