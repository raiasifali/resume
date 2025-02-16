<script setup lang="ts">
import NavBar from '../src/components/navBar.vue'
import Intro from '../src/components/intro.vue'
import About from '../src/components/about.vue'
import Skills from '../src/components/skills.vue'
import Experience from '../src/components/experience.vue'
import Work from '../src/components/work.vue'
import Contact from '../src/components/contact.vue'

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>


<template >
    <NavBar @navigate="scrollToSection"/>
    <Intro />
    <hr/>
    <!-- <About /> -->
    <Skills />
    <Experience />
    <Work />
    <Contact />
</template>

<style>
html.dark{
  color-scheme: dark;
}
</style>


