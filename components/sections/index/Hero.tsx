import { OrangeButton } from "~/components/form/Button";
import { Nav } from "../shared/Nav";

export const Hero = defineComponent(
  () => {
    return () => (
      <section class="bg-[#0e0e0e] overflow-hidden isolate min-h-[45.5625rem] grid grid-cols-1 grid-rows-[max-content,1fr]">
        <Nav />

        <div class="w-full grid-cols-1 max-w-[70rem] justify-self-center h-full relative flex">
          <section class="flex flex-col self-center max-w-[24rem] gap-4">
            <h2 class="font-overline text-white-pure/40">NEW PRODUCT</h2>
            <h3 class="font-heading-1 text-white-pure font-bold leading-[3.6rem]">
              XX99 Mark II Headphones
            </h3>

            <p class="font-body tracking-[normal] text-white-pure/75">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <OrangeButton class="w-max">See Product</OrangeButton>
          </section>

          <img
            class="absolute top-1/2 right-0 w-[708px] translate-y-[-45%] translate-x-[5%] z-[-10]"
            src="/hero-headphones.png"
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
