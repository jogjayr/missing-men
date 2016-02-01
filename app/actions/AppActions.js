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
      console.log('this is probably going to cause an exception')
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_SUCCESS,
        matchTeamsSection: data.matchTeamsSection
      });
    })
    .catch((e) => {
      console.log('got here');
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_ERROR
      });
    });
  }
};

