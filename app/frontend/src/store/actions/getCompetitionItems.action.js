import { SET_COMPETITION_ITEMS } from '../constants';
import services from 'services';

export const actionGetCompetitionItems = () => {
  return async dispatch => {
    const items = await services.api.competitions.getList();

    dispatch({
      type: SET_COMPETITION_ITEMS,
      items
    });
  };
};
