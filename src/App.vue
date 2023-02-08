<template>
  <div id="app">
    <div class="grid" style="grid-template-rows: 527px 90px">
      <div class="flex">
        <side-bar></side-bar>
        <router-view class="h-full w-full bg-dark" />
      </div>
      <playing-bar></playing-bar>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/layouts/SideBar.vue";
import PlayingBar from "./components/layouts/PlayingBar.vue";
export default {
  components: {
    SideBar,
    PlayingBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

