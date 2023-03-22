const average = 16;

const hasAverage = average >= 10

// événement avoir la mention assez bien
const prettyGood = average >= 12 && average < 14;
console.log(prettyGood);

// événement avoir la mention bien
const good = average >= 14 && average < 16;
console.log(good);

// événement avoir la mention tres bien
const veryGood= average >= 16;
console.log(veryGood);

// événement avoir la mention (2 possibilités)
const mention = average >= 12;
const mention2 = prettyGood  || good || veryGood;
console.log(mention2);