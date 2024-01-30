<script setup>
import CheckoutLayout from "~/components/layouts/CheckoutLayout";
import { CheckoutForm } from "~/components/sections/checkout/Form";
import { CheckoutSummary } from "~/components/sections/checkout/Summary";
import { Model } from "~/components/sections/checkout/Model";

const isModelOpen = ref(false)

const onCheckoutSuccess = () => {
  isModelOpen.value = true
}
</script>

<template>
  <CheckoutLayout>
    <button
      class="text-left mt-[4rem] w-full font-body text-black-pure/50"
      @click="$router.back()"
    >
      Go Back
    </button>

    <div class="w-full mt-[2.38rem] gap-[1.88rem] grid grid-cols-1 md:grid-cols-[minmax(0,45rem),21rem]">
      <CheckoutForm @success="onCheckoutSuccess" />
      <CheckoutSummary />
    </div>
    
    <Model v-if="isModelOpen" v-model="isModelOpen" />
  </CheckoutLayout>
</template>
