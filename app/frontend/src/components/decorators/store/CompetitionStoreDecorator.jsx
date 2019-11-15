import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  actions: { actionGetCompetitionItems, actionToggleCompetitionItem }
} = store;

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

export const CompetitionStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
