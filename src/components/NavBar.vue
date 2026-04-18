<template>
  <nav :class="['navbar', { 'navbar--scrolled': isScrolled }]" role="navigation" aria-label="Main navigation">

    <!-- Logo -->
    <a href="#home" class="navbar__logo" aria-label="True Tones home">
      <span class="navbar__logo-main">True Tones</span>
      <span class="navbar__logo-sub">by Dr Oghosa</span>
    </a>

    <!-- Desktop links -->
    <ul class="navbar__links" role="list">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href" class="navbar__link">{{ link.label }}</a>
      </li>
      <li>
        <a :href="waLink" target="_blank" rel="noopener noreferrer" class="navbar__link navbar__cta">
          Book Now
        </a>
      </li>
    </ul>

    <!-- Mobile hamburger — toggles open/close, animates to ✕ -->
    <button
      class="navbar__hamburger"
      :class="{ 'is-open': mobileOpen }"
      :aria-expanded="mobileOpen"
      aria-label="Toggle navigation"
      @click="mobileOpen = !mobileOpen"
    >
      <span /><span /><span />
    </button>

    <!-- Backdrop — dims page and closes menu on tap -->
    <Transition name="bd-fade">
      <div v-if="mobileOpen" class="mobile-backdrop" @click="mobileOpen = false" />
    </Transition>

    <!-- Dropdown panel -->
    <Transition name="mobile-slide">
      <div v-if="mobileOpen" class="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <nav>
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="mobile-menu__link"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
        </nav>
        <a
          :href="waLink"
          target="_blank"
          rel="noopener noreferrer"
          class="mobile-menu__cta"
          @click="mobileOpen = false"
        >
          Book Now
        </a>
      </div>
    </Transition>

  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useWhatsApp } from '@/composables/useWhatsApp'

const { directLink } = useWhatsApp()
const waLink        = directLink()
const isScrolled    = ref(false)
const mobileOpen    = ref(false)

const navLinks = [
  { href: '#home',     label: 'Home'     },
  { href: '#services', label: 'Services' },
  { href: '#about',    label: 'About'    },
  { href: '#contact',  label: 'Contact'  }
]

function onScroll() { isScrolled.value = window.scrollY > 20 }

onMounted(()        => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(()  => window.removeEventListener('scroll', onScroll))
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5% 0 7%;
  background: rgba(249, 244, 238, 0.88);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(160, 82, 45, 0.1);
  transition: box-shadow 0.3s ease;

  &--scrolled {
    box-shadow: 0 2px 32px rgba(42, 31, 26, 0.08);
  }
}

/* Logo */
.navbar__logo {
  display: flex;
  flex-direction: column;
  gap: 1px;
  text-decoration: none;
  line-height: 1;

  &-main {
    font-family: var(--font-base);
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--dark);
  }

  &-sub {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--terracotta);
  }
}

/* Desktop links */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 36px;
  list-style: none;
}

.navbar__link {
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--mid);
  transition: color 0.2s;

  &:hover { color: var(--terracotta); }
}

.navbar__cta {
  background: var(--terracotta);
  color: var(--white) !important;
  padding: 10px 22px;
  border-radius: 2px;
  transition: background 0.2s;

  &:hover { background: var(--terracotta-light) !important; }
}

/* Hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  span {
    display: block;
    width: 24px;
    height: 1.5px;
    background: var(--dark);
    transition: transform 0.25s ease, opacity 0.2s ease;
    transform-origin: center;
  }

  &.is-open {
    span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
  }
}

/* Backdrop */
.mobile-backdrop {
  position: fixed;
  inset: 0;
  z-index: 98;
  background: rgba(42, 31, 26, 0.35);
}

/* Dropdown panel */
.mobile-menu {
  position: fixed;
  top: var(--nav-h);
  left: 0;
  right: 0;
  z-index: 99;
  background: var(--cream);
  border-bottom: 1px solid rgba(160, 82, 45, 0.12);
  box-shadow: 0 8px 28px rgba(42, 31, 26, 0.1);
  padding: 8px 7% 24px;

  nav {
    display: flex;
    flex-direction: column;
  }
}

.mobile-menu__link {
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 0.06em;
  color: var(--dark);
  text-decoration: none;
  padding: 14px 0;
  border-bottom: 1px solid rgba(160, 82, 45, 0.08);
  transition: color 0.2s;

  &:hover { color: var(--terracotta); }
}

.mobile-menu__cta {
  display: block;
  margin-top: 16px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: var(--terracotta);
  color: var(--white);
  padding: 13px;
  border-radius: 2px;
  transition: background 0.2s;

  &:hover { background: var(--dark); }
}

/* Transitions */
.mobile-slide-enter-active,
.mobile-slide-leave-active { transition: opacity 0.2s ease, transform 0.22s ease; }
.mobile-slide-enter-from,
.mobile-slide-leave-to     { opacity: 0; transform: translateY(-6px); }

.bd-fade-enter-active,
.bd-fade-leave-active { transition: opacity 0.2s ease; }
.bd-fade-enter-from,
.bd-fade-leave-to     { opacity: 0; }

/* Responsive */
@media (max-width: 768px) {
  .navbar__links     { display: none; }
  .navbar__hamburger { display: flex; }
}
</style>
