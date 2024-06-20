<script setup>
import PlayIcon from '@/components/icons/PlayIcon.vue'
</script>
<template>
  <section class="home">
    <div class="container home__container">
      <div class="home__info">
        <h2 class="home__title scale-in-center">
          <span>Studying</span> Online is now<br />
          much easier
        </h2>
        <p class="home__desc scale-in-center">
          Skilline is an interesting platform that will teach you in more an interactive way
        </p>

        <div class="home__group scale-in-center">
          <a href="/" class="btn-1 home__btn pulsate-fwd">Join for free</a>
          <div class="home__watch-video">
            <a class="play" href="/">
              <PlayIcon />
            </a>
            <p class="play-desc">Watch how it works</p>
          </div>
        </div>
      </div>

      <img
        src="/assets/img/home_section/student.png"
        alt="Preview"
        class="home__img scale-in-center"
      />
    </div>
  </section>
</template>
