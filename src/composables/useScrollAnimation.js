// composables/useScrollAnimation.js
// ─────────────────────────────────────────────────────────────────────────────
// Reusable IntersectionObserver composable.
// Usage in any component:
//
//   import { useScrollAnimation } from '@/composables/useScrollAnimation'
//   const { observe } = useScrollAnimation()
//
//   // In template: add v-fade-up directive OR call observe(el) in onMounted
//   // Elements with class .fade-up are auto-observed when passed to observe()

import { onMounted, onBeforeUnmount } from 'vue'

export function useScrollAnimation() {
  let observer = null

  function createObserver() {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger siblings by their index in the parent
            const siblings = [...entry.target.parentElement.querySelectorAll('.fade-up')]
            const idx = siblings.indexOf(entry.target)
            const delay = (idx % 5) * 90

            setTimeout(() => {
              entry.target.classList.add('visible')
            }, delay)

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
  }

  /**
   * Observe all .fade-up elements inside a given root element or selector.
   * Call this in onMounted() of each section component.
   * @param {HTMLElement|string} root - element or CSS selector string
   */
  function observe(root) {
    if (!observer) createObserver()

    const el = typeof root === 'string' ? document.querySelector(root) : root
    if (!el) return

    el.querySelectorAll('.fade-up').forEach((node) => {
      observer.observe(node)
    })
  }

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { observe }
}
