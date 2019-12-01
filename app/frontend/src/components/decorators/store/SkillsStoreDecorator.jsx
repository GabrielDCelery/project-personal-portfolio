import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const {
  actions: { actionGetSkillsItems, actionSetSkillsVisibilityFilter },
  selectors: { selectorGetFilteredSkillsToShow }
} = store;

const mapStateToProps = state => {
  return {
    stateSkillsItems: state.skills.items,
    stateFilteredSkillsItems: selectorGetFilteredSkillsToShow(state)
  };
};

const mapActionsToProps = {
  actionGetSkillsItems,
  actionSetSkillsVisibilityFilter
};

export const SkillsStoreDecorator = ToWrapComponent => {
  return connect(
    mapStateToProps,
    mapActionsToProps
  )(props => <ToWrapComponent {...props} />);
};
