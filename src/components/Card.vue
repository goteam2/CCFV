<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  title: String,
  link: String,
  cta: String,
  body: String,
});
</script>

<template>
  <a
    :href="props.link"
    class="ccfv-card | group | p-4 lg:p-10 2xl:p-12 lg:pb-6 | flex flex-col | border-4 border-ccfv-blue hover:border-ccfv-orange bg-white"
  >
    <h3
      class="text-lg sm:text-2xl font-bold text-ccfv-blue group-hover:text-ccfv-orange mb-3"
      v-html="props.title"
    ></h3>
    <p v-html="props.body"></p>
    <div class="flex mt-auto">
      <button
        type="button"
        class="py-2 px-4 | font-semibold text-ccfv-blue group-hover:text-ccfv-orange | ms-auto inline-flex justify-center items-center gap-2 | rounded-none border-2 border-transparent focus:outline-none focus:ring-ccfv-orange focus:ring-offset-4 transition-all duration-100 text-end"
      >
        {{ props.cta }}
        <svg
          class="w-2.5 h-auto group-hover:translate-x-1 transition-all duration-100"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </a>
</template>

<style lang="scss" scoped></style>
