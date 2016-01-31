import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  PLAYER_SOLVED,
  GAME_STARTED,
  GAME_ENDED
} from '../constants/AppConstants';

class AppStateStore {
  constructor() {
    this.solvedPlayers = [];
    this.finishedSolving = false;
    this.elapsedTime = 0;
  }
  emitChange() {
  }
}

let store = new AppStateStore();

AppDispatcher.register((action) => {
    switch (action.actionType) {
      case PLAYER_SOLVED:
        console.log(action);
        store.solvedPlayers.push(action.player);
      case GAME_ENDED:
        store.finishedSolving = true;
      case GAME_STARTED:
        store.startedTime = new Date();
        store.elapsedTime = new Date() - store.startedTime;
    }
});

export default store;
