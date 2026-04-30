<template>
  <div class="job-box">
    <div class="job-content">
      <p class="job-employer">{{ employer }}</p>
      <h3>{{ title }}</h3>
      <p class="job-date">{{ date }}</p>
      <ul class="job-bullets">
        <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
      </ul>
    </div>
    <img :src="logo" :alt="title" class="job-logo" />
  </div>
</template>

<script setup>
defineProps({
  employer: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  bullets: {
    type: Array,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.job-box {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: var(--color-background-container);
  color: var(--color-text);
}

.job-logo {
  width: 100px;
  height: 100px;
  margin: 0 1rem;
  object-fit: contain;
}

.job-employer {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.7;
}

.job-date {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.7;
  font-family: "Jakob", serif;
}

.job-bullets {
  list-style-type: disc;
  padding-left: 1rem;
}

.job-bullets li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .job-box {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .job-logo {
    display: none;
  }
}
</style>