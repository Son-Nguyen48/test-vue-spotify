<template>
  <div>
    <main-view class="main-view">
      <!-- This is the header  -->

      <the-header></the-header>

      <section>
        <!-- This is the Recently played -->

        <base-header :name="'Recently played'"></base-header>

        <!-- This is list recent songs -->
        <div
          class="grid gap-6 px-8"
          style="
            grid-template-columns: repeat(5, minmax(0, 1fr));
            min-width: 410px;
          "
        >
          <base-card
            v-for="recent in recents"
            :key="recent.title"
            :card-info="recent"
          ></base-card>
        </div>
      </section>

      <section>
        <!-- This is the Good evening  -->

        <base-header :name="'Good Evening'"></base-header>

        <!-- This is list recent songs -->
        <div
          class="grid gap-x-6 gap-y-4 px-8"
          style="
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 80px 80px;
          "
        >
          <router-link
            :to="recent.link"
            class="block"
            v-for="recent in recents"
            :key="recent.title"
          >
            <div
              class="song rounded-lg bg-nearly__lightest hover:bg-light flex"
              style="min-width: 270px; height: 80px"
            >
              <img
                :src="`${recent.src}`"
                alt="img"
                class="w-auto h-full shadow mb-2 rounded"
                style="min-height: 80px; min-width: 80px"
              />
              <div class="flex items-center justify-between w-full px-4">
                <h1 class="text-sm font-semibold text-white tracking-wide">
                  {{ recent.title }}
                </h1>
                <div
                  class="play__button--green w-12 h-12 flex items-center justify-center"
                >
                  <button
                    class="bg-green w-12 h-12 rounded-full flex items-center justify-center shadow-sm shadow-black hover:scale-105"
                  >
                    <svg
                      role="img"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-encore-id="icon"
                      class="Svg-sc-ytk21e-0 uPxdw"
                    >
                      <path
                        d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </section>

      <section>
        <!-- This is the Made for User playlist -->

        <base-header :name="'Made for Nguyễn Thế Sơn'"></base-header>

        <!-- This is list recent songs -->
        <div
          class="grid gap-6 px-8"
          style="
            grid-template-columns: repeat(5, minmax(0, 1fr));
            min-width: 410px;
          "
        >
          <base-card
            v-for="recent in madeForUsers"
            :key="recent.title"
            :card-info="recent"
          ></base-card>
        </div>
      </section>
      <section>
        <!-- This is the Pop playlists -->

        <base-header :name="'Pop'"></base-header>

        <!-- This is list recent songs -->
        <div
          class="grid gap-6 px-8"
          style="
            grid-template-columns: repeat(5, minmax(0, 1fr));
            min-width: 410px;
          "
        >
          <base-card
            v-for="recent in popPLaylists"
            :key="recent.title"
            :card-info="recent"
          ></base-card>
        </div>
      </section>
      <section>
        <!-- This is the More like Hit Rewind playlists -->

        <base-header :name="'More like Hit Rewind'"></base-header>

        <!-- This is list recent songs -->
        <div
          class="grid gap-6 px-8"
          style="
            grid-template-columns: repeat(5, minmax(0, 1fr));
            min-width: 410px;
          "
        >
          <base-card
            v-for="recent in hitRewinds"
            :key="recent.title"
            :card-info="recent"
          ></base-card>
        </div>
      </section>
      <section>
        <!-- This is the Recently played -->

        <base-header :name="'Artists'"></base-header>

        <!-- This is list recent songs -->
        <div
          class="grid gap-6 px-8"
          style="
            grid-template-columns: repeat(5, minmax(0, 1fr));
            min-width: 410px;
          "
        >
          <base-card
            v-for="recent in artists"
            :key="recent.title"
            :card-info="recent"
            :isRoundedFull="true"
          ></base-card>
        </div>
      </section>
    </main-view>
  </div>
</template>

