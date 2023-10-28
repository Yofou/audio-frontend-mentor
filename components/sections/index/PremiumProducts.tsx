import { TransparentButton } from "~/components/form/Button";

export const PremiumProducts = defineComponent(
  () => {
    return () => {
      return (
        <section class="w-full max-w-[70rem] justify-self-center">
        <div class="w-full h-[45rem] md:h-[35rem] bg-orange-600 rounded-[.5rem] mt-24 md:mt-[10.5rem] [background-image:url(/mobile-zx9.png)] md:[background-image:url(/zx9-speaker.png)] [background-position:50%_0.25rem] md:[background-position:unset] flex flex-col items-center md:items-end md:pr-[5.9rem] pt-[22rem] md:py-[8.3rem]">
        <div class="flex flex-col w-full max-w-[21.8rem] items-center text-center md:text-start md:items-start">
        <h2 class="font-heading-1 leading-[3.625rem] md:leading-[normal] text-white-pure">
                ZX9 SPEAKER
              </h2>
              <p class="font-body tracking-[normal] text-white-pure/75 mt-[1.5rem]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <TransparentButton class="mt-[2.5rem] bg-black-pure text-white-pure hover:bg-black-pure/0 hover:text-black-pure">
                See Product
              </TransparentButton>
            </div>
          </div>

          <div class="w-full rounded-[.5rem] px-[3.89rem] md:px-[5.9rem] py-[6.3rem] min-h-[20rem] mt-12 bg-white-600 [background-image:url(/mobile-zx7.png)] md:[background-image:url(/zx7-speaker.png)] bg-no-repeat bg-cover">
            <div class="flex flex-col gap-8 items-start">
              <h2 class="font-heading-4 leading-normal">ZX7 SPEAKER</h2>
              <TransparentButton>See Product</TransparentButton>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-[.69rem] md:gap-[1.88rem] mt-12">
            <picture>
              <source media="(min-width: 768px)" srcset="/yx1-earphones.png" />
              <img class="h-full object-cover rounded-[.5rem]" src="/yx1-mobile.png" alt="" />
            </picture>

            <div class="w-full rounded-[.5rem] bg-white-600 h-[20rem] px-[2.56rem] md:px-[5.9rem] py-[6.3rem] flex flex-col gap-8 items-start">
              <h2 class="font-heading-4 leading-normal">YX1 EARPHONES</h2>
              <TransparentButton>See Product</TransparentButton>
            </div>
          </div>
        </section>
      );
    };
  },
  {
    name: "PremiumProducts",
  }
);
