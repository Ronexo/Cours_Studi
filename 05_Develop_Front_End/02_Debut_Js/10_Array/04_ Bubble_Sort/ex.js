/*let numbers = [3, 8, 5, 9, 1];
let numbersLength = numbers.length;
for (let main = 0; main < numbersLength - 1; main++) {
	for (let cell = 0; cell < numbersLength - main - 1; cell++) {
	  if (numbers[cell] > numbers[cell + 1]) { // Si la valeur de la case actuelle est supérieure à la valeur de la case d'après, on permute les valeurs (en utilisant l'échange de variables)
     numbers[cell] = numbers[cell] + numbers[cell + 1];
		 numbers[cell + 1] = numbers[cell] - numbers[cell + 1];
		 numbers[cell] = numbers[cell] - numbers[cell + 1];
    }
  }
}
console.log(numbers);*/

/*function bubbleSort(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) {
          for (var j = 0; j < (length - i - 1); j++) {
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
}

var arr = [5, 4, 3, 2, 1]; 
bubbleSort(arr);

console.log(arr);*/

