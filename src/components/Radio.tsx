import {
  defineComponent,
  inject,
  provide,
  ref,
  type SlotsType,
  type Ref,
} from "vue";

export const RadioGroup = defineComponent(
  (_, context) => {
    const value = ref<string>('');
    provide("value", value);

    return () => <div>{context.slots.default({})}</div>;
  },
  { slots: Object as SlotsType<{ default: {} }> }
);

export const RadioInput = defineComponent({
    inject: ['value'],
    setup() {
      const text = inject<Ref<string>>('value');

      return () => {
        if (!text?.value?.length ?? 0) return <span></span>

        return <label>
          <span>{text.value}</span>
          <input type="text" v-model={text.value} />
        </label>
      }
    }
});
