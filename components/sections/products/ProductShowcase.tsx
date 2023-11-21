import { OrangeButton } from "~/components/form/Button";
import { NumberInput } from "~/components/form/Input";

const currencyFormatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "usd",
  maximumSignificantDigits: 3,
});

type ProductShowcaseProps = {
  product: Product
  src: string
}

export const ProductShowcase = defineComponent((props: ProductShowcaseProps) => {
    const price = computed(() => currencyFormatter.format(props.product.price))
  const quantity = ref(0)

  return () => {
    return <section class="w-full px-10 md:px-0 mt-[7.5rem] md:mt-40 max-w-[69rem] justify-self-center items-center flex flex-col md:grid grid-cols-[max-content,minmax(0,1fr)] gap-[3.25rem] md:gap-[7.81rem]">
      <div class="w-full md:max-w-[33.75rem] h-[22rem] md:h-[35rem] bg-white-600 rounded-[.5rem] grid grid-cols-1 grid-rows-1">
        <img class="w-full h-full object-contain md:object-cover place-self-center" src={props.src} alt="" />
      </div>
      <div class="flex flex-col gap-8">
        {props.product.isNewProduct && <h2 class="font-overline text-orange-600 uppercase -mt-4">New Product</h2>}
        <h2 class="font-heading-2 font-bold leading-[2.27rem]">{props.product.title}</h2>
        <p class="w-full font-body font-medium text-black-pure/50">{props.product.description}</p>
        <p class="font-heading-6 font-bold uppercase text-black-pure">{price.value}</p>

        <div class="flex gap-4 mt-4 items-center">
          <NumberInput class="h-full" v-model={quantity.value} />
          <OrangeButton>ADD TO CART</OrangeButton>
        </div>
      </div>
    </section>
  }
}, {
  name: 'ProductShowcase',
  props: ['product', "src"]
})
