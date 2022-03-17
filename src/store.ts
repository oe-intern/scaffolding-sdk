import { reactive } from 'vue';

const store = reactive({
  count: 0,
  increment() {
    this.count++;
  },
});

export default store;
