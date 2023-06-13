<script setup>
import { onMounted, ref } from "vue";
import { register } from "swiper/element/bundle";

import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

import Card from "./components/Card.vue";

const content = {
  hero: {
    title: "Advancing Immunization for a Healthier World.",
    cta: "Continue to CCfV",
    link: "https://centerforvaccinology.ca/home",
  },
  intro: {
    title: "Welcome to the new look of CCfV.",
    body: "Our rebrand represents our growth as an organization and our commitment to safeguarding lives and driving global health forward. With a dynamic new look, we continue our research, foster innovation, and make an impact in the field of immunization. <br> <br> We are excited to announce that a brand-new website is currently in development. This website will provide an enhanced user experience, making it easier for you to access valuable information about our research, services, and initiatives. Stay tuned for the launch of our new website, where you'll find updated resources, insightful articles, and opportunities to engage with research at CCfV.",
  },
  valueProp: {
    title: "Why Choose CCfV?",
    cards: [
      {
        title: "Trusted Expertise",
        icon: "trusted-expertise.svg",
        body: "With decades of experience, our interdisciplinary team of nationally recognized scientists and medical professionals leads the way in vaccinology. We develop and evaluate safe, effective, and life-saving vaccines while addressing social issues to increase vaccine acceptance.",
      },
      {
        title: "Responsive Research",
        icon: "responsive-research.svg",
        body: "At CCfV, we respond to emerging health threats and public concerns. Through state-of-the-art facilities and collaborative partnerships with industry and communities, we stay at the forefront of vaccine innovation, ensuring quality and safety.",
      },
      {
        title: "Global Impact",
        icon: "global-impact.svg",
        body: "We work with investigators both across Canada and around the world to make a meaningful difference in communities worldwide by combating infectious diseases, increasing vaccine awareness and acceptance, and building resiliency against future pandemics. ",
      },
    ],
  },
  services: {
    title: "Our Services",
    navigation: {
      nextEl: ".ccfv-services--swiper-nav-next",
      prevEl: ".ccfv-services--swiper-nav-previous",
      disabledClass: "pointer-events-none opacity-50",
    },
    cards: [
      {
        title: "Vaccine Development",
        body: "Our Discovery Research Group focuses on developing novel vaccine formulations, emphasizing delivery systems, adjuvants, and mucosal immunity. From concept to clinical trials, we can transform scientific ideas into life-saving realities.",
        cta: "Learn More",
        link: "https://centerforvaccinology.ca/vaccine-research/about-vaccine-research/",
      },
      {
        title: "Clinical Trials",
        body: "Our trials evaluate vaccine safety and efficacy for all stages of life – from pregnancy and newborns all the way to the senior years. We specialize in first-in-human clinical trials. We are also equipped for clinical trials evaluating vaccines in more vulnerable groups with pre-existing health conditions. By participating, you contribute to advancing global healthcare and fighting infectious diseases.",
        cta: "Current Trials",
        link: "https://centerforvaccinology.ca/participate-in-a-study/current-studies/",
      },
      {
        title: "Public Health Initiatives",
        body: "Through education, we empower individuals and communities to make informed health decisions and provide governments and policymakers with data on the safety, immunogenicity, and efficacy of vaccines so that they may make informed decisions with confidence.",
        cta: "Read more on our Blog",
        link: "https://centerforvaccinology.ca/news-events/",
      },
      {
        title: "Challenge Studies",
        body: "Our Challenge Unit, one of only two in Canada and less than a dozen worldwide, is a specialized in-patient facility that provides a controlled setting which allows researchers to infect participants with certain organisms and closely monitor the course of infection. These kinds of studies can help us better understand disease progression and immunity, improve existing vaccines, and greatly expedite the development of new vaccines.",
        cta: "Visit challengeunit.ca",
        link: "https://challengeunit.ca/",
      },
      {
        title: "CL2 & CL3 Labs",
        body: "The CL2 laboratories function as a support laboratory for clinical trials, as a referral laboratory for industry or collaborative research, and as an independently funded research laboratory in infectious diseases/immunology. The CL3 Lab Suite is the only research-dedicated facility east of Montreal and has the capacity to study neutralizing antibodies to CL3 pathogens including SARS-CoV-2 Variants of Concern.",
        cta: "Learn More",
        link: "https://centerforvaccinology.ca/facilities/ctrc-laboratory/",
      },
    ],
  },
  joinUs: {
    title: "Join Us in Shaping the Future",
    body: "Together, we make a difference. Whether you're a researcher, healthcare professional, industry representative, study volunteer or passionate advocate, collaborate with us on our journey toward a healthier world. Explore our current website to learn more, get involved, or support our mission.",
    cta: "Continue to CCfV",
    link: "https://centerforvaccinology.ca/home",
  },
};

