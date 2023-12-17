const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

function convertPokemonToHtml(pokemons){
    return `
        <li class=" pokemon poison ">
                <span class="number">Nº 0035</span>
                <span class="name">${pokemon.name}Clefairy</span> 
                <div class="details">
                    <ol class="types">
                        <li class="type">Steel</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="${pokemon.name}" >
                </div>
        </li>
    `
}
const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json())    
    .then((jsonBody) =>jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
           
            pokemonList.innerHTML += convertPokemonToHtml(pokemon);
          
        }
    })
    .catch((error) => console.error(error))
