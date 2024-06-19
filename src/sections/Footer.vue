<script setup></script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__outro">
        <a class="logo" href="#home">
          <img src="/assets/logo/logo_2.svg" alt="Logo" class="logo-img" />
          <h1 class="logo-txt" id="light-logo">Skilline</h1>
        </a>

        <div class="separator"></div>

        <h4 class="footer__outro-title">Virtual Class<br> for Zoom</h4>
      </div>
      
      <h4 class="footer__subscribe-title">Subscribe to get our Newsletter</h4>

        <form class="subscribe-form">
          <input class="subscribe-form__input" type="email" placeholder="Your Email" />
          <button class="btn-1 subscribe-form__btn" type="submit">Subscribe</button>

        </form>

      <div class="footer__group">
        <a href="/" class="footer__link">Careers</a>
        <div class="link-separator">|</div>
        <a href="/" class="footer__link">Privacy Policy</a>
        <div class="link-separator">|</div>
        <a href="/" class="footer__link">Terms & Conditions</a>
      
      </div>

      <p class="copyright">&#169 2021 Class Technologies Inc. </p>
    </div>
    
  </footer>
</template>
