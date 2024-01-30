import { twMerge as twm } from "tailwind-merge";
import type { SetupContext } from "vue";
import { useIMask } from "vue-imask";

type InputProps = {
  modelValue?: string;
  label: string;
  error?: string;
  placeholder?: string;
  mask?: string;
};

export const Input = defineComponent<InputProps>(
  (props, context) => {
    const hasError = computed(() => (props.error?.length ?? 0) > 0);
    const { el, typed } = useIMask({
      // @ts-ignore
      mask: props.mask ?? /.*/g,
    });

    onMounted(() => {
      typed.value = props.modelValue ?? ''
    })

    watchEffect(() => {
      context.emit("update:modelValue", typed.value);
    });

    watchEffect(() => {
      typed.value = props.modelValue ?? ''
    });

    return () => (
      <label>
        <span class="w-full flex justify-between items-center font-overline tracking-tight mb-[.56rem]">
          <span
            class={twm(
              "font-bold capitalize",
              hasError.value ? "text-red" : ""
            )}
          >
            {props.label}
          </span>
          {hasError.value && (
            <span
              class={twm(
                "font-bold capitalize",
                hasError.value ? "text-red" : ""
              )}
            >
              {props.error}
            </span>
          )}
        </span>

        <input
          ref={el}
          class={twm(
            "w-full border border-[#CFCFCF] outline-none selection:bg-orange-600 px-[1.5rem] caret-orange-600 focus:border-orange-600 py-[1.12rem] rounded-[.5rem] placeholder:text-black-pure/40 text-black-pure font-overline tracking-tight font-bold",
            hasError.value ? "border-red border-2 focus:border-red" : ""
          )}
          placeholder={props.placeholder}
          type="text"
        />
      </label>
    );
  },
  {
    props: ["modelValue", "label", "error", "placeholder", "mask"],
    emits: ["update:modelValue"],
    inheritAttrs: true,
    name: "Input",
  }
);

type NumberInputProps = {
  modelValue?: number;
  class?: string;
};
type NumberInputEvents = {
  "update:modelValue": (message: number | undefined) => void;
};

export const NumberInput = defineComponent(
  (props: NumberInputProps, context: SetupContext<NumberInputEvents>) => {
    const localValue = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        context.emit("update:modelValue", value);
      },
    });

    const onInc = () => localValue.value != null && localValue.value++;
    const onDec = () => localValue.value != null && localValue.value--;

    return () => {
      return (
        <div
          class={twm(
            "w-[7.5rem] h-[3rem] flex p-4 bg-white-600 font-overline tracking-tight",
            props.class
          )}
        >
          <button
            class="text-black-pure/25 hover:text-orange-600 transition-colors px-1"
            onClick={onDec}
          >
            -
          </button>
          <input
            class="w-full bg-[transparent] text-center"
            v-model={localValue.value}
            type="number"
            inputmode="numeric"
          />
          <button
            class="text-black-pure/25 hover:text-orange-600 transition-colors px-1"
            onClick={onInc}
          >
            +
          </button>
        </div>
      );
    };
  },
  {
    name: "NumberInput",
    props: ["modelValue", "class"],
    emits: ["update:modelValue"],
  }
);
