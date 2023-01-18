<script lang="ts" setup>
import ColoredText from '../ColoredText.vue';
import JumpButton from '../JumpButton.vue';
</script>

<template>
  <div>
    <h1 class="text-5xl">Hello! I am <ColoredText>Zielino</ColoredText></h1>
    <h1 class="text-white-second text-2xl mt-7">Welcome on my website.</h1>

    <div class="mt-16">
      <JumpButton class="mr-[13vmin]" target-id="#projects">
        Projects
      </JumpButton>
      <JumpButton target-id="#about">About Me</JumpButton>
    </div>
  </div>
</template>
