import {
  SET_ACTIVE_STEP,
  GO_TO_PREVIOUS_STEP,
  GO_TO_NEXT_STEP
} from './workHistory.constants';


export const actionGoToNexWorkHistoryStep = () => {
  return async dispatch => {
    dispatch({
      type: GO_TO_NEXT_STEP
    });
  };
};

export const actionGoToPreviousWorkHistoryStep = () => {
  return async dispatch => {
    dispatch({
      type: GO_TO_PREVIOUS_STEP
    });
  };
};

export const actionSetActiveWorkHistoryStep = activeStepIndex => {
  return async dispatch => {
    dispatch({
      type: SET_ACTIVE_STEP,
      activeStepIndex
    });
  };
};