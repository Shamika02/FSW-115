// eslint-disable-next-line no-unused-vars
const getPostman = () => {
    // eslint-disable-next-line no-undef
    axios.get(" https://swapi.dev/api/planets/")
    .then(res => {
        renderPostman(res.data)
    })
    .catch(err => console.log(err))
    }
    
    const renderPostman = (postmanData) => {
      const postmanList = document.getElementById('postmanList')
      let postmanArray = postmanData.results
    
      for (let i = 0; i < postmanArray.length; i++){
        console.log(postmanArray[i])
        const postNameElement = document.createElement('li')
        postNameElement.textContent = postmanArray[i].name
        postmanList.appendChild(postNameElement)
    
        
      }
    }


    const getPokemon = () => {
        axios.get(" https://api.vschool.io/pokemon")
        .then(res => {
            renderPokemon(res.data)
        })
        .catch(err => console.log(err))
        }
        
        const renderPokemon = (pokemonData) => {
          const pokemonContainer = document.getElementById('pokemonContainer')
          let pokemonArray = pokemonData.objects[0].pokemon
        
          for (let i = 0; i < pokemonArray.length; i++){
            console.log(pokemonArray[i])
            const pokeNameElement = document.createElement('li')
            pokeNameElement.textContent = pokemonArray[i].name 
            pokemonContainer.appendChild(pokeNameElement)
        
            const pokeUrlElement = document.createElement('li')
            pokeUrlElement.textContent = pokemonArray[i].resource_uri
            pokemonContainer.appendChild(pokeUrlElement)
          }
        }