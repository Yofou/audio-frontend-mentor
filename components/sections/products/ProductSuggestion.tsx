import { OrangeButton } from "~/components/form/Button";

type ProductSuggestionItemProps = { product: Product };
export const ProductSuggestionItem = defineComponent(
  (props: ProductSuggestionItemProps) => {
    return () => (
      <div>
        <img class="w-[21.8rem] h-[19.8rem]" src={props.product.img} alt="" />
        <h3>{props.product.title}</h3>

        <OrangeButton>SEE PRODUCT</OrangeButton>
      </div>
    );
  },
  {
    name: "ProductSuggestion",
    props: ["product"],
  }
);

type ProductSuggestionProps = { currentProductId: string };
export const ProductSuggestion = defineComponent(
  (props: ProductSuggestionProps) => {
    const filteredProducts = new Map(products);
    filteredProducts.delete(props.currentProductId);

    const suggestions = ref<Product[]>([]);
    onMounted(() => {
      for (let index = 0; index < 3; index++) {
        const keys = [...filteredProducts.values()];
        const product = keys[Math.floor(Math.random() * keys.length)];
        if (product) {
          filteredProducts.delete(product.id); // dispose of key
          suggestions.value.push(product);
        }
      }
    });

    return () => {
      return (
        <section class="max-w-[69rem] w-full justify-self-center mt-40 flex flex-col items-center gap-16">
          <h2 class="font-heading-5 md:font-heading-3">YOU MAY ALSO LIKE</h2>
          <div class="grid w-full px-6 md:px-0 auto-rows-max grid-cols-1 md:grid-cols-[repeat(3,minmax(0,21.8rem))] gap-14 md:gap-8">
            {suggestions.value.map((product) => {
              return (
                <div class="flex flex-col items-center">
                  <div class="w-full bg-white-600">
                    <img
                      class="w-full h-[7.5rem] md:h-[19.8rem] object-contain md:object-cover rounded-[.5rem]"
                      src={product.img}
                      alt=""
                    />
                  </div>
                  <h3 class="mt-8 sm:mt-10 font-heading-5 h-full">
                    {product.title}
                  </h3>
                  <OrangeButton to={`/products/${product.id}`} class="mt-8">
                    SEE PRODUCT
                  </OrangeButton>
                </div>
              );
            })}
          </div>
        </section>
      );
    };
  },
  {
    name: "ProductSuggestion",
    props: ["currentProductId"],
  }
);
