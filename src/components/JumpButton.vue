<script lang="ts" setup>
defineProps({
  targetId: {
    type: String,
    default: '#',
  },
  secondary: Boolean,
});
</script>

<template>
  <a
    v-if="!secondary"
    class="bg-gradient-to-r from-pink to-purple rounded px-5 py-3 text-2xl text-center text-pure-white bg-[length:200%] bg-[height:100%] hover:animate-horizontal-speed"
    :href="targetId"
  >
    <slot />
  </a>
  <a
    v-else
    class="bg-gradient-to-r from-pink to-purple rounded px-1 py-3 text-2xl text-center text-pure-white bg-[length:200%] bg-[height:100%] hover:animate-horizontal-speed"
    :href="targetId"
  >
    <span class="bg-light-gray rounded px-3 py-2">
      <slot />
    </span>
  </a>
</template>
