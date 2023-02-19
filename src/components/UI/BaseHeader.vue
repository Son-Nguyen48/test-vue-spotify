<template>
  <div class="flex items-center justify-between px-8 pt-6 pb-4">
    <router-link
      to="/recently"
      class="text-2xl text-white font-bold hover:underline tracking-tight"
    >
      {{ name }}
    </router-link>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style></style>
