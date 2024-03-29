import { TransparentButton } from "~/components/form/Button";

export const PremiumProducts = defineComponent(
  () => {
    return () => {
      return (
        <section class="w-full max-w-[70rem] justify-self-center">
          <div class="w-full h-[35rem] sm:h-[45rem] md:h-[35rem] bg-orange-600 rounded-[.5rem] mt-[7.5rem] sm:mt-24 md:mt-[10.5rem] [background-image:url(/zx9-mobile.png)] sm:[background-image:url(/mobile-zx9.png)] md:[background-image:url(/zx9-speaker.png)] [background-position:50%_0.25rem] md:[background-position:unset] flex flex-col items-center md:items-end md:pr-[5.9rem] pt-[18rem] pb-[3.84rem] bg-no-repeat sm:pt-[22rem] md:py-[8.3rem]">
            <div class="flex flex-col px-6 w-full max-w-[21.8rem] items-center text-center md:text-start md:items-start">
              <h2 class="font-heading-3 sm:font-heading-1 sm:leading-[3.625rem] md:leading-[normal] text-white-pure">
                ZX9 SPEAKER
              </h2>
              <p class="font-body tracking-[normal] text-white-pure/75 mt-[1.5rem]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <TransparentButton
                class="mt-6 sm:mt-[2.5rem] bg-black-pure text-white-pure hover:bg-black-pure/0 hover:text-black-pure"
                to="/products/e11a6fdb-3374-49c8-a702-1793005de8e0"
              >
                See Product
              </TransparentButton>
            </div>
          </div>

          <div class="w-full rounded-[.5rem] px-6 sm:px-[3.89rem] md:px-[5.9rem] py-[6.3rem] min-h-[20rem] mt-6 sm:mt-12 bg-white-600 [background-image:url(/zx7-mobile.png)] sm:[background-image:url(/mobile-zx7.png)] md:[background-image:url(/zx7-speaker.png)] bg-no-repeat bg-cover">
            <div class="flex flex-col gap-8 items-start">
              <h2 class="font-heading-4 leading-normal">ZX7 SPEAKER</h2>
              <TransparentButton to="/products/5e3eba61-21e1-401b-9f6a-834358f2ae39">
                See Product
              </TransparentButton>
            </div>
          </div>

          <div class="flex flex-col sm:grid sm:grid-cols-2 gap-[.69rem] md:gap-[1.88rem] mt-6 sm:mt-12">
            <picture>
              <source media="(min-width: 768px)" srcset="/yx1-earphones.png" />
              <img
                class="w-full h-[12.5rem] sm:h-full object-cover rounded-[.5rem]"
                src="/yx1-mobile.png"
                alt=""
              />
            </picture>

            <div class="w-full rounded-[.5rem] bg-white-600 h-[12.5rem] sm:h-[20rem] px-[1.5rem] sm:px-[2.56rem] md:px-[5.9rem] py-[2.56rem] sm:py-[6.3rem] flex flex-col gap-8 items-start">
              <h2 class="font-heading-4 leading-normal">YX1 EARPHONES</h2>
              <TransparentButton to="/products/8e3c7c8b-2764-4cbc-93c2-b42f9f65c465">
                See Product
              </TransparentButton>
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
