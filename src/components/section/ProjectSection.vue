<script lang="ts" setup>
import { ref } from 'vue';
import GithubCard from '../GithubCard.vue';
import getRepo from './GithubCard';
import { Repo } from './Repo';

const repoArr: Repo[] = [];

const repos = ref(repoArr);

const repoLinks = [
  'Zielin0/dcmchat',
  'Zielin0/HackBot',
  'Zielin0/zielinus.xyz',
  'Zielin0/mech',
];

repoLinks.forEach(async (repo) => {
  const owner = repo.split('/')[0];
  const name = repo.split('/')[1];
  await getRepo(owner, name).then((data) => {
    repos.value.push(data);
  });
});
</script>

<template>
  <div>
    <h1 class="text-5xl">Projects</h1>
    <div
      class="mt-12 grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-5 lg:gap-16"
    >
      <GithubCard
        v-for="repo in repos"
        v-bind:key="repo.name"
        :title="repo.full_name"
        :description="repo.description"
        :iconURL="repo.owner.avatar_url"
        :language="repo.language"
        :stars="repo.stargazers_count"
        :issues="repo.open_issues"
        :forks="repo.forks"
      />
    </div>
  </div>
</template>
