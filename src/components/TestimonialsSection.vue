<template>
  <section id="testimonials" class="testimonials" ref="root" aria-labelledby="testimonials-heading">

    <div class="testimonials__header">
      <p class="section-tag section-tag--center section-tag--light fade-up">Client Stories</p>
      <h2 id="testimonials-heading" class="section-title section-title--light section-title--center fade-up">
        Skin Journeys &amp;<br /><em>Transformations</em>
      </h2>
      <p class="testimonials__note fade-up">Real messages from clients, shared with permission</p>
    </div>

    <div class="testimonials__grid" role="list">
      <article
        v-for="t in testimonials"
        :key="t.tag"
        class="testi-card fade-up"
        role="listitem"
      >
        <!-- Sender row -->
        <div class="testi-card__sender">
          <div class="testi-card__avatar" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
          <div class="testi-card__sender-info">
            <span class="testi-card__name">True Tones Client</span>
            <span class="testi-card__verified">
              <svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0zm2.7 4.8L5.5 8 3.3 5.8l.7-.7 1.5 1.5 2.5-2.5.7.7z"/>
              </svg>
              Verified client
            </span>
          </div>
        </div>

        <!-- Chat bubble -->
        <div class="testi-card__bubble">
          <p v-for="(line, i) in t.lines" :key="i">{{ line }}</p>
        </div>

        <!-- Context tag -->
        <span class="testi-card__tag">{{ t.tag }}</span>
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

const testimonials = [
  {
    lines: [
      'Yes o, I will replace the Face Fact Niacinamide with that of the Tiam once it finishes.',
      'Thanks so much sis.'
    ],
    tag: 'Product Recommendation'
  },
  {
    lines: [
      'Hiiii, good evening.',
      'Just coming back to say I\'m happy with the improvement on my face so far. Thanks for the help in reorganising my routine.',
      'I still have plenty spots from my recent breakout though, and I still break out small small, but it\'s better.'
    ],
    tag: 'Routine Reorganisation'
  },
  {
    lines: [
      'I really don\'t need makeup again o, just my brows and I\'m good.',
      'Thank you sis.'
    ],
    tag: 'Skin Clarity'
  }
]
</script>

<style scoped lang="scss">
.testimonials {
  background: var(--terracotta);
  padding: 100px 7%;
}

.testimonials__header {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 60px;
}

.section-tag {
  font-size: 18px;
}

.testimonials__note {
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 14px;
  letter-spacing: 0.04em;
}

/* Grid */
.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: start;
}

/* Card */
.testi-card {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  padding: 24px 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* Sender row */
.testi-card__sender {
  display: flex;
  align-items: center;
  gap: 10px;
}

.testi-card__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.6);

  svg { width: 20px; height: 20px; }
}

.testi-card__sender-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.testi-card__name {
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  letter-spacing: 0.04em;
}

.testi-card__verified {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.04em;

  svg {
    width: 11px;
    height: 11px;
    color: rgba(255, 255, 255, 0.6);
    flex-shrink: 0;
  }
}

/* Chat bubble */
.testi-card__bubble {
  background: var(--cream);
  border-radius: 4px 16px 16px 16px;
  padding: 14px 16px;
  position: relative;

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
    color: var(--dark);

    & + p { margin-top: 8px; }
  }
}

/* Context tag */
.testi-card__tag {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  padding-left: 2px;

  &::before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    margin-right: 8px;
    flex-shrink: 0;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .testimonials__grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .testimonials__grid { grid-template-columns: 1fr; }
}
</style>
