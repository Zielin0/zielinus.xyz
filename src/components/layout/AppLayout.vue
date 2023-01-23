<script lang="ts" setup>
import AboutSection from '../section/AboutSection.vue';
import FooterSection from '../section/FooterSection.vue';
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
  <div class="font-rowdies flex justify-center text-center mt-20 text-white">
    <FooterSection />
  </div>
  <div
    class="font-rowdies font-normal flex justify-center text-center mt-10 mb-5"
  >
    <h1 class="text-comment text-md lg:text-xl blur-[1px]">
      Zielino &copy; 2023
    </h1>
  </div>
</template>
