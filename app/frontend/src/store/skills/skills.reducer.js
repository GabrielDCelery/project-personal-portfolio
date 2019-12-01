import {
  SET_SKILLS_ITEMS,
  SET_SKILLS_VISIBILITY_FILTER
} from './skills.constants';

const initialState = {
  items: [],
  visibilityFilter: ''
};

export const skillsReducer = (
  state = initialState,
  { type, items, visibilityFilter }
) => {
  switch (type) {
    case SET_SKILLS_ITEMS:
      return {
        ...state,
        items
      };

    case SET_SKILLS_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter
      };

    default:
      return state;
  }
};
