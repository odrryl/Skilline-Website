<script setup>
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import StarIcon from '@/components/icons/StarIcon.vue'
</script>
<template>
  <section class="testimonial">
    <div class="container testimonial__container">
      <div class="testimonial__info">
        <div class="testimonial__header">
          <div class="line"></div>
          <h4 class="testimonial__header-title">Testimonial</h4>
        </div>
        <h3 class="testimonial__info-title">What They Say?</h3>
        <p class="testimonial__info-desc">
          Skilline has got more than 100k positive ratings from our users around the world.
        </p>
        <p class="testimonial__info-desc">
          Some of the students and teachers were greatly helped by the Skilline.
        </p>

        <p class="testimonial__info-desc">Are you too? Please give your assessment</p>

        <a class="btn-2 testimonial__btn" href="/">
          Write your assessment
          <ArrowIcon class="arrow"/>
        </a>
       
      </div>

      <div class="testimonial__review">
        <img
          src="/assets/img/testimonial_section/reviewer.png"
          alt="Reviewer"
          class="testimonial__review-img"
        />
        <div class="feedback">
          <div class="feedback__info">
            <div class="feedback__info-line"></div>
            <p class="feedback__desc">
              "Thank you so much for your help. It's exactly what I've been looking for. You won't
              regret it. It really saves me time and effort. Skilline is exactly what our business
              has been lacking."
            </p>
          </div>
          <div class="feedback__reviewer">
            <p class="feedback__reviewer-name">Gloria Rose</p>
            <div class="feedback__reviewer-info">
              <div>
                <StarIcon class="star" />
                <StarIcon class="star"/>
                <StarIcon class="star"/>
                <StarIcon class="star"/>
                <StarIcon class="star"/>
              </div>

              <p class="feedback__reviewer-reliability">12 reviews at Yelp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
