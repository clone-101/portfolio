<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero.vue'
import ResumeSection from './components/ResumeSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import FooterSection from './components/FooterSection.vue'

gsap.registerPlugin(ScrollTrigger)

const siteContent = ref(null)
const landingBg = ref(null)

onMounted(() => {
  gsap.set(siteContent.value, { y: '100vh' })

  gsap.to(siteContent.value, {
    y: '0vh',
    ease: 'none',
    scrollTrigger: {
      trigger: siteContent.value,
      start: 'top bottom',
      end: 'top top',
      scrub: true
    }
  })

  gsap.to(landingBg.value, {
    filter: 'blur(12px)',
    scale: 1.02,
    ease: 'none',
    scrollTrigger: {
      trigger: siteContent.value,
      start: 'top bottom',
      end: 'top top',
      scrub: true
    }
  })
})
</script>

<template>
  <div class="page-wrapper">
    <div class="landing-background" ref="landingBg">
      <div class="landing-image-wrapper">
        <img src="/larry-mono.png" class="landing-image landing-image-base" />
        <img src="/larry.png" class="landing-image landing-image-alt" />
      </div>
    </div>

    <div ref="siteContent" class="site-content">
      <div class="app">
          <main class="main">
            <Hero
              image="/headshot.JPG"
              title="Sasha Morton‑Salmon"
              text="Welcome to my portfolio. I'm a developer passionate about creating amazing web experiences."
            />
            <div class="section-stack">
              <ResumeSection />
              <ProjectsSection />
              <SkillsSection />
            </div>
          </main>
        <FooterSection />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: var(--color-background);
}

.landing-background {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  z-index: 0;
  transition: transform 0.4s, filter 0.4s;
  pointer-events: none;
}

.landing-image-wrapper {
  position: relative;
  pointer-events: auto;
}

.landing-image {
  width: 50vw;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  display: block;
}

.landing-image-alt {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.landing-image-wrapper:hover .landing-image-alt {
  opacity: 1;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: transparent;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 0;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
}

.section-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

</style>

