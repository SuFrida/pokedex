<template>
  <nav class="navbar">
  </nav>
  <div class="app-section">
    <div class="row">
    <div class="col-12 col-md-6">
      <PokedexPage />
    </div>
    <div class=" col-12 col-md-6">
      <StatsPage />
    </div>
  </div>
  </div>
  
  <footer class="footer">
    <p>Created by <a href=""></a></p>
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
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
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
  --electric-gradient: radial-gradient(circle at 50% 50%, rgba(255,206,75, 0.8) 0%, rgba(19, 18, 18, 0) 70%);
  --fire-gradient: radial-gradient(circle at 50% 50%, rgba(255,89,89, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --grass-gradient: radial-gradient(circle at 50% 50%, rgba(94,255,94, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --water-gradient: radial-gradient(circle at 50% 50%, rgba(75,202,255, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --bug-gradient: radial-gradient(circle at 50% 50%, rgba(168,184,32, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --flying-gradient: radial-gradient(circle at 50% 50%, rgba(168,144,240, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --normal-gradient: radial-gradient(circle at 50% 50%, rgba(168,168,120, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --poison-gradient: radial-gradient(circle at 50% 50%, rgba(160,64,160, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --ground-gradient: radial-gradient(circle at 50% 50%, rgba(224,192,104, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --fairy-gradient: radial-gradient(circle at 50% 50%, rgba(238,153,172, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --fighting-gradient: radial-gradient(circle at 50% 50%, rgba(192,48,40, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --psychic-gradient: radial-gradient(circle at 50% 50%, rgba(248,88,136, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --rock-gradient: radial-gradient(circle at 50% 50%, rgba(184,160,56, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --steel-gradient: radial-gradient(circle at 50% 50%, rgba(184,184,208, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --ice-gradient: radial-gradient(circle at 50% 50%, rgba(152,216,216, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --ghost-gradient: radial-gradient(circle at 50% 50%, rgba(112,88,152, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --dragon-gradient: radial-gradient(circle at 50% 50%, rgba(112,56,248, 0.8) 1%, rgba(19, 18, 18, 0) 70%);
  --dark-gradient: radial-gradient(circle at 50% 50%, rgba(112,88,72, 0.8) 1%, rgba(19, 18, 18, 0) 70%);

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
.navbar {
  /* Mejorar Navbar */
  /* background-image: url('../src/assets/img/pokedex-navbar.png'); */
  background-color: rgba(219,30,46, 0.7);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 12vh;
  padding: 0;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
}

.nav-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  height: 100%;
}
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;

}
.bi-shuffle {
  font-size: 3rem;
  color: #fff;
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
  background-color: rgba(219,30,46, 0.7);
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
}
</style>
