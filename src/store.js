import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    count: 0,
    message: 'Hello, Pinia!',
  }),
  actions: {
    increment () {
      this.count++;
    },
    setMessage (newMessage) {
      this.message = newMessage;
    },
  },
});
