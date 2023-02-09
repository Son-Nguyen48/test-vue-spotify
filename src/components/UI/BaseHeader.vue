<template>
  <div class="flex items-center justify-between px-8 pt-6 pb-4">
    <router-link
      to="/recently"
      class="text-2xl text-white font-bold hover:underline tracking-tight"
    >
      {{ name }}
    </router-link>

    <router-link
      to="/recently"
      class="text-sm text-lightest uppercase hover:underline tracking-wide font-semibold"
    >
      Show all
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style></style>
