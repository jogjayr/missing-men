import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../util/WebAPI';

import {
  ITEMS_GET_SUCCESS,
  ITEMS_GET_ERROR
} from '../constants/AppConstants';

export default {
  getItems() {
    WebAPI.getItems()
    .then((data) => {
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_SUCCESS,
        matchTeamsSection: data.matchTeamsSection
      });
    })
    .catch(() => {
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_ERROR
      });
    });
  }
};

