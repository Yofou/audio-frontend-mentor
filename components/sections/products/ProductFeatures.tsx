import { defineComponent } from "vue";
import { type Product } from "../../../utils/products";

type ProductFeaturesProps = {
  product: Product;
};

export const ProductFeatures = defineComponent(
  (props: ProductFeaturesProps) => {
    return () => {
      return (
          <section class="grid w-full px-10 md:px-0 grid-rows-[max-content,max-content] grid-cols-1 md:grid-rows-1 md:grid-cols-[3fr,1fr] max-w-[69rem] justify-self-center mt-[5.5rem] md:mt-40 gap-[5.5rem] md:gap-[7.8rem]">
          <div>
            <h2 class="mb-8 font-heading-3 uppercase text-[2rem]">Features</h2>
            <p class="whitespace-pre-wrap font-body text-black-pure/50">{props.product.features}</p>
          </div>

          <div>
            <h2 class="mb-8 font-heading-3 uppercase text-[2rem]">In the box</h2>

            <div class="flex flex-col gap-2">
              {props.product?.inBox?.map(({ quantity, item }) => (
                <div class="flex gap-6 font-body tracking-[unset] leading-[unset]">
                <p class="text-orange-600">{quantity}<span>x</span></p>
                  <p class="text-black-pure/50">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
  },
  {
    name: "ProductFeatures",
    props: ["product"],
  }
);
