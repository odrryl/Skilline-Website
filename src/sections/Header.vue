<script setup></script>
<template>
  <header class="header" id="home">
    <div class="container header__container">
      <a class="logo" href="/">
        <img src="/assets/logo/logo_1.svg" alt="Logo" class="logo-img" />
        <h1 class="logo-txt" id="dark-logo">Skilline</h1>
      </a>

      <div class="header__nav">
        <div class="header__backdrop" id="headerBackdrop" onclick="navToggle()"></div>
        <ul class="header__ul" id="headerUl">
          <li class="header__li"><a class="header__a" href="#home">Home</a></li>
          <li class="header__li">
            <a class="header__a" href="#features">Features</a>
          </li>
          <li class="header__li">
            <a class="header__a" href="#blog">Blog</a>
          </li>
          <li class="header__li">
            <a class="header__a" href="#about">About Us</a>
          </li>

          <div class="header__buttons">
            <a href="/" class="btn-1 login">Login</a>
            <a href="/" class="btn-1 sign-up">Sign Up</a>
          </div>

          <span class="material-icons icon-close" onclick="navToggle()">close</span>
        </ul>
        <span class="material-icons icon-menu" onclick="navToggle()">menu</span>
      </div>
    </div>
  </header>
</template>
