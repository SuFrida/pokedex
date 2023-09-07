<template>
    <div id="pokedex">
      <!-- <div v-if="pokemonData">
      <h2>{{ pokemonData.name }}</h2>
      <img :src="pokemonData.sprites.front_default" :alt="pokemonData.name" />
      <p>Type: {{ pokemonData.types[0].type.name }}</p>
    </div>
    <div v-else>
      <p>Loading Pokémon data...</p>
    </div> -->
      <div v-if="pokemonData" class="poke-container" :style="{ background : typeGradient }">
        <div class="pokedex-container">
          <div class="row w-100 justify-content-between">
            <div class="col-2">
              <h2 class="poke-name">#{{ pokemonData.id }}</h2>
            </div>
            <div class="col-3">
              <img class="back-img" :src="pokemonData.sprites.front_default" :alt="pokemonData.name" />
            </div>
          </div>
        <div class="pokedex-screen">
          <div class="pokedex-screen__top">
            <div class="pokedex-screen__top__left"></div>
            <div class="pokedex-screen__top__middle"><img :src="pokemonData.sprites.other.home.front_default" :alt="pokemonData.name" /></div>
            <div class="pokedex-screen__top__right"></div>
          </div>
          <div class="pokedex-screen__bottom">
            <div class="pokedex-screen__bottom__left"></div>
            <div class="pokedex-screen__bottom__middle">
              <span class="type-tag" :style="{ backgroundColor: typeColor, color: typeFontColor }">
                <img class="type-icon" :src="require(`../assets/svg/${typeIcons(pokemonData.types[0].type.name)}`)" alt="">{{ pokemonData.types[0].type.name }}
              </span>
            </div>
            <div class="pokedex-screen__bottom__right"></div>
          </div>
          <h2 class="poke-name">{{ pokemonData.name }}</h2>
        </div>
        <div class="pokedex-buttons">
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
        </div>
      </div>
      </div>
      <div v-else>
      <p>Loading Pokémon data...</p>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'PokedexPage',
    props: {
      
    },
    mounted() {
      this.fetchRandomPokemon(); // Initial fetch
      setInterval(() => {
        this.fetchRandomPokemon(); // Fetch a random Pokémon every 30 seconds
      }, 30000); // 30 seconds in milliseconds
    },
    computed: {
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
          grass: '--white',
          water: '--black',
          bug: '--white',
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
      fetchRandomPokemon() {
        const randomPokemonId = Math.floor(Math.random() * 898) + 1; // Generate a random Pokémon ID between 1 and 898
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
          .then((response) => {
            this.pokemonData = response.data;
            console.log(response.data)
           })
          .catch((error) => {
            console.error('Error fetching Pokémon data:', error);
          });
      },
      typeIcons(type) {
        const typeIcons = {
          electric: 'bolt-solid.svg', // Font Awesome lightning bolt icon
          fire: 'fire-solid.svg', // Font Awesome fire icon
          grass: 'leaf-solid.svg', // Font Awesome leaf icon
          water: 'droplet-solid.svg', // Font Awesome water droplet icon
          bug: 'bug-solid.svg', // Font Awesome bug icon
          flying: 'feather-solid.svg', // Font Awesome dove icon
          normal: 'circle-dot-solid.svg', // Font Awesome circle icon
          poison: 'skull-solid.svg', // Font Awesome skull icon
          ground: 'mountain-solid.svg', // Font Awesome mountain icon
          fairy: 'star-solid.svg', // Font Awesome wizard hat icon
          fighting: 'hand-fist-solid.svg', // Font Awesome raised fist icon
          psychic: 'eye-solid.svg', // Font Awesome brain icon
          rock: 'hill-rockslide-solid.svg', // Font Awesome gem icon
          steel: 'shield-halved-solid.svg', // Font Awesome shield icon
          ice: 'snowflake-regular.svg', // Font Awesome snowflake icon
          ghost: 'ghost-solid.svg', // Font Awesome ghost icon
          dragon: 'dragon-solid.svg', // Font Awesome dragon icon
          dark: 'moon-solid.svg', // Font Awesome moon icon
        };
        console.log(typeIcons[type])
        return typeIcons[type];
      }
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  #pokedex {
    color: var(--gray);
  }
  .poke-name {
    text-transform: capitalize;
    font-size: 3rem !important;
  }
  .back-img {
    filter: grayscale(100%);

  }
  .icon {
    fill: var(--white);
  }
  .poke-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
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
    padding: 5%;
  }
  .pokedex-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 80%;
    
    /* background-color: #fff; */
    border-radius: 10px;
    /* box-shadow: 0 0 10px rgba(0,0,0,0.2); */
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
    width: 60%;
    height: 100%;
  }
  .pokedex-screen__top__middle > img {
    width: 100%;
    height: 100%;
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
  .pokedex-screen__bottom__middle > .type-tag {
    display: inline-block;
    padding: 1% 5%;
    border-radius: 25px;
    color: var(--black);
    font-size: 1.5rem;
    text-transform: capitalize; 
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
  a {
    color: #42b983;
  }
  </style>
  