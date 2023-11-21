<script setup lang="tsx">
  import { Hero } from '~/components/sections/index/Hero'
  import { ItemShowcase } from '~/components/sections/index/ItemShowcase';
  import { PremiumProducts } from '~/components/sections/index/PremiumProducts';
  import { Testimony } from '~/components/sections/shared/Testimony';
  import { Footer } from '~/components/sections/shared/Footer';
  import '@fontsource-variable/manrope';
</script>

<template>
  <div class="w-full grid min-h-screen grid-cols-1 auto-rows-max bg-white-300">
    <Hero />
    <ItemShowcase class="px-6 sm:px-[2.44rem]" />
    <PremiumProducts class="px-6 sm:px-[2.44rem]" />
    <Testimony class="px-6 sm:px-[2.44rem]" />
    <Footer />
  </div>
</template>
