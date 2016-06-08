export default {
  getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(require('./static.json'));
      }, 500);
    });
  }
};
