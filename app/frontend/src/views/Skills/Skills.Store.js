import React from 'react';
import { connect } from 'react-redux';
import {
  actionGetSkillsItems,
  actionSetSkillsVisibilityFilter,
  selectorGetFilteredSkillsToShowForHexMap
} from 'store';

const mapStateToProps = state => {
  return {
    stateSkillsItems: state.skills.items,
    stateFilteredSkillsItems: selectorGetFilteredSkillsToShowForHexMap(state)
  };
};

const mapActionsToProps = {
  actionGetSkillsItems,
  actionSetSkillsVisibilityFilter
};

export default function SkillsStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
