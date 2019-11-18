import {
  SET_WORK_HISTORY_ITEMS,
  TOGGLE_OPEN_WORK_HISTORY_ITEM,
  TOGGLE_OPEN_WORK_HISTORY_PROJECT_ITEM
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

export const actionToggleWorkHistoryProjectItem = subItemToToggle => {
  return async dispatch => {
    dispatch({
      type: TOGGLE_OPEN_WORK_HISTORY_PROJECT_ITEM,
      subItemToToggle
    });
  };
};
