import { OrangeButton } from "~/components/form/Button";
import { Nav } from "../shared/Nav";
import { useDebounce, useWindowSize } from "@vueuse/core";
import { ClientOnly } from "#components";

export const Hero = defineComponent(
  () => {
    const { width } = useWindowSize();

    const src = useDebounce(
      computed(() => {
        if (width.value < 768) {
          return "/hero-headphones-mobile.png";
        }

        return "/hero-headphones.png";
      })
    );

    return () => {
      return (
        <section class="bg-[#0e0e0e] z-10 overflow-hidden min-h-[45.5625rem] w-full grid grid-cols-1 relative grid-rows-[max-content,1fr]">
          <Nav class="px-[1.5rem] sm:px-[2.44rem]" />

          <div class="w-full grid-cols-1 md:px-[2.44rem] max-w-[70rem] justify-self-center h-full md:relative grid">
            <section class="flex flex-col items-center md:items-start self-center left-0 text-center md:text-start justify-self-center md:justify-self-start">
              <h2 class="font-overline text-white-pure/40">NEW PRODUCT</h2>
              <h3 class="font-heading-3 sm:font-heading-1 uppercase text-white-pure mt-4 sm:mt-6 max-w-[24rem] font-bold leading-[2.5rem] sm:leading-[3.6rem]">
                XX99 Mark II Headphones
              </h3>

              <p class="font-body tracking-[normal] text-white-pure/75 mt-6 w-full px-6 sm:px-0 max-w-[21.8rem]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>

              <OrangeButton class="w-max self-center md:self-start mt-[1.75rem] sm:mt-10">
                See Product
              </OrangeButton>
            </section>

            <ClientOnly>
              <img
                class="absolute top-0 md:top-1/2 object-cover right-0 w-full h-full md:w-[708px] md:translate-y-[-45%] md:translate-x-[5%] z-[-10]"
                src={src.value}
                alt=""
              />
            </ClientOnly>
          </div>
        </section>
      );
    };
  },
  {
    name: "Hero",
  }
);
