<script lang="ts" setup>
import { ref } from 'vue';
import LinkComponent from '../LinkComponent.vue';

const socialList = ref([
  {
    name: 'mail',
    icon: 'fa-solid fa-at hover:text-[#FFFFFF]',
    link: 'mailto:me@zielinus.xyz',
  },
  {
    name: 'github',
    icon: 'fa-brands fa-github hover:text-[#DBDBDB]',
    link: 'https://github.com/Zielin0',
  },
  {
    name: 'discord',
    icon: 'fa-brands fa-discord hover:text-[#5865F2]',
    link: 'https://discord.gg/YW2knEvyQS',
  },
  {
    name: 'youtube',
    icon: 'fa-brands fa-youtube hover:text-[#E52D27]',
    link: 'https://youtube.com/@ZielinoCoding',
  },
  {
    name: 'twitch',
    icon: 'fa-brands fa-twitch hover:text-[#6441A4]',
    link: 'https://twitch.tv/zielin0',
  },
  {
    name: 'twitter',
    icon: 'fa-brands fa-twitter hover:text-[#00ACEE]',
    link: 'https://twitter.com/theZielino',
  },
]);
</script>

<template>
  <div
    v-for="social of socialList"
    v-bind:key="social.name"
    class="text-white-gray text-3xl lg:text-4xl px-2 lg:px-3"
  >
    <LinkComponent :href="social.link">
      <i class="transition-colors" :class="social.icon" />
    </LinkComponent>
  </div>
</template>
