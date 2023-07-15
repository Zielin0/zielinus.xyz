<script lang="ts" setup>
import {
  IconAt,
  IconBrandDiscordFilled,
  IconBrandGithubFilled,
  IconBrandTwitch,
  IconBrandTwitterFilled,
  IconBrandYoutube,
} from '@tabler/icons-vue';
import { ref } from 'vue';
import LinkComponent from '../LinkComponent.vue';

const socialList = ref([
  {
    name: 'mail',
    hover: 'hover:text-[#FFFFFF]',
    icon: IconAt,
    link: 'mailto:me@zielinus.xyz',
  },
  {
    name: 'github',
    hover: 'hover:text-[#DBDBDB]',
    icon: IconBrandGithubFilled,
    link: 'https://github.com/Zielin0',
  },
  {
    name: 'discord',
    hover: 'hover:text-[#5865F2]',
    icon: IconBrandDiscordFilled,
    link: 'https://discord.gg/YW2knEvyQS',
  },
  {
    name: 'youtube',
    hover: 'hover:text-[#E52D27]',
    icon: IconBrandYoutube,
    link: 'https://youtube.com/@ZielinoCoding',
  },
  {
    name: 'twitch',
    hover: 'hover:text-[#6441A4]',
    icon: IconBrandTwitch,
    link: 'https://twitch.tv/zielin0',
  },
  {
    name: 'twitter',
    hover: 'hover:text-[#00ACEE]',
    icon: IconBrandTwitterFilled,
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
      <component
        :is="social.icon"
        class="transition-colors"
        :size="36"
        :class="social.hover"
      />
    </LinkComponent>
  </div>
</template>
