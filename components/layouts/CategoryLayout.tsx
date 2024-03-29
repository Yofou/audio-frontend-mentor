import type { SlotsType } from "vue"
import { Footer } from "../sections/shared/Footer"
import { ItemShowcase } from "../sections/index/ItemShowcase"
import { Testimony } from "../sections/shared/Testimony"
import { Nav } from "../sections/shared/Nav"

const CategoryNav = defineComponent((props) => {
  return () => <section class="w-full bg-black-pure min-h-[21rem] flex flex-col items-center">
    <Nav />
    <h2 class="font-heading-2 uppercase text-white-pure mt-[6.12rem]">{props.name}</h2> 
  </section>
}, {
  name: 'CategoryNav',
  props: ["name"]
})

const CategoryLayout = defineComponent((props, context) => {
  return () => <div class="w-full grid min-h-screen grid-cols-1 auto-rows-max bg-white-300">
  <CategoryNav name={props.name} />
    {context.slots.default({})} 

    <ItemShowcase class="mt-[10.75rem] md:mt-60 px-10 md:px-0" />
    <Testimony class="md:mt-40 px-10 md:px-0" />
    <Footer class="md:mt-40 px-10 md:px-0" />
  </div>
}, {
  name: 'CategoryLayout',
  slots: Object as SlotsType<{ default: {} }>,
  props: ['name']
})

export default CategoryLayout
