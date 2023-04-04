/*function countDown (number) {
    console.log(number)
    
    if (number > 0) {
      number--
      countDown(number)
    }
  }
  
  countDown(5)*/


  /*function countDown(timeLeft) {
    console.log(timeLeft);
    timeLeft--;
    if (timeLeft > 0) {
      return countDown(timeLeft);
    }
    console.log('Le repas est prêt');
    return true;
  }
  
  countDown(10);*/

  const notes = [10, 28, 15, 17, 32, 5, 12, 4];

function trouverNoteMaximale(tableauDeNotes, indice, noteMax) {
  // Condition d'arrêt de la récursion : lorsque l'indice atteint la taille du tableau
  if (indice === tableauDeNotes.length) {
    return noteMax;
  }
  
  // Si la note à l'indice actuel est supérieure à la note maximale trouvée, mettre à jour la note maximale
  if (tableauDeNotes[indice] > noteMax) {
    noteMax = tableauDeNotes[indice];
  }
  
  // Rappel récursif de la fonction avec l'indice suivant et la note maximale mise à jour
  return trouverNoteMaximale(tableauDeNotes, indice + 1, noteMax);
}

const noteMaximale = trouverNoteMaximale(notes, 0, notes[0]);
console.log(noteMaximale);


/*function countdow_rec(nb) {
  if(nb >= 0) {
    console.log(nb);
    countdow_rec(nb-1);
  }
}
countdow_rec(5);*/