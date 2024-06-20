// src/directives/v-intersect-section.js
export default {
  mounted(el, binding) {
    const options = binding.value || {};
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);
  }
};