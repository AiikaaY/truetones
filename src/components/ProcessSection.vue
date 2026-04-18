<template>
  <section id="process" class="process" ref="root" aria-labelledby="process-heading">

    <div class="process__header">
      <p class="section-tag section-tag--center fade-up">How It Works</p>
      <h2 id="process-heading" class="section-title section-title--center fade-up">
        Your Journey to<br /><em>Clear Skin</em>
      </h2>
      <p class="process__sub fade-up">
        A simple, supportive process from first contact to glowing results.
      </p>
    </div>

    <ol class="process__steps" aria-label="Consultation packages">
      <li
        v-for="(step, i) in steps"
        :key="step.title"
        class="process__step fade-up"
      >
        <!-- Number -->
        <div class="process__circle" aria-hidden="true">{{ i + 1 }}</div>

        <!-- Top content -->
        <div class="process__step-top">
          <h3 class="process__step-title">{{ step.title }}</h3>
          <p class="process__step-intro">{{ step.intro }}</p>
        </div>

        <hr class="process__divider" />

        <!-- Includes list -->
        <div class="process__includes">
          <p class="process__includes-label">Includes</p>
          <ul>
            <li v-for="item in step.includes" :key="item">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <polyline points="2,7 5,10 12,4"/>
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Footer: badge + price + CTA -->
        <div class="process__footer">
          <div v-if="step.badge" class="process__badge">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <rect x="1" y="3" width="14" height="10" rx="1.5"/>
              <path d="M1 7h14"/>
            </svg>
            {{ step.badge }}
          </div>

          <div class="process__price">
            <span class="process__price-amount">{{ step.price }}</span>
            <span v-if="step.duration" class="process__price-duration">{{ step.duration }}</span>
          </div>

          <button class="process__cta" @click="selectAndScroll(step.title)">
            {{ step.cta }}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </button>
        </div>
      </li>
    </ol>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useBooking }         from '@/composables/useBooking'

const { observe }         = useScrollAnimation()
const { selectAndScroll } = useBooking()
const root = ref(null)
onMounted(() => observe(root.value))

const steps = [
  {
    title:    'Initial Consultation',
    intro:    'A detailed assessment of your skin and concerns — where we identify the root cause of your skin issues and build a tailored plan for you.',
    includes: [
      'Skin evaluation',
      'Review of current routine',
      'Trigger and lifestyle assessment',
      'Personalised skincare regimen',
      'Continuous progress tracking'
    ],
    badge:    'Best for new clients',
    cta:      'Book Initial Consultation',
    price:    '₦15,000',
    duration: 'for 2 months'
  },
  {
    title:    'Follow-Up Consultation',
    intro:    'For monitoring progress and refining your routine. We assess how your skin is responding and make the necessary adjustments.',
    includes: [
      'Progress review',
      'Routine adjustment',
      'Progress tracking'
    ],
    badge:    'Best for returning clients',
    cta:      'Book Follow-Up',
    price:    '₦10,000',
    duration: 'for 2 months'
  },
  {
    title:    'One-Off Skin & Routine Review',
    intro:    'For when your routine needs a complete expert opinion — ideal if you\'re overwhelmed, reacting to products, or not seeing results.',
    includes: [
      'Full routine audit',
      'Simplified, effective routine rebuild'
    ],
    badge:    null,
    cta:      'Reset My Skin Routine',
    price:    '₦7,000',
    duration: null
  }
]
</script>

<style scoped lang="scss">
.process {
  background: var(--cream-dark);
  padding: 100px 7%;
}

.process__header {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 72px;
}
.section-tag {
  font-size: 18px;
}

.process__sub {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--mid);
  margin-top: 16px;
}

/* Grid */
.process__steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  list-style: none;
  align-items: stretch;
}

/* Card */
.process__step {
  background: var(--cream);
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.process__circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--cream-dark);
  border: 1px solid var(--terracotta);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-base);
  font-size: 18px;
  font-weight: 400;
  color: var(--terracotta);
  margin-bottom: 24px;
  flex-shrink: 0;
}

.process__step-top {
  margin-bottom: 24px;
}

.process__step-title {
  font-family: var(--font-base);
  font-size: 22px;
  font-weight: 500;
  color: var(--dark);
  margin-bottom: 12px;
  line-height: 1.3;
}

.process__step-intro {
  font-size: 17px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--mid);
}

.process__divider {
  border: none;
  border-top: 1px solid var(--terracotta-pale);
  margin: 0 0 24px;
}

/* Includes */
.process__includes {
  margin-bottom: 28px;
}

.process__includes-label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 14px;
}

.process__includes ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.process__includes li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
  color: var(--dark);
  line-height: 1.5;

  svg {
    width: 14px;
    height: 14px;
    color: var(--terracotta);
    flex-shrink: 0;
    margin-top: 3px;
  }
}

/* Footer */
.process__footer {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid var(--terracotta-pale);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.process__badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 500;
  color: var(--terracotta);
  background: color-mix(in srgb, var(--terracotta) 10%, transparent);
  padding: 5px 12px;
  border-radius: 20px;
  width: fit-content;

  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
}

.process__price {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.process__price-amount {
  font-family: var(--font-base);
  font-size: 26px;
  font-weight: 600;
  color: var(--dark);
  line-height: 1;
}

.process__price-duration {
  font-size: 18px;
  font-weight: 500;
  color: var(--mid);
}

/* CTA button */
.process__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--terracotta);
  color: var(--white);
  border: none;
  padding: 13px 22px;
  font-size: 15px;
  font-weight: 500;
  font-family: var(--font-base);
  cursor: pointer;
  border-radius: 2px;
  transition: background 0.25s ease, transform 0.2s ease;
  width: 100%;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: var(--dark);
    transform: translateY(-2px);

    svg { transform: translateX(3px); }
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .process__steps { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .process__steps { grid-template-columns: 1fr; }
}
</style>
