<template>
  <section class="resume-section">
    <h2>Resume</h2>
    <JobBox
      v-for="job in jobs"
      :key="job.title"
      :employer="job.employer"
      :title="job.title"
      :bullets="job.bullets"
      :date="job.date"
      :logo="job.logo"
    />
  </section>
</template>

<script setup>
import JobBox from './JobBox.vue'
import { jobs } from '@/data/jobs.js'
</script>

<style scoped>
.resume-section {
  padding-top: 2rem;
  color: var(--color-text);
  width: 100%;
  box-sizing: border-box;
}
</style>