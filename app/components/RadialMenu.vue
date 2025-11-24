<template>
  <div class="relative flex w-full h-[600px] justify-center items-center bg-tertiary-light">

    <!-- Right-side info panel -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-64 p-4 bg-white shadow-xl rounded-xl">
      <h3 class="text-xl font-bold text-[#6b5e4d] mb-2">
        {{ services[activeIndex].title }}
      </h3>
      <p class="text-[#6b5e4d] opacity-80">
        {{ services[activeIndex].description }}
      </p>
    </div>

    <!-- SVG Radial Menu -->
    <svg viewBox="0 0 200 200" class="w-96 h-96">
      <g :transform="`rotate(${rotation},100,100)`">
        <path
          v-for="(service, i) in services"
          :key="i"
          :d="describeSegment(i)"
          :fill="activeIndex === i || hoverIndex === i ? '#a89277' : '#b8a48a'"
          @mouseenter="hoverIndex = i"
          @mouseleave="hoverIndex = null"
          @click="setActive(i)"
          class="transition-transform duration-300 cursor-pointer"
          :style="hoverIndex === i ? 'transform: scale(1.05); transform-origin: center;' : ''"
        />
      </g>

      <!-- Center circle -->
      <circle cx="100" cy="100" r="50" fill="#b8a48a" />
      <text x="100" y="105" text-anchor="middle" fill="white" font-weight="bold" font-size="14">
        Our Services
      </text>
    </svg>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const services = [
  {
    title: 'Body scan with ORMA machine',
    description: 'Advanced frequency-based scanning of the whole body.'
  },
  {
    title: '100% Natural Remedies',
    description: 'Treatment of ailments using natural, non-invasive methods.'
  },
  {
    title: 'Ionic Foot Detox',
    description: 'Detoxification through ionic foot bath therapy.'
  },
  {
    title: 'Healthy Lifestyle Guidance',
    description: 'Educational support to build sustainable healthy habits.'
  },
  {
    title: 'Abnormal Frequency Treatment',
    description: 'Balancing the body through frequency modulation.'
  },
  {
    title: '3D Frequency Cell Testing',
    description: 'Deep testing using 3D NLS technology.'
  }
]

const activeIndex = ref(0)
const hoverIndex = ref(null)
const anglePerSegment = 360 / services.length

// Rotation: make active segment point right (0 degrees)
const rotation = computed(() => -activeIndex.value * anglePerSegment)

// Activate a segment
const setActive = (i) => {
  activeIndex.value = i
}

/**
 * Generate SVG path for a pie segment
 * @param {number} i - segment index
 */
function describeSegment(i) {
  const cx = 100
  const cy = 100
  const r = 90
  const startAngle = (i * anglePerSegment - 90) * (Math.PI / 180)
  const endAngle = ((i + 1) * anglePerSegment - 90) * (Math.PI / 180)

  const x1 = cx + r * Math.cos(startAngle)
  const y1 = cy + r * Math.sin(startAngle)
  const x2 = cx + r * Math.cos(endAngle)
  const y2 = cy + r * Math.sin(endAngle)

  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`
}
</script>

<style scoped>
/* Smooth hover scaling */
path {
  transition: transform 0.3s, fill 0.3s;
}
</style>
