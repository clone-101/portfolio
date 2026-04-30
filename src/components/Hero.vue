<template>
  <section class="hero">
    <img :src="image" class="hero-image" />
    <div class="hero-content">
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-text">{{ text }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.hero {
  border: 1px solid var(--color-text);
  border-radius: 8px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  text-align: left;
  gap: 2rem;
  padding: 2rem;
  margin-bottom: 3rem; /* account for gap in section-stack */
  background-color: var(--color-background);
  color: var(--color-text);
  width: 100%;
}

.hero-image {
  order: 1;
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.hero-content {
  order: 2;
  align-items: left;
  gap: 1rem;
}

/* .hero-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-heading);  white-space: pre-line;} */

.hero-text {
  font-size: 1.2rem;
  max-width: 600px;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .hero-image {
    margin-bottom: 1rem;
  }
}


</style>