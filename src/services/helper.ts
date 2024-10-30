export default {
  delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  },

  getStoreData() {
    return window.appStore || {};
  },
};
