import {
  SET_ROTATION,
  TOGGLE_LIGHTING
} from '../constants';

const setRotation = ({ rotateX, rotateY }) => {
  return async dispatch => {
    dispatch({
      type: SET_ROTATION,
      rotateX: rotateX,
      rotateY: rotateY
    });
  };
}

const toggleLighting = bLightingOn => {
  return async dispatch => {
    dispatch({
      type: TOGGLE_LIGHTING,
      bLightingOn: bLightingOn
    });
  };
}

export default {
  setRotation,
  toggleLighting
};