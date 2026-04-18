<template>
  <div id="app">
    <NavBar />
    <main>
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar              from '@/components/NavBar.vue'
import HeroSection         from '@/components/HeroSection.vue'
import StatsStrip          from '@/components/StatsStrip.vue'
import ServicesSection     from '@/components/ServicesSection.vue'
import AboutSection        from '@/components/AboutSection.vue'
import ProcessSection      from '@/components/ProcessSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactSection      from '@/components/ContactSection.vue'
import FooterSection       from '@/components/FooterSection.vue'
</script>

<style lang="scss">
/* Global styles are imported once here — never in individual components */
@use '@/assets/styles/global.scss';
</style>
