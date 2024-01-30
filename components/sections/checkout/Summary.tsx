import { OrangeButton } from "~/components/form/Button";
import { currencyFormatter } from "~/utils/currency";
import { useCart } from "~/utils/stores/cart";
import emitter from 'tiny-emitter/instance'

type CheckoutSummaryItemProps = {
  product: Product | undefined;
  quantity: number;
};

export const CheckoutSummaryItem = defineComponent(
  (props: CheckoutSummaryItemProps) => {
    const price = computed(() => {
      return currencyFormatter.format(props.product?.price ?? 0);
    });

    return () => {
      return (
        <div class="flex gap-4 items-center">
          <div class="w-16 h-16 overflow-hidden flex-shrink-0 rounded-[.5rem] bg-white-600 grid place-content-center">
            <img src={props.product?.assets.xSmall ?? ''} alt="" />
          </div>

          <div class="w-full">
            <div class="w-full flex justify-between">
              <h2 class="font-body font-bold text-black-pure">
                {props.product?.shortTitle}
              </h2>
              <p class="text-right font-body text-black-pure/50">
                <span>x</span>
                <span>{props.quantity}</span>
                
              </p>
            </div>
            <p class="w-full font-overline font-bold text-black-pure/50 tracking-[normal]">
              {price.value}
            </p>
          </div>
        </div>
      );
    };
  },
  {
    name: "CheckoutSummaryItem",
    props: ["product", "quantity"],
  }
);

export const CheckoutSummary = defineComponent(
  () => {
    const cartStore = useCart();
    const products = computed(() => {
      return [...cartStore.inCart.entries()].map(([id, quantity]) => {
        return {
          product: getProductById(id),
          quantity,
        };
      });
    });

    const SHIPPING_COST = 50;

    const _totalPrice = computed(() => {
      const value = products.value.reduce((total, current) => {
        return total + current.quantity * (current.product?.price ?? 0);
      }, 0);

      return value;
    });
    const totalPrice = computed(() => {
      return currencyFormatter.format(_totalPrice.value);
    });

    const _vat = computed(() => _totalPrice.value * 0.2);
    const vat = computed(() => {
        return currencyFormatter.format(Math.floor(_vat.value));
    });

    const grandTotalPrice = computed(() => {
      return currencyFormatter.format(
        SHIPPING_COST + _totalPrice.value + _vat.value
      );
    });

    const onCheckout = () => {
      emitter.emit('checkout')
    }

    return () => {
      return (
        <section class="w-full self-start bg-white-pure p-8">
          <h2 class="uppercase font-heading-6 text-black-pure">SUMMARY</h2>

          {products.value.length > 0 && <div class="flex flex-col mt-[1.94rem] gap-6">
            {products.value.map((product) => (
              <CheckoutSummaryItem
                product={product.product}
                quantity={product.quantity}
              />
            ))}
          </div>}

          <div class="flex flex-col gap-2 mt-8">
            <div class="w-full flex justify-between">
              <p class="text-black-pure/50 font-body uppercase">TOTAL</p>
              <p class="text-black-pure font-heading-6">{totalPrice.value}</p>
            </div>

            <div class="w-full flex justify-between">
              <p class="text-black-pure/50 font-body uppercase">SHIPPING</p>
              <p class="text-black-pure font-heading-6">
                <span>$</span>
                <span>{SHIPPING_COST}</span>
              </p>
            </div>

            <div class="w-full flex justify-between">
              <p class="text-black-pure/50 font-body uppercase">
                VAT (INCLUDED)
              </p>
              <p class="text-black-pure font-heading-6">{vat.value}</p>
            </div>

            <div class="w-full flex justify-between mt-4">
              <p class="text-black-pure/50 font-body uppercase">GRAND TOTAL</p>
              <p class="text-orange-600 font-heading-6">
                {grandTotalPrice.value}
              </p>
            </div>
          </div>

          <OrangeButton class="w-full mt-8" type="button" onClick={onCheckout}>
            Continue & Pay
          </OrangeButton>
        </section>
      );
    };
  },
  {
    name: "CheckoutSummary",
  }
);
