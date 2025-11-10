<template>
  <!-- Full-page background container -->
  <div
    class="min-h-screen bg-cover bg-center bg-fixed"
    style="background-image: url('/Landing.jpg')"
  >
    <!-- Hero Section -->
    <section
      ref="heroRef"
      class="relative min-h-[calc(100vh-89px)] flex items-start justify-start p-12 overflow-hidden"
    >
      <!-- Soft gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-tertiary/10"></div>

      <!-- Hero content -->
      <div ref="heroContent" class="relative z-10 max-w-2xl">
        <h1 class="text-6xl font-bold text-tertiary drop-shadow-md mb-4">
          Where Wellness
        </h1>
        <p class="text-6xl text-tertiary mb-6">Meets Nature.</p>
        <p class="text-lg md:text-xl text-white leading-relaxed mb-8">
          Restoring balance through science, nature, and care — the Bio-Health way.
        </p>
        <button
          ref="ctaButton"
          class="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300 ease-in-out"
        >
          Explore Our Services
        </button>
      </div>
    </section>

    <!-- Next Section (semi-transparent with frosted overlay) -->
    <section
      ref="nextSection"
      class="relative bg-white/70 backdrop-blur-sm py-20 px-8"
    >
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-primary mb-6">
          From the first breath to your last
        </h2>
        <p class="text-lg md:text-xl text-gray-800 leading-relaxed">
          Waves of energy flow through you. Sometimes a change in the flow causes certain health problems.  
          At Bio-Health, we help restore balance naturally and scientifically.
        </p>
      </div>
    </section>

    <section ref="featuresSection" class="bg-tertiary-light py-20 px-8">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between">
            <!-- Mental exhaustion  -->
            <div class="flex-1 text-center feature-card border-b md:border-b-0 md:border-r border-gray-300 pb-8 md:pb-0 md:pr-8 last:border-none">
                <img 
                    src="/mental.png" 
                    alt="" 
                    class="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <p class="font-bold text-3xl text-black mb-4">Mental exhaustion </p>
                <p class="text-gray-800">
                    High stress levels and a demanding lifestyle are the main causes of mental drainage. Difficulty in concentration, low energy levels and reduced motivational drive are the symptoms you can experience</p>
            </div>

            <!-- Chronic Fatigue -->
            <div class="flex-1 text-center feature-card border-b md:border-b-0 md:border-r border-gray-300 pb-8 md:pb-0 md:pr-8 last:border-none">
                <img 
                    src="/chronic.png" 
                    alt="Chronic Fatigue" 
                    class="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <p class="font-bold text-3xl text-black mb-4">Chronic Fatigue </p>
                <p class="text-gray-800">
                    Most people struggle with a constant feeling of tiredness even after a good night’s rest. Whether it is due to a known disease or an unknown cause, the body feel drained of energy </p>
            </div>

            <!-- Pain -->
            <div class="flex-1 text-center feature-card pb-8 md:pb-0">
                <img 
                    src="/pain.png" 
                    alt="Pain" 
                    class="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <p class="font-bold text-3xl text-black mb-4">Pain</p>
                <p class="text-gray-800">
                    Pain is not always gain..it is a warning that some system in the body has definite  damage or the potential of lasting damage</p>
            </div>
        </div>
    </section>

    <section
    ref="bioHealthSection"
    class="relative bg-white/70 backdrop-blur-sm py-20 px-8"
    >
        <div class="max-w-4xl mx-auto text-center opacity-0 translate-y-6">
            <h2 class="text-4xl font-bold text-primary mb-6">
            Personalized Health, Naturally
            </h2>
            <p class="text-lg md:text-xl text-gray-800 mb-4">
            At Bio-Health, first-class technology is used to determine each one’s specific health shortcomings. The results of the tests are then used to provide natural supplements to treat the root of the problem rather than managing the symptoms.
            </p>
            <p class="text-lg md:text-xl text-gray-800">
            Come and find out how to live a “Bio-Healthy” life.
            </p>
        </div>
    </section>

    <section
        ref="qrmaSection"
        class="relative bg-primary backdrop-blur-sm py-20 px-8 text-center"
        >
        <h2 class="text-4xl font-bold text-white mb-6">
                QRMA (Quantum Resonance Magnetic Analyzer)
            </h2>
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start text-start">
            
            <!-- Left: QRMA description -->
            <div class="flex-1 translate-y-6">
            
            <p class="text-lg md:text-xl text-white mb-4">
                By means of chemical analysis, ultrasound, and magnetic resonance imaging, the quantum analysis method collects data from the different body systems.
            </p>

            <ol class="list-decimal list-inside space-y-2 text-white mb-4">
                <li>
                <strong>Signal collection:</strong> You hold a sensor in the palm of your hand and it measures the energy frequencies in the body.
                </li>
                <li>
                <strong>Signal amplification:</strong> The weak signals are amplified to analyze the data.
                </li>
                <li>
                <strong>Comparative analysis:</strong> The amplified signals are compared to a reference database for various health conditions, e.g., organ function.
                </li>
                <li>
                <strong>Report generation:</strong> A report is generated to determine overall health status.
                </li>
            </ol>

            <p class="text-lg md:text-xl text-white">
                One of the greatest advantages is that it is non-invasive and can detect abnormal cell function before symptoms appear. Suitable for all ages.
            </p>
            </div>

            <!-- Right: Reports grid -->
            <div class="flex-1  translate-y-6">
            <h3 class="text-2xl font-bold text-white mb-4 text-center md:text-left">
                The QMRA machine scans 60 parts of the body and provides 40 reports:
            </h3>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                <div
                v-for="(report, index) in reports"
                :key="index"
                class="bg-white/80 rounded shadow p-2 text-gray-800 text-sm text-center"
                >
                {{ report }}
                </div>
            </div>
            </div>

        </div>
    </section>
    <section
        ref="nlsSection"
        class="relative bg-secondary-dark py-20 px-8"
    >
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-4xl font-bold text-white mb-8">
            3D NLS (Non-Linear Diagnostic System)
            </h2>
            <p class="text-lg md:text-xl text-gray-200 mb-12">
            Through three-dimensional scanning, signals are sent to organs and cells to detect changes in metabolic processes. It can discover:
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div
                v-for="(item, index) in NLSReports"
                :key="index"
                class="bg-white/10 backdrop-blur-sm rounded-xl shadow-md p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
                <div class="text-white font-semibold text-center">
                {{ item }}
                </div>
            </div>
            </div>
        </div>
        </section>
