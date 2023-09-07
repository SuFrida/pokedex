<template>
    <div id="pokedex">
      <div v-if="pokemonData" class="poke-container">
        <div class="pokedex-container">
          <div class="row w-100 w-md-75 justify-content-between align-items-center">
            <div class="col-3">
              <h2 class="poke-name">#{{ pokemonData.id }}</h2>
            </div>
            <div class="col-6">
              <button class="btn btn-shuffle" @click="fetchRandomPokemon">Mostrar Pokémon</button>
            </div>
            <div class="col-3">
              <img class="back-img" :class="{'animate__animated animate__bounce' : isAnimating}" :src="pokemonData.sprites.front_default" :alt="pokemonData.name" />
            </div>
          </div>
        <div class="pokedex-screen">
          <div class="pokedex-screen__top">
            <div class="pokedex-screen__top__left"></div>
            <div class="pokedex-screen__top__middle"><img class="poke-img" :src="pokemonData.sprites.other.home.front_default" :alt="pokemonData.name" /></div>
            <div class="pokedex-screen__top__right"></div>
          </div>
          <h2 class="poke-name">{{ pokemonData.name }}</h2>
          <div class="pokedex-screen__bottom">
            <div class="pokedex-screen__bottom__left"></div>
            <div class="pokedex-screen__bottom__middle">
              <span class="type-tag" :style="{ backgroundColor: typeColor, color: typeFontColor }">
                <p class="type-text">{{ pokemonData.types[0]?.type.name }}</p>
              </span>
              <span v-if="pokemonData.types[1]?.type.name " class="type-tag" :style="{ backgroundColor: typeColor2, color: typeFontColor2 }">
                <p class="type-text">{{ pokemonData.types[1]?.type.name }}</p>
              </span>
            </div>
            <div class="pokedex-screen__bottom__right"></div>
          </div>
        </div>
        <!-- <div class="pokedex-buttons">
          <div class="pokedex-buttons__top">
            <div class="pokedex-buttons__top__left"></div>
            <div class="pokedex-buttons__top__middle"><button class="btn" @click="fetchRandomPokemon">Change Pokemon</button></div>
            <div class="pokedex-buttons__top__right"></div>
          </div>
          <div class="pokedex-buttons__bottom">
            <div class="pokedex-buttons__bottom__left"></div>
            <div class="pokedex-buttons__bottom__middle"></div>
            <div class="pokedex-buttons__bottom__right"></div>
          </div>
        </div> -->
      </div>
      </div>
      <div v-else>
      <p>Loading Pokémon data...</p>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapState, mapMutations } from 'vuex';
  export default {
    name: 'PokedexPage',
    props: {
      
    },
    mounted() {
      this.fetchRandomPokemon(); // Initial fetch
      setInterval(() => {
        this.fetchRandomPokemon();// Fetch a random Pokémon every 30 seconds
      }, 30000); // 30 seconds in milliseconds
    },
    computed: {
    ...mapState(['randomPokemon', 'randomPokemonEvolution', 'firstEvolution', 'secondEvolution', 'thirdEvolution']),
      typeColor() {
        const typeColors = {
          electric: '--electric',
          fire: '--fire',
          grass: '--grass',
          water: '--water',
          bug: '--bug',
          flying: '--flying',
          normal: '--normal',
          poison: '--poison',
          ground: '--ground',
          fairy: '--fairy',
          fighting: '--fighting',
          psychic: '--psychic',
          rock: '--rock',
          steel: '--steel',
          ice: '--ice',
          ghost: '--ghost',
          dragon: '--dragon',
          dark: '--dark',
        };
        
        return `var(${typeColors[this.pokemonData.types[0].type.name]})`;
      },
      typeFontColor() {
        const typeColors = {
          electric: '--black',
          fire: '--white',
          grass: '--black',
          water: '--black',
          bug: '--black',
          flying: '--black',
          normal: '--black',
          poison: '--white',
          ground: '--black',
          fairy: '--white',
          fighting: '--white',
          psychic: '--white',
          rock: '--black',
          steel: '--black',
          ice: '--black',
          ghost: '--white',
          dragon: '--white',
          dark: '--white',
        };
        
        return `var(${typeColors[this.pokemonData.types[0].type.name]})`;
      },
      typeColor2() {
        const typeColors = {
          electric: '--electric',
          fire: '--fire',
          grass: '--grass',
          water: '--water',
          bug: '--bug',
          flying: '--flying',
          normal: '--normal',
          poison: '--poison',
          ground: '--ground',
          fairy: '--fairy',
          fighting: '--fighting',
          psychic: '--psychic',
          rock: '--rock',
          steel: '--steel',
          ice: '--ice',
          ghost: '--ghost',
          dragon: '--dragon',
          dark: '--dark',
        };
        
        return `var(${typeColors[this.pokemonData.types[1].type.name]})`;
      },
      typeFontColor2() {
        const typeColors = {
          electric: '--black',
          fire: '--white',
          grass: '--black',
          water: '--black',
          bug: '--black',
          flying: '--black',
          normal: '--black',
          poison: '--white',
          ground: '--black',
          fairy: '--white',
          fighting: '--white',
          psychic: '--white',
          rock: '--black',
          steel: '--black',
          ice: '--black',
          ghost: '--white',
          dragon: '--white',
          dark: '--white',
        };
        
        return `var(${typeColors[this.pokemonData.types[1].type.name]})`;
      },
      typeGradient() {
        const gradientMap = {
          electric: '--electric-gradient',
          fire: '--fire-gradient',
          grass: '--grass-gradient',
          water: '--water-gradient',
          bug: '--bug-gradient',
          flying: '--flying-gradient',
          normal: '--normal-gradient',
          poison: '--poison-gradient',
          ground: '--ground-gradient',
          fairy: '--fairy-gradient',
          fighting: '--fighting-gradient',
          psychic: '--psychic-gradient',
          rock: '--rock-gradient',
          steel: '--steel-gradient',
          ice: '--ice-gradient',
          ghost: '--ghost-gradient',
          dragon: '--dragon-gradient',
          dark: '--dark-gradient',
        };

        return `var(${gradientMap[this.pokemonData.types[0].type.name]})`;
      },
    },
    data () {
      return {
        pokemonData: null,
        pokemonType: null,
      }
    },
    methods: {
      ...mapMutations(['setRandomPokemon', 'setRandomPokemonEvolution', 'setFirstEvolution', 'setSecondEvolution', 'setThirdEvolution', 'setFlavorText']),
      restartAnimation() {
      this.isAnimating = false;

      // Trigger a re-render to remove the animation class
      this.$nextTick(() => {
        this.isAnimating = true;
      });
    },
      fetchRandomPokemon() {
        const randomPokemonId = Math.floor(Math.random() * 898) + 1; 
        // Generate a random Pokémon ID between 1 and 898
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
          .then((response) => {
            this.pokemonData = response.data;
            this.setRandomPokemon(response.data);
            this.restartAnimation();
            // Check if the species URL exists in pokemonData
            const speciesUrl = response.data.species.url;
            if (speciesUrl) {
              // Fetch species data using the species URL
              return axios.get(speciesUrl);
            } else {
              throw new Error('Species URL is not available.');
            }
          })
          .then((speciesResponse) => {
            // Handle species data here
            const evo = speciesResponse.data.evolution_chain.url;
            const fileterdTextEntries = speciesResponse.data.flavor_text_entries.filter(element => element.language.name === 'en');
            this.setFlavorText(fileterdTextEntries[0].flavor_text);
            if(evo) {
              return axios.get(evo);
            } else {
              throw new Error('Evolution URL is not available.');
            }
          })
          .then((evolutionResponse) => {
            // Handle evolution data here
            
            this.setRandomPokemonEvolution(evolutionResponse.data);
            this.setFirstEvolution(evolutionResponse.data.chain.species.name);
            this.setSecondEvolution(evolutionResponse.data.chain.evolves_to[0]?.species.name);
            this.setThirdEvolution(evolutionResponse.data.chain.evolves_to[0]?.evolves_to[0]?.species.name);

            // this.first_evolution = evolutionResponse.data.chain.species.name;
            // this.second_evolution = evolutionResponse.data.chain.evolves_to[0]?.species.name;
            // this.third_evolution = evolutionResponse.data.chain.evolves_to[0]?.evolves_to[0]?.species.name;
          })
          .catch((error) => {
            console.error('Error fetching Pokémon data:', error);
          });
      },
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  #pokedex {
    color: var(--white);
    z-index: 5 !important;
    position: relative;
  }
  .poke-name {
    text-transform: capitalize;
    font-size: 3.5rem !important;
  }
  .back-img {
    filter: grayscale(100%);
    width: 50%;
  }
  .btn-shuffle {
    background-color: var(--white);
    color: var(--black);
    border-radius: 10px;
    border: none;
    padding: 1% 5%;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .btn-shuffle:hover {
    background-color: var(--gray);
    color: var(--white);
    transition: 0.3s;
  }
  .poke-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow-y: hidden;
    background: radial-gradient(circle at 50% 50%, rgba(168,168,120, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  }
  .pokedex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    border-radius: 10px;
    overflow-x: hidden;
    padding: 3% 5% 0 5%;
  }
  .pokedex-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: auto;
    border-radius: 10px;
  }
  .pokedex-screen__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    border-radius: 10px 10px 0 0;
  }
  .pokedex-screen__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    border-radius: 0 0 10px 10px;
    margin: 3% auto;
  }
  .pokedex-screen__top__left {
    width: 20%;
    height: 100%;
    border-radius: 10px 0 0 0;
  }
  .pokedex-screen__top__middle {
    width: 50%;
    height: 50%;
  }
  .poke-img {
    width: 60%;
    height: auto;
    
  }
  .pokedex-screen__top__right {
    width: 20%;
    height: 100%;
    border-radius: 0 10px 0 0;
  }
  .pokedex-screen__bottom__left {
    width: 20%;
    height: 100%;
    border-radius: 0 0 0 10px;
  }
  .pokedex-screen__bottom__middle {
    width: 60%;
    height: 100%;
  }
  .type-tag {
    display: inline-flex;
    width: 40%;
    padding: 1% 3%;
    border-radius: 50px;
    font-size: 2rem;
    align-items: center;
    justify-content: space-evenly;
    font-size: 2em;
    margin: 0 1%;
    /* font-family: 'Roboto', sans-serif !important; */
  }
  .type-icon {
    width: 1.5em;
    height: 1.5em;
  }
  .type-text {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 3%;
  }
  .pokedex-screen__bottom__middle > .type-tag > .type-icon {
    fill: var(--white) !important;
  }
  .pokedex-screen__bottom__right {
    width: 20%;
    height: 100%;
    border-radius: 0 0 10px 0;
  }
  .pokedex-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 20%;
    border-radius: 0 0 10px 10px;
  }
  .pokedex-buttons__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    border-radius: 0 0 0 0;
  }
  .pokedex-buttons__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    border-radius: 0 0 10px 10px;
  }
  .pokedex-buttons__top__left {
    width: 20%;
    height: 100%;
    border-radius: 0 0 0 0;
  }
  .pokedex-buttons__top__middle {
    width: 60%;
    height: 100%;
  }
  .pokedex-buttons__top__right {
    width: 20%;
    height: 100%;
    border-radius: 0 0 0 0;
  }
  .pokedex-buttons__bottom__left {
    width: 20%;
    height: 100%;
    border-radius: 0 0 0 0;
  }
  .pokedex-buttons__bottom__middle {
    width: 60%;
    height: 100%;
  }
  .pokedex-buttons__bottom__right {
    width: 20%;
    height: 100%;
    border-radius: 0 0 0 0;
  }
  

  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  @media screen and (max-width: 992px) {
    .type-text {
      font-size: 1em;
    }
  }

/* On screens that are 600px or less, set the background color to olive */  
  @media screen and (max-width: 600px) {
    .btn-shuffle {
      padding: 1% 4%;
      font-size: 1rem;
    }
    .back-img {
      width: 100%;
    }
    .poke-name {
      font-size: 2.5rem !important;
    }
    .poke-img {
      width: 100%;
    }
    .type-tag {
      display: inline-flex;
      width: 45%;
      padding: 1% 3%;
      border-radius: 50px;
      font-size: 1rem;
      margin: 0 2%;
    }
    .type-text {
      font-size: 1.5em;
    }
    .pokedex-screen__bottom__middle {
      width: 70%;
    }
    .poke-description {
      font-size: 1.4rem;
      padding: 0 5px;
    }
  }
  </style>
  