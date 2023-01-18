<!-- @TODO: Add option for only border button for 'About Me' -->

<script lang="ts" setup>
defineProps(['targetId']);
</script>

<template>
  <a
    class="bg-gradient-to-r from-pink to-purple rounded px-5 py-3 text-2xl text-center"
    :href="targetId"
  >
    <slot />
  </a>
</template>
