import {
  SET_WORK_HISTORY_ITEMS,
  TOGGLE_OPEN_WORK_HISTORY_ITEM
} from './workHistory.constants';
import services from 'services';

export const actionGetWorkHistoryItems = () => {
  return async dispatch => {
    const items = await services.api.workHistory.getList();

    dispatch({
      type: SET_WORK_HISTORY_ITEMS,
      items
    });
  };
};

export const actionToggleWorkHistoryItem = itemToToggle => {
  return async dispatch => {
    dispatch({
      type: TOGGLE_OPEN_WORK_HISTORY_ITEM,
      itemToToggle
    });
  };
};
