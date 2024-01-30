import { OrangeButton } from "~/components/form/Button";
import { NumberInput } from "~/components/form/Input";
import { currencyFormatter } from "~/utils/currency";
import { useCart } from "~/utils/stores/cart";

type ProductShowcaseProps = {
  product: Product
}

export const ProductShowcase = defineComponent((props: ProductShowcaseProps) => {
  const price = computed(() => currencyFormatter.format(props.product.price))
  const quantity = ref(1)
  const cartStore = useCart()

  const handleAddToCart = () => {
    const id = props.product.id
    if (quantity.value > 0) {
      cartStore.updateProduct(id, quantity.value)
    }
  }

  return () => {
    return <section class="w-full px-10 md:px-0 mt-[7.5rem] md:mt-40 max-w-[69rem] justify-self-center items-center flex flex-col md:grid grid-cols-[minmax(0,33.75rem),1fr] gap-[3.25rem] md:gap-[7.81rem]">
      <div class="w-full md:max-w-[33.75rem] h-[22rem] md:h-[35rem] bg-white-600 rounded-[.5rem] grid grid-cols-1 grid-rows-1">
        <img class="w-full h-full object-contain md:object-cover place-self-center" src={props.product.img} alt="" />
      </div>
      <div class="flex flex-col gap-6 md:gap-8">
        {props.product.isNewProduct && <h2 class="font-overline text-orange-600 uppercase -mt-4">New Product</h2>}
        <h2 class="font-heading-2 font-bold leading-[2.27rem] uppercase flex flex-wrap gap-[.5ch]">
          <span>{props.product.title}</span> 
          <span>{props.product.category}</span>
        </h2>
        <p class="w-full font-body font-medium text-black-pure/50">{props.product.description}</p>
        <p class="font-heading-6 font-bold uppercase text-black-pure">{price.value}</p>

        <div class="flex gap-4 mt-2 md:mt-4 items-center">
          <NumberInput class="h-full" v-model={quantity.value} />
          <OrangeButton type="button" onClick={handleAddToCart}>ADD TO CART</OrangeButton>
        </div>
      </div>
    </section>
  }
}, {
  name: 'ProductShowcase',
  props: ['product']
})
