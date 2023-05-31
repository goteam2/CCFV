<script setup>
import { ref, onMounted } from "vue";
import links from '@/config/nav.js'


onMounted(() => {
  const navbar = document.getElementById("ccfv-navbar");
  const navLinks = document.getElementById("ccfv-navbar-links");
  const logoHeader = document.getElementById("ccfv-logo-header");
  const badge = document.getElementById("ccfv-icon-badge");
  const sticky = logoHeader.offsetHeight;

  window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("drop-shadow-2xl");
      navLinks.classList.add("translate-x-5");
      badge.classList.remove("opacity-0");
      badge.classList.remove("hidden");
      badge.classList.remove("-translate-x-10");
    } else {
      navbar.classList.remove("drop-shadow-2xl");
      navLinks.classList.remove("translate-x-5");
      badge.classList.add("opacity-0");
      badge.classList.add("hidden");
      badge.classList.add("-translate-x-10");
    }
  };
});
</script>
<template>
  <nav
    id="ccfv-navbar"
    class="ccfv-navbar | hidden lg:flex overflow-hidden transition-all duration-300 | sticky top-0 z-40 | bg-ccfv-blue border-b-4 border-ccfv-orange w-full sm:items-center sm:justify-center"
  >
    <div
      id="ccfv-navbar-wrapper"
      class="flex gap-0 | w-full max-w-screen-xl items-center | px-4"
    >
      <a
        href="https://centerforvaccinology.ca/"
        id="ccfv-icon-badge"
        title="go to Home"
        class="ccfv-icon-circle | flex items-center justify-center rounded-full bg-white h-10 border-transparent border-4 aspect-square | hidden transition-all duration-300 opacity-0 scale-100 hover:scale-125 hover:border-ccfv-gold"
      >
        <img src="/img/ccfv-icon.svg" alt="CCFV Icon" class="ccfv-icon | h-6" />
      </a>
      <div
        id="ccfv-navbar-links"
        :class="'flex flex-col sm:flex-row sm:justify-stretch sm:flex-1 gap-0  | max-w-screen-xl |  transition-all duration-300 '"
      >
        <a
          class="text-white hover:bg-ccfv-orange p-4 font-bold text-lg text-center | sm:flex-auto"
          v-for="link in links"
          :href="link.href"
          :aria-current="link.current"
          >{{ link.name }}</a
        >
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped></style>
