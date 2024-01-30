import { defineComponent, type SlotsType } from "vue"
import { Footer } from "../sections/shared/Footer"
import { Nav } from "../sections/shared/Nav"

const CheckoutNav = defineComponent(() => {
  return () => <section class="w-full bg-black-pure flex flex-col items-center">
    <Nav />
  </section>
}, {
  name: 'CheckoutNav',
})

const CheckoutLayout = defineComponent((_, context) => {
  return () => <div class="w-full grid min-h-screen grid-cols-1 auto-rows-max bg-white-300">
    <CheckoutNav />
    <div class="flex-col w-full max-w-[69rem] justify-self-center px-6 lg:px-0">
      {context.slots.default({})} 
    </div>

    <Footer class="md:mt-40 px-10 md:px-0" />
  </div>
}, {
  name: 'CheckoutLayout',
  slots: Object as SlotsType<{ default: {} }>,
})

export default CheckoutLayout
