<template>
  <div
    class="top-bar sticky top-0 w-full h-16 flex items-center justify-between px-8 py-4 z-10 bg-transparent"
  >
    <!-- This is the two nav button  -->

    <div class="flex gap-4">
      <router-link
        :to="navButton.link"
        v-for="navButton in navButtons"
        :key="navButton.id"
        class="bg-navButton p-2 rounded-full"
      >
        <span v-html="navButton.icon"></span>
      </router-link>
    </div>

    <!-- This is Search Bar or Menu Library  -->

    <slot></slot>

    <!-- This is the upgrade and user button  -->

    <div id="bla" class="flex">
      <button
        class="text-xs font-bold text-white rounded-3xl bg-light tracking-wider mr-4"
        style="border: 1px solid white; padding: 3px 15px"
      >
        Upgrade
      </button>

      <div
        @focusout="handleFocusOut"
        @mouseover="isTitleShown = true"
        @mouseleave="isTitleShown = false"
        class="text-sm font-bold text-white relative shadow-md"
      >
        <button
          @click="isShowDropDown = !isShowDropDown"
          class="flex items-center gap-2 bg-black rounded-3xl p-0.5 transition-all hover:bg-light font-semibold"
        >
          <span
            v-html="user.icon"
            class="rounded-full w-7 h-7 flex items-center justify-center"
            style="background-color: #535353"
          ></span>

          Nguyễn Thế ...

          <span
            v-html="isShowDropDown ? dropdown.iconDown : dropdown.iconUp"
            class="rounded-full flex items-center justify-center w-7 h-7"
          ></span>

          <ul
            v-if="isShowDropDown"
            class="absolute -left-4 bg-light z-10 rounded-md p-1"
            style="bottom: -234px"
          >
            <li
              v-for="dropdownMenu in dropdownMenus"
              :key="dropdownMenu.id"
              class="w-44"
            >
              <router-link
                :to="dropdownMenu.link"
                class="flex items-center justify-between h-full w-full rounded hover:bg-hoverButton"
                style="padding: 12px 8px 12px 12px"
              >
                <span class="">{{ dropdownMenu.name }}</span>
                <span
                  v-html="dropdownMenu.icon"
                  style="filter: brightness(0) invert(1)"
                ></span>
              </router-link>
            </li>
          </ul>
        </button>
        <p
          v-if="isTitleShown"
          class="absolute -bottom-11 left-2 rounded-md shadow-md w-11/12 p-2 bg-light text-center"
        >
          Nguyễn Thế Sơn
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navButtons: [
        {
          id: "leftNav",
          name: "Left Nav",
          icon: `<svg
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          class="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
          viewBox="0 0 24 24"
          data-encore-id="icon"
          style="filter: brightness(0) invert(1)"
        >
          <path
            d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"
          ></path>
        </svg>`,
          link: "/left"
        },
        {
          id: "rightNav",
          name: "Right Nav",
          icon: `<svg
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          class="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
          viewBox="0 0 24 24"
          style="filter: brightness(0) invert(1)"
          data-encore-id="icon"
        >
          <path
            d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"
          ></path>
        </svg>`,
          link: "/right"
        }
      ],
      user: {
        id: "user",
        name: "Nguyễn Thế Sơn",
        icon: `<svg
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
                d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z"
              ></path></svg
          >`
      },
      dropdown: {
        id: "dropdown",
        name: "dropdown menu",
        iconUp: `<svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              class="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              style="filter: brightness(0) invert(1)"
            >
              <path d="M14 6l-6 6-6-6h12z"></path>
            </svg>`,
        iconDown: `<svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              class="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k"
              viewBox="0 0 16 16"
              style="filter: brightness(0) invert(1)"
              data-encore-id="icon"
            >
              <path d="M14 10L8 4l-6 6h12z"></path></svg
          >`
      },
      dropdownMenus: [
        {
          id: "account",
          name: "Account",
          link: "/account",
          icon: `<svg role="img" height="16" width="16" aria-hidden="true" aria-label="External link" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw"><path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path></svg>`
        },
        { id: "profile", name: "Profile", link: "/profile", icon: "" },
        {
          id: "upgrade",
          name: "Upgrade to Premium",
          link: "/upgrade",
          icon: `<svg role="img" height="16" width="16" aria-hidden="true" aria-label="External link" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw"><path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path></svg>`
        },
        { id: "settings", name: "Settings", link: "/settings", icon: "" },
        { id: "logout", name: "Logout", link: "/logout", icon: "" }
      ],
      isShowDropDown: false,
      isTitleShown: false
    };
  },
  methods: {
    handleFocusOut() {
      // do something here
      this.isShowDropDown = false;
    }
  },
  updated() {
    console.log(this.isShowDropDown);
  }
};
</script>

<style></style>
