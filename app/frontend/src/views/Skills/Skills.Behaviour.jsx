import React, { useEffect } from 'react';
import _ from 'lodash';
import { SkillsStoreDecorator } from 'components';

export default function SkillsBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const { actionGetSkillsItems, stateFilteredSkillsItems } = props;
    console.log(stateFilteredSkillsItems);
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

  WrapperComponent = SkillsStoreDecorator(WrapperComponent);

  return WrapperComponent;
}
