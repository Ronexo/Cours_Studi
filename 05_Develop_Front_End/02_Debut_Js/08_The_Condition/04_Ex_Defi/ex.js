const el = document.getElementById('register-form');
el.addEventListener('submit', (event) => {
  event.preventDefault();

  let civility = event.target.female.checked ? 'female' : 'male';
  let name = event.target.name.value;
  let category = event.target.category.value;
  let newsletter = event.target.newsletter.checked;

  // Les variables déclarées ci-dessus contiennent les données du formulaire
});

civility ? 'femele' : 'male;

alert(`Bonjour ${civility}  `)



//"Bonjour [civilité de l'utilisateur] [nom de l'utilisateur]. ["Inscrivez-vous vite à notre newsletter" / "Merci de vous être abonné à notre newsletter"], elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, [catégorie culinaire préférée de l'utilisateur]!"