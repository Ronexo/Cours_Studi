/*let personne = {
    nom: "Thomas",
    age: 35,
    ville: "Paris"
  };
  
  let { nom, age, ville: adresse } = personne;
  
  console.log("nom : ", nom, " age : ", age, " adresse : ", adresse);
  // Affichera nom : Thomas age : 35 adresse : Paris*/

  let myArray= [1,2,3,4,5,6];
  
			const [,myNumber] = myArray;
			console.log(myNumber) // 2

			myArray.splice(0, 4);
			console.log(myArray) // [5, 6]

			myArray= [myNumber, ...myArray];
			console.log(myArray) // [2, 5, 6]