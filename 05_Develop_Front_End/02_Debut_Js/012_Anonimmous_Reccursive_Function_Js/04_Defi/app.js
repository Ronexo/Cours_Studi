// ... Le code pour générer la structure de la page ...

function collectIds(blocs, ids) {
    blocs.forEach(bloc => {
      ids.push(bloc.id);
      collectIds(bloc.blocs, ids);
    });
  }

  const ids = [];
  collectIds(page.blocs, ids);
  console.log(ids);

  function createSelectOptions(ids) {
    const selectElement = document.getElementById('blocs-select');

    ids.forEach(id => {
      const option = document.createElement('option');
      option.value = id;
      option.textContent = `Bloc ID: ${id}`;
      selectElement.appendChild(option);
    });
  }

  createSelectOptions(ids);
