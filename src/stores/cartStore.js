import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  /* eslint-disable-next-line no-return-assign, no-param-reassign */
  const cartTotal = computed(() => cart.value.reduce((prev, cur) => prev += cur.cost, 0));
  return { cart, cartTotal };
});

export default useCartStore;
