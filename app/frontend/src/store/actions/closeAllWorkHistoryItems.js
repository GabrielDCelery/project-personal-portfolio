import { CLOSE_ALL_WORK_HISTORY_ITEMS } from '../constants';

export const actionCloseAllWorkHistoryItems = () => {
  return async dispatch => {
    dispatch({
      type: CLOSE_ALL_WORK_HISTORY_ITEMS
    });
  };
};
