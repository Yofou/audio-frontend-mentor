<script setup lang="ts">
import CategoryLayout from "~/components/layouts/CategoryLayout";
import { Product } from "~/components/sections/category/Product";
</script>

<template>
  <CategoryLayout name="earphones">
    <Product
      name="YX1 WIRELESS EARPHONES"
      description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      src="/category-yx1.png"
      :isNewProduct="true"
      :reverse="false"
      to="/products/8e3c7c8b-2764-4cbc-93c2-b42f9f65c465"
    />
  </CategoryLayout>
</template>
