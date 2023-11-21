import type { SlotsType } from "vue";
import { Logo } from "~/components/icons/Logo";
import { ItemShowcase } from "../index/ItemShowcase";
import { onClickOutside, onKeyStroke, useWindowSize } from "@vueuse/core";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import { twMerge as twm } from "tailwind-merge";
import { NuxtLink } from "#components";
import { OrangeButton } from "~/components/form/Button";
import { NumberInput } from "~/components/form/Input";
import { Hamburger } from "~/components/icons/Hamburger";
import { Cart } from "~/components/icons/Cart";

export const NavLink = defineComponent(
  (props, context) => {
    return () => (
      <NuxtLink class="hover:text-orange-600 transition-colors" to={props.href}>
        {context.slots.default({})}
      </NuxtLink>
    );
  },
  {
    name: "NavLinks",
    inheritAttrs: true,
    slots: Object as SlotsType<{ default: {} }>,
  }
);

const currencyFormatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "usd",
  maximumSignificantDigits: 3,
});
type NavCartItemProps = {
  title: string;
  price: number;
  src: string;
  quantity?: number;
};

export const NavCartItem = defineComponent(
  (props: NavCartItemProps) => {
    const currencyFormatted = computed(() => {
      return currencyFormatter.format(props.price);
    });

    const quantity = ref(1);

    onMounted(() => {
      quantity.value = props.quantity ?? 1
    })

    return () => (
      <div class="w-full grid grid-cols-[max-content,1fr,max-content] gap-4 items-center">
        <div class="w-16 h-16 grid place-content-center rounded-[.5rem] bg-white-600">
          <img src={props.src} alt="" />
        </div>
        <div class="w-full flex flex-col">
          <h3 class="font-body text-black-pure font-bold">{props.title}</h3>
          <p class="font-overline text-black-pure/50 tracking-[unset] font-bold">{currencyFormatted.value}</p>
        </div>

        <NumberInput v-model={quantity.value} />
      </div>
    );
  },
  {
    name: "NavCartItem",
    props: ["title", "price", "src", "quantity"],
  }
);

export const NavCart = defineComponent(
  (_, context) => {
    const cartElm = ref<HTMLElement | undefined>();
    const { activate, deactivate } = useFocusTrap(cartElm);

    onKeyStroke("Escape", () => {
      context.emit("close");
    });

    onClickOutside(cartElm, () => {
      context.emit("close");
    });

    onMounted(() => {
      document.body.style.overflow = "hidden";
      nextTick(activate);
    });

    onUnmounted(() => {
      document.body.style.overflow = "";
      deactivate();
    });

    return () => (
      <section class="w-screen h-screen fixed top-0 left-0 bg-black-pure/40 grid">
        <div class="max-w-[70rem] w-full relative justify-self-center">
          <div
            ref={cartElm}
            class="w-full p-8 max-w-[23rem] bg-white-pure rounded-[.5rem] absolute top-[8rem] translate-x-1/2 sm:translate-x-0 right-1/2 sm:right-[2.44rem] "
          >
            <div class="w-full flex justify-between items-center">
              <h2 class="font-heading-6 uppercase">Cart</h2>
              <button class="font-body tracking-[none] text-black-pure/50 underline">
                Remove all
              </button>
            </div>

            <div class="mt-8 flex flex-col gap-6">
              <NavCartItem
                title={"title"}
                src={"/small/yx1.png"}
                price={10}
                quantity={10}
              />

              <NavCartItem
                title={"YX1"}
                src={"/small/yx1.png"}
                price={2999}
                quantity={10}
              />
            </div>

            <div class="w-full flex justify-between mt-8">
              <p class="uppercase text-black-pure/50 font-body tracking-[none]">
                total
              </p>
              <p class="font-heading-6 text-black-pure">$ 5,000</p>
            </div>

            <OrangeButton class="w-full mt-6">Checkout</OrangeButton>
          </div>
        </div>
      </section>
    );
  },
  {
    name: "NavCarts",
    emits: ["close"],
  }
);

export const Nav = defineComponent(
  (props: { class?: string }) => {
    const isOpen = ref(false);
    const isCartOpen = ref(false);
    const onToggle = () => {
      isOpen.value = !isOpen.value;
    };

    const onCartToggle = () => {
      isCartOpen.value = !isCartOpen.value;
    };

    const onCartClose = () => {
      isCartOpen.value = false;
    };

    const tabletContainerElm = ref(null);
    onClickOutside(tabletContainerElm, () => {
      isOpen.value = false;
    });

    onKeyStroke("Escape", () => {
      isOpen.value = false;
    });

    const { activate, deactivate } = useFocusTrap(tabletContainerElm);
    watch(isOpen, ($isOpen) => {
      if ($isOpen) {
        document.body.style.overflow = "hidden";
        nextTick(() => {
          activate();
        });
      } else {
        document.body.style.overflow = "";
        deactivate();
      }
    });

    const { width } = useWindowSize();
    watch(width, ($width) => {
      if ($width > 768) {
        isOpen.value = false;
      }
    });

    onUnmounted(() => {
      document.body.style.overflow = "";
    });

    return () => {
      return (
        <nav
          class={twm(
            "w-full px-[1.5rem] sm:px-[2.44rem] relative z-10 max-w-[70rem] justify-self-center justify-between py-[2.25rem] flex en items-center font-overline tracking-[0.125rem] font-bold",
            props.class
          )}
        >
          <div class="flex gap-[2.6rem]">
            <button onClick={onToggle} class="md:hidden">
              <Hamburger />
            </button>
            <Logo />
          </div>

          <div class="hidden md:flex gap-8 uppercase text-white-pure">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/category/headphones">Headphones</NavLink>
            <NavLink href="/category/speakers">Speaker</NavLink>
            <NavLink href="/category/earphones">Earphones</NavLink>
          </div>

          <button class="text-white-pure" onClick={onCartToggle}>
            <Cart />
          </button>

          <div class="absolute top-full left-0 right-0 mx-6 sm:mx-[2.48rem] h-[2px] bg-white-600/10 md:bg-white-600/20" />

          {isOpen.value && (
            <section class="w-screen h-screen overflow-auto fixed top-0 left-0 bg-black-pure/40">
              <div
                ref={tabletContainerElm}
                class="w-full bg-white-pure rounded-b-[.5rem]"
              >
                <div class="w-full flex justify-between bg-black-300 px-6 sm:px-[2.44rem] py-[calc(2.31rem-1px)] items-center">
                  <div class="flex gap-[2.6rem]">
                    <button onClick={onToggle} class="md:hidden">
                      <Hamburger />
                    </button>
                    <Logo />
                  </div>

                  <button class="text-white-pure">
                    <Cart />
                  </button>
                </div>
                <ItemShowcase class="mt-0 sm:mt-0 px-[2.5rem] pt-[6.75rem] pb-[4.19rem]" />
              </div>
            </section>
          )}

          {isCartOpen.value && <NavCart onClose={onCartClose} />}
        </nav>
      );
    };
  },
  {
    name: "Nav",
    props: ["class"],
  }
);
