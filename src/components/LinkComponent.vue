<script lang="ts" setup>
defineProps({
  href: {
    type: String,
    default: '#',
  },
  external: Boolean,
});
</script>

<template>
  <a
    :href="href"
    rel="noopener noreferrer"
    :target="external ? '_blank' : '_self'"
    aria-atomic="true"
    class="no-underline"
  >
    <slot />
  </a>
</template>
