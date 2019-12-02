import { TOGGLE_OPEN_WORK_HISTORY_ITEM } from '../constants';

export const actionToggleWorkHistoryItem = itemToToggle => {
  return async dispatch => {
    dispatch({
      type: TOGGLE_OPEN_WORK_HISTORY_ITEM,
      itemToToggle
    });
  };
};
