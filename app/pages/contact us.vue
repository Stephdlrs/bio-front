<!-- Contact Us Section -->
<template>
<section class="relative flex flex-col justify-center items-center py-20 px-4 bg-[#ddd8d1]">
  <!-- Heading -->
  <h2 class="text-4xl md:text-6xl font-bold text-center text-[#6b5e4d] mb-12">
    Contact Us
  </h2>

  <!-- Background Image + Form Wrapper -->
  <div class="relative w-full max-w-3xl">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center rounded-3xl z-0" 
      style="background-image: url('/contact-bg.jpg');"
    >
      <div class="absolute inset-0 bg-black bg-opacity-40 rounded-3xl"></div>
    </div>

    <!-- Form Block -->
    <div class="relative z-10 bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8">
      <form @submit.prevent="sendMessage" class="space-y-4">
        <input 
          v-model="name"
          type="text" 
          placeholder="Your Name" 
          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b8a48a]"
          required
        />
        <input 
          v-model="email"
          type="email" 
          placeholder="Your Email" 
          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b8a48a]"
          required
        />
        <textarea 
          v-model="message"
          placeholder="Your Message" 
          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b8a48a] resize-none"
          rows="5"
          required
        ></textarea>
        <button 
          type="submit" 
          class="w-full bg-[#b8a48a] hover:bg-[#a8926f] transition-colors duration-300 text-white font-bold py-3 rounded-xl"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>

  <!-- Contact Info -->
  <div class="mt-12 text-center">
    <p class="text-2xl md:text-3xl text-[#6b5e4d] mb-4">
      Phone: <a href="tel:+27123456789" class="underline">+27 12 345 6789</a>
    </p>
    <p class="text-2xl md:text-3xl text-[#6b5e4d]">
      Email: <a href="mailto:info@yourclinic.com" class="underline">info@yourclinic.com</a>
    </p>
  </div>
</section>

</template>