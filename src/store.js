// stores/counter.js
import { defineStore } from "pinia";

import axios from "axios";
export const useCounterStore = defineStore("counter", {
  // State: Shared state for the counter store
  state: () => ({
    count: 0,
    data: [],
  }),

  // Getters: Derived state
  getters: {
    doubleCount: (state) => state.count * 2,
  },

  // Actions: Methods to modify the state or perform side effects
  actions: {
    fetchDta() {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        console.log(res, "rrrrrrr");
        this.data = res.data;
      });
    },
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
