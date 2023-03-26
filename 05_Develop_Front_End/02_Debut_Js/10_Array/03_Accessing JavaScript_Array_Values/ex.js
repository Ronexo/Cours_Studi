/*let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Displays each array element in the console
animals.forEach(function(element){
  console.log(element)
})

// Displays each array index and its element in the console
animals.forEach(function(element, index){
  console.log(index + ' : ' + element)
})*/

/*let animals = [
    ['Lion', 'Tigre', 'Ours'],
    ['Chat', 'Chien', 'Cheval']
  ]
  
  // Browse animals array
  for (let animalsIndex = 0; animalsIndex < animals.length; animalsIndex++)
  {
    // Browse arrays in animals array
    for (let elementIndex = 0; elementIndex < animals[animalsIndex].length; elementIndex++)
    {
      // Displays each array element in the console
      console.log(animals[animalsIndex][elementIndex])
    }
  }*/

  /*let animals = [
  ['Lion', 'Tigre', 'Ours'],
  ['Chat', 'Chien', 'Cheval']
]

// For each value in the animals array (2 arrays)

animals.forEach(function(animalsElement){

  // For each value in each array (the 2 arrays in animals array)
  
  animalsElement.forEach(function(element){
    console.log(element)
  })
})*/


let fruits = ['Fraise', 'Orange', 'Framboise', 'Citron']

console.log(fruits.length);

console.log('-----------------------------------');

console.log(fruits[2]);

for(let i = 0; i < fruits.length; i++)
console.log(fruits[i]);
console.log('-----------------------------------');

fruits.forEach(function(i){
    console.log(i);
})