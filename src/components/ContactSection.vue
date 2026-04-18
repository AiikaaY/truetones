<template>
  <section id="contact" class="contact" ref="root" aria-labelledby="contact-heading">

    <!-- Left — info -->
    <div class="contact__left">
      <p class="section-tag fade-up">Get In Touch</p>
      <h2 id="contact-heading" class="section-title fade-up">
        Start Your<br /><em>Clear Skin Journey</em>
      </h2>
      <p class="contact__desc fade-up">
        Ready to take the first step? Reach out to Dr Oghosa via WhatsApp
        and let's build your personalised skin plan today.
      </p>

      <ul class="contact__details fade-up" aria-label="Contact details">
        <li v-for="item in contactItems" :key="item.label" class="contact__item">
          <div class="contact__icon" aria-hidden="true" v-html="item.icon" />
          <div>
            <p class="contact__item-label">{{ item.label }}</p>
            <p class="contact__item-val">{{ item.value }}</p>
          </div>
        </li>
      </ul>

      <!-- Consultation fee — left column anchor -->
      <div class="contact__fee-pill fade-up" aria-label="Consultation fee information">
        <div class="contact__fee-pill-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <p class="contact__fee-pill-text">
          Consultation sessions are available at a fixed fee.
          Your plan is fully personalised to your skin.
        </p>
      </div>
    </div>

    <!-- Right — booking form -->
    <div class="contact__right fade-up">
      <h3 class="contact__form-heading">Book a Consultation</h3>
      <p class="contact__form-sub">
        Fill in your details and we'll reach out via WhatsApp to confirm your appointment.
      </p>

      <div class="form-row">
        <div class="form-group">
          <label for="fname">First Name</label>
          <input id="fname" v-model="form.firstName" type="text" placeholder="e.g. Adaeze" />
        </div>
        <div class="form-group">
          <label for="lname">Last Name</label>
          <input id="lname" v-model="form.lastName" type="text" placeholder="e.g. Okafor" />
        </div>
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input id="phone" v-model="form.phone" type="tel" placeholder="e.g. 08012345678" />
      </div>

      <div class="form-group">
        <label for="service">Service of Interest</label>
        <select id="service" v-model="form.service">
          <option value="" disabled>Select a service</option>
          <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">
          Skin Concerns <span class="form-optional">(optional)</span>
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          placeholder="Describe your main skin concerns..."
        />
      </div>

      <!-- ── Consultation Fee Notice ───────────────────────────────────────── -->
      <div class="fee-notice" role="note" aria-label="Consultation fee notice">
        <div class="fee-notice__left">
          <span class="fee-notice__label">Consultation Fee</span>
          <span class="fee-notice__amount" :class="{ 'fee-notice__amount--empty': !selectedPlan }">
            {{ selectedPlan ? `₦${selectedPlan.price.toLocaleString()}` : '—' }}
          </span>
          <span v-if="selectedPlan?.duration" class="fee-notice__duration">
            {{ selectedPlan.duration }}
          </span>
        </div>
        <p class="fee-notice__note">
          {{
            selectedPlan
              ? 'Payable before or at your session. Covers full skin assessment & your personalised plan.'
              : 'Select a service above to see the consultation fee.'
          }}
        </p>
      </div>
      <!-- ─────────────────────────────────────────────────────────────────── -->

      <button
        type="button"
        class="btn-wa"
        @click="openWhatsApp"
        aria-label="Send booking request via WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        Book Now 
      </button>

      <p class="contact__privacy">
        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <rect x="2" y="7" width="12" height="8" rx="1.5"/>
          <path d="M5 7V5a3 3 0 0 1 6 0v2"/>
        </svg>
        Your details are only shared with Dr Oghosa via WhatsApp.
      </p>
    </div>

  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useScrollAnimation }             from '@/composables/useScrollAnimation'
import { useWhatsApp, SERVICE_CATALOGUE } from '@/composables/useWhatsApp'
import { useBooking }                     from '@/composables/useBooking'

const { observe }                      = useScrollAnimation()
const { form, services, openWhatsApp } = useWhatsApp()
const { pendingService }               = useBooking()
const root                             = ref(null)

// When a process card CTA is clicked, pre-select its service in the form
watch(pendingService, (title) => { if (title) form.service = title })

const selectedPlan = computed(() =>
  SERVICE_CATALOGUE.find(s => s.title === form.service) ?? null
)

