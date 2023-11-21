<script setup lang="ts">
import CategoryLayout from "~/components/layouts/CategoryLayout";
import { Product } from "~/components/sections/category/Product";
</script>

<template>
  <CategoryLayout name="headphones">
    <Product
      name="XX99 Mark II Headphones"
      description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      src="/category-xx99-mark-2.png"
      :isNewProduct="true"
      :reverse="false"
      to="/products/c1590e9f-c0e9-4ab1-88c7-edaa37b16589"
    />

    <Product
      name="XX99 Mark I Headphones"
      description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      src="/category-xx99-mark-1.png"
      :isNewProduct="false"
      :reverse="true"
    />

    <Product
      name="XX59 Headphones"
      description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
      src="/category-xx59.png"
      :isNewProduct="false"
      :reverse="false"
    />
  </CategoryLayout>
</template>
