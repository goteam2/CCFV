<script setup>

import links from '@/config/nav.js'
</script>
<template>
  <div class="ccfv-footer--about |  bg-ccfv-cyan | border-t-4 border-ccfv-orange">
    <div class="container mx-auto | grid grid-cols-12 |">
      <div class=" col-span-12 lg:col-span-6 | py-12 p-8 lg:p-12">
        <div class="max-w-prose">
          <h3 class="text-2xl lg:text-3xl font-bold font-display mb-3 lg:mb-3">Improving Health Through Vaccine Research</h3>
          <p class="lg:text-md xl:text-lg font-light mb-5">
            The Canadian Center for Vaccinology (CCfV) in Halifax, Nova Scotia, is an integrated collaborative interdisciplinary vaccine research team committed to excellent research. CCfV unites the biomedical and clinical sciences with the social sciences and humanities to effectively span the research continuum from basic discovery to translation into useful vaccines to prevent disease in humans and to change population and public health outcomes.
          </p>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6 | py-12 2xl:p-12 | flex items-center justify-center">
        <div class="w-full 2xl:max-w-prose flex ">
  
          <a class="2xl:ms-auto hidden lg:flex" href="#">
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
              class="ccfv-logo | w-32 xl:mx-12 my-12 h-auto hover:opacity-80"
              src="/img/nsh.png"
              alt="NSH Logo"
            />
          </a>
          </div>
      </div>
    </div>
  </div>
  <div class="ccfv-footer--main |  bg-ccfv-grey">
    <div class="container mx-auto | grid grid-cols-12 | py-12">
      
      <div class="col-span-12 lg:col-span-3  | xl:border-e-4 xl:border-white |  h-full | flex items-center">
        <img class="ccfv-logo | w-84 mx-auto  h-auto" src="/img/ccfv-logo-collaboration.svg" alt="CCfV Logo" />
      </div>
      <div class="col-span-12 lg:col-span-3 | p-12 | flex items-center justify-center | xl:border-e-4 xl:border-white">

        <ul class="list-none">
          <li class="mb-4 lg:my-4" v-for="link in links">
          <a :href="link.href" class="text-white hover:text-ccfv-orange text-lg font-bold">{{link.name}}</a>
          </li>
        </ul>
       
      </div>

      <div class="col-span-12 lg:col-span-6 | p-12 | flex items-center justify-center lg:justify-start |">
        <div class="w-full 2xl:pe-24">
          <h3 class="text-2xl lg:text-3xl font-bold text-white font-display mb-3 lg:mb-5"><span class="text-ccfv-gold">Sign up</span> to learn how you can help</h3>
          <!-- first name, last name, email, contact form -->
          <form name="newsletter-signup" id="newsletter-signup">
            <div class="grid grid-cols-12 gap-4 ">
              <div class="col-span-12 lg:col-span-6">
                <label for="first-name" class="text-white text-lg font-bold hidden">First Name</label>
                <input type="text" name="first-name" id="first-name" placeholder="First Name" class="w-full p-2 lg:py-3 focus:outline-ccfv-orange focus:ring-0" />
              </div>
              <div class="col-span-12 lg:col-span-6">
                <label for="last-name" class="text-white text-lg font-bold hidden">First Name</label>
                <input type="text" name="last-name" id="last-name"  placeholder="Last Name" class="w-full p-2 lg:py-3 focus:outline-ccfv-orange focus:ring-0" />
              </div>
              <div class="col-span-12">
                <label for="email" class="text-white text-lg font-bold hidden">First Name</label>
                <input type="text" name="email" id="email"  placeholder="Email" class="w-full p-2 lg:py-3 focus:outline-ccfv-orange focus:ring-0" />
              </div>
              <div class="col-span-12 lg:col-span-8 | grid grid-cols-12 | lg:pe-4">
                <input type="checkbox" name="consent" id="consent" class="mr-2 mt-1 col-span-3 lg:col-span-1 | focus:ring-0 focus:bg-ccfv-orange checked:bg-ccfv-orange hover:bg-ccfv-orange active:bg-ccfv-orange" />
                <label class="col-span-9 lg:col-span-11 text-white |  leading-relaxed">
                  I agree to receive future messages including information about continuing education, upcoming events, vaccine research, and other important news from the Canadian Center for Vaccinology. I will be able to unsubscribe at any time.
                </label>
              </div>
              <div class="col-span-12 lg:col-span-4 ">
                <button class="border-4 border-white text-white font-bold text-2xl px-4 py-2 lg:py-3 lg:px-6 | hover:bg-ccfv-orange | w-full | mx-auto my-2">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