<section class="h-screen bg-tertiary-light">
<h1 class="text-6xl md:text-8xl py-3 px-12 font-bold text-white text-center">
      Our Story
    </h1>
       <section class="flex justify-center items-center min-h-screen  bg-[#6b5e4d] p-4">
    <div class="bg-white bg-opacity-90 rounded-2xl shadow-2xl max-w-2xl p-8 border border-[#b8a48a] text-center">
      <p class="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
        I’ve always had the calling to help people. When I was in grade 11
        I got accepted into nursing school and started my studies in 2014.
        I had the chance to further my studies in specialized nursing care
        and practised in the critical care unit since 2022.

        Although we treated patients with western medicine regimes, I
        observed many times what the damaging side effects of that was.
        I started to think of alternative ways to help people recover from
        illness and managing chronic health issues. In December 2024 I had
        the oppurtunity to come in contact with a holistic healer and started
        to make plans to open my own natural clinic.

        I also got my inspiration from the Bible. When God created
        everything, He gave humankind all the plants for food and medicinal
        purposes. Healing herbs like aloe, anise, cinnamon and many others
        are mentioned in the bible and are still used today.
      </p>
    </div>
  </section>
 <section class="relative flex justify-center items-center h-screen bg-[#ddd8d1] overflow-hidden">
    <!-- Center Oval -->
    <div class="relative z-10 flex justify-center items-center bg-[#b8a48a] text-white text-2xl md:text-4xl font-bold rounded-full w-48 h-48 text-center shadow-2xl border border-white/30">
      Our Services
    </div>

    <!-- Service items -->
    <div class="absolute inset-0 flex justify-center items-center text-white text-center font-medium">

      <!-- Top -->
      <div class="absolute top-[10%]">
        <p class="bg-[#b8a48a] px-4 py-2 rounded-full shadow-lg">
          Body scan with ORMA machine
        </p>
      </div>

      <!-- Top-right -->
      <div class="absolute top-[22%] right-[18%]">
        <p class="bg-[#b8a48a] px-4 py-2 rounded-full shadow-lg">
          Treatment of ailments with <br /> 100% natural remedies
        </p>
      </div>

      <!-- Bottom-right -->
      <div class="absolute bottom-[22%] right-[18%]">
        <p class="bg-[#b8a48a] px-4 py-2 rounded-full shadow-lg">
          Ionic foot detox
        </p>
      </div>

      <!-- Bottom -->
      <div class="absolute bottom-[10%]">
        <p class="bg-[#b8a48a] px-4 py-2 rounded-full shadow-lg">
          Health education regarding <br /> a healthy lifestyle
        </p>
      </div>

      <!-- Bottom-left -->
      <div class="absolute bottom-[22%] left-[18%]">
        <p class="bg-[#b8a48a] px-9 py-2 rounded-full shadow-lg">
          Treatment of abnormal frequencies
        </p>
      </div>

      <!-- Top-left -->
      <div class="absolute top-[22%] left-[18%]">
        <p class="bg-[#b8a48a] px-4 py-2 rounded-full shadow-lg">
          3D frequency testing of <br /> cells with 3D NLS machine
        </p>
      </div>
    </div>

    <!-- Connecting lines (aligned perfectly) -->
    <svg class="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
      <!-- Top -->
      <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="#b8a48a" stroke-width="2" />

      <!-- Top-right -->
      <line x1="50%" y1="50%" x2="78%" y2="25%" stroke="#b8a48a" stroke-width="2" />

      <!-- Bottom-right -->
      <line x1="50%" y1="50%" x2="78%" y2="75%" stroke="#b8a48a" stroke-width="2" />

      <!-- Bottom -->
      <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#b8a48a" stroke-width="2" />

      <!-- Bottom-left -->
      <line x1="50%" y1="50%" x2="22%" y2="75%" stroke="#b8a48a" stroke-width="2" />

      <!-- Top-left -->
      <line x1="50%" y1="50%" x2="22%" y2="25%" stroke="#b8a48a" stroke-width="2" />
    </svg>
  </section>
   <!-- Contact Us Section -->
  <section class="relative min-h-screen flex flex-col justify-center items-center px-4">
    
    <!-- Background Image with semi-transparent overlay -->
    <div 
      class="absolute inset-0 bg-cover bg-center z-0"
      style="background-image: url('/contact.png');"
    >
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>

    <!-- Form Block -->
    <div class="relative z-10 w-full max-w-3xl bg-white bg-opacity-60 rounded-3xl shadow-2xl p-8">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-[#6b5e4d] mb-6">
        Contact Us
      </h2>

      <form @submit.prevent="submitForm" class="space-y-4">
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
<!-- Contact Info Section -->
<div class="relative z-10 mt-12 text-center">
  <p class="text-2xl md:text-3xl text-[#f1f0ee] mb-4">
    Phone: <a href="tel:+27123456789" class="font-bold hover:text-[#b8a48a]">064 738 9173</a>
  </p>
  <p class="text-2xl md:text-3xl text-[#e8e6e4]">
    Email: <a href="mailto:luzane@biohealth.com" class="font-bold unde\ hover:text-[#b8a48a]">luzane@biohealth.com</a>
  </p>
</div>

  </section>
<!-- Footer -->
<footer class="bg-[#2a2319] text-white py-8">
  <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    
    
    
    
   
  </div>

  <!-- Copyright -->
  <div class="mt-1 text-center text-md text-[#e8e6e4]">
    &copy; 2025 Bio-Health Clinic. All rights reserved. <br> Powerd by Vortex Intelligence.
  </div>
</footer>











</section>


  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

onMounted(() => {
  // Hero text + CTA scroll animation
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
