<template>
  <!-- Full-page background container -->
  <div
    class="min-h-screen bg-cover bg-center bg-fixed"
    style="background-image: url('/Landing.jpg')"
  >
    <!-- Hero Section -->
    <section
      id="home"
      ref="heroRef"
      class="relative min-h-[60vh] md:min-h-[calc(100vh-89px)] flex items-center md:items-start justify-center md:justify-start p-6 md:p-12 overflow-hidden text-center md:text-left"
    >
      <!-- Soft gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-tertiary/10"></div>

      <!-- Hero content -->
      <div ref="heroContent" class="relative z-10 max-w-2xl">
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-tertiary drop-shadow-md mb-2">
          Where Wellness
        </h1>
        <p class="text-3xl sm:text-4xl md:text-6xl text-tertiary mb-4">Meets Nature.</p>
        <p class="text-sm sm:text-base md:text-lg text-tertiary-dark leading-relaxed mb-6">
          Restoring balance through science, nature, and care — the Bio-Health way.
        </p>
        <button
          ref="ctaButton"
          class="px-5 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300 ease-in-out mx-auto md:mx-0"
        >
          Explore Our Services
        </button>
      </div>
    </section>

    <!-- Next Section (semi-transparent with frosted overlay) -->
    <section
      ref="nextSection"
      class="relative bg-white/70 backdrop-blur-sm py-12 md:py-20 px-4 md:px-8"
    >
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
          From the first breath to your last
        </h2>
        <p class="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
          Waves of energy flow through you. Sometimes a change in the flow causes certain health problems.  
          At Bio-Health, we help restore balance naturally and scientifically.
        </p>
      </div>
    </section>

    <!-- Features -->
    <section ref="featuresSection" class="bg-tertiary-light py-12 md:py-20 px-4 md:px-8">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="feature-card text-center p-6 ">
          <img src="/mental.png" alt="" class="w-20 h-20 mx-auto mb-4 rounded-full object-cover" />
          <p class="font-bold text-2xl sm:text-3xl text-black mb-3">Mental exhaustion</p>
          <p class="text-sm sm:text-base text-gray-800">High stress levels and a demanding lifestyle are the main causes of mental drainage. Difficulty in concentration, low energy levels and reduced motivational drive are the symptoms you can experience</p>
        </div>

        <!-- mobile: top border; md+: left border with padding -->
        <div class="feature-card text-center p-6  border-t border-black md:border-t-0 md:border-l md:border-black md:pl-6 md:pt-0 pt-6">
          <img src="/chronic.png" alt="Chronic Fatigue" class="w-20 h-20 mx-auto mb-4 rounded-full object-cover" />
          <p class="font-bold text-2xl sm:text-3xl text-black mb-3">Chronic Fatigue</p>
          <p class="text-sm sm:text-base text-gray-800">Most people struggle with a constant feeling of tiredness even after a good night’s rest. Whether it is due to a known disease or an unknown cause, the body feel drained of energy</p>
        </div>

        <div class="feature-card text-center p-6 border-t border-black md:border-t-0 md:border-l md:border-black md:pl-6 md:pt-0 pt-6">
          <img src="/pain.png" alt="Pain" class="w-20 h-20 mx-auto mb-4 rounded-full object-cover" />
          <p class="font-bold text-2xl sm:text-3xl text-black mb-3">Pain</p>
          <p class="text-sm sm:text-base text-gray-800">Pain is not always gain..it is a warning that some system in the body has definite damage or the potential of lasting damage</p>
        </div>
      </div>
    </section>

    <!-- BioHealth -->
    <section ref="bioHealthSection" class="relative bg-white/70 backdrop-blur-sm py-12 md:py-20 px-4 md:px-8">
      <div class="max-w-4xl mx-auto text-center opacity-0 translate-y-6">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Personalized Health, Naturally</h2>
        <p class="text-sm sm:text-base md:text-lg text-gray-800 mb-3">At Bio-Health, first-class technology is used to determine each one’s specific health shortcomings. The results of the tests are then used to provide natural supplements to treat the root of the problem rather than managing the symptoms.</p>
        <p class="text-sm sm:text-base md:text-lg text-gray-800">Come and find out how to live a “Bio-Healthy” life.</p>
      </div>
    </section>

    <!-- QRMA -->
    <section ref="qrmaSection" class="relative bg-primary backdrop-blur-sm py-12 md:py-20 px-4 md:px-8 text-center">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">QRMA (Quantum Resonance Magnetic Analyzer)</h2>
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
        <div class="flex-1">
          <p class="text-sm sm:text-base md:text-lg text-white mb-4">By means of chemical analysis, ultrasound, and magnetic resonance imaging, the quantum analysis method collects data from the different body systems.</p>
          <ol class="list-decimal list-inside space-y-2 text-white mb-4 text-sm sm:text-base">
            <li><strong>Signal collection:</strong> You hold a sensor in the palm of your hand and it measures the energy frequencies in the body.</li>
            <li><strong>Signal amplification:</strong> The weak signals are amplified to analyze the data.</li>
            <li><strong>Comparative analysis:</strong> The amplified signals are compared to a reference database for various health conditions, e.g., organ function.</li>
            <li><strong>Report generation:</strong> A report is generated to determine overall health status.</li>
          </ol>
          <p class="text-sm sm:text-base text-white">One of the greatest advantages is that it is non-invasive and can detect abnormal cell function before symptoms appear. Suitable for all ages.</p>
        </div>

        <div class="flex-1">
          <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">The QMRA machine scans 60 parts of the body and provides 40 reports:</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
            <div v-for="(report, index) in reports" :key="index" class="bg-white/80 rounded shadow p-2 text-gray-800 text-xs sm:text-sm text-center">
              {{ report }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NLS -->
    <section ref="nlsSection" class="relative bg-secondary-dark py-12 md:py-20 px-4 md:px-8">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">3D NLS (Non-Linear Diagnostic System)</h2>
        <p class="text-sm sm:text-base md:text-lg text-gray-200 mb-8">Through three-dimensional scanning, signals are sent to organs and cells to detect changes in metabolic processes.</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="(item, index) in NLSReports" :key="index" class="bg-white/10 backdrop-blur-sm rounded-xl shadow-md p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <div class="text-white font-semibold text-center text-sm sm:text-base">{{ item }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="relative w-full py-16 md:py-24 bg-white" id="story">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#6b5e4d] tracking-tight mb-4 md:mb-6">Our Story</h1>
      <p class="text-center text-sm sm:text-base text-[#8a7b67] max-w-2xl mx-auto mb-12">A journey of healing, purpose, and a return to natural wisdom.</p>

      <div class="max-w-5xl mx-auto px-4 md:px-10 space-y-12 md:space-y-24">
        <div class="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div class="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#6b5e4d] mb-3">A Calling to Help</h2>
            <div class="w-12 h-1 bg-[#b8a48a] rounded mb-4"></div>
            <p class="text-sm sm:text-base text-gray-700 leading-relaxed">I’ve always had the calling to help people. When I was in grade 11 I got accepted into nursing school and started my studies in 2014. I had the chance to further my studies in specialized nursing care and practised in the critical care unit since 2022.</p>
          </div>
          <div class="flex justify-center md:justify-end">
            <img src="/story/plant2.jpg" alt="Our Story" class="w-full max-w-md rounded-lg object-cover" />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div class="flex justify-center md:justify-start">
            <img src="/story/plant1.jpg" alt="Our Story" class="w-full max-w-md rounded-lg object-cover" />
          </div>
          <div class="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#6b5e4d] mb-3">Rethinking Healthcare</h2>
            <div class="w-12 h-1 bg-[#b8a48a] rounded mb-4"></div>
            <p class="text-sm sm:text-base text-gray-700 leading-relaxed">Although we treated patients with western medicine regimes, I observed many times what the damaging side effects of that was. I started to think of alternative ways to help people recover from illness and managing chronic health issues.</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div class="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#6b5e4d] mb-3">A New Direction</h2>
            <div class="w-12 h-1 bg-[#b8a48a] rounded mb-4"></div>
            <p class="text-sm sm:text-base text-gray-700 leading-relaxed">In December 2024 I had the opportunity to come in contact with a holistic healer and started to make plans to open my own natural clinic.</p>
          </div>
          <div class="flex justify-center md:justify-end">
            <img src="/story/plant3.jpg" alt="Our Story" class="w-full max-w-md rounded-lg object-cover" />
          </div>
        </div>

        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#6b5e4d] mb-3">Inspired by Creation</h2>
          <div class="w-12 h-1 bg-[#b8a48a] rounded mx-auto mb-4"></div>
          <p class="text-sm sm:text-base text-gray-700 leading-relaxed">I also got my inspiration from the Bible... Healing herbs like aloe, anise, cinnamon and many others are mentioned in the Bible and are still used today.</p>
        </div>
      </div>
    </section>

   <section class="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center"
  style="background-image: url('/service.jpg')">
  
  <!-- Dark Overlay -->
  <div class="absolute inset-0 bg-black/50"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
    
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">Our Services</h2>
    <p class="text-base sm:text-lg mb-8 md:mb-12 px-2">
      Helping you achieve wellness naturally, one treatment at a time.
    </p>

   <!-- Services Cards -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center mt-8 md:mt-12">

  <!-- SERVICE CARD 1 -->
  <div class="bg-white/30 rounded-xl p-3 sm:p-5 backdrop-blur-md flex flex-col items-center w-full sm:max-w-[180px] lg:max-w-[160px] min-h-[auto] sm:min-h-[400px] hover:bg-white/40 transition-colors duration-300">
    <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center bg-primary mb-2 sm:mb-4 flex-shrink-0">
      <div class="text-white text-sm sm:text-lg font-bold">H</div>
    </div>
    <h3 class="text-xs sm:text-sm font-semibold text-white text-center mb-2 sm:mb-3">Body scan with ORMA machine</h3>
    <p class="text-xs sm:text-sm text-white text-center leading-relaxed flex-grow">A full-body scan that detects imbalances in your organs and cells using advanced ORMA technology, helping us identify what your body truly needs.</p>
  </div>

  <!-- SERVICE CARD 2 -->
  <div class="bg-white/30 rounded-xl p-3 sm:p-5 backdrop-blur-md flex flex-col items-center w-full sm:max-w-[180px] lg:max-w-[160px] min-h-[auto] sm:min-h-[400px] hover:bg-white/40 transition-colors duration-300">
    <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center bg-primary mb-2 sm:mb-4 flex-shrink-0">
      <div class="text-white text-sm sm:text-lg font-bold">E</div>
    </div>
    <h3 class="text-xs sm:text-sm font-semibold text-white text-center mb-2 sm:mb-3">3D frequency testing of cells with 3D NLS machine</h3>
    <p class="text-xs sm:text-sm text-white text-center leading-relaxed flex-grow">Advanced 3D scanning that measures the frequency of your cells to detect health issues at the root before symptoms even appear.</p>
  </div>

  <!-- SERVICE CARD 3 -->
  <div class="bg-white/30 rounded-xl p-3 sm:p-5 backdrop-blur-md flex flex-col items-center w-full sm:max-w-[180px] lg:max-w-[160px] min-h-[auto] sm:min-h-[400px] hover:bg-white/40 transition-colors duration-300">
    <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center bg-primary mb-2 sm:mb-4 flex-shrink-0">
      <div class="text-white text-sm sm:text-lg font-bold">A</div>
    </div>
    <h3 class="text-xs sm:text-sm font-semibold text-white text-center mb-2 sm:mb-3">Treatment of abnormal frequencies</h3>
    <p class="text-xs sm:text-sm text-white text-center leading-relaxed flex-grow">Natural treatment to correct abnormal body frequencies and restore balance to your organs, cells, and energy.</p>
  </div>

  <!-- SERVICE CARD 4 -->
  <div class="bg-white/30 rounded-xl p-3 sm:p-5 backdrop-blur-md flex flex-col items-center w-full sm:max-w-[180px] lg:max-w-[160px] min-h-[auto] sm:min-h-[400px] hover:bg-white/40 transition-colors duration-300">
    <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center bg-primary mb-2 sm:mb-4 flex-shrink-0">
      <div class="text-white text-sm sm:text-lg font-bold">L</div>
    </div>
    <h3 class="text-xs sm:text-sm font-semibold text-white text-center mb-2 sm:mb-3">Treatment of ailments with 100% natural remedies</h3>
    <p class="text-xs sm:text-sm text-white text-center leading-relaxed flex-grow">Holistic treatment using 100% natural remedies to support healing and boost the body's self-recovery.</p>
  </div>

  <!-- SERVICE CARD 5 -->
  <div class="bg-white/30 rounded-xl p-3 sm:p-5 backdrop-blur-md flex flex-col items-center w-full sm:max-w-[180px] lg:max-w-[160px] min-h-[auto] sm:min-h-[400px] hover:bg-white/40 transition-colors duration-300">
    <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center bg-primary mb-2 sm:mb-4 flex-shrink-0">
      <div class="text-white text-sm sm:text-lg font-bold">T</div>
    </div>
    <h3 class="text-xs sm:text-sm font-semibold text-white text-center mb-2 sm:mb-3">Ionic foot detox</h3>
    <p class="text-xs sm:text-sm text-white text-center leading-relaxed flex-grow">A gentle detox through the feet that helps remove toxins and improve overall energy and wellness.</p>
  </div>

  <!-- SERVICE CARD 6 -->
  <div class="bg-white/30 rounded-xl p-3 sm:p-5 backdrop-blur-md flex flex-col items-center w-full sm:max-w-[180px] lg:max-w-[160px] min-h-[auto] sm:min-h-[400px] hover:bg-white/40 transition-colors duration-300">
    <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center bg-primary mb-2 sm:mb-4 flex-shrink-0">
      <div class="text-white text-sm sm:text-lg font-bold">H</div>
    </div>
    <h3 class="text-xs sm:text-sm font-semibold text-white text-center mb-2 sm:mb-3">Health education regarding a healthy lifestyle</h3>
    <p class="text-xs sm:text-sm text-white text-center leading-relaxed flex-grow">Personal guidance on healthy living, nutrition, and habits to support long-term wellness and vitality.</p>
  </div>
</div>
  </div>
</section> 


    <!-- Contact -->
    <section id="contact" class="relative min-h-screen flex flex-col justify-center items-center px-4">
      <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('/contact.png');">
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div class="relative z-10 w-full max-w-lg bg-white bg-opacity-80 rounded-2xl shadow-2xl p-6 md:p-8">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#6b5e4d] mb-4">Contact Us</h2>

        <form @submit.prevent="submitForm" class="space-y-3">
          <input v-model="name" type="text" placeholder="Your Name" class="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b8a48a]" required />
          <input v-model="email" type="email" placeholder="Your Email" class="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b8a48a]" required />
          <textarea v-model="message" placeholder="Your Message" class="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b8a48a] resize-none" rows="5" required></textarea>
          <button type="submit" class="w-full bg-[#b8a48a] hover:bg-[#a8926f] transition-colors duration-300 text-white font-bold py-2 rounded-xl">Send Message</button>
        </form>
      </div>

      <div class="relative z-10 mt-8 text-center text-sm sm:text-base">
        <p class="text-[#f1f0ee] mb-2">Phone: <a href="tel:+27123456789" class="font-bold hover:text-[#b8a48a]">064 738 9173</a></p>
        <p class="text-[#e8e6e4]">Email: <a href="mailto:luzane@biohealth.com" class="font-bold hover:text-[#b8a48a]">luzane@biohealth.com</a></p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#2a2319] text-white py-6">
      <div class="max-w-6xl mx-auto px-4 text-center text-sm md:text-base">
        &copy; 2025 BioHealth Clinic. All rights reserved.  <br> Powerd by Vortex Intelligence.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RadialMenu from '~/components/RadialMenu.vue'

// gsap.registerPlugin(ScrollTrigger)

const heroRef = ref(null)
const heroContent = ref(null)
const ctaButton = ref(null)
const nextSection = ref(null)
const featuresSection = ref(null)

const bioHealthSection = ref(null)
const qrmaSection = ref(null)

const reports = [
  'Cardiovascular & cerebrovascular', 'Gastro-intestinal function', 'Liver function', 'Large intestine function',
  'Gallbladder function', 'Pancreatic function', 'Kidney function', 'Lung function',
  'Brain nerve', 'Bone disease', 'Bone mineral density', 'Rheumatoid bone disease',
  'Bone growth index', 'Blood sugar level', 'Trace elements', 'Vitamins',
  'Amino acids', 'Co-enzymes', 'Endocrine system', 'Immune system',
  'Human toxins', 'Heavy metals', 'Basic physical quality', 'Allergies',
  'Obesity', 'Skin', 'Eyes', 'Collagen',
  'Channels and collaterals', 'Pulse of heart and brain', 'Blood lipids', 'Gynaecology',
  'Breast (females)', 'Menstrual cycle', 'Prostate', 'Male sexual function',
  'Sperm and semen', 'Elements of human', 'Thyroid', 'Comprehensive report'
]

const NLSReports = [
  'Cardiovascular system', 'Digestive system', 'Liver', 'Gallbladder',
  'Pancreas', 'Kidneys', 'Lungs', 'Brain',
  'Bones', 'Blood sugar', 'Vitamins', 'Amino acids',
  'Endocrine system', 'Immune system', 'Toxins', 'Heavy metals',
  'Allergies', 'Obesity', 'Skin', 'Eyes',
  'Collagen', 'Nervous system', 'Blood lipids', 'Reproductive system',
  'Thyroid', 'Comprehensive analysis'
]

const reportColors = [
  ['#85b19b', '#a8c9b7'], // primary
  ['#4a90a4', '#77b4c0'], // secondary
  ['#8c7d69', '#b6a993'], // tertiary
  ['#5e8d76', '#a8c9b7'], // darker green
]

onMounted(async () => {
  // Hero text + CTA scroll animation
  const gsap = (await import('gsap')).default
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.registerPlugin(ScrollTrigger)
  gsap.to([heroContent.value, ctaButton.value], {
    y: -50,
    opacity: 0,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: heroRef.value,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      toggleActions: 'play reverse play reverse', // <-- allows replay
    },
  })

  // Hero parallax effect
  gsap.to(heroRef.value, {
    backgroundPositionY: '40%',
    ease: 'none',
    scrollTrigger: {
      trigger: heroRef.value,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      toggleActions: 'play reverse play reverse', // <-- replay on scroll up
    },
  })

  // Next section fade-in staggered
  const nextContent = nextSection.value.querySelector('div')
  gsap.fromTo(
    nextContent.children,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: nextSection.value,
        start: 'top 50%',
        toggleActions: 'play reverse play reverse', // <-- replay
      },
    }
  )

  const cards = featuresSection.value.querySelectorAll('.feature-card')

  gsap.from(cards, {
    opacity: 0,
    y: 40,
    scale: 0.9,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: featuresSection.value,
      start: 'top 50%',
      toggleActions: 'play reverse play reverse', // <-- replay
    },
  })

  const bioContent = bioHealthSection.value.querySelector('div')
  gsap.fromTo(
    bioContent,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: bioHealthSection.value,
        start: 'top 70%',
        toggleActions: 'play reverse play reverse',
      },
    }
  )

  const sections = qrmaSection.value.querySelectorAll('div > *')

  gsap.from(sections, {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.4,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: qrmaSection.value,
      start: 'top 80%',
      toggleActions: 'play reverse play reverse',
    },
  })
  
})
</script>

<style scoped>
/* No keyframes needed; GSAP handles animations */
</style>
