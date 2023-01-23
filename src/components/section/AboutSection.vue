<script lang="ts" setup>
import AboutComponent from '../AboutComponent.vue';

const aboutList = [
  {
    question: 'Very very very long question?',
    answer: 'Not so long answer.',
  },
  {
    question: 'Very very very long question?',
    answer: 'Not so long answer.',
  },
  {
    question: 'Very very very long question?',
    answer: 'Not so long answer.',
  },
  {
    question: 'Very very very long question?',
    answer: 'Not so long answer.',
  },
];
</script>

<template>
  <div>
    <h1 class="text-5xl">About Me</h1>
    <div class="mt-12">
      <AboutComponent
        v-for="qna of aboutList"
        v-bind:key="qna.answer"
        :question="qna.question"
        :answer="qna.answer"
      />
    </div>
  </div>
</template>
