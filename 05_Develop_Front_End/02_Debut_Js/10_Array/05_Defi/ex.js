let color = ['Bleu', 'Rouge', 'Vert', 'Jaune', 'Blanc'];
/*let colorlength = color.length;*/
console.log(color.length);
console.log('-----------------------------------');
console.log(color[0]);
console.log(color[4]);
console.log(color[1]);
console.log('-----------------------------------');
for(let i = 0; i < color.length; i++) {
    console.log(color[i]);
}
console.log('-----------------------------------');
color.forEach(function(i) {
        console.log(i);
});
console.log('-----------------------------------'); 
/*"Bleu, Blanc et Rouge" d'une part, et "Jaune et Vert*/

let multiColor = [['Bleu', 'Blanc', 'Rouge'],
                ['Jaune', 'Vert']
];
                console.log(multiColor);
console.log('-----------------------------------');
console.log(multiColor[0] [1])
console.log(multiColor[1] [1])
console.log('-----------------------------------');
for(let i = 0; i < multiColor.length; i++) {
    for(let j = 0; j < multiColor[i].length; j++) {
        console.log(multiColor[i][j]);
    }
}
console.log('-----------------------------------');
multiColor.forEach(function(i) {
    i.forEach(function(j) {
        console.log(j);
    })
});
console.log('-----------------------------------');


for(let i = 0; i < color.length - 1; i++) {
    for(let j = 0; j < color.length - 1 - i; j++) {
        if(color[j] > color[j + 1]) {
            let temp;
            temp = color[j];
            color[j] = color[j + 1];
            color[j + 1] = temp;
        }
    }
}
console.log(color);

/*let persons = ['jules', 'laure', 'vincent', 'emma', 'karim'];
let personsLength = persons.length;

for (let main = 0; main < personsLength - 1; main++) {
    for (let cell = 0; cell < personsLength - main - 1; cell++) {
      if (persons[cell] > persons[cell + 1]) {
  
       let temp;
       temp = persons[cell];
       persons[cell] = persons[cell + 1];
       persons[cell + 1] = temp;
      }
    }
  }
  console.log(persons);*/