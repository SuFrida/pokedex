// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    randomPokemon: null,
    randomPokemonEvolution: null,
    first_evolution: null,
    second_evolution: null,
    third_evolution: null,
    flavor_text: ""
  },
  mutations: {
    setRandomPokemon(state, payload) {
        state.randomPokemon = payload;
      },
    setRandomPokemonEvolution(state, payload) {
        state.randomPokemonEvolution = payload;
    },
    setFirstEvolution(state, payload) {
        state.first_evolution = payload;
    },
    setSecondEvolution(state, payload) {
        state.second_evolution = payload;
    },
    setThirdEvolution(state, payload) {
        state.third_evolution = payload;
    },
    setFlavorText(state, payload) {
        state.flavor_text = payload;
    }
  },
  actions: {
    // Your action functions go here
  },
  getters: {
    getRandomPokemon(state) {
        return state.randomPokemon;
      },
    getRandomPokemonEvolution(state) {
        return state.randomPokemonEvolution;
    },
    getFirstEvolution(state) {
        return state.first_evolution;
    },
    getSecondEvolution(state) {
        return state.second_evolution;
    },
    getThirdEvolution(state) {
        return state.third_evolution;
    },
    getFlavorText(state) {
        return state.flavor_text;
    }

  } 
});

