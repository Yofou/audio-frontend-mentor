import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import { computed, defineComponent } from "vue";
import { OrangeButton } from "~/components/form/Button";
import { CheckoutTickIcon } from "~/components/icons/CheckoutTick";
import { useCart } from "~/utils/stores/cart";
import { onClickOutside, onKeyStroke } from "@vueuse/core";

export const Model = defineComponent(
  (props, ctx) => {
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        ctx.emit("update:modelValue", value);
      },
    });

    const cartStore = useCart();
    const products = computed(() => {
      return [...cartStore.inCart.entries()].map(([id, quantity]) => {
        return {
          product: getProductById(id),
          quantity,
        };
      });
    });

    const firstProduct = computed(() => {
      return products.value[0];
    });

    const firstProductPrice = computed(() => {
      return currencyFormatter.format(firstProduct.value.product?.price ?? 0);
    });

    const otherProducts = computed(() => {
      return Math.max(0, products.value.length - 1);
    });

    const SHIPPING_COST = 50;
    const _totalPrice = computed(() => {
      const value = products.value.reduce((total, current) => {
        return total + current.quantity * (current.product?.price ?? 0);
      }, 0);

      return value;
    });

    const _vat = computed(() => _totalPrice.value * 0.2);
    const grandTotalPrice = computed(() => {
      return currencyFormatter.format(
        SHIPPING_COST + _totalPrice.value + _vat.value
      );
    });

    const modelElm = ref<HTMLElement>();
    const { activate, deactivate } = useFocusTrap(modelElm);

    onKeyStroke("Escape", () => {
      isOpen.value = false;
    });

    onClickOutside(modelElm, () => {
      isOpen.value = false;
    });

    onMounted(() => {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0 });
      nextTick(activate);
    });

    onUnmounted(() => {
      document.body.style.overflow = "";
      deactivate();
    });

    return () => {
      return (
        <section class="absolute top-0 left-0 w-full overflow-auto inset-0 min-h-screen bg-black-pure/40 grid pt-[14rem] px-6 sm:px-0 sm:pt-[13.88rem]">
          <div
            ref={modelElm}
            class="justify-self-center z-[9999] flex flex-col self-start rounded-[.5rem] max-w-[33.75rem] bg-white-pure w-full p-8 sm:p-12"
          >
            <CheckoutTickIcon />
            <h2 class="mt-6 sm:mt-8 font-heading-3 text-[2rem] text-black-pure">
              Thank you for your order
            </h2>
            <p class="mt-4 sm:mt-6 body text-black-pure/50">
              You will receive an email confirmation shortly.
            </p>

            <div class="w-full rounded-[.5rem] bg-white-600 grid grid-cols-1 sm:grid-cols-[1fr,44%] overflow-hidden mt-6 sm:mt-8">
              <div class="flex flex-col gap-3 p-6">
                <div class="grid grid-cols-[max-content,1fr,max-content] gap-4">
                  <img
                    class="w-16 h-16 object-contain"
                    src={firstProduct.value.product?.assets.xSmall}
                  />
                  <div class="flex flex-col">
                    <p class="body text-black-pure font-bold">
                      {firstProduct.value.product?.shortTitle}
                    </p>
                    <p class="font-overline font-bold tracking-[normal] text-black-pure/50">
                      {firstProductPrice.value}
                    </p>
                  </div>
                  <p class="self-start font-bold body text-black-pure/50">
                    <span>x</span>
                    <span>{firstProduct.value.quantity}</span>
                  </p>
                </div>

                <div class="bg-black-pure/[0.08] w-full h-[1px]" />

                <p class="text-center text-[.75rem] font-manrope tracking-tight font-bold text-black-pure/50">
                  and {otherProducts.value} other item (s)
                </p>
              </div>
              <div class="bg-black-pure flex flex-col justify-center gap-2 px-6 sm:px-8 py-4 sm:py-[2.5rem] text-white-pure">
                <h3 class="text-white-pure/50 body uppercase">Grand total</h3>
                <p class="font-heading-6 tracking-[normal]">
                  {grandTotalPrice.value}
                </p>
              </div>
            </div>

            <OrangeButton class="text-center mt-6 sm:mt-[2.88rem]">
              Back to home
            </OrangeButton>
          </div>
        </section>
      );
    };
  },
  {
    name: "Model",
    props: ["modelValue"],
    emits: ["update:modelValue"],
  }
);
