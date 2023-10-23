<script setup lang="tsx">
  import { Hero } from '~/components/sections/index/Hero'
  import { ItemShowcase } from '~/components/sections/index/ItemShowcase';
  import { PremiumProducts } from '~/components/sections/index/PremiumProducts';
  import { Testomony } from '~/components/sections/shared/Testomony';
</script>

<template>
  <div class="w-full grid min-h-screen grid-cols-1 auto-rows-max pb-[12.5rem]">
    <Hero />
    <ItemShowcase />
    <PremiumProducts />
    <Testomony />
  </div>
</template>
