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
  (_, context) => {
    const value = ref<string>("");
    provide("value", value);

    return () => <div>{context.slots.default({})}</div>;
  },
  { slots: Object as SlotsType<{ default: {} }> }
);

export const RadioInput = defineComponent(() => {
    const text = inject<Ref<string>>("value");

    const value = computed({
      get() {
        return text?.value ?? "";
      },
      set(value) {
        if (!text) return;
        text.value = value;
      },
    });

    return () => {
      return (
        <label>
          {value?.value && <span>{value.value}</span>}
          <input type="text" v-model={value.value} />
        </label>
      );
    };
});
