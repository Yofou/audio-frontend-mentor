<template>
  <ProductLayout>
    <ProductShowcase :product="product" src="/category-xx99-mark-2.png" />
  </ProductLayout>
</template>

<script setup>
  import { getProductById } from '../../utils/products';
  import ProductLayout from '../../components/layouts/ProductsLayout'
  import { ProductShowcase } from '~/components/sections/products/ProductShowcase';
  const route = useRoute()

  const product = getProductById(route.params.id)
</script>
