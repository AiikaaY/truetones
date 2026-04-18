# True Tones — Dr Oghosa | Vue 3 Website

A production-grade, single-page website for True Tones by Dr Oghosa, built with **Vue 3 + Vite + SCSS**.

---

## Tech Stack

| Tool         | Purpose                              |
|--------------|--------------------------------------|
| Vue 3        | Composition API, `<script setup>`    |
| Vite 5       | Dev server, build tool               |
| SCSS         | Scoped component styles + variables  |
| General Sans | Primary typeface (via Fontshare CDN) |

---

## Project Structure

```
truetones/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.js                         # App entry point
    ├── App.vue                         # Root — assembles all sections
    ├── assets/
    │   └── styles/
    │       ├── variables.scss          # Design tokens (colours, mixins)
    │       └── global.scss             # Resets, base typography, utilities
    ├── composables/
    │   ├── useScrollAnimation.js       # IntersectionObserver fade-up logic
    │   └── useWhatsApp.js              # Form data + WhatsApp message builder
    └── components/
        ├── NavBar.vue
        ├── HeroSection.vue
        ├── StatsStrip.vue
        ├── ServicesSection.vue
        ├── AboutSection.vue
        ├── ProcessSection.vue
        ├── TestimonialsSection.vue
        ├── ContactSection.vue
        └── FooterSection.vue
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Customisation Checklist

### 1. Replace placeholder images
In `HeroSection.vue` and `AboutSection.vue`, replace the `src` on `<img>` tags with Dr Oghosa's actual photos.

**Recommended specs:**
- Hero: Portrait orientation, minimum 800×1000px, face centred
- About: Professional portrait, natural or studio background

### 2. Update contact number
The WhatsApp number is set in one place:

```js
// src/composables/useWhatsApp.js
const WA_NUMBER = '2348073601873'
```

### 3. Update business hours / location
Edit `contactItems` array inside `ContactSection.vue`.

### 4. Add/remove services
Edit the `services` array in `ServicesSection.vue`.

### 5. Update testimonials
Edit the `testimonials` array in `TestimonialsSection.vue`.

---

## Design Tokens

All colours and spacing live in `src/assets/styles/variables.scss`.
The SCSS variables are also exposed as CSS custom properties via `:root`,
so they work across both SCSS (`$terracotta`) and plain CSS (`var(--terracotta)`).

---

## Fonts

General Sans is loaded from Fontshare CDN in `global.scss`.
No local font files are required — it loads automatically on page load.

> To use a self-hosted version, download from https://www.fontshare.com/fonts/general-sans
> and update the `@font-face` declarations in `global.scss`.

---

## WhatsApp Booking Flow

When a user fills the contact form and clicks "Send via WhatsApp":

1. `useWhatsApp.js` reads the reactive form state
2. Builds a formatted message string with name, phone, service, and concerns
3. Opens `https://wa.me/2348073601873?text=<encoded_message>` in a new tab
4. The client lands in WhatsApp with a pre-filled message ready to send

No backend or database required.
