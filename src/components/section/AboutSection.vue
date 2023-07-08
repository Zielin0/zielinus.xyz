<script lang="ts" setup>
import AboutComponent from '../AboutComponent.vue';

const aboutList = [
  {
    question: 'Text Editor or IDE?',
    answer: 'VSCode with some extensions or IntelliJ.',
  },
  {
    question: 'What Programming Languages do You use?',
    answer: 'Mostly TypeSript, Vue and Java.',
  },
  {
    question: 'How long have You been programming?',
    answer: 'I started programming in March 2020.',
  },
  {
    question: 'Dotfiles or Terminal Config?',
    answer: "I'm using Alacritty (zsh 5.9) with starship.rs",
  },
  {
    question: 'How old are You?',
    answer: 'I was born 2 years after Poland joined the EU.',
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
