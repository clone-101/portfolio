<template>
  <div class="project-card">
    <h3 class="project-title">{{ title }}</h3>
    <p class="project-text">{{ text }}</p>
    <button @click="handleClick" class="project-button">{{ buttonText }}</button>
  </div>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'View Project'
  },
  link: {
    type: String,
    required: true
  }
})

const handleClick = () => {
  window.open(props.link, '_blank')
}
</script>

<style scoped>
.project-card {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: var(--color-background-container);
  color: var(--color-text);
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}

.project-text {
  margin-bottom: 1rem;
}

.project-button {
  background-color: var(--color-heading);
  color: var(--color-background);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.project-button:hover {
  opacity: 0.8;
}
</style>