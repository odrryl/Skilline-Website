<script setup>
import { onMounted } from 'vue';
import Header from '@/sections/Header.vue';
import Home from '@/sections/Home.vue';
import Service from '@/sections/Service.vue';
import About from '@/sections/About.vue';
import Features from '@/sections/Features.vue';
import Testimonial from '@/sections/Testimonial.vue';
import News from '@/sections/News.vue';
import Footer from '@/sections/Footer.vue';

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <Home />
    <Service />
    <About />
    <Features />
    <Testimonial />
    <News />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
