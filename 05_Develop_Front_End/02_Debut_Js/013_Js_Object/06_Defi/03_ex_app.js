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

// Exemple d'utilisation de la méthode "alert"
console.log(workers[0].alert()); // affichera "employé: Benjamin, heures: 35"
