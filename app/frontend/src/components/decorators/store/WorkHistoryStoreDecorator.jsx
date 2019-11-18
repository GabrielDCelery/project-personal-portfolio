import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  actions: {
    actionGetWorkHistoryItems,
    actionToggleWorkHistoryItem,
    actionToggleWorkHistoryProjectItem
  }
} = store;

const mapStateToProps = state => {
  return {
    stateWorkHistoryItems: state.workHistory.items,
    stateWorkHistoryOpenItems: state.workHistory.openItems,
    stateWorkHistoryProjectOpenItems: state.workHistory.openSubItems
  };
};

const mapActionsToProps = {
  actionGetWorkHistoryItems,
  actionToggleWorkHistoryItem,
  actionToggleWorkHistoryProjectItem
};

export const WorkHistoryStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
