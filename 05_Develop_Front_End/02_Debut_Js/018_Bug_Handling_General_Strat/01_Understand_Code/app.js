const listeNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
  

const winNumbers = [];
const complementaryNumbers = []

function randomInInterval(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToTable(table, tableRef) {
  const index = randomInInterval(0, tableRef.length - 1)
  table.push(tableRef[index]);
  tableRef.splice(index, 1);
}

function tirage(size, table, tableRef) {
  while (table.length < size) {
    addToTable(table, tableRef)
  }
}

tirage(5, winNumbers, listeNumber);
tirage(2, complementaryNumbers, listeNumber);

console.log(winNumbers, complementaryNumbers);