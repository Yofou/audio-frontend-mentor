import type { SlotsType } from "vue"

const CategoryLayout = defineComponent((_, context) => {
  return () => <div class="w-full grid min-h-screen grid-cols-1 auto-rows-max">
    {context.slots.default({})} 
  </div>
}, {
  name: 'CategoryLayout',
  slots: Object as SlotsType<{ default: {} }>
})

export default CategoryLayout