const swiperParams = {
  spaceBetween: 32,
  slidesPerView: 1.5,

  breakpoints: {
    240: {
      slidesPerView: 1.05,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 1.5,
    },
    1360: {
      slidesPerView: 2.25,
    },
    1920: {
      slidesPerView: 3.75,
    },
  },
  breakpoints_half: {
    240: {
      slidesPerView: 1.05,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2.25,
    },
    1360: {
      slidesPerView: 1.5,
    },
    1920: {
      slidesPerView: 2.25,
    },
  },
};
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress);
};

const onSlideChange = (e) => {
  console.log("slide changed");
};
const posts = ref([]);
const post_navigation = {
  nextEl: ".ccfv-posts--swiper-nav-next",
  prevEl: ".ccfv-posts--swiper-nav-previous",
  disabledClass: "pointer-events-none opacity-50",

};

  // register Swiper custom elements
  register();
onMounted(() => {

  fetch("https://centerforvaccinology.ca/wp-json/wp/v2/posts?per_page=3")
    .then((res) => res.json())
    .then((data) => {
      posts.value = data;
      console.log(posts);
    });
});
</script>

<template>
  <Header />
  <section
    class="ccfv-hero | w-full bg-slate-50 py-16 h-96 | flex items-center justify-center"
  >
    <div
      class="container max-w-screen-xl | flex flex-col lg:grid lg:grid-cols-12 gap-y-8 lg:gap-0 lg:items-center justify-center | relative | p-8 lg:px-4 xl:px-28"
    >
      <div class="lg:col-span-7 lg:p-12 xl:p-16 lg:border-4 lg:border-white">
        <h1
          class="font-display text-4xl md:text-3xl lg:text-5xl font-bold text-white text-start"
        >
          {{ content.hero.title }}
        </h1>
      </div>
      <div class="lg:col-span-1 | border-t-4 border-white | hidden lg:flex">
        <span></span>
      </div>
      <div class="lg:col-span-4">
        <a
          :href="content.hero.link"
          type="button"
          class="group py-3 px-4 lg:py-6 lg:px-8 xl:px-12 | inline-flex justify-center | rounded-none border-4 border-white font-semibold text-white hover:text-white hover:bg-ccfv-orange hover:border-white focus:outline-none transition-all text-2xl"
        >
          {{ content.hero.cta }}
          <svg
            class="w-4 ms-3 h-auto group-hover:translate-x-1 transition-all duration-100"
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
        </a>
      </div>
    </div>
  </section>

  <section class="ccfv-intro | pt-4 lg:py-32">
    <div
      class="lg:max-w-screen-lg | grid grid-cols-12 | items-stretch | gap-y-2 lg:gap-8 | p-8 lg:p-0 lg:mx-auto"
    >
      <div
        class="col-span-12 lg:col-span-5 text-center | flex items-center justify-center | lg:px-8 lg:py-14 | lg:border-4 lg:border-ccfv-blue"
      >
        <img
          class="lg:w-56 w-32 max-w-full h-auto"
          src="/img/ccfv-icon.svg"
          alt="CCfV Logo Framed"
        />
      </div>

      <div class="col-span-12 lg:col-span-7 py-6 lg:p-0">
        <h2
          class="font-display text-3xl lg:text-4xl text-ccfv-blue font-bold mb-3"
        >
          {{ content.intro.title }}
        </h2>
        <p class="text-xl max-w-prose" v-html="content.intro.body"></p>
      </div>
    </div>
  </section>

  <section class="ccfv-value-prop | p-8 py-12 lg:py-32 | bg-neutral-50">
    <div class="container max-w-screen-xl mx-auto grid grid-cols-12 gap-4">
      <div class="col-span-12">
        <h2
          class="text-3xl lg:text-4xl font-bold font-display mb-3 lg:text-center text-ccfv-blue"
        >
          {{ content.valueProp.title }}
        </h2>
      </div>
      <div
        class="col-span-12 lg:col-span-4 | p-4 lg:p-10"
        v-for="card in content.valueProp.cards"
      >
        <img
          :src="'/img/'+card.icon"
          :alt="card.title"
          class="w-24 h-auto mb-4"
        />
        <h3 class="text-2xl font-bold text-ccfv-blue mb-4">{{ card.title }}</h3>
        <p class="text-xl">
          {{ card.body }}
        </p>
      </div>
    </div>
  </section>

  <section class="ccfv-services | py-12 lg:py-32 ps-8 bg-white overflow-visible">
   
    <div class="max-w-screen | flex gap-x-8 | place-items-center | mb-5 lg:mb-10 ">
     
      <div class="xl:ms-auto">
        <h2
          class="font-sans text-3xl lg:text-4xl font-bold lg:text-end text-ccfv-blue"
        >
          {{ content.services.title }}
        </h2>
      </div>
      <div class="lg:px-12 flex ms-auto xl:ms-0 xl:me-auto">
        <span role="button" class="ccfv-services--swiper-nav-previous | border-ccfv-blue border-4 rounded-full | bg-white hover:bg-ccfv-orange active:bg-ccfv-gold  | p-3 mx-3 | transition-all duration-75 | .swiper-button-disabled:opacity-80 | group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:stroke-white stroke-ccfv-blue">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </span>
        <span role="button" class="ccfv-services--swiper-nav-next | border-ccfv-blue border-4 rounded-full | bg-white hover:bg-ccfv-orange active:bg-ccfv-gold  | p-3 mx-3 | transition-all duration-75 | group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:stroke-white stroke-ccfv-blue">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>

        </span>
      </div>
    </div>
    <div
      class="w-full mx-auto overflow-visible | pb-6 lg:pb-32 | grid grid-cols-12 lg:gap-12"
    >
      <div
        class="hidden lg:block | my-auto px-0 2xl:px-10 | col-span-12 lg:col-span-2 xl:col-span-3 overflow-visible | pointer-events-none user-select-none"
      >
        <img
          class="w-[32rem] max-w-[420px] translate-x-10 -mt-4 2xl:translate-x-40 2xl:ms-auto "
          src="/img/ccfv-icon.svg"
          alt="CCfV Services Background"
        />
      </div>
      <div
        class="container overflow-visible col-span-12 lg:col-span-10 xl:col-span-9"
      >
        <swiper-container
          :slides-per-view="4"
          :space-between="swiperParams.spaceBetween"
          :centered-slides="false"
          :pagination="false"
          :navigation="content.services.navigation"
          :breakpoints="swiperParams.breakpoints"
        >
          <swiper-slide
            v-for="card in content.services.cards"
            class="row-span-1"
          >
            <Card
              :title="card.title"
              :body="card.body"
              :cta="card.cta"
              :link="card.link"
              class="h-full"
            ></Card>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>

  <section class="ccfv-join-us">
    <div class="w-full mx-auto grid grid-cols-12 gap-0">
      <div
        class="col-span-12 xl:col-span-6 | py-12 p-8 lg:p-12 lg:py-32 | bg-ccfv-blue |"
      >
        <div class="max-w-prose mx-auto">
          <h2
            class="text-3xl lg:text-4xl text-white font-bold font-display mb-5 lg:mb-10"
          >
            {{ content.joinUs.title }}
          </h2>
          <p class="lg:text-xl xl:text-2xl text-white font-light mb-5">
            {{ content.joinUs.body }}
          </p>
          <a
            :href="content.joinUs.link"
            type="button"
            class="py-3 px-4 mt-2 lg:mt-8 inline-flex justify-center items-center gap-2 rounded-none border-4 border-white font-semibold text-white hover:text-white hover:bg-ccfv-orange hover:border-white focus:outline-none transition-all text-2xl"
          >
            {{ content.joinUs.cta }}
          </a>
        </div>
      </div>
      <div
        class="col-span-12 xl:col-span-6 | grid grid-cols-12 | items-center | order-first lg:order-last | py-12 ps-8 lg:pb-24 lg:pt-24 lg:px-16  | bg-ccfv-gold overflow-hidden"
      >
        <div class="col-span-6 lg:col-span-4 | mb-5 lg:mb-10">
          <h2
            class="text-3xl lg:text-4xl text-ccfv-blue font-bold font-display "
          >
            Latest News
          </h2>
        </div>
        <div class="col-span-6 xl:col-span-8 | mb-5 lg:mb-10 ms-auto lg:ms-0 | flex items-start">
        <!-- slider nav -->
          <span role="button" class="ccfv-posts--swiper-nav-previous | border-ccfv-blue border-4 rounded-full | bg-white hover:bg-ccfv-orange active:bg-ccfv-gold  | p-3 mx-3 | transition-all duration-75 | group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:stroke-white stroke-ccfv-blue">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </span>
          <span role="button" class="ccfv-posts--swiper-nav-next | border-ccfv-blue border-4 rounded-full | bg-white hover:bg-ccfv-orange active:bg-ccfv-gold  | p-3 mx-3 | transition-all duration-75 | group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:stroke-white stroke-ccfv-blue">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>

          </span>
        </div>
        <div class="col-span-12 overflow-visible | pb-6 lg:pb-0">
          <swiper-container
            :slides-per-view="1.5"
            :space-between="swiperParams.spaceBetween"
            :centered-slides="false"
            :pagination="false"
            :breakpoints="swiperParams.breakpoints_half"
            :navigation="post_navigation"
          >
            <swiper-slide v-for="card in posts" class="row-span-1">
              <Card
                :title="card.title.rendered"
                :body="card.excerpt.rendered.split('Read More')[0]"
                cta="Read More"
                :link="card.link"
                class="h-full"
              ></Card>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
@keyframes background-scroll {
  from {
    background-position: top center;
  }
  to {
    background-position: bottom right;
  }
}

section.ccfv-hero {
  background-image: url("/img/hero-placeholder-particles.webp");
  background-size: cover;
  /* background-position: top right; */
  background-repeat: no-repeat;
  animation: background-scroll 30s linear infinite alternate;
}

.swiper-container {
  height: 100%;
  max-height: 100vw;

  min-height: 0;
  min-width: 0;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
}

swiper-container {
  display: grid;
  overflow: visible;
}

swiper-container swiper-slide {
  max-width: 100%;
  align-self: stretch;
}
</style>