<script>
import TheHeader from "../layouts/TheHeader.vue";
import MainView from "../layouts/MainView.vue";
import BaseHeader from "../UI/BaseHeader.vue";
import BaseCard from "../UI/BaseCard.vue";
export default {
  data() {
    return {
      recents: [
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
        },
        {
          src: "https://i.scdn.co/image/ab67616d0000b27321c8a879ce70dc6e972c16b5",
          title: "Flux Vortex",
          artist: "Artist",
          name: "Album",
          link: "/playlist/flux-vortex"
        },
        {
          src: "https://i.scdn.co/image/ab67706c0000da84e7dfed37d03b77d818d63009",
          title: "Lana Del Rey Radio",
          artist: "Julency Myrtil",
          name: "Band",
          link: "/playlist/lana-del-rey-radio"
        }
      ],
      artists: [
        {
          src: "https://i.scdn.co/image/ab6761610000f178b337a18007222947ec65f65f",
          title: "Justin Degryse",
          artist: "Artist",
          link: "/artist/justin-degryse"
        },
        {
          src: "https://i.scdn.co/image/ab6761610000f17887528aedec4b8d5586768014",
          title: "Jaymes Young",
          artist: "Artist",
          link: "/artist/jaymes-young"
        },
        {
          src: "https://i.scdn.co/image/ab6761610000f1781cc12c7a616161d6646cf54c",
          title: "Famy",
          artist: "Artist",
          link: "/artist/famy"
        },
        {
          src: "https://i.scdn.co/image/ab6761610000f17877cd31579fca84c5c60eb46c",
          title: "Rosa Linn",
          artist: "Artist",
          link: "/artist/rosa-linn"
        },
        {
          src: "https://i.scdn.co/image/ab6761610000f1781d851d77d3ab7d1a29808cb3",
          title: "Johnny Orlando",
          artist: "Artist",
          link: "/artist/johnny-orlando"
        }
      ],
      madeForUsers: [
        {
          src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebbe8b6591753659ca595c73c6/1/en/default",
          title: "Daily Mix 1",
          artist: "Hoang Thuy Linh, RPT Orijinn, 黃齡 and more",
          link: "/playlist/daily-mix-1"
        },
        {
          src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb5f9e28219c169fd4b9e8379/2/en/default",
          title: "Daily Mix 2",
          artist: "The Weeknd, Jaymes Young, Ruth B. and more",
          link: "/playlist/daily-mix-2"
        },
        {
          src: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==",
          title: "Discover Weekly",
          artist:
            "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.",
          link: "/playlist/discover-weekly"
        },
        {
          src: "https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb342c28207415cf4644e5e601/en",
          title: "Release Radar",
          artist:
            "Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday.",
          link: "/playlist/release-radar"
        }
      ],
      popPLaylists: [
        {
          src: "https://i.scdn.co/image/ab67706f000000024477d03df61b0379b33f8e4f",
          title: "Hit Rewind",
          artist:
            "Listen to all the tracks you've been missing. Cover: Katy Perry",
          link: "/playlist/hit-rewind"
        },
        {
          src: "https://i.scdn.co/image/ab67706f00000002d561d84d2be20922e2bea6d9",
          title: "Pop Rising Viet Nam",
          artist:
            "Những ca khúc quốc tế thịnh hành khắp các mặt trận. Ảnh bìa: Anne-Marie",
          link: "/playlist/pop-rising-vietnam"
        },
        {
          src: "https://i.scdn.co/image/ab67706f00000002db32a17c1f5291b19317b62e",
          title: "Mega Hit Mix",
          artist: "A mega mix of 75 favorites from the last few years!",
          link: "/playlist/mega-hit-mix"
        },
        {
          src: "https://i.scdn.co/image/ab67706f000000023632441f85814d7291461f01",
          title: "It's a Hit!",
          artist:
            "The hottest songs you need to listen to right now. Cover: Epik High",
          link: "/playlist/its-a-hit"
        },
        {
          src: "https://i.scdn.co/image/ab67706f00000002b80517de954ff3164e3bb387",
          title: "Mood.",
          artist:
            "The R&B and good vibe tracks for your current mood. Cover: Lizzo, SZA",
          link: "/playlist/mood"
        }
      ],
      hitRewinds: [
        {
          src: "https://i.scdn.co/image/ab67706f00000002ba77a2166a7b66e9a300ffaa",
          title: "Best of the Decade For You",
          artist:
            "A few of the many great songs from the past 10 years in a playlist tuned for you.",
          link: "/playlist/best-of-decade"
        },
        {
          src: "https://i.scdn.co/image/ab67706f000000029cf3aebc8a3b866a76470aac",
          title: "Top Hits of 2015",
          artist:
            "Rewind and rediscover big songs of 2015. Cover: Justin Bieber.",
          link: "/playlist/top-hits-of-2015"
        },
        {
          src: "https://i.scdn.co/image/ab67706f000000029778672fbee3dc20620b1897",
          title: "Top Hits of 2014",
          artist: "Rewind and rediscover big songs of 2014. Cover: Sia.",
          link: "/playlist/top-hits-of-2014"
        },
        {
          src: "https://i.scdn.co/image/ab67706f000000028663be06e69f49628cf83a56",
          title: "The Party Hits of the 2010s",
          artist: "Party like it’s one of the years between 2010-2019.",
          link: "/playlist/the-party-hits-of-the-2010s"
        },
        {
          src: "https://i.scdn.co/image/ab67706f00000002fee6d5f133913e4855da6ee1",
          title: "The Ultimate Hit Mix",
          artist: "Mixing the decades: 1990s, 2000s, 2010s and 2020s.",
          link: "/playlist/the-ultimate-hit-mix"
        }
      ]
    };
  },
  components: { TheHeader, MainView, BaseHeader, BaseCard }
};
</script>

<style>
.main-view {
  scroll-behavior: smooth;
}

.play__button--green {
  opacity: 0;
  transition: transform 0.8s ease;
}

.song:hover .play__button--green {
  transform: translateY(-5%);
  opacity: 1;
}
</style>
