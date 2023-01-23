<script lang="ts" setup>
import AboutSection from '../section/AboutSection.vue';
import HeroSection from '../section/HeroSection.vue';
import ProjectSection from '../section/ProjectSection.vue';
</script>

<template>
  <div class="font-rowdies flex justify-center text-center mt-12 text-white">
    <HeroSection />
  </div>
  <div class="font-rowdies flex justify-center text-center mt-20 text-white">
    <ProjectSection id="projects" />
  </div>
  <div class="font-rowdies flex justify-center text-center mt-20 text-white">
    <AboutSection id="about" />
  </div>
</template>