const contactItems = [
  {
    label: 'WhatsApp / Phone',
    value: '08073601873',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" stroke-width="1.5">
             <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.5 12.9 19.79 19.79 0 0 1 2.46 4.27 2 2 0 0 1 4.45 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
           </svg>`
  },
  {
    label: 'Location',
    value: 'Nigeria — Virtual & In-Person Sessions',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" stroke-width="1.5">
             <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
             <circle cx="12" cy="10" r="3"/>
           </svg>`
  },
  {
    label: 'Hours',
    value: 'Mon – Sat, 9am – 6pm',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" stroke-width="1.5">
             <circle cx="12" cy="12" r="10"/>
             <path d="M12 6v6l4 2"/>
           </svg>`
  }
]

onMounted(() => observe(root.value))
</script>

<style scoped lang="scss">
.contact {
  background: var(--cream);
  padding: 100px 7%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* ── Left ── */
.contact__desc {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--mid);
  margin: 20px 0 36px;
  max-width: 440px;
}

.contact__details {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 32px;
}
.section-tag {
  font-size: 18px;
}

.contact__item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact__icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--cream-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 0;

  :deep(svg) { width: 18px; height: 18px; }
}

.contact__item-label {
  font-size: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.contact__item-val {
  font-size: 20px;
  font-weight: 400;
  color: var(--dark);
  margin-top: 2px;
}

/* Fee pill — left column */
.contact__fee-pill {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 20px;
  background: rgba(160, 82, 45, 0.07);
  border: 1px solid rgba(160, 82, 45, 0.2);
  border-radius: 4px;

  &-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--terracotta-pale);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--terracotta);
    line-height: 0;

    svg { width: 16px; height: 16px; }
  }

  &-text {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.65;
    color: var(--mid);
    padding-top: 2px;
  }
}

/* ── Right — form card ── */
.contact__right {
  background: var(--dark);
  padding: 56px 48px;
  border-radius: 2px;
}

.contact__form-heading {
  font-family: var(--font-base);
  font-size: 30px;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 8px;
}

.contact__form-sub {
  font-size: 18px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.7;
  margin-bottom: 36px;
}

/* Form fields */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.38);
    margin-bottom: 8px;
  }

  input,
  select,
  textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--white);
    padding: 13px 16px;
    font-family: var(--font-base);
    font-size: 18px;
    font-weight: 400;
    border-radius: 2px;
    outline: none;
    transition: border-color 0.2s;
    appearance: none;
    -webkit-appearance: none;

    &::placeholder { color: rgba(255, 255, 255, 0.22); }
    &:focus        { border-color: var(--terracotta); }
  }

  select option { background: var(--dark); color: var(--white); }
  textarea      { resize: none; }
}

.form-optional {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.25);
  text-transform: none;
  letter-spacing: 0;
}

/* ── Fee Notice — inside form card ── */
.fee-notice {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(232, 197, 168, 0.1);
  border: 1px solid rgba(232, 197, 168, 0.25);
  border-radius: 2px;
  margin-bottom: 16px;

  &__left {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex-shrink: 0;
  }

  &__label {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(232, 197, 168, 0.6);
  }

  &__amount {
    font-family: var(--font-base);
    font-size: 26px;
    font-weight: 500;
    color: var(--terracotta-pale);
    line-height: 1.1;
    transition: color 0.2s;

    &--empty { color: rgba(232, 197, 168, 0.3); }
  }

  &__duration {
    font-size: 13px;
    font-weight: 400;
    color: rgba(232, 197, 168, 0.5);
    margin-top: 2px;
    display: block;
  }

  &__note {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.4);
    text-align: right;
  }
}

/* WhatsApp CTA */
.btn-wa {
  width: 100%;
  padding: 15px;
  background: var(--terracotta);
  color: var(--white);
  border: none;
  cursor: pointer;
  font-family: var(--font-base);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.25s ease, transform 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--white);
    flex-shrink: 0;
  }

  &:hover {
    background: var(--terracotta-light);
    transform: translateY(-2px);
  }
}

/* Privacy note */
.contact__privacy {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.25);

  svg { flex-shrink: 0; opacity: 1; width: 16px; height: 16px; }
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .contact { gap: 48px; }
}

@media (max-width: 768px) {
  .contact {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .form-row           { grid-template-columns: 1fr; }
  .contact__right     { padding: 40px 28px; }

  .fee-notice {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    &__note { text-align: left; }
  }
}
</style>