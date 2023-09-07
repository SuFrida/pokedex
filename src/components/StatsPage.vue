<template>
    <div id="stats">
      <div class="stat-card" v-if="getRandomPokemon">
        <div class="stat-card__header">
          <p>Height: {{ getRandomPokemon.height }}</p>
          <p>Weight: {{ getRandomPokemon.weight }}</p>
        </div>
        <div class="stat-card__body">
          <div class="row">
            <div class="col-6">
              <h1>Stats</h1>
              <div class="stat-card__stat">
            <div class="stat-card__stat-name">HP</div>
            <div class="stat-card__stat-value" v-if="getRandomPokemon">
              <ProgressBar :value="getRandomPokemon.stats[0].base_stat"></ProgressBar>
            </div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name">Attack</div>
            <div class="stat-card__stat-value">
              <ProgressBar :value="getRandomPokemon.stats[1].base_stat"></ProgressBar>
            </div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name">Defense</div>
            <div class="stat-card__stat-value">
              <ProgressBar :value="getRandomPokemon.stats[2].base_stat"></ProgressBar>
            </div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name">Special Attack</div>
            <div class="stat-card__stat-value">
              <ProgressBar :value="getRandomPokemon.stats[3].base_stat"></ProgressBar>
            </div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name">Special Defense</div>
            <div class="stat-card__stat-value">
              <ProgressBar :value="getRandomPokemon.stats[4]?.base_stat"></ProgressBar>
            </div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name">Speed</div>
            <div class="stat-card__stat-value">
              <ProgressBar :value="getRandomPokemon.stats[5].base_stat"></ProgressBar>
            </div>
          </div>
            </div>
            <div class="col-6">
              <h1>Moves</h1>
              <ul>
                <li v-for="move in getRandomPokemon.moves.slice(0,5)" :key="move">
                  {{ move.move.name }}
                </li>
              </ul>
              <h1>Habilities</h1>
              <ul>
                <li v-for="ability in getRandomPokemon.abilities.slice(0,5)" :key="ability">
                  {{ ability.ability.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="row" v-if="getRandomPokemonEvolution">
            <div class="col-12">
              <div class="next-evolution" >
                <h3>Evolutions</h3>
                {{ showEvolution  }}
                
              </div>
            </div>
            <div class="col-12 d-flex">
              <div class="col-4">
              {{ getRandomPokemonEvolution.chain?.species?.name }}
              <img :src="first_evolution" alt="">
              </div>
              <div class="col-4">
                {{ this.getRandomPokemonEvolution.chain?.evolves_to[0]?.species?.name }}
                <img :src="second_evolution" alt="">
              </div>
              <div class="col-4">
                {{ this.getRandomPokemonEvolution.chain?.evolves_to[0]?.evolves_to[0]?.species?.name }}
                <img :src="third_evolution" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapGetters } from 'vuex';
  import ProgressBar from './ProgressBar.vue';
  export default {
    name: 'PokedexPage',
    components: {
      ProgressBar,
    },
    mounted() {
      this.getEvolutionImgs()
    },
    data () {
      return {
        pokemonData: null,
        pokemonType: null,
        first_evolution: null,
        second_evolution: null,
        third_evolution: null,
      }
    },
    computed: {
      ...mapGetters([
        'getRandomPokemon', 
        'getRandomPokemonEvolution',
        'getFirstEvolution',
        'getSecondEvolution',
        'getThirdEvolution',
      ]),
      showEvolution() {
       if(this.getRandomPokemonEvolution.chain?.species?.name === this.getRandomPokemon?.name) {
        return '1st Evolution'
       } else if(this.getRandomPokemonEvolution.chain?.evolves_to[0]?.species?.name === this.getRandomPokemon?.name) {
        return '2nd Evolution'
       } else if(this.getRandomPokemonEvolution.chain?.evolves_to[0]?.evolves_to[0]?.species?.name === this.getRandomPokemon?.name) {
        return '3rd Evolution'
       } else {
         return 'No more evolutions'
       }
      },
      
    },
    methods: {
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
      },
      async getEvolutionImgs() {
        try {
          const response1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.getFirstEvolution}`);
          this.first_evolution = response1.data.sprites?.other?.home?.front_default;
          console.log(this.first_evolution);

          const response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.getSecondEvolution}`);
          this.second_evolution = response2.data.sprites?.other?.home?.front_default;
          console.log(this.second_evolution);

          const response3 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.getThirdEvolution}`);
          this.third_evolution = response3.data.sprites?.other?.home?.front_default;
          console.log(this.third_evolution);
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        }
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
        padding: 20px;
        color: var(--black);
        width: 50%;
    }
  .stat-card {
    width: 100%;
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
  