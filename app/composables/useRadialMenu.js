// composables/useRadialMenu.js
import { ref, computed } from 'vue'

export function useRadialMenu(services) {
  const activeIndex = ref(0)
  const segmentCount = services.length

  const rotation = computed(() => {
    // rotate so active segment is facing right (0 degrees)
    const anglePerSegment = 360 / segmentCount
    return -(activeIndex.value * anglePerSegment)
  })

  const setActive = (i) => {
    activeIndex.value = i
  }

  return {
    activeIndex,
    rotation,
    setActive
  }
}
