import { SET_WORK_HISTORY_ITEMS } from '../constants';
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
