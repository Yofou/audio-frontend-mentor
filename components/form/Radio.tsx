import {
  defineComponent,
  inject,
  provide,
  ref,
  type SlotsType,
  type Ref,
  computed,
} from "vue";

export const RadioGroup = defineComponent(
  (props, context) => {
    const value = ref<string>("");
    provide("value", value);
    provide("name", props.name);

    return () => <fieldset>{context.slots.default({})}</fieldset>;
  },
  {
    slots: Object as SlotsType<{ default: {} }>,
    props: ["name"],
    name: "RadioGroup",
  }
);

export const RadioInput = defineComponent(
  (props, context) => {
    const text = inject<Ref<string>>("value");
    const name = inject<string>("name");

    const internalText = computed({
      get() {
        return text?.value ?? "";
      },
      set(value) {
        if (!text) return;
        text.value = value;
      },
    });

    const isSelected = computed(() => internalText.value === props.value);

    return () => {
      return (
        <label class="font-overline font-bold tracking-[-.01563rem] cursor-pointer hover:border-orange-600 focus-within:border-orange-600 transition-colors px-[1.1rem] py-[1.3rem] flex gap-4 rounded-[.5rem] border border-[#CFCFCF] items-center selection:bg-orange-600">
          <span class="w-[1.25rem] h-[1.25rem] rounded-full border border-[#CFCFCF] grid place-content-center">
            {isSelected.value && (
              <div class="w-[.625rem] h-[.625rem] bg-orange-600 rounded-full overflow-hidden" />
            )}
          </span>
          <input
            class="sr-only"
            name={name}
            type="radio"
            v-model={internalText.value}
            value={props.value}
          />
          {context.slots.default && <span>{context.slots.default({})}</span>}
        </label>
      );
    };
  },
  {
    props: ["value"],
    name: "RadioInput",
    slots: Object as SlotsType<{ default: {} }>,
  }
);
