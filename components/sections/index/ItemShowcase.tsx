import type { SlotsType } from "vue";
import { Caret } from "~/components/icons/Caret";
import { ProductShadow } from "~/components/icons/ProductShadow";
import { twMerge as twm } from 'tailwind-merge'

export const ItemProduct = defineComponent(
  (props, context) => {
    return () => {
      return (
        <div class="relative w-full h-[10.31rem] md:h-[12.75rem] bg-white-600 rounded-[.5rem] flex flex-col items-center">
          <div class="absolute bottom-[7.75rem] left-1/2 -translate-x-1/2">
            <img
              class={twm("", props.imgClass)}
              src={props.src}
              alt=""
            />
            <ProductShadow />
          </div>
          

          <h2 class="uppercase font-heading-6 leading-[1rem] text-black-pure mt-[5.5rem] md:mt-[7.75rem]">
            {context.slots.default({})}
          </h2>
          <a
          class="mt-4 flex gap-[.8rem] font-subtitle leading-[normal] font-bold after:contents after:absolute after:z-[1] after:inset-0 hover:text-orange-600 transition-colors items-center text-overline tracking-[.0625rem] uppercase text-black-pure/50"
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
      imgClass: String
    },
    name: "ItemProduct",
    slots: Object as SlotsType<{ default: {} }>,
    inheritAttrs: true,
  }
);

export const ItemShowcase = defineComponent(
  (props) => {
    return () => {
      return (
        <section class={twm("max-w-[70rem] grid grid-cols-[repeat(3,minmax(0,21.875rem))] gap-[.63rem] md:gap-[1.88rem] justify-self-center mt-[10.5rem]", props.class)}>
          <ItemProduct imgClass="w-[4.9rem] md:w-[7.6rem]" src="/showcase-headphones.png" href="/">
            Headphones
          </ItemProduct>
          <ItemProduct imgClass="w-[5.25rem] md:w-[7.5rem]" src="/showcase-speakers.png" href="/">
            Speakers
          </ItemProduct>
          <ItemProduct imgClass="w-[6rem] md:w-[8.1rem]" src="/showcase-earphones.png" href="/">
            Earphones
          </ItemProduct>
        </section>
      );
    };
  },
  {
    name: "ItemShowcase",
    props: ["class"]
  }
);
