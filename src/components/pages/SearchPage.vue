<template>
  <div>
    <the-header>
      <div class="flex items-center mx-4 w-full h-full relative flex-1">
        <div style="flex: 0 1 341px">
          <div class="w-full h-10 rounded-3xl bg-white">
            <form action="" class="w-full h-full px-12 py-2">
              <input
                class="outline-none text-sm w-full"
                type="text"
                placeholder="What do you want to listen to?"
              />
            </form>
          </div>

          <div class="absolute top-1 left-3">
            <span>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 uPxdw mOLTJ2mxkzHJj6Y9_na_"
                viewBox="0 0 24 24"
                data-encore-id="icon"
              >
                <path
                  d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
                ></path>
              </svg>
            </span>
          </div>

          <div
            class="absolute top-1 left-72"
            style="transform: translateX(60%)"
          >
            <span>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 uPxdw mOLTJ2mxkzHJj6Y9_na_"
                viewBox="0 0 24 24"
                data-encore-id="icon"
              >
                <path
                  d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </the-header>

    <!-- This is the Search result history  -->

    <section>
      <div
        class="grid"
        style="
          grid-template-columns: repeat(5, minmax(0, 1fr));
          min-width: 410px;
        "
      >
        <base-card
          v-for="history in historys"
          :key="history.title"
          :card-info="history"
        >
          <div
            class="absolute top-2 right-2 h-8 w-8 bg-dark opacity-60 rounded-full flex items-center justify-center"
          >
            <span
              ><svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
                class="Svg-sc-ytk21e-0 uPxdw"
                style="filter: brightness(0) invert(1)"
              >
                <path
                  d="M1.47 1.47a.75.75 0 011.06 0L8 6.94l5.47-5.47a.75.75 0 111.06 1.06L9.06 8l5.47 5.47a.75.75 0 11-1.06 1.06L8 9.06l-5.47 5.47a.75.75 0 01-1.06-1.06L6.94 8 1.47 2.53a.75.75 0 010-1.06z"
                ></path></svg
            ></span>
          </div>
        </base-card>
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "../layouts/TheHeader.vue";
import BaseCard from "../UI/BaseCard.vue";
export default {
  data() {
    return {
      historys: [
        {
          src: "https://i.scdn.co/image/ab67616d00001e020f3abcbf0e79cacac2df44cc",
          title: "City Girl",
          artist: "Flux Vortex",
          name: "Playlist",
          link: "/playlist/flux-vortex"
        },
        {
          src: "https://seeded-session-images.scdn.co/v1/img/track/0JkBihR0VtIg6Q2TEfIvKv/en",
          title: "Not Your Baby Radio",
          artist: "By Spotify",
          name: "Podcasts",
          link: "/playlist/podcasts"
        },
        {
          src: "https://seed-mix-image.spotifycdn.com/v6/img/artist/00FQb4jTyendYWaN8pK0wa/en/default",
          title: "Lana Del Rey Mix",
          artist: "Conan Gray, Montell Fish, Mazzy Star and more",
          name: "Artist",
          link: "/playlist/lana-del-rey-mix"
        }
      ]
    };
  },
  components: { TheHeader, BaseCard }
};
</script>

<style></style>
