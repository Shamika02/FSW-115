
const getPokemon = ()=> {
axios.get('https://api.vschool.io/pokemon')
.then(res =>{
  renderPokemon(res.data)
})
.catch(err => console.log(err))
}

const renderPokemon = (pokemonData) => {

  const pokemonContainer = document.getElementById('pokemonContainer')
  let pokemonArray = pokemonData.objects[0].pokemon

for(let i = 0; i < pokemonArray.length; i++){
  console.log(pokemonArray[i])
  const pokeNameElement = document.createElement('li')
  pokeNameElement.textContent = pokemonArray[i].name
  pokemonContainer.appendChild(pokeNameElement)
}

}