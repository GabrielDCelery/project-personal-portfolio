import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  actions: { actionGetWorkHistoryItems, actionToggleWorkHistoryItem }
} = store;

const mapStateToProps = state => {
  return {
    stateWorkHistoryItems: state.workHistory.items,
    stateWorkHistoryOpenItems: state.workHistory.openItems
  };
};

const mapActionsToProps = {
  actionGetWorkHistoryItems,
  actionToggleWorkHistoryItem
};

export const WorkHistoryStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
