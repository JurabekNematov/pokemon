var elPokemonList = document.querySelector(".pokemon-list");

for (const pokemon of pokemons) {
  
  // Creating elements to the DOM
  var elPokemonItem = document.createElement("li");
  var elPokemonTitle = document.createElement("h3");
  var elPokemonSpan = document.createElement("span");
  var elPokemonImg = document.createElement("img");
  var elPokemonType = document.createElement("p");
  var elPokemonTime = document.createElement("time");
  

  // Styling with bootsrap
  elPokemonItem.classList.add("pokemon-item")
  elPokemonTitle.classList.add("rounded", "p-3", "bg-info");
  elPokemonSpan.classList.add("bg-danger", "p-1", "rounded-pill");
  elPokemonType.classList.add("bg-warning", "p-1", "rounded");
  elPokemonTime.classList.add("bg-secondary", "p-1", "rounded-pill", "mb-1");
  

  elPokemonTitle.textContent = pokemon.name;
  elPokemonSpan.textContent = pokemon.num;
  elPokemonImg.src = pokemon.img;
  elPokemonImg.width = "150";
  elPokemonImg.height = "150";
  elPokemonImg.alt = pokemon.name;
  elPokemonImg.src = pokemon.img;
  elPokemonType.textContent = pokemon.type.join(" ");
  elPokemonTime.textContent = pokemon.spawn_time;
  elPokemonTime.setAttribute("date-time", `2023-08-10 ${pokemon.spawn_time}`)


  elPokemonItem.appendChild(elPokemonTitle);
  elPokemonItem.appendChild(elPokemonSpan);
  elPokemonItem.appendChild(elPokemonImg);
  elPokemonItem.appendChild(elPokemonType);
  elPokemonItem.appendChild(elPokemonTime);


  elPokemonList.appendChild(elPokemonItem);
}