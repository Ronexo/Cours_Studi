import React, {useState} from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearch(event) {
    // Ajouter le code de recherche ici en utilisant la valeur de state searchQuery
    event.preventDefault();
    console.log(`La recherche a été effectuée avec la requête: ${searchQuery}`);
  }

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="search-input">Recherche de produits</label>
      <input 
        id="search-input"
        type="search"
        name="search"
        placeholder="Rechercher des produits..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}
