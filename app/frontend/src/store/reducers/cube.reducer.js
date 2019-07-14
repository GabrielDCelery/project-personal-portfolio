import {
  SET_ROTATION,
  TOGGLE_LIGHTING
} from '../constants';

const initialState = {
  rotateX: 0,
  rotateY: 0,
  bLightingOn: false
};

export default (state = initialState, { type, rotateX, rotateY, bLightingOn }) => {
  switch (type) {
    case SET_ROTATION:
      return {
        ...state,
        ...{
          rotateX,
          rotateY
        }
      };

    case TOGGLE_LIGHTING:
      return {
        ...state,
        ...{
          bLightingOn
        }
      };

    default:
      return state;
  }
}