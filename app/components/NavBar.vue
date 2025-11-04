<template>
  <header class="flex items-center justify-between border-b shadow-sm px-8 py-4 bg-white">
    <!-- Logo -->
    <img src="/Logo.png" alt="Logo" class="w-48 md:w-56" />

    <!-- Navigation -->
    <nav class="flex items-center gap-3">
      <button
        v-for="item in navItems"
        :key="item"
        class="relative px-5 py-2 text-sm font-medium text-white bg-primary rounded-lg
               hover:bg-primary-dark transition-all duration-300 ease-in-out
               shadow-sm hover:shadow-md hover:-translate-y-[1px]"
      >
        {{ item }}
        <!-- subtle shimmer accent -->
        <span class="absolute inset-x-0 bottom-0 h-0.5 bg-secondary/70 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
const navItems = ['Home', 'Services', 'Our Story', 'Contact Us']
</script>
