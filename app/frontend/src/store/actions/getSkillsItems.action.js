import { SET_SKILLS_ITEMS } from '../constants';
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
