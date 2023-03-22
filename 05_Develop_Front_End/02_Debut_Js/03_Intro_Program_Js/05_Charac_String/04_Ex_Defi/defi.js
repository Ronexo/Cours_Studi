const objet = prompt('Entrez le motif de la convocation')
const lastName = prompt('Entrez un nom')
const firstName = prompt('Entrez un prénom')
const gender = prompt('M ou Mme')
const dateAppointement = prompt('Entrez une date de convocation (dd/mm/yyyy)');
const place = prompt('Entrez un numéro de bureau')
const signature = 'Votre agent administratif';

let body = `
À ${lastName} ${firstName}
  
        Objet de la convocation: Entretien annuel
    
        Mme Mipsum Laure, vous êtes convoqué(e) le 25/03/2020 dans le bureau D107 pour le motif suivant: Entretien annuel.
    
En vous remerciant.
    
Votre agent administratif`

console.log(body);
