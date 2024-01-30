import type { StateTree } from "pinia";
import { defineStore } from "pinia";

const serializeMap = (value: StateTree) => {
  return JSON.stringify(Object.fromEntries(value.inCart.entries())) 
}

const deSerializeMap = (value: string) => {
  const objectTree: Record<string, number> = JSON.parse(value) 
  const inCart = new Map(
    Object.entries(objectTree)
  ) 

  return {
    inCart 
  } as StateTree
}

export const useCart = defineStore('cart', () => {
  const inCart = ref(new Map<string, number>())

  const addProduct = (id: string, quantity: number) => {
    inCart.value.set(id, quantity)
  };

  const updateProduct = (id: string, quantity: number) => {
    const currentProductQuantity = inCart.value.get(id)
    if (!currentProductQuantity) {
      addProduct(id, quantity)
    } else {
      inCart.value.set(id, quantity + currentProductQuantity)
    }
  }

  const removeProduct = (id: string) => {
    inCart.value.delete(id)
  };

  const reset = () => inCart.value = new Map<string, number>()

  return { 
    inCart,
    addProduct,
    updateProduct,
    removeProduct,
    reset,
  }
}, {
  persist: {
    key: 'cart',
    storage: persistedState.cookies,
    serializer: {
      serialize: serializeMap,
      deserialize: deSerializeMap
    }
  },
})

// make sure to pass the right store definition,
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCart, import.meta.hot))
}
