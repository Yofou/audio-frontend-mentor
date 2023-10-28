import { defineComponent, type SlotsType } from "vue";
import { twMerge as twm } from "tailwind-merge";
import { Caret } from "../icons/Caret";

export type ButtonBaseProps = {
  class?: string
}

export const Button = defineComponent(
    (props: ButtonBaseProps, context) => {
    return () => (
      <button
        class={twm(
          "font-subtitle px-[1.97rem] py-[.94rem] uppercase transition-colors leading-[normal]",
          props.class
        )}
        onClick={() => context.emit("click")}
      >
        {context.slots.default({})}
      </button>
    );
  },
  {
    slots: Object as SlotsType<{ default: {} }>,
    emits: ["click"],
  }
);

export const OrangeButton = defineComponent(
  (_, context) => {
    return () => (
      <Button class="bg-orange-600 hover:bg-orange-300 border border-orange-600 hover:border-orange-300 text-white-pure">
        {context.slots.default({})}
      </Button>
    );
  },
  {
    slots: Object as SlotsType<{ default: {} }>,
  }
);

export const TransparentButton = defineComponent(
    (props: ButtonBaseProps, context) => {
    return () => (
      <Button class={twm("bg-black-pure/0 hover:bg-black-pure/100 border border-black-pure text-black-pure hover:text-white-pure", props.class)}>
        {context.slots.default({})}
      </Button>
    );
  },
  {
    props: {
      class: String
    },
    slots: Object as SlotsType<{ default: {} }>,
  }
);

export const ShopButton = defineComponent(
  (_, context) => {
    return () => (
      <Button class="flex gap-1 items-center">
        <span class="text-black-pure/50 hover:text-orange-600">
          {context.slots.default({})}
        </span>
        <Caret />
      </Button>
    );
  },
  {
    slots: Object as SlotsType<{ default: {} }>,
  }
);
