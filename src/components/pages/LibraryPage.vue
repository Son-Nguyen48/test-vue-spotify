<template>
  <div>
    <the-header>
      <ul class="flex flex-1 justify-start mx-6">
        <li
          v-for="libraryMenu in libraryMenus"
          :key="libraryMenu.id"
          class="text-white inline-block item-menu"
        >
          <a
            href="#"
            :class="`px-4 py-3 rounded-md inline-block mr-2 text-sm font-bold ${
              libraryMenu.isActive === true ? 'bg-light' : 'bg-transparent'
            }`"
            >{{ libraryMenu.name }}</a
          >
        </li>
      </ul>
    </the-header>
  </div>
</template>

<script>
import TheHeader from "../layouts/TheHeader.vue";
export default {
  data() {
    return {
      libraryMenus: [
        { id: "playlist", name: "Playlist", link: "/playlist", isActive: true },
        {
          id: "podcasts",
          name: "Podcasts",
          link: "/podcasts",
          isActive: false
        },
        { id: "artists", name: "Artists", link: "/artists", isActive: false },
        { id: "albums", name: "Albums", link: "/albums", isActive: false }
      ]
    };
  },
  components: { TheHeader }
};
</script>

<style></style>
