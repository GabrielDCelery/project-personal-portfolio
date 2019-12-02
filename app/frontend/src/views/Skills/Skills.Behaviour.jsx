import React, { useEffect } from 'react';
import _ from 'lodash';

export default function SkillsBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const { actionGetSkillsItems /*, stateFilteredSkillsItems*/ } = props;
    const getters = {};

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {};

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
