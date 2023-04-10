const workers = [
  {name: 'Benjamin', age: 25, nbHour: 35},
  {name: 'Luc', age: 45, nbHour: 36},
  {name: 'Marie', age: 23, nbHour: 35},
  {name: 'Jeanne', age: 36, nbHour: 30},
  {name: 'Jean', age: 37, nbHour: 35}
];

workers.forEach((worker) => {
  worker.alert = function() {
    return `employé: ${this.name}, heures: ${this.nbHour}`;
  };
});

let alerte = '';

workers.forEach((worker) => {
  if (worker.nbHour !== 35) {
    alerte += `${worker.alert()}\n`;
  }
});

if (alerte !== '') {
  alert(`Attention, les employés suivants n'ont pas effectué exactement 35 heures :\n${alerte}`);
} else {
  alert('Tous les employés ont effectué exactement 35 heures.');
}
