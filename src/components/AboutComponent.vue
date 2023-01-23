<script lang="ts" setup>
defineProps({
  question: {
    type: String,
    default: 'Very very very long question?',
  },
  answer: {
    type: String,
    default: 'Not so long answer.',
  },
});
</script>

<template>
  <div class="text-left py-3 lg:py-4 pl-4 lg:pl-0">
    <h1
      class="text-2xl lg:text-3xl font-roboto font-semibold italic pb-1 lg:pb-2"
    >
      <span class="bg-white-gray">&nbsp;</span>
      {{ question }}
    </h1>
    <h1 class="text-2xl lg:text-3xl">{{ answer }}</h1>
  </div>
</template>
