import { TOGGLE_OPEN_WORK_HISTORY_PROJECT_ITEM } from '../constants';

export const actionToggleWorkHistoryProjectItem = subItemToToggle => {
  return async dispatch => {
    dispatch({
      type: TOGGLE_OPEN_WORK_HISTORY_PROJECT_ITEM,
      subItemToToggle
    });
  };
};
