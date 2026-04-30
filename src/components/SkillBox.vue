<template>
  <div class="skill-box">
    {{ skill }}
  </div>
</template>

<script setup>
defineProps({
  skill: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.skill-box {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  background-color: var(--color-background);
  color: var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: '3270', monospace;
  font-weight: bold;
}

@media (hover: hover) {
  .skill-box:hover {
    background-color: var(--shadow-grey);
    color: var(--bright-snow);
    transition: background-color 0.3s, color 0.3s;
  }
}
</style>