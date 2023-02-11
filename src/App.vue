<template>
  <div id="app">
    <div class="grid" style="grid-template-rows: 527px 90px">
      <div class="flex">
        <side-bar></side-bar>
        <div
          id="main-content"
          class="w-full h-full relative overflow-y-scroll"
          style="background-image: linear-gradient(to bottom, #222222, #121212)"
        >
          <router-view class="mb-6" />
        </div>
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
  },
  mounted() {
    document
      .getElementById("main-content")
      .addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = document.querySelector(".top-bar");
      const mainContent = document.getElementById("main-content");
      const scrollPosition = mainContent.scrollTop;
      console.log(scrollPosition);

      if (scrollPosition > 20) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-dark");
      } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-dark");
      }
    }
  }
};
</script>

<style></style>

