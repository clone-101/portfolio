<template>
  <section class="projects-section">
    <h2>Projects</h2>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :image="project.image"
        :title="project.title"
        :text="project.text"
        :buttonText="project.buttonText"
        :link="project.link"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import { projects } from '@/data/projects.js'

</script>

<style scoped>
.projects-section {
  padding-top: 2rem;
  color: var(--color-text);
  width: 100%;
  box-sizing: border-box;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  justify-content: center;
  width: 100%;
}
</style>