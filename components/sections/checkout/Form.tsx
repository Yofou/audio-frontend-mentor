import { defineComponent, ref } from "vue";
import { Input } from "~/components/form/Input";
import { RadioGroup, RadioInput } from "~/components/form/Radio";
import { CheckoutCashIcon } from '~/components/icons/CheckoutCash'
import emitter from "tiny-emitter/instance";
import zod from "zod";

export const CheckoutForm = defineComponent(
  (_, ctx) => {
    const name = ref("");
    const email = ref("");
    const phoneNumber = ref("10");
    const address = ref("");
    const zip = ref("");
    const city = ref("");
    const country = ref("");
    const eMoneyNumber = ref("");
    const eMoneyPin = ref("");
    const paymentMethod = ref<string>();

    const schema = zod.object({
      name: zod.string().min(1, "field is required"),
      email: zod.string().email(),
      phoneNumber: zod.string().min(1, "field is required"),
      address: zod.string().min(1, "field is required"),
      zip: zod.string().min(1, "field is required"),
      city: zod.string().min(1, "field is required"),
      country: zod.string().min(1, "field is required"),
      eMoneyNumber: zod.string().min(1, "field is required").optional(),
      eMoneyPin: zod.string().min(1, "field is required").optional(),
    });

    const errors = ref<{
      name?: string[] | undefined;
      email?: string[] | undefined;
      phoneNumber?: string[] | undefined;
      address?: string[] | undefined;
      zip?: string[] | undefined;
      city?: string[] | undefined;
      country?: string[] | undefined;
      eMoneyNumber?: string[] | undefined;
      eMoneyPin?: string[] | undefined;
    }>();

    const onCheckout = () => {
      const result = schema.safeParse({
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        address: address.value,
        zip: zip.value,
        city: city.value,
        country: country.value,
        eMoneyNumber: paymentMethod.value === 'e-Money' ? eMoneyNumber.value : undefined,
        eMoneyPin: paymentMethod.value === 'e-Money' ? eMoneyPin.value : undefined,
      });

      if (!result.success) {
        errors.value = result.error.flatten().fieldErrors;
      } else {
        ctx.emit("success");
        errors.value = {};
      }
    };

    onMounted(() => {
      emitter.on("checkout", onCheckout);
    });

    onUnmounted(() => {
      emitter.off("checkout", onCheckout);
    });

    return () => {
      return (
        <section class="w-full min-h-[70rem] px-12 py-[3.8rem] rounded-[.5rem] bg-white-pure">
          <h2 class="text-black-pure font-heading-3 text-[2rem]">CHECKOUT</h2>

          <div class="grid auto-rows-max grid-cols-1 sm:grid-cols-2 gap-x-[1rem] gap-y-[1.5rem] mt-[2.56rem]">
            <h3 class="grid sm:col-span-2 font-subtitle text-orange-600">
              BILLING DETAILS
            </h3>
            <Input
              label="Name"
              placeholder="Alexei Ward"
              v-model={name.value}
              error={errors.value?.name?.[0]}
            />
            <Input
              label="Email Address"
              placeholder="alexei@mail.com"
              v-model={email.value}
              error={errors.value?.email?.[0]}
            />
            <Input
              label="Phone Number"
              placeholder="+1 202-555-0136"
              mask="+{1} 000-000-0000"
              v-model={phoneNumber.value}
              error={errors.value?.phoneNumber?.[0]}
            />
          </div>

          <div class="grid auto-rows-max grid-cols-1 sm:grid-cols-2 gap-x-[1rem] gap-y-[1.5rem] mt-[3.8rem]">
            <h3 class="grid sm:col-span-2 font-subtitle text-orange-600">
              SHIPPING INFO
            </h3>
            <Input
              label="Address"
              placeholder="1137 Williams Avenue"
              class="col-start-1 col-end-2 sm:col-end-3 md:col-end-2"
              v-model={address.value}
              error={errors.value?.address?.[0]}
            />
            <Input
              label="ZIP-Code"
              placeholder="10001"
              v-model={zip.value}
              error={errors.value?.zip?.[0]}
            />
            <Input
              label="City"
              placeholder="New York"
              v-model={city.value}
              error={errors.value?.city?.[0]}
            />
            <Input
              label="Country"
              placeholder="United States"
              v-model={country.value}
              error={errors.value?.country?.[0]}
            />
          </div>

          <div class="grid auto-rows-max grid-cols-1 sm:grid-cols-2 gap-x-[1rem] gap-y-[1.5rem] mt-[3.8rem]">
            <h3 class="grid sm:col-span-2 font-subtitle text-orange-600">
              PAYMENT DETAILS
            </h3>
            <p class="font-manrope text-[.75rem] font-bold text-black-pure tracking-[-0.01338rem]">
              Payment Method
            </p>
            <RadioGroup
              class="flex flex-col gap-4"
              v-model={paymentMethod.value}
              name="category"
            >
              <RadioInput value="e-Money">e-Money</RadioInput>
              <RadioInput value="Cash">Cash on Delivery</RadioInput>
            </RadioGroup>

            {paymentMethod.value === "e-Money" && (
              <div class="contents">
                <Input
                  label="e-Money Number"
                  placeholder="238521993"
                  mask="000000000"
                  v-model={eMoneyNumber.value}
                  error={errors.value?.eMoneyNumber?.[0]}
                />
                <Input
                  label="e-Money PIN"
                  placeholder="6891"
                  mask="0000"
                  v-model={eMoneyPin.value}
                  error={errors.value?.eMoneyPin?.[0]}
                />
              </div>
            )}

            {paymentMethod.value === "Cash" && (
              <div class="flex gap-8 w-full col-start-1 col-end-[-1] items-center">
                <CheckoutCashIcon class="w-12 h-12 shrink-0" />
                <p class="body text-black-pure/50">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
        </section>
      );
    };
  },
  {
    name: "CheckoutForm",
    emits: ["success"],
  }
);
