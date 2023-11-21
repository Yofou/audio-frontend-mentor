<script setup lang="ts">
  import CategoryLayout from '~/components/layouts/CategoryLayout';
  import { Product } from "~/components/sections/category/Product";
</script>

<template>
  <CategoryLayout name="speakers">
    <Product
      name="ZX9 SPEAKER"
      description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
      src="/category-zx9.png"
      :isNewProduct="true"
      :reverse="false"
    />

    <Product
      name="ZX7 SPEAKER"
      description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
      src="/category-zx7.png"
      :isNewProduct="false"
      :reverse="true"
    />
  </CategoryLayout>
</template>
