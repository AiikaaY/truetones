<template>
  <section id="services" class="services" ref="root" aria-labelledby="services-heading">

    <!-- Header row -->
    <div class="services__header">
      <div>
        <p class="section-tag fade-up">What We Offer</p>
        <h2 id="services-heading" class="section-title fade-up">
          Treatments &amp;<br /><em>Skin Programmes</em>
        </h2>
      </div>
      <p class="services__intro fade-up">
        Every service at True Tones is crafted around your unique skin story.
        From prescription-level acne care to barrier repair — we meet your skin
        exactly where it is.
      </p>
    </div>

    <!-- Cards grid -->
    <div class="services__grid" role="list">
      <article
        v-for="(svc, i) in services"
        :key="svc.title"
        class="service-card fade-up"
        :class="{ 'service-card--wide': svc.wide }"
        role="listitem"
      >
        <span class="service-card__num" aria-hidden="true">
          {{ String(i + 1).padStart(2, '0') }}
        </span>

        <!-- SVG icon slot -->
        <div class="service-card__icon" aria-hidden="true" v-html="svc.icon" />

        <h3 class="service-card__title">{{ svc.title }}</h3>
        <p class="service-card__body">{{ svc.body }}</p>
      </article>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { observe } = useScrollAnimation()
const root = ref(null)
onMounted(() => observe(root.value))

const services = [
  {
    title: 'Acne / Pimples / Breakouts',
    body:  'Struggling with persistent breakouts? We identify your acne triggers and build a targeted, safe treatment plan to clear your skin and prevent future flare-ups.',
    icon:  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.2">
              <circle cx="16" cy="12" r="6"/>
              <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10"/>
            </svg>`
  },
  {
    title: 'Hyperpigmentation / Dark Spots',
    body:  'Post-acne marks, sun damage, or uneven patches — our evidence-based brightening protocols are formulated specifically for melanin-rich skin to fade dark spots without harm.',
    icon:  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.2">
              <circle cx="16" cy="16" r="10"/>
              <circle cx="12" cy="13" r="2"/>
              <circle cx="20" cy="18" r="1.5"/>
              <circle cx="15" cy="20" r="1"/>
            </svg>`
  },
  {
    title: 'Uneven Skin Tone / Dull Skin',
    body:  'Restore your natural radiance with a personalised routine that evens out texture, boosts glow, and brings life back to tired, lacklustre skin.',
    icon:  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.2">
              <path d="M6 24c3-6 6-10 10-10s7 4 10 10"/>
              <path d="M4 18c4-8 8-12 12-12s8 4 12 12" opacity=".4"/>
            </svg>`
  },
  {
    title: 'Sensitive Skin / Damaged Skin Barrier',
    body:  "Redness, stinging, or constant reactions? We calm inflammation and rebuild your skin's protective barrier with a gentle, science-backed repair plan tailored to your sensitivity.",
    icon:  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.2">
              <path d="M16 4s-8 6-8 14a8 8 0 0 0 16 0c0-8-8-14-8-14z"/>
            </svg>`
  }
]
</script>

<style scoped lang="scss">
.services {
  background: var(--white);
  padding: 100px 7%;
}

.services__header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: end;
  margin-bottom: 60px;
}
.section-tag{
  font-size: 18px;
}

.services__intro {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--mid);
  max-width: 440px;
  align-self: end;
}

/* Grid */
.services__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
}

/* Card */
.service-card {
  background: var(--cream);
  padding: 40px 32px;
  position: relative;
  overflow: hidden;
  transition: background 0.35s ease, transform 0.3s ease;
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 3px;
    background: var(--terracotta);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  &:hover {
    background: var(--dark);
    transform: translateY(-4px);

    &::before { transform: scaleX(1); }

    .service-card__num,
    .service-card__title,
    .service-card__body { color: var(--white); }

    .service-card__icon { color: var(--terracotta-pale); }
  }

  &--wide {
    grid-column: 1 / -1;
  }
}

.service-card__num {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--terracotta);
  margin-bottom: 20px;
  display: block;
  transition: color 0.35s ease;
}

.service-card__icon {
  color: var(--terracotta);
  margin-bottom: 20px;
  transition: color 0.35s ease;
  line-height: 0;

  :deep(svg) {
    width: 32px;
    height: 32px;
  }
}

.service-card__title {
  font-family: var(--font-base);
  font-size: 23px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--dark);
  margin-bottom: 14px;
  transition: color 0.35s ease;
}

.service-card__body {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--muted);
  transition: color 0.35s ease;
}

/* Responsive */
@media (max-width: 768px) {
  .services__header { grid-template-columns: 1fr; }
  .services__grid   { grid-template-columns: 1fr; }

  .service-card--wide { grid-column: auto; }
}
</style>
