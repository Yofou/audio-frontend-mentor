import { defineComponent } from "vue";
import { type Product } from "../../../utils/products";

type ProductGalleryProps = {
  product: Product
}

export const ProductGallery = defineComponent((props: ProductGalleryProps) => {
  return () => {
  return <section class="grid max-w-[69rem] px-10 md:px-0 gap-8 mt-[7.5rem] md:mt-40 justify-self-center grid-cols-1 grid-rows-[repeat(2,15rem),23rem] md:grid-cols-[1fr,minmax(0,39rem)] md:grid-rows-2">
      <img class="w-full h-full object-cover rounded-[.5rem]" src={props.product.assets.small[0]} alt="" />
      <img class="w-full h-full object-cover rounded-[.5rem]" src={props.product.assets.small[1]} alt="" />
      <img class="md:col-start-2 md:col-end-3 object-cover md:row-start-1 md:row-end-3 w-full h-full rounded-[.5rem]" src={props.product.assets.large} alt="" />
    </section>
  }
}, {
  name: 'ProductGallery',
  props: ['product']
})
