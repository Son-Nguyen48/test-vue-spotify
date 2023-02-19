<template>
  <div>
    <div class="side-bar bg-black h-full w-60">
      <!-- This is logo -->

      <div class="pl-6 py-6">
        <span>
          <router-link to="/" @click.native="setIdRouter(0)">
            <img
              src="../../../public/Spotify_Logo_CMYK_Black.png"
              alt="logo"
              style="filter: brightness(0) invert(1)"
              class="h-3/5 w-3/5"
            />
          </router-link>
        </span>
      </div>

      <!-- This is router link -->

      <ul class="px-6">
        <li v-for="(page, index) in pages" :key="page.id">
          <router-link
            @click.native="setIdRouter(index)"
            :to="page.link"
            class="py-2 w-full flex items-center justify-start"
          >
            <span
              v-html="idRouter === page.id ? page.iconActive : page.icon"
              style="filter: brightness(0) invert(1)"
              class="mr-4"
            >
            </span>
            <p
              :class="idRouter === page.id ? 'text-white' : 'text-lightest'"
              class="hover:text-white text-sm font-semibold"
            >
              {{ page.name }}
            </p>
          </router-link>
        </li>
      </ul>

      <!-- This is playlist bar -->

      <ul class="px-6 mt-6">
        <li
          v-for="playlistProfile in playlistProfiles"
          :key="playlistProfile.id"
          class="h-10"
        >
          <router-link
            :to="playlistProfile.id"
            class="h-full w-full flex items-center justify-start opacity-75 hover:opacity-100"
          >
            <span
              v-html="playlistProfile.icon"
              class="h-6 w-6 mr-4 flex items-center justify-center rounded"
              :style="`background: ${playlistProfile.iconWrap}`"
            >
            </span>
            <p class="hover:text-white text-sm font-semibold text-lightest">
              {{ playlistProfile.name }}
            </p>
          </router-link>
        </li>
        <div class="h-px w-full bg-light my-3"></div>
      </ul>

      <!-- This is Playlist detail  -->

      <ul class="px-6 overflow-y-scroll h-36">
        <li v-for="playlist in playlistDetails" :key="playlist.id">
          <router-link :to="playlist.link">
            <p
              class="flex items-center justify-start py-2 text-sm text-lightest hover:text-white"
            >
              {{ playlist.name }}
            </p>
          </router-link>
        </li>
      </ul>

      <!-- This is download button  -->

      <div class="mx-5 py-2">
        <router-link
          to="/download"
          class="flex items-center justify-start opacity-75 hover:opacity-100"
        >
          <span
            v-html="downloadButton.icon"
            class="h-9 w-9 flex items-center justify-center rounded"
          >
          </span>
          <p class="text-white font-semibold">{{ downloadButton.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          id: "home",
          name: "Home",
          icon: `<svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 uPxdw home-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path></svg>`,
          iconActive: `<svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 uPxdw home-active-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path></svg>`,
          link: "/"
        },
        {
          id: "search",
          name: "Search",
          icon: `<svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 uPxdw search-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>`,
          iconActive: `<svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 uPxdw search-active-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path><path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 01-2.077 5.816l4.344 4.344a1 1 0 01-1.414 1.414l-4.353-4.353a9.454 9.454 0 01-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path></svg>`,
          link: "/search"
        },
        {
          id: "library",
          name: "Your Library",
          icon: `<svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 uPxdw collection-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>`,
          iconActive: `<svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 uPxdw collection-active-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001 1h6a1 1 0 001-1V6.464a1 1 0 00-.5-.866l-6-3.464zM9 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1z"></path></svg>`,
          link: "/library"
        }
      ],
      playlistProfiles: [
        {
          id: "createPlaylist",
          name: "Create Playlist",
          icon: `<svg
            role="img"
            height="12"
            width="12"
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-encore-id="icon"
            class="Svg-sc-ytk21e-0 uPxdw"
          >
            <path
              d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"
            ></path>
          </svg>`,
          iconWrap: "#fff"
        },
        {
          id: "likedPlaylist",
          name: "Liked Songs",
          icon: `<svg
            role="img"
            height="12"
            width="12"
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-encore-id="icon"
            class="Svg-sc-ytk21e-0 uPxdw"
            style="filter: brightness(0) invert(1)"
          >
            <path
              d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"
            ></path>
          </svg>`,
          iconWrap: "linear-gradient(135deg, #450af5, #c4efd9)"
        }
      ],
      playlistDetails: [
        { id: "playlist1", name: "My playlist #1", link: "/playlist1" },
        { id: "playlist2", name: "My playlist #2", link: "/playlist2" },
        { id: "playlist3", name: "My playlist #3", link: "/playlist3" },
        { id: "playlist4", name: "My playlist #4", link: "/playlist4" },
        { id: "playlist5", name: "My playlist #5", link: "/playlist5" }
      ],
      downloadButton: {
        id: "download",
        name: "Install App",
        icon: `<svg
            role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-encore-id="icon"
            class="Svg-sc-ytk21e-0 uPxdw mr-3"
            style="filter: brightness(0) invert(1)"
          >
            <path
              d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
            ></path>
            <path
              d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"
            ></path>
          </svg>`,
        link: "/download"
      },
      idRouter: "home"
    };
  },
  updated() {
    console.log(this.idRouter);
  },
  methods: {
    setIdRouter(index) {
      this.idRouter = this.pages[index].id;
    }
  }
};
</script>

<style></style>
