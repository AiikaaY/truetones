<template>
  <div ref="root" class="stats-strip" aria-label="Key statistics">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="stat-item fade-up"
    >
      <span class="stat-num" aria-label="stat.label">
        {{ stat.num }}<sup v-if="stat.sup">{{ stat.sup }}</sup>
      </span>
      <span class="stat-label">{{ stat.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { observe } = useScrollAnimation()
const root = ref(null)

const stats = [
  { num: '500', sup: '+',  label: 'Clients Served'      },
  { num: '98',  sup: '%',  label: 'Client Satisfaction'  },
  { num: '1',   sup: ':1', label: 'Personalised Care'    }
]

onMounted(() => observe(root.value))
</script>

<style scoped lang="scss">
.stats-strip {
  background: var(--dark);
  padding: 56px 7%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}

.stat-item {
  padding: 28px;
  text-align: center;
}

.stat-num {
  display: block;
  font-family: var(--font-base);
  font-size: 40px;
  font-weight: 400;
  color: var(--terracotta-pale);
  line-height: 1;

  sup {
    font-size: 28px;
    font-weight: 400;
  }
}

.stat-label {
  display: block;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 10px;
}

@media (max-width: 768px) {
  .stats-strip {
    grid-template-columns: 1fr;
    padding: 48px 5%;
  }
}
</style>
