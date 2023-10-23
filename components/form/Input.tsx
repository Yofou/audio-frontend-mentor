import { twMerge as twm } from "tailwind-merge";

type InputProps = {
  modelValue: string;
  label: string;
  error?: string;
  placeholder?: string;
};

export const Input = defineComponent<InputProps>(
  (props, context) => {
    const localValue = computed({
      get() {
        return props.modelValue;
      },
      set(newValue) {
        context.emit("update:modelValue", newValue);
      },
    });

    const hasError = computed(() => (props.error?.length ?? 0) > 0);

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
          class={twm(
            "w-full border border-[#CFCFCF] outline-none selection:bg-orange-600 px-[1.5rem] caret-orange-600 focus:border-orange-600 py-[1.12rem] rounded-[.5rem] placeholder:text-black-pure/40 text-black-pure font-overline tracking-tight font-bold",
            hasError.value ? "border-red border-2 focus:border-red" : ""
          )}
          v-model={localValue.value}
          placeholder={props.placeholder}
          type="text"
        />
      </label>
    );
  },
  {
    props: ["modelValue", "label", "error", "placeholder"],
    emits: ["update:modelValue"],
    name: "Input",
  }
);

export const NumberInput = defineComponent(
  (props, context) => {
    const localValue = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        context.emit("update:modelValue", value);
      },
    });

    const onInc = () => localValue.value++;
    const onDec = () => localValue.value--;

    return () => {
      return (
        <div class="w-[7.5rem] h-[3rem] flex p-4 bg-white-600 font-overline tracking-tight">
          <button
            class="text-black-pure/25 hover:text-orange-600 transition-colors px-1"
            onClick={onDec}
          >
            -
          </button>
          <input
            class="w-full bg-[transparent] text-center [-webkit-appearance:none] [-moz-appearance:textfield]"
            v-model={localValue.value}
            type="number"
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
    props: ["modelValue"],
    emits: ["update:modelValue"],
  }
);
