<template>
  <div>
    <router-link
      :to="cardInfo.link"
      class="song block w-full h-full p-4 rounded-lg bg-nearly__lightest hover:bg-light relative top-0 left-0 right-0 shadow-2xl"
    >
      <!-- The play button -->

      <div
        class="play__button--green flex items-end justify-end absolute right-5 bottom-20"
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

      <!-- The X icon remove recently search history -->

      <slot></slot>

      <!-- The image of card  -->

      <img
        :src="`${cardInfo.src}`"
        alt="img"
        :class="`${
          isRoundedFull === true ? 'h-40' : 'h-auto'
        } w-full shadow mb-2 ${
          isRoundedFull === true ? 'rounded-full' : 'rounded'
        } `"
      />
      <h1
        class="text-sm overflow-ellipsis overflow-hidden whitespace-nowrap font-semibold text-white tracking-wide"
      >
        {{ cardInfo.title }}
      </h1>
      <h2
        class="text-xs overflow-ellipsis overflow-hidden whitespace-nowrap text-lightest tracking-wide"
      >
        {{ cardInfo.artist }}
      </h2>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["cardInfo", "isRoundedFull", "isSmallImg"]
};
</script>

<style scoped>
.play__button--green {
  opacity: 0;
  transform: translate(-7%, 10%);
  transition: transform 0.8s ease;
}

.song:hover .play__button--green {
  transform: translate(-7%, -5%);
  opacity: 1;
}

.progress-bar:hover .absolute,
.volume-bar:hover .absolute {
  background-color: #1db954;
}
</style>
