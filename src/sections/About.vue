<script setup>
import PlayIcon from '@/components/icons/PlayIcon.vue'
</script>

<template>
  <section v-intersect class="about" id="about">
    <div class="container about__container">
      <h3 class="title">What is <span>Skilline?</span></h3>
      <p class="desc" id="about-desc">
        Skilline is a platform that allows educators to create online classes whereby they can store
        the course materials online; manage assignments, quizzes and exams; monitor due dates; grade
        results and provide students with feedback all in one place.
      </p>

      <div class="about__choise">
        <div class="about__choise-block" id="instructor">
          <h4 class="about__choise-block-title">FOR INSTRUCTORS</h4>
          <a href="/" class="btn-1 btn-instructor heartbeat">Start a class today</a>
        </div>

        <div class="about__choise-block" id="student">
          <h4 class="about__choise-block-title">FOR STUDENTS</h4>
          <a href="/" class="btn-1 btn-student heartbeat">Enter access code</a>
        </div>
      </div>

      <div class="about__group">
        <div class="about__info">
          <h4 class="about__title">
            Everything you can do in a physical classroom, <span>you can do with Skilline</span>
          </h4>
          <p class="about__desc">
            Skilline’s school management software helps traditional and online schools manage
            scheduling, attendance, payments and virtual classrooms all in one secure cloud-based
            system.
          </p>
          <a href="/" class="link about__link">Learn more</a>
        </div>

        <div class="about__img-container">
          <img
            src="/assets/img/about_section/class_meeting.png"
            alt="Class Meeting"
            class="about__img"
          />
          <a class="play" href="/" id="play-icon">
            <PlayIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
