import React from 'react';
import { connect } from 'react-redux';
import { actionGetCompetitionItems, actionToggleCompetitionItem } from 'store';

const mapStateToProps = state => {
  return {
    stateCompetitionItems: state.competitions.items,
    stateCompetitionOpenItems: state.competitions.openItems
  };
};

const mapActionsToProps = {
  actionGetCompetitionItems,
  actionToggleCompetitionItem
};

export default function AchievmentsStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
