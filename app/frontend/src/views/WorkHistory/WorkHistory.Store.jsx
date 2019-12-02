import React from 'react';
import { connect } from 'react-redux';
import {
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
