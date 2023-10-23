export const Testomony = defineComponent(
  () => {
    return () => {
      return (
        <section class="max-w-[70rem] w-full justify-self-center flex mt-[12.5rem] justify-between items-center">
          <div class="flex flex-col gap-8 max-w-[27rem]">
            <h2 class="font-heading-2 uppercase text-black-pure">
              Bringing you the <span class="text-orange-600">best</span> audio gear
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

          <img src="/some-dude.png" alt="" />
        </section>
      );
    };
  },
  {
    name: "Testomony",
  }
);
