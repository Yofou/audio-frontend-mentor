import { twMerge as twm } from "tailwind-merge"
import { OrangeButton } from "~/components/form/Button"

export type ProductType = {
  isNewProduct?: boolean,
  name: string,
  description: string,
  to?: string,
  reverse?: boolean,
  src: string
}

export const Product = defineComponent((props: ProductType) => {
    return () => <section class={twm("w-full px-10 md:px-0 mt-[7.5rem] md:mt-40 max-w-[69rem] justify-self-center items-center flex flex-col md:grid grid-cols-[minmax(0,1fr),max-content] gap-[3.25rem] md:gap-[7.81rem]", props.reverse ? 'grid-cols-[max-content,minmax(0,1fr)]' : '')}>
    <div class="w-full md:max-w-[33.75rem] h-[22rem] md:h-[35rem] bg-white-600 rounded-[.5rem] grid grid-cols-1 grid-rows-1">
    <img class="w-full h-full object-contain md:object-cover place-self-center" src={props.src} alt="" />
    </div>

    <div class={twm("flex flex-col items-center text-center md:text-start md:items-start md:max-w-[27rem]", props.reverse ? 'md:-order-1' : '')}>
      {props.isNewProduct && <h2 class="font-overline text-orange-600 uppercase">New Product</h2>}
      <h3 class="mt-4 font-heading-2 text-black-pure uppercase">{props.name}</h3>
      <p class="mt-8 font-body text-black-pure/50">{props.description}</p>
      <OrangeButton class="mt-6 md:mt-10" to={props.to}>See Product</OrangeButton>
    </div>
  </section>
}, {
  name: 'Product',
  props: ["isNewProduct", "name", "description", "to", "reverse", "src"]
})
