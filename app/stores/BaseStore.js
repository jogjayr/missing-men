import { EventEmitter } from 'events';

export default class BaseStore extends EventEmitter {

  constructor(...args) {
    super(...args);
    this.data = {};
  }

  setAll(items) {
    console.log(items);
    this.data = items;
    this.emitChange();
  }

  getAll() {
    return this.data;
  }

  set(item) {
    if (!this.data.has(item)) {
      this.data.add(item);
      this.emitChange();
    }
  }

  remove(item) {
    this.data.delete(item);
    this.emitChange();
  }
}
