const regions = [
    {
      name: 'Occitanie',
      departement: [
        {
          name: 'Herault',
          lycees: [
            {
              name: 'Clemenceau',
              adress: {
                cp: '34060',
                numberStreet: '31',
                street: 'Avenue Georges Clemenceau',
              },
              classes : [
                {
                  graduation: '1er',
                  sector: 'S',
                  students: [
                    {
                      name: 'Paul',
                      scores: [
                        { matiere: 'Français', note: 12 }, 
                        { matiere: 'Maths', note: 15 },
                        { matiere: 'Espagnol', note: 7 },
                        { matiere: 'Anglais', note: 9 },
                        { matiere: 'Histoire', note: 10 },
                      ]
                    },
                    {
                      name: 'Jeanne ',
                      scores: [
                        { matiere: 'Français', note: 16 }, 
                        { matiere: 'Maths', note: 10 },
                        { matiere: 'Espagnol', note: 10 },
                        { matiere: 'Anglais', note: 12 },
                        { matiere: 'Histoire', note: 8 },
                      ]
                    },
                    {
                      name: 'Marie',
                      scores: [
                        { matiere: 'Français', note: 14 }, 
                        { matiere: 'Maths', note: 18 },
                        { matiere: 'Espagnol', note: 17 },
                        { matiere: 'Anglais', note: 14 },
                        { matiere: 'Histoire', note: 15 },
                      ]
                    },
                    {
                      name: 'Pierre',
                      scores: [
                        { matiere: 'Français', note: 7 }, 
                        { matiere: 'Maths', note: 4 },
                        { matiere: 'Espagnol', note: 8 },
                        { matiere: 'Anglais', note: 6 },
                        { matiere: 'Histoire', note: 8 },
                      ]
                    },
                    {
                      name: 'Nicolas',
                      scores: [
                        { matiere: 'Français', note: 11 }, 
                        { matiere: 'Maths', note: 16 },
                        { matiere: 'Espagnol', note: 8 },
                        { matiere: 'Anglais', note: 10 },
                        { matiere: 'Histoire', note: 13 },
                      ]
                    }
                  ]  
                }
              ]
            }
          ]
        }
      ]        
    }
  ]

  const noteEnglishJeanne = regions[0].departement[0].lycees[0].classes[0].students[1].scores[3].note;
  console.log(noteEnglishJeanne)


  let sum = 0
const notesNicolas = regions[0].departement[0].lycees[0].classes[0].students[4].scores ;
for (let i = 0 ; i < notesNicolas.length ; i++) {
    sum += notesNicolas[i].note;
}

let average = sum/notesNicolas.length;
console.log(Math.round(average));