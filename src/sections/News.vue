<script setup></script>

<template>
  <section v-intersect class="news" id="blog">
    <div class="container news__container">
      <h3 class="title">Lastest News and Resources</h3>
      <p class="desc">See the developments that have occurred to Skillines in the world</p>

      <div class="news__group">
        <div class="news__main">
          <img src="/assets/img/news_section/meeting.png" alt="Meeting" />
          <p class="news__main-tag">NEWS</p>
          <h4 class="news__main-title">
            Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
          </h4>
          <p class="news__main-desc">
            Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates
            exclusively...
          </p>
          <a href="/" class="link news__main-link">Read more</a>
        </div>

        <div class="news__secondary">
          <a class="news__secondary-block" href="/">
            <div class="news__secondary-preview">
              <img src="/assets/img/news_section/class.png" alt="Class" class="news__img" />
              <p class="news__secondary-tag">PRESS RELEASE</p>
            </div>
            <div class="news__secondary-info">
              <h4 class="news__secondary-title">
                Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
              </h4>
              <p class="news__secondary-desc">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </a>

          <a class="news__secondary-block" href="/">
            <div class="news__secondary-preview">
              <img src="/assets/img/news_section/zoom.png" alt="Zoom" class="news__img" />
              <p class="news__secondary-tag">NEWS</p>
            </div>

            <div class="news__secondary-info">
              <h4 class="news__secondary-title">
                Zoom’s earliest investors are betting millions on a better Zoom for schools
              </h4>
              <p class="news__secondary-desc">
                Zoom was never created to be a consumer product. Nonetheless, the...
              </p>
            </div>
          </a>

          <a class="news__secondary-block" href="/">
            <div class="news__secondary-preview">
              <img
                src="/assets/img/news_section/blackboard.png"
                alt="Blackboard"
                class="news__img"
              />
              <p class="news__secondary-tag">NEWS</p>
            </div>

            <div class="news__secondary-info">
              <h4 class="news__secondary-title">
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms
              </h4>
              <p class="news__secondary-desc">
                This year, investors have reaped big financial returns from betting on Zoom...
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
