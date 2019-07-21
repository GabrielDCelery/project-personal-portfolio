import {
  TOGGLE_LIGHTING,
  TOGGLE_AUTOROTATE,
  ROTATE_TO_POSITION,
  START_ANIMATION,
  STOP_ANIMATION
} from '../constants';
import services from 'services';

const rotateToPosition = ({ rotateX, rotateY, animationDurationInMs }) => {
  return async dispatch => {
    dispatch({ type: START_ANIMATION });
    dispatch({
      type: ROTATE_TO_POSITION,
      rotateX: rotateX,
      rotateY: rotateY,
      animationDurationInMs: animationDurationInMs
    });

    await services.delay(animationDurationInMs);
    dispatch({ type: STOP_ANIMATION });
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

const toggleAutoRotate = bAutoRotateOn => {
  return async dispatch => {
    dispatch({
      type: TOGGLE_AUTOROTATE,
      bAutoRotateOn: bAutoRotateOn
    });
  };
}

export default {
  rotateToPosition,
  toggleLighting,
  toggleAutoRotate
};