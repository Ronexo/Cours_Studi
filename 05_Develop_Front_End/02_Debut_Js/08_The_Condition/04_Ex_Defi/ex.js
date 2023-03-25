const el = document.getElementById('register-form');
el.addEventListener('submit', (event) => {
  event.preventDefault();

  let civility = event.target.female.checked ? 'female' : 'male';
  let name = event.target.name.value;
  let category = event.target.category.value;
  let newsletter = event.target.newsletter.checked;


  // Les variables déclarées ci-dessus contiennent les données du formulaire
let displayedcivility = civility === 'female' ? 'Mme' : 'Mr';
let message;
let messageCat;
 // let newsletter = 'Inscrivez-vous vite à notre newsletter' || 'Merci de vous être abonné à notre newsletter';
  
  if(newsletter === true) {
    message = 'Merci de vous être abonné à notre newsletter';
  } else {
    message = 'Inscrivez-vous vite à notre newsletter';
  }

  switch(category) {
    case "cold-starter":
      messageCat = 'Entrée froide';
      break;
    case "soup":
      messageCat = 'Soupe';
      break;
    case "main-course":
      messageCat = 'Plat';
      break;
    case "fruit-dessert":
      messageCat = 'Desssert (Dessert fruit)';
      break;
    case "chocolate-dessert": 
      messageCat = 'Desssert (Dessert chocolat)';
      break;

    default:
      messageCat = 'Merci de choisir une catégorie';
      break;
  }

  alert(`Bonjour ${displayedcivility} ${name}. ${message}, elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, ${messageCat}!`);

});

//"Bonjour [civilité de l'utilisateur] [nom de l'utilisateur]. ["Inscrivez-vous vite à notre newsletter" / "Merci de vous être abonné à notre newsletter"], elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, [catégorie culinaire préférée de l'utilisateur]!"