<template>
  <section class="skills-section">
    <h2>Skills</h2>
    <div class="skills-grid">
      <SkillBox
        v-for="skill in skills"
        :key="skill"
        :skill="skill"
      />
    </div>
  </section>
</template>

<script setup>
import SkillBox from './SkillBox.vue'
import { skills } from '@/data/skills.js'


</script>

<style scoped>
.skills-section {
  padding-top: 2rem;
  color: var(--color-text);
  width: 100%;
  box-sizing: border-box;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  justify-content: center;
  width: 100%;
}
</style>