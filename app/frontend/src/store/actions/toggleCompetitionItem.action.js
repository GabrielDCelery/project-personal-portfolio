import { TOGGLE_OPEN_COMPETITION_ITEM } from '../constants';

export const actionToggleCompetitionItem = itemToToggle => {
  return async dispatch => {
    dispatch({
      type: TOGGLE_OPEN_COMPETITION_ITEM,
      itemToToggle
    });
  };
};
