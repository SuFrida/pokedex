<template>
  <div class="app-section">
    <div class="row">
    <div class="col-12">
      <PokedexPage />
    </div>
    <div class=" col-12 d-flex justify-content-center">
      <StatsPage />
    </div>
  </div>
  </div>
  
  <footer class="footer">
    <p>Created by <a href="">Frida SuFrida</a></p>
  </footer>
</template>

<script>
import PokedexPage from './components/PokedexPage.vue'
import StatsPage from './components/StatsPage.vue';
export default {
  name: 'App',
  components: {
    PokedexPage,
    StatsPage,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=VT323&display=swap');
:root {
  --black: #2a2a2a;
  --white: #e3e3e3;
  --gray: #535353;
  --electric: #ffce4b;
  --fire: #ff5959;
  --grass: #5eff5e;
  --water: #4bcaff;
  --bug: #a8b820;
  --flying: #a890f0;
  --normal: #a8a878;
  --poison: #a040a0;
  --ground: #e0c068;
  --fairy: #ee99ac;
  --fighting: #c03028;
  --psychic: #f85888;
  --rock: #b8a038;
  --steel: #b8b8d0;
  --ice: #98d8d8;
  --ghost: #705898;
  --dragon: #7038f8;
  --dark: #705848;
  --electric-gradient: radial-gradient(circle at 50% 50%, rgba(255,206,75, 0.5) 0%, rgba(19, 18, 18, 0) 35%);
  --fire-gradient: radial-gradient(circle at 50% 50%, rgba(255,89,89, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --grass-gradient: radial-gradient(circle at 50% 50%, rgba(94,255,94, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --water-gradient: radial-gradient(circle at 50% 50%, rgba(75,202,255, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --bug-gradient: radial-gradient(circle at 50% 50%, rgba(168,184,32, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --flying-gradient: radial-gradient(circle at 50% 50%, rgba(168,144,240, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --normal-gradient: radial-gradient(circle at 50% 50%, rgba(168,168,120, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --poison-gradient: radial-gradient(circle at 50% 50%, rgba(160,64,160, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --ground-gradient: radial-gradient(circle at 50% 50%, rgba(224,192,104, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --fairy-gradient: radial-gradient(circle at 50% 50%, rgba(238,153,172, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --fighting-gradient: radial-gradient(circle at 50% 50%, rgba(192,48,40, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --psychic-gradient: radial-gradient(circle at 50% 50%, rgba(248,88,136, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --rock-gradient: radial-gradient(circle at 50% 50%, rgba(184,160,56, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --steel-gradient: radial-gradient(circle at 50% 50%, rgba(184,184,208, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --ice-gradient: radial-gradient(circle at 50% 50%, rgba(152,216,216, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --ghost-gradient: radial-gradient(circle at 50% 50%, rgba(112,88,152, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --dragon-gradient: radial-gradient(circle at 50% 50%, rgba(112,56,248, 0.5) 1%, rgba(19, 18, 18, 0) 35%);
  --dark-gradient: radial-gradient(circle at 50% 50%, rgba(112,88,72, 0.5) 1%, rgba(19, 18, 18, 0) 35%);

}
#app {
  font-family: 'VT323', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e3e3e3;
  padding: 0;
  overflow-x: hidden;
  background-color: #2a2a2a;
}
.app-section {
  background: url('./assets/svg/pokeball-bg.svg') no-repeat center center;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;

}
.btn-container .switch-btn:hover {
  cursor: pointer;
  background-color: #405a74;
}
.switch-btn {
  border-radius: 50%;
  background-color: #2c3e50;
  border: 3px solid #fff;
  width: 140px;
  height: 140px;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: rgba(0,0,0, 0.5);
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
  z-index: 10;
}
 a {
  color: #fff;
  text-decoration: none !important;
}
@media screen and (max-width: 992px) {
  
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  
}
</style>
