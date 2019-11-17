import {
  SET_WORK_HISTORY_ITEMS,
  TOGGLE_OPEN_WORK_HISTORY_ITEM
} from './workHistory.constants';

const initialState = {
  openItems: [],
  items: []
};

export const workHistoryReducer = (
  state = initialState,
  { type, items, itemToToggle }
) => {
  switch (type) {
    case SET_WORK_HISTORY_ITEMS:
      return {
        ...state,
        items,
        openItems: items.slice(0, 2).map((item, index) => index)
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

    default:
      return state;
  }
};
