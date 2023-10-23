import type { SlotsType } from "vue";
import { Caret } from "~/components/icons/Caret";
import { ProductShadow } from "~/components/icons/ProductShadow";

export const ItemProduct = defineComponent(
  (props, context) => {
    return () => {
      return (
        <div class="relative w-[21.875rem] h-[12.75rem] bg-white-600 rounded-[.5rem] flex flex-col items-center">
          <img
            class="w-[7rem] absolute  bottom-[7.75rem] left-1/2 -translate-x-1/2"
            src={props.src}
            alt=""
          />
          <ProductShadow />
          
          <h2 class="uppercase font-heading-6 text-black-pure mt-[7.25rem]">
            {context.slots.default({})}
          </h2>
          <a
          class="mt-4 flex gap-[.8rem] font-bold after:contents after:absolute after:inset-0 hover:text-orange-600 transition-colors items-center text-overline tracking-[.0625rem] uppercase text-black-pure/50"
            href={props.href}
          >
            shop <Caret />
          </a>
        </div>
      );
    };
  },
  {
    props: {
      src: String,
      href: String,
    },
    name: "ItemProduct",
    slots: Object as SlotsType<{ default: {} }>,
    inheritAttrs: true,
  }
);

export const ItemShowcase = defineComponent(
  () => {
    return () => {
      return (
        <section class="max-w-[70rem] flex gap-[1.88rem] justify-self-center mt-[10.5rem]">
          <ItemProduct src="/showcase-headphones.png" href="/">
            Headphones
          </ItemProduct>
          <ItemProduct src="/showcase-speakers.png" href="/">
            Speakers
          </ItemProduct>
          <ItemProduct src="/showcase-earphones.png" href="/">
            Earphones
          </ItemProduct>
        </section>
      );
    };
  },
  {
    name: "ItemShowcase",
  }
);
