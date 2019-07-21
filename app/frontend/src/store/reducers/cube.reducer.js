import {
  TOGGLE_LIGHTING,
  TOGGLE_AUTOROTATE,
  ROTATE_TO_POSITION,
  START_ANIMATION,
  STOP_ANIMATION
} from '../constants';

const ANIMATION_TIME_ROTATE = 3000;
const initialState = {
  rotateX: [0, 0],
  rotateY: [0, 0],
  bInAnimationMode: false,
  animationDurationInMs: ANIMATION_TIME_ROTATE,
  bLightingOn: false,
  bAutoRotateOn: true
};

export default (state = initialState, {
  type,
  rotateX,
  rotateY,
  animationDurationInMs,
  bLightingOn,
  bAutoRotateOn
}) => {
  switch (type) {
    case START_ANIMATION:
      return {
        ...state,
        ...{ bInAnimationMode: true }
      }

    case STOP_ANIMATION:
      return {
        ...state,
        ...{ bInAnimationMode: false }
      };

    case ROTATE_TO_POSITION:
      return {
        ...state,
        ...{ rotateX, rotateY, animationDurationInMs }
      };

    case TOGGLE_LIGHTING:
      return {
        ...state,
        ...{
          bLightingOn
        }
      };

    case TOGGLE_AUTOROTATE:
      return {
        ...state,
        ...{
          bAutoRotateOn
        }
      };

    default:
      return state;
  }
}