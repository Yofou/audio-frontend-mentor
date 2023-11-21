import type { SlotsType } from "vue"
import { Footer } from "../sections/shared/Footer"
import { ItemShowcase } from "../sections/index/ItemShowcase"
import { Testimony } from "../sections/shared/Testimony"
import { Nav } from "../sections/shared/Nav"

const ProductNav = defineComponent(() => {
  return () => <section class="w-full bg-black-pure flex flex-col items-center">
    <Nav />
  </section>
}, {
  name: 'ProductNav',
})

const ProductLayout = defineComponent((_, context) => {
  return () => <div class="w-full grid min-h-screen grid-cols-1 auto-rows-max bg-white-300">
    <ProductNav />
    {context.slots.default({})} 

    <ItemShowcase class="mt-[10.75rem] md:mt-60 px-10 md:px-0" />
    <Testimony class="md:mt-40 px-10 md:px-0" />
    <Footer class="md:mt-40 px-10 md:px-0" />
  </div>
}, {
name: 'ProductLayout',
  slots: Object as SlotsType<{ default: {} }>,
})

export default ProductLayout
