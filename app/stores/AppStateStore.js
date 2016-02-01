import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';

import {
  PLAYER_SOLVED,
  GAME_STARTED,
  GAME_ENDED,
  ITEMS_GET_SUCCESS,
  ITEMS_UPDATED,
  ITEMS_GET_ERROR
} from '../constants/AppConstants';

class AppStateStore extends EventEmitter{
  constructor(...args) {
    super(...args);
    this.finishedSolving = false;
    this.hasStarted = null;
  }

  emitChange() {
    this.emit(ITEMS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(ITEMS_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ITEMS_UPDATED, callback);
  }

}

let store = new AppStateStore();

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case PLAYER_SOLVED:
      action.player.isSolved = true;
      break;
    case GAME_ENDED:
      store.finishedSolving = true;
      break;
    case GAME_STARTED:
      store.startTime = new Date();
      store.hasStarted = true;
      break;
    case ITEMS_GET_SUCCESS:
      store.matchTeamsSection = action.matchTeamsSection;
      break;
    case ITEMS_GET_ERROR:
      break;
  }
  store.emitChange();
});

export default store;

