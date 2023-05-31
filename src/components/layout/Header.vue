<script setup>
import Navbar from "@/components/Navbar.vue";
import MobileNav from "@/components/MobileNav.vue";
</script>
<template>
  <header id="ccfv-logo-header" class="z-50 w-full relative">
    <div
      class="ccfv-header-bar | sticky max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
      aria-label="Global"
    >
      <div class="w-full flex items-center">
        <a class="flex" href="#">
          <img
            class="ccfv-logo | w-64 h-auto hover:opacity-80"
            src="/img/ccfv-logo.svg"
            alt="CCFV Logo"
          />
        </a>

        <a class="ms-auto hidden lg:flex" href="#">
          <img
            class="iwk-logo | w-32 mx-12 my-12 h-auto hover:opacity-80 self-end"
            src="/img/dalhousie.png"
            alt="Dalhousie University Logo"
          />
        </a>
        <a class="hidden lg:flex" href="#">
          <img
            class="ccfv-logo | w-32 mx-12 my-12 h-auto hover:opacity-80"
            src="/img/iwk.png"
            alt="IWK Logo"
          />
        </a>
        <a class="hidden lg:flex" href="#">
          <img
            class="ccfv-logo | w-32 mx-12 my-12 h-auto hover:opacity-80"
            src="/img/nsh.png"
            alt="NSH Logo"
          />
        </a>

        <div class="ccfv-mobile-nav-btn | ms-auto | lg:hidden">
          <button
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 border border-transparent font-semibold bg-white text-neutral-500 hover:text-ccfv-orange focus:outline-none focus:ring-2 focus:ring-ccfv-gold focus:ring-offset-2 transition-all text-sm"
            data-hs-overlay="#ccfv-mobile-overlay"
          >
            <svg
              class="hs-collapse-open:hidden w-12 h-12"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              class="hs-collapse-open:block hidden w-12 h-12"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  <Navbar />
  <MobileNav />
</template>

<style lang="scss" scoped></style>
