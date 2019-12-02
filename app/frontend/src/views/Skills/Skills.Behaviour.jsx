import React, { useEffect } from 'react';
import _ from 'lodash';

export default function SkillsBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionGetSkillsItems,
      actionSetSkillsVisibilityFilter,
      stateFilteredSkillsItemsForHexMap,
      stateSkillsVisibilityFilter
    } = props;

    const getters = {
      stateFilteredSkillsItemsForHexMap,
      stateSkillsVisibilityFilter
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      actionSetSkillsVisibilityFilter
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    useEffect(() => {
      actionGetSkillsItems();
    }, [actionGetSkillsItems]);

    return <ToWrapComponent {...{ getter, handler }} />;
  };

  return WrapperComponent;
}
