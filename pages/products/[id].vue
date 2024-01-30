<script setup>
import { getProductById } from "../../utils/products";
import ProductLayout from "~/components/layouts/ProductsLayout";
import { ProductShowcase } from "~/components/sections/products/ProductShowcase";
import { ProductFeatures } from "~/components/sections/products/ProductFeatures";
import { ProductGallery } from "~/components/sections/products/ProductGallery";
import { ProductSuggestion } from "~/components/sections/products/ProductSuggestion";
const route = useRoute();

const product = getProductById(route.params.id);
</script>

<template>
  <ProductLayout>
    <ProductShowcase :product="product" />
    <ProductFeatures :product="product" />
    <ProductGallery :product="product" />
    <ProductSuggestion :currentProductId="route.params.id" />
  </ProductLayout>
</template>
