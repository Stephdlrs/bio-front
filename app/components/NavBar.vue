<template>
  <header class="flex items-center justify-between border-b shadow-sm px-4 md:px-8 py-3 bg-white sticky top-0 z-50">
    <!-- Logo -->
    <img src="/Logo.png" alt="Logo" class="w-40 sm:w-48 md:w-56" />

    <!-- Desktop nav -->
    <nav class="hidden md:flex items-center gap-3">
      <button
        v-for="item in navItems"
        :key="item.target"
        @click="scrollToSection(item.target)"
        class="relative px-4 py-2 text-sm sm:text-base font-medium text-white bg-primary rounded-lg
               hover:bg-primary-dark transition-all duration-200 ease-in-out
               shadow-sm hover:shadow-md"
        type="button"
      >
        {{ item.label }}
      </button>
    </nav>

    <!-- Mobile toggle -->
    <div class="md:hidden">
      <button @click="toggleMenu" aria-label="Toggle menu" class="p-2 rounded-md bg-primary text-white">
        <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

      <div v-show="showMenu" class="absolute right-4 top-16 bg-white rounded-lg shadow-lg p-3 w-56 flex flex-col gap-2">
        <button
          v-for="item in navItems"
          :key="item.target + '-mobile'"
          @click="menuNavigate(item.target)"
          class="text-left px-3 py-2 rounded-md hover:bg-gray-100"
          type="button"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'Services', target: 'services' },
  { label: 'Our Story', target: 'story' },
  { label: 'Contact Us', target: 'contact' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// mobile menu
const showMenu = ref(false)
function toggleMenu() {
  showMenu.value = !showMenu.value
}
function menuNavigate(id) {
  toggleMenu()
  // small delay to allow menu close animation/paint
  setTimeout(() => scrollToSection(id), 50)
}
</script>
