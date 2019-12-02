import {
  SET_COMPETITION_ITEMS,
  TOGGLE_OPEN_COMPETITION_ITEM
} from '../constants';

const initialState = {
  openItems: [],
  items: []
};

export const competitionsReducer = (
  state = initialState,
  { type, items, itemToToggle }
) => {
  switch (type) {
    case SET_COMPETITION_ITEMS:
      return {
        ...state,
        items,
        openItems: items.slice(0, 2).map((item, index) => index)
      };

    case TOGGLE_OPEN_COMPETITION_ITEM:
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
