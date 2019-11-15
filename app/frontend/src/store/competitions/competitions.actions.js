import {
  SET_COMPETITION_ITEMS,
  TOGGLE_OPEN_ITEM
} from './competitions.constants';
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

export const actionToggleCompetitionItem = itemToToggle => {
  return async dispatch => {
    dispatch({
      type: TOGGLE_OPEN_ITEM,
      itemToToggle
    });
  };
};
