<script lang="ts" setup>
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
  contributors: {
    type: Number,
    default: 2,
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

<!-- @TODO: Wrap h1 tag with title in Link component! -->
<template>
  <div
    class="bg-dark-gray w-[24rem] h-[11rem] text-left rounded drop-shadow-lg"
  >
    <div class="flex justify-between">
      <h1 class="font-roboto text-2xl pl-6 pt-5">
        {{ title.split('/')[0] }}/<span class="font-bold">{{
          title.split('/')[1]
        }}</span>
      </h1>
      <img
        :src="iconURL"
        alt="Repo Icon"
        class="w-16 h-16 rounded-md mr-6 mt-4"
      />
    </div>
    <div class="max-w-[16rem] break-words">
      <h2 class="text-sm font-light pl-6 mt-[-1rem]">
        {{ description }}
      </h2>
    </div>
    <!-- @TODO: Icons here -->
  </div>
</template>
