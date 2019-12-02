import { SET_SKILLS_VISIBILITY_FILTER } from '../constants';

export const actionSetSkillsVisibilityFilter = visibilityFilter => {
  return async dispatch => {
    dispatch({
      type: SET_SKILLS_VISIBILITY_FILTER,
      visibilityFilter
    });
  };
};
