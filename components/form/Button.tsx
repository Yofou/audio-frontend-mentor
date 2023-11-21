import { defineComponent, type SlotsType } from "vue";
import { twMerge as twm } from "tailwind-merge";
import { Caret } from "../icons/Caret";
import { NuxtLink } from "#components";

export type ButtonBaseProps = {
  class?: string,
  to?: string,
}

export const Button = defineComponent(
    (props: ButtonBaseProps, context) => {
    return () => (
      <NuxtLink
        class={twm(
          "font-subtitle px-[1.97rem] py-[.94rem] uppercase transition-colors leading-[normal]",
          props.class
        )}
        to={props.to ?? '/'}
      >
        {context.slots.default({})}
      </NuxtLink>
    );
  },
  {
    slots: Object as SlotsType<{ default: {} }>,
    props: ['class', 'to'],
    emits: ["click"],
  }
);

export const OrangeButton = defineComponent(
    (props: ButtonBaseProps, context) => {
    return () => (
        <Button class={twm("bg-orange-600 hover:bg-orange-300 border border-orange-600 hover:border-orange-300 text-white-pure", props.class)} to={props.to}>
        {context.slots.default({})}
      </Button>
    );
  },
  {
    props: ['class', 'to'],
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
