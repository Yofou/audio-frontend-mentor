export const Testimony = defineComponent(
  () => {
    return () => {
      return (
        <section class="max-w-[70rem] w-full justify-self-center flex flex-col-reverse md:gap-[7.8rem] md:flex-row mt-[6rem] md:mt-[12.5rem] justify-between items-center">
          <div class="flex flex-col gap-8 max-w-[35.8rem] md:max-w-[27.8rem] text-center md:text-left">
            <h2 class="font-heading-2 uppercase text-black-pure">
              Bringing you the <span class="text-orange-600">best</span> audio
              gear
            </h2>
            <p class="font-body tracking-[normal] text-black-pure/50">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          <picture>
            <source media="(min-width: 768px)" srcset="/some-dude.png" />
            <img
              class="w-full object-cover rounded-[.5rem] h-[18.75rem] md:w-[31.5rem] md:h-[36.75rem] mb-[3.94rem] md:mb-0"
              src="/some-dude-mobile.png"
              alt=""
            />
          </picture>
        </section>
      );
    };
  },
  {
    name: "Testomony",
  }
);
