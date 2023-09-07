<template>
    <div id="stats">
      <div class="stat-card">
        <div class="stat-card__header">
          <h2 class="stat-card__title">Stats</h2>
        </div>
        <div class="stat-card__body">
          <div class="stat-card__stat">
            <div class="stat-card__stat-name">HP</div>
            <div class="stat-card__stat-value">
                
            </div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name">Attack</div>
            <div class="stat-card__stat-value"></div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name">Defense</div>
            <div class="stat-card__stat-value"></div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name">Special Attack</div>
            <div class="stat-card__stat-value"></div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name">Special Defense</div>
            <div class="stat-card__stat-value"></div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name">Speed</div>
            <div class="stat-card__stat-value"></div>
          </div>
        </div>
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
    #stats {
        background-color: var(--white);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin: 20px 0;
        padding: 20px;
        color: var(--black);
    }
  .stat-card {
    
  }
  .type-tag {
    display: inline-block;
    padding: 1% 5%;
    border-radius: 25px;
    color: var(--black);
    font-size: 1.5rem;
    text-transform: capitalize; 
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
  