import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../util/WebAPI';

import {
  ITEMS_GET_SUCCESS,
  ITEMS_GET_ERROR
} from '../constants/AppConstants';

export default {
  getItems() {
    console.log('getting items');
    WebAPI.getItems()
    .then((data) => {
      console.log(data);
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
