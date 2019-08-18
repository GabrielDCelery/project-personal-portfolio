import React from 'react';
import { connect } from 'react-redux';
import {
  actionGoToNexWorkHistoryStep,
  actionGoToPreviousWorkHistoryStep,
  actionSetActiveWorkHistoryStep
} from 'store';

const mapStateToProps = state => {
  return {
    stateWorkHistoryActiveStepIndex: state.workHistory.activeStepIndex,
    stateWorkHistoryPlaces: state.workHistory.places
  };
}

const mapActionsToProps = {
  actionGoToNexWorkHistoryStep: actionGoToNexWorkHistoryStep,
  actionGoToPreviousWorkHistoryStep: actionGoToPreviousWorkHistoryStep,
  actionSetActiveWorkHistoryStep: actionSetActiveWorkHistoryStep
};

export const WorkHistoryStoreDecorator = ToWrapComponent => {
  return connect(mapStateToProps, mapActionsToProps)(props => <ToWrapComponent {...props} />);
}