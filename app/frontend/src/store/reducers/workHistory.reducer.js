import {
  SET_WORK_HISTORY_ITEMS,
  TOGGLE_OPEN_WORK_HISTORY_ITEM,
  TOGGLE_OPEN_WORK_HISTORY_PROJECT_ITEM,
  CLOSE_ALL_WORK_HISTORY_ITEMS
} from '../constants';

const initialState = {
  items: [],
  openItems: [],
  openSubItems: []
};

export const workHistoryReducer = (
  state = initialState,
  { type, items, itemToToggle, subItemToToggle }
) => {
  switch (type) {
    case SET_WORK_HISTORY_ITEMS:
      return {
        ...state,
        items,
        openItems: items.slice(0, 1).map((item, index) => index)
      };

    case TOGGLE_OPEN_WORK_HISTORY_ITEM:
      return {
        ...state,
        openItems: state.openItems.includes(itemToToggle)
          ? state.openItems.filter(openItem => {
              return openItem !== itemToToggle;
            })
          : [...state.openItems, itemToToggle]
      };

    case TOGGLE_OPEN_WORK_HISTORY_PROJECT_ITEM:
      return {
        ...state,
        openSubItems: state.openSubItems.includes(subItemToToggle)
          ? state.openSubItems.filter(openItem => {
              return openItem !== subItemToToggle;
            })
          : [...state.openSubItems, subItemToToggle]
      };

    case CLOSE_ALL_WORK_HISTORY_ITEMS:
      return {
        ...state,
        openItems: []
      };

    default:
      return state;
  }
};
