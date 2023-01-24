<script lang="ts" setup>
import LinkComponent from './LinkComponent.vue';

defineProps({
  title: {
    type: String,
    default: 'Zielin0/test-repo',
  },
  description: {
    type: String,
    default: 'A testing repo for zielinus.xyz',
  },
  iconURL: {
    type: String,
    default: 'https://github.com/Zielin0.png',
  },
  language: {
    type: String,
    default: 'Vue',
  },
  stars: {
    type: Number,
    default: 3,
  },
  issues: {
    type: Number,
    default: 4,
  },
  forks: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <div
    class="bg-dark-gray w-[24rem] h-[11rem] text-left rounded drop-shadow-lg"
  >
    <div class="flex justify-between">
      <LinkComponent
        class="hover:underline"
        :href="`https://github.com/${title}`"
        external
      >
        <h1 class="font-roboto text-2xl pl-6 pt-5">
          {{ title.split('/')[0] }}/<span class="font-bold">{{
            title.split('/')[1]
          }}</span>
        </h1>
      </LinkComponent>
      <LinkComponent
        :href="`https://github.com/${title.split('/')[0]}`"
        external
      >
        <img
          :src="iconURL"
          alt="Repo Icon"
          class="w-16 h-16 rounded-md mr-6 mt-4"
        />
      </LinkComponent>
    </div>
    <div class="max-w-[18rem] break-words">
      <h2 class="text-sm font-light pl-6 mt-[-1rem]">
        {{ description }}
      </h2>
    </div>
    <div class="flex font-light pl-6 pt-7 justify-between max-w-[10rem]">
      <LinkComponent :href="`https://github.com/${title}/stargazers`" external>
        <span>
          <i class="fa-regular fa-star pr-1 text-yellow" />{{ stars }}
        </span>
      </LinkComponent>
      <LinkComponent :href="`https://github.com/${title}/issues`" external>
        <span>
          <i class="fa-solid fa-circle-exclamation pr-1" />{{ issues }}
        </span>
      </LinkComponent>
      <LinkComponent :href="`https://github.com/${title}/fork`" external>
        <span><i class="fa-solid fa-code-fork pr-1" />{{ forks }}</span>
      </LinkComponent>
    </div>
    <h2 class="text-md font-roboto font-normal pl-6 pt-1">
      Language:&nbsp;<span class="font-rowdies font-normal">{{
        language
      }}</span>
    </h2>
  </div>
</template>
