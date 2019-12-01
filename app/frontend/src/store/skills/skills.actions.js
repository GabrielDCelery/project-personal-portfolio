import {
  SET_SKILLS_ITEMS,
  SET_SKILLS_VISIBILITY_FILTER
} from './skills.constants';
import services from 'services';

export const actionGetSkillsItems = () => {
  return async dispatch => {
    const items = await services.api.skills.getList();

    dispatch({
      type: SET_SKILLS_ITEMS,
      items
    });
  };
};

export const actionSetSkillsVisibilityFilter = visibilityFilter => {
  return async dispatch => {
    dispatch({
      type: SET_SKILLS_VISIBILITY_FILTER,
      visibilityFilter
    });
  };
};
