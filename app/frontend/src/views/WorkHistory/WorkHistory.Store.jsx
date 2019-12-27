import React from 'react';
import { connect } from 'react-redux';
import {
  actionCloseAllWorkHistoryItems,
  actionGetWorkHistoryItems,
  actionToggleWorkHistoryItem,
  actionToggleWorkHistoryProjectItem
} from 'store';

const mapStateToProps = state => {
  return {
    stateWorkHistoryItems: state.workHistory.items,
    stateWorkHistoryOpenItems: state.workHistory.openItems,
    stateWorkHistoryProjectOpenItems: state.workHistory.openSubItems
  };
};

const mapActionsToProps = {
  actionCloseAllWorkHistoryItems,
  actionGetWorkHistoryItems,
  actionToggleWorkHistoryItem,
  actionToggleWorkHistoryProjectItem
};

export default function WorkHistoryStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
