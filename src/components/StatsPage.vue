<template>
    <div id="stats">
      <div class="stat-card" v-if="getRandomPokemon">
        <div class="stat-card__header">
          <div class="row">
            <div class="col-12">
              <p class="poke-description">{{ getFlavorText }}</p>
            </div>
          </div>
          <hr>
          <div class="row my-4">
            <div class="col-6 px-sm-1">
              <h1 class="height"><b>Height:</b> {{ getHeight(getRandomPokemon.height) + ' m' }}</h1>
            </div>
            <div class="col-6 px-sm-1">
              <h1 class="weight"><b>Weight:</b> {{ getWeight(getRandomPokemon.weight) + ' kg' }}</h1>
            </div>
          </div>
          <hr>
        </div>
        <div class="stat-card__body">
          <div class="row justify-content-evenly">
            <div class="col-12 col-md-6 px-4">
              <h1><b>Stats</b></h1>
              <div class="stat-card__stat">
            <div class="stat-card__stat-name d-flex justify-content-start"><h2>HP</h2></div>
            <div class="stat-card__stat-value" v-if="getRandomPokemon">
              <ProgressBar :value="getRandomPokemon.stats[0].base_stat"></ProgressBar>
            </div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name d-flex justify-content-start"><h2>ATTACK</h2></div>
            <div class="stat-card__stat-value">
              <ProgressBar :value="getRandomPokemon.stats[1].base_stat"></ProgressBar>
            </div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name d-flex justify-content-start"><h2>DEFENSE</h2></div>
            <div class="stat-card__stat-value">
              <ProgressBar :value="getRandomPokemon.stats[2].base_stat"></ProgressBar>
            </div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name d-flex justify-content-start"><h2>SPECIAL ATTACK</h2></div>
            <div class="stat-card__stat-value">
              <ProgressBar :value="getRandomPokemon.stats[3].base_stat"></ProgressBar>
            </div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name d-flex justify-content-start"><h2>SPECIAL DEFENSE</h2></div>
            <div class="stat-card__stat-value">
              <ProgressBar :value="getRandomPokemon.stats[4]?.base_stat"></ProgressBar>
            </div>
          </div>
          <div class="stat-card__stat">
            <div class="stat-card__stat-name d-flex justify-content-start"><h2>SPEED</h2></div>
            <div class="stat-card__stat-value">
              <ProgressBar :value="getRandomPokemon.stats[5].base_stat"></ProgressBar>
            </div>
          </div>
            </div>
           <!-- <div class="d-sm-none col-md-1 d-flex px-2">
            <hr id="hr">
           </div> -->
            <div class="col-12 col-md-6">
              <div class="moves">
                <h1><b>Moves</b></h1>
              <ul>
                <li class="move-li" v-for="move in getRandomPokemon.moves.slice(0,5)" :key="move">
                  <img class="list-icon" src="../assets/svg/list-icon.svg" alt="">
                  <p>{{ move.move.name }}</p>
                </li>
              </ul>
              </div>
              <hr>
              <div class="abilities">
                <h1><b>Habilities</b></h1>
              <ul>
                <li class="ability-li" v-for="ability in getRandomPokemon.abilities.slice(0,5)" :key="ability">
                  <img class="list-icon" src="../assets/svg/list-icon.svg" alt="">
                  <p>{{ ability.ability.name }}</p>
                </li>
              </ul>
              </div>
            </div>
          </div>
          <hr>
          <div class="row mt-3" v-if="getRandomPokemonEvolution">
            <div class="col-12">
              <div class="next-evolution" >
                <h1><b>Evolutions</b></h1>
              </div>
            </div>
            <div class="col-12 d-flex align-items-center justify-content-center">
              <div class="col-4">
                <span class="type-tag-evo" v-if="this.getFirstEvolution">
                  <a :href="`https://www.pokemon.com/uk/pokedex/${this.getFirstEvolution}`" class="type-text-evo">{{ this.getFirstEvolution }}</a>
                </span>
              </div>
              <div class="col-4">
                <span class="type-tag-evo" v-if="this.getSecondEvolution">
                  <a :href="`https://www.pokemon.com/uk/pokedex/${this.getSecondEvolution}`" class="type-text-evo">{{ this.getSecondEvolution }}</a>
                </span>
              </div>
              <div class="col-4">
                <span class="type-tag-evo" v-if="this.getThirdEvolution">
                  <a :href="`https://www.pokemon.com/uk/pokedex/${this.getThirdEvolution}`" class="type-text-evo">{{ this.getThirdEvolution }}</a>
                </span>
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
        'getFlavorText'
      ]),
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
      },
      getHeight(height) {
        return height / 10;
      },
      getWeight(weight) {
        return weight / 10;
      },
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    #stats {
        background-color: var(--white);
        border-radius: 80px 80px 0 0;
        /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
        padding: 6% 3%;
        color: var(--black);
        width: 50%;
        margin-top: -6%;
        /* border: 25px solid rgba(219,30,46, 1);; */
        
    }
  .stat-card {
    width: 100%;
  }
  .poke-description {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }
  .type-tag-evo {
    display: inline-flex;
    width: 70%;
    padding: 1% 5%;
    border-radius: 50px;
    font-size: 1rem;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 1%;
    background-color: var(--gray);
    color: var(--black);
  }
  a {
    padding: 1%;
  }
  .type-text-evo {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3%;
  }
  .type-tag-evo:hover {
    cursor: pointer;
    background-color: var(--black);
    color: var(--white);
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 5%;
  }
  .move-li {
    display: block;
    font-size: 2rem;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ability-li {
    display: block;
    font-size: 2rem;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .list-icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    fill: #DD2D51;
  }
  .evo-img {
    width: 100%;
  }
  @media screen and (max-width: 992px) {
    #stats {
      width: 100%;
      border-radius: 30px 30px 0 0;
    }
    .type-tag-evo {
      width: 65%;
    }
    .type-text-evo {
      font-size: 1.5rem;
    }
    ul {
      padding-left: 5%;
    }
  }

/* On screens that are 600px or less, set the background color to olive */
  @media screen and (max-width: 600px) {
    #stats {
      width: 100%;
      border-radius: 30px 30px 0 0;
    }
    .type-tag-evo {
      display: inline-flex;
      width: 85%;
      padding: 2% 6%;
      border-radius: 50px;
      font-size: 1rem;
      margin: 0 2%;
    }
    .type-text-evo {
      font-size: 1.2em;
    }
    .height, .weight {
      font-size: 1.5em;
    }
  }
  </style>
  