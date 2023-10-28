import { OrangeButton } from "~/components/form/Button";
import { Nav } from "../shared/Nav";
import { useWindowSize } from "@vueuse/core";

export const Hero = defineComponent(
  () => {
    const { width } = useWindowSize()
    const src = computed(() => {
      if (width.value < 768) {
        return '/hero-headphones-mobile.png'
      }

      return '/hero-headphones.png'
    })
    return () => (
      <section class="bg-[#0e0e0e] z-10 overflow-hidden min-h-[45.5625rem] grid grid-cols-1 grid-rows-[max-content,1fr]">
        <Nav class="px-[2.44rem]" />

        <div class="w-full grid-cols-1 md:px-[2.44rem] max-w-[70rem] justify-self-center h-full relative grid">
          <section class="flex flex-col items-center md:items-start self-center left-0 text-center md:text-start justify-self-center md:justify-self-start">
            <h2 class="font-overline text-white-pure/40">NEW PRODUCT</h2>
            <h3 class="font-heading-1 uppercase text-white-pure mt-6 max-w-[24rem] font-bold leading-[3.6rem]">
              XX99 Mark II Headphones
            </h3>

            <p class="font-body tracking-[normal] text-white-pure/75 mt-6 max-w-[21.8rem]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <OrangeButton class="w-max self-center md:self-start mt-10">
              See Product
            </OrangeButton>
          </section>

            <img
            class="absolute top-1/2 md:mix-blend-normal right-1/2 md:right-0 w-full md:w-[708px] translate-x-1/2 translate-y-[-59%] md:translate-y-[-45%] md:translate-x-[5%] z-[-10]"
              src={src.value}
              alt=""
            />
        </div>
      </section>
    );
  },
  {
    name: "Hero",
  }
);
